import Link from "next/link";

export default function DarkWebIntro() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          What is the Dark Web?
        </h2>
        <p className="text-lg text-gray-7 text-center mb-8">
          The dark web is a part of the internet that isn't indexed by standard search engines
          and requires special software like the Tor browser to access. It hosts various
          marketplaces, forums, and services that offer anonymity and privacy to its users.
        </p>
        <div className="flex justify-center">
          <Link
            href="/about-darkweb"
            className="py-3 px-8 bg-blue-600 text-white rounded font-medium hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
