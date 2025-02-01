import Image from "next/image";
import Link from "next/link";
import { Post } from "interfaces";

export default function LatestBlogPosts({ allPosts }: { allPosts: Post[] }) {
  // Filter posts to exclude "Dark Web Marketplaces" and take the first 3
  const latestPosts = allPosts
    .filter((post) => post.category !== "Dark Web Marketplaces")
    .slice(0, 3);

  // Function to apply alternating theme colors to words
  const renderColoredTitle = (title: string) => {
    const words = title.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        className={`${index % 2 === 0 ? "text-white" : "text-pink-dark"
          } font-bold`}
      >
        {word}{" "}
      </span>
    ));
  };

  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          {renderColoredTitle("Latest Posts")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/posts/${post.slug}`}>
                <Image
                  src={post.coverImage || post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  priority // Ensures the first image loads faster
                  quality={90} // Optimized image quality for better compression
                  className="rounded-lg w-full object-cover"
                />
              </Link>
              <div className="p-4">
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="font-bold text-blue-dark-2 text-lg hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-7 text-sm mt-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/posts"
            className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
