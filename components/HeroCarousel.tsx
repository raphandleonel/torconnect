import { Post } from 'interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroCarousel({ allPosts }: { allPosts: Post[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroItems, setHeroItems] = useState<Post[]>([]);

  useEffect(() => {
    const featuredMarkets = allPosts.filter((post) => post.category === 'Dark Web Marketplaces');
    // Filter posts to exclude "Dark Web Marketplaces" and take the first 5
    const latestPosts = allPosts
      .filter((post) => post.category !== "Dark Web Marketplaces")
      .slice(0, 5);
    setHeroItems([...latestPosts, ...featuredMarkets]);
  }, [allPosts]);

  useEffect(() => {
    if (heroItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroItems]);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  if (heroItems.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-gray-9">
      <div className="max-w-[1200px] mx-auto h-[400px] sm:h-[500px] relative">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-700 h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {heroItems.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative flex items-center justify-center"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.coverImage || slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={index === currentIndex} // Load only the visible image first
                  quality={90} // Better compression
                  className="rounded-lg"
                />
              </div>

              {/* Darker Overlay */}
              <div className="absolute inset-0 bg-dark/60"></div>

              {/* Text Content */}
              <div className="relative z-10 text-center text-white px-4 max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
                  {slide.title.split(':')[0]}
                </h1>
                <p className="text-base text-gray-4 sm:text-lg md:text-xl mb-6 break-words">{slide.excerpt}</p>
                <Link
                  href={`/posts/${slide.slug}`}
                  className="py-2 px-4 sm:py-3 sm:px-6 bg-blue-600 hover:bg-blue-700 text-blue-dark-2 rounded-lg font-semibold text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-600 scale-110'
                  : 'bg-gray-5 hover:bg-gray-4'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
