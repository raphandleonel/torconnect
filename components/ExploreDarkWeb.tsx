import Image from 'next/image';
import Link from 'next/link';

export default function ExploreDarkWeb() {
  return (
    <section className="py-16 text-white overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Explore the Dark Web
            </h2>
            <p className="text-lg leading-7 mb-4">
              The dark web offers unparalleled anonymity, making it a hub for privacy-focused users.
              Explore its layers, from secure marketplaces to forums, and understand its ecosystem.
            </p>
            <p className="text-lg leading-7 mb-4">
              Navigate through its complexities with our step-by-step guides and tools designed to
              ensure your safety.
            </p>
            <Link
              href="/posts/top-darknet-markets"
              className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
            >
              Discover Top Darknet Markets
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/posts/explore-darkweb.png"
              alt="Explore Dark Web"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600/20 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
