import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 border-t border-gray-300">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
          {/* Copyright Section */}
          <div>
            <p className="text-sm text-gray-6">&copy; 2024 TorConnect. All rights reserved</p>
          </div>

          {/* Links Section */}
          <div>
            <ul className="flex flex-wrap items-center gap-2.5">
              {['Home', 'Posts', 'Contact'].map((link, index) => (
                <React.Fragment key={link}>
                  {index > 0 && (
                    <li>
                      <span className="flex w-[3px] h-[3px] rounded-full bg-gray-5"></span>
                    </li>
                  )}
                  <li>
                    <Link
                      href={link =='Home' ? '/': `/${link.toLowerCase()}`}
                      className="group leading-none flex text-sm text-gray-6 hover:text-blue-light transition-colors"
                    >
                      <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                        {link}
                      </span>
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-sm text-gray-6">Follow Us:</p>
              <div className="flex items-center gap-1.5">
                {['twitter','telegram'].map((platform) => (
                  <a
                    key={platform}
                    id={`${platform}FooterBtn`}
                    aria-label={`${platform} social link`}
                    href="#"
                    className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-200 transition-all duration-300"
                  >
                    <img
                      src={`/images/icons/${platform}.svg`}
                      alt={platform}
                      className="w-8 h-8 fill-current"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
