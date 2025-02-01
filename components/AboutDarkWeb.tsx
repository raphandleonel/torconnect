import Image from 'next/image';
import Link from 'next/link';

export default function AboutDarkWeb() {
  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">What is the Dark Web?</h1>
        <div className="flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Link href={`/posts/step-by-step-guide-to-access-dark-web`}>
               <Image
                src="/images/posts/about-darkweb.png"
                alt="Illustration of the Dark Web - Learn how to access it safely"
                width={600}
                height={400} // Fixed height to maintain aspect ratio
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority // Ensures this loads early
                quality={90} // High-quality image compression
                className="rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0">
            <p className="text-lg text-gray-3 mb-6">
              The dark web represents the hidden, unindexed parts of the internet. It's a space designed for privacy and anonymity, allowing users to access uncensored content, communicate securely, and engage in unique marketplaces.
            </p>
            <p className="text-lg text-gray-3 mb-6">
              Our guides help you uncover the potential of the dark web, learn how to browse safely, and navigate its ecosystem with confidence.
            </p>
            <Link
              href="/posts/step-by-step-guide-to-access-dark-web"
              className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
