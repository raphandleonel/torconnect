import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 bg-[rgb(10,11,30)] border-b border-gray-700 transition-all ease-in-out duration-300 ${
        stickyMenu ? "shadow-lg py-4" : "py-6"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <Image src="/images/logo/logo.svg" alt="Logo" width={120} height={40} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="menuToggler"
          aria-label="Toggle menu"
          className="lg:hidden block text-white"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="block relative cursor-pointer w-6 h-6">
            <span
              className={`block bg-white rounded-sm w-full h-0.5 my-1 transition-all duration-200 ${
                navigationOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block bg-white rounded-sm w-full h-0.5 my-1 transition-all duration-200 ${
                navigationOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block bg-white rounded-sm w-full h-0.5 my-1 transition-all duration-200 ${
                navigationOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </span>
        </button>

        {/* Navigation */}
        <div
          className={`lg:flex lg:items-center lg:justify-center w-full lg:visible ${
            navigationOpen
              ? "absolute top-full left-0 w-full bg-[rgb(10,11,30)] shadow-lg p-6 rounded-md lg:static lg:shadow-none lg:p-0"
              : "hidden"
          }`}
        >
          <nav>
            <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-white">
              {["Home", "Posts", "Contact"].map((menu, index) => {
                const path =
                  menu === "Home" ? "/" : `/${menu.toLowerCase().replace(" ", "-")}`;
                return (
                  <li key={index}>
                    <a
                      href={path}
                      className={`transition-colors text-lg ${
                        isActive(path)
                          ? "text-blue-light-4 border-b-2 border-blue-light-4"
                          : "hover:text-blue-light-4"
                      }`}
                    >
                      {menu}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <div className="hidden lg:flex items-center gap-4">
          {["twitter", "telegram"].map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={`${platform} social link`}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-blue-400 transition-colors"
            >
              <Image
                src={`/images/icons/${platform}.svg`}
                alt={`${platform} icon`}
                width={32}
                height={32}
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
