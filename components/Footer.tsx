import Link from "next/link";

const Footer: React.FC = (
) => {
  return (
    <footer className="relative z-10 bg-dark-900 text-white py-12 border-t border-gray-7">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About TorConnect</h4>
          <p className="text-sm text-gray-4 leading-6">
            TorConnect is your trusted guide to navigating the dark web. Stay
            informed about the latest darknet marketplaces, secure browsing
            practices, and privacy tools.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:underline">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/posts/top-darknet-markets" className="hover:underline">
                Top Darknet Markets
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Latest Posts Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Top Darknet Markets</h4>
          <ul className="space-y-2">
            {/* Example Latest Posts - replace with dynamic content */}
            <li>
              <Link href="/posts/anubis-market" className="hover:underline">
                Anubis Market
              </Link>
            </li>
            <li>
              <Link href="/posts/crown-market" className="hover:underline">
                Crown Market
              </Link>
            </li>
            <li>
              <Link href="/posts/hades-market" className="hover:underline">
                Hades Market
              </Link>
            </li>
            <li>
              <Link href="/posts/erebus-market" className="hover:underline">
                Erebus Market
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex items-center space-x-4">
            {["twitter", "telegram"].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={`${platform} social link`}
                className="p-2 rounded-full bg-gray-9 hover:bg-gray-7 transition"
              >
                <img
                  src={`/images/icons/${platform}.svg`}
                  alt={platform}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-5">
        &copy; {new Date().getFullYear()} TorConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
