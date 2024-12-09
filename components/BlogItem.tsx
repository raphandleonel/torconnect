import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogItemProps {
  slug: string;
  image: string;
  title: string;
  category: string;
  description: string;
  author: string;
  date: string;
  authorImage: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  slug,
  image,
  title,
  category,
  description,
  author,
  date,
  authorImage
}) => {
  return (
    <div className="group">
      <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
        <Link href={`/posts/${slug}`}>
          <Image src={image} alt={title} width={500} height={300} className="w-full" />
        </Link>
      </div>
      <h3>
        <Link href={`/posts/${slug}`} className="block text-white font-bold text-xl mb-3.5">
          <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
            {title}
          </span>
        </Link>
      </h3>
      <p>{description}</p>
      <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-3">
            <div className="flex w-6 h-6 rounded-full overflow-hidden">
              <Image src={authorImage} alt={author} width={24} height={24} />
            </div>
            <p className="text-sm">{author}</p>
          </div>
          <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
          <p className="text-sm">{date}</p>
        </div>
        <span className="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
