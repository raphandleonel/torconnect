import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center transition-all duration-300 hover:shadow-xl`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
