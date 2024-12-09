import React, { useState } from 'react';
import BlogItem from '@/components/BlogItem';


const BlogCategorySection = ({
  allPosts,
})  => {
  if(!allPosts?.length) return (<></>)
  const categories = allPosts?.reduce((acc: Record<string, number>, post) => {
    const category = post.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Add 'All' category with total post count
  const categoryList = [{ name: 'All', count: allPosts?.length }, ...Object.entries(categories).map(([name, count]) => ({ name, count }))];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);
  return (
    <section className="pt-20 lg:pt-25 pb-15">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-12.5 text-center">
          <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">
            Browse by Category
          </h2>
          <p>Select a category to see more related content</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-center mb-15">
          {categoryList.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full border py-2.5 px-4.5 font-medium ${
                selectedCategory === category.name
                  ? 'bg-dark text-white'
                  : 'hover:bg-dark hover:text-white ease-in duration-200'
              }`}
            >
              {`${category.name} (${category.count})`}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5">
          {filteredPosts.map((post) => (
            <BlogItem
              key={post.slug}
              slug={post.slug}
              image={post.coverImage || post.image}
              title={post.title}
              category={post.category || 'Uncategorized'}
              description={post.excerpt}
              author={post.author}
              authorImage={post.authorImage}
              date={new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            />
          ))}
        </div>
        <button
          onClick={() => (window.location.href = '/posts')}
          className="flex justify-center font-medium text-dark border border-dark rounded-md py-3 px-7.5 hover:bg-dark hover:text-white ease-in duration-200 mx-auto mt-12.5 lg:mt-17.5"
        >
          Browse all Posts
        </button>
      </div>
    </section>
  );
};

export default BlogCategorySection;
