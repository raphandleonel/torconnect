import Image from "next/image";
import Link from "next/link";
import { Post } from "interfaces";

export default function FeaturedMarkets({ allPosts }: { allPosts: Post[] }) {
  const featuredMarkets = allPosts
    .filter((post) => post.category === "Dark Web Marketplaces")
    .sort((a, b) => {
      const customOrder = ["Anubis", "Archetyp", "DrugHub", "Torzon", "Abacus"];

      const indexA = customOrder.findIndex((market) => a.title.includes(market));
      const indexB = customOrder.findIndex((market) => b.title.includes(market));

      // If either title is not in the custom order, push it to the end
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      // Sort based on the index in customOrder
      return indexA - indexB;
    });




  const renderColoredTitle = (title: string) => {
    const words = title.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        className={`${index % 2 === 0 ? "text-pink-dark" : "text-white"
          } font-bold`}
      >
        {word}{" "}
      </span>
    ));
  };

  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Top {renderColoredTitle("Darknet Marketplaces")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMarkets.slice(0, 6).map((market) => (
            <div
              key={market.slug}
              className="bg-[rgba(255,255,255,0.05)] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              {/* Market Image */}
              <Link href={`/posts/${market.slug}`}>
                <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
                  <Image
                    src={market.coverImage || market.image}
                    alt={market.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority // Loads the first image faster
                    quality={90} // Better image compression
                    className="rounded-lg object-cover"
                  />

                </div>
              </Link>

              {/* Market Content */}
              <div className="p-4 flex flex-col justify-between h-full">
                <Link href={`/posts/${market.slug}`}>
                  <h3 className="text-lg font-bold text-white hover:underline mb-2">
                    {market.title}
                  </h3>
                </Link>
                <p className="text-gray-4 text-sm line-clamp-3">{market.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
