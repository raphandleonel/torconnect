import Image from 'next/image';
import Link from 'next/link';
import { Post } from 'interfaces';

export default function LatestPostsSection({ allPosts }: { allPosts: Post[] }) {
  const latestPosts = allPosts.slice(0, 3);

  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md p-4">
              <Link href={`/posts/${post.slug}`}>
                <Image
                  src={post.coverImage || post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full rounded-lg mb-4"
                />
              </Link>
              <Link href={`/posts/${post.slug}`}>
                <h3 className="font-bold text-lg hover:underline">{post.title}</h3>
              </Link> 
              <p className="text-gray-6 text-sm mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/posts"
            className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
