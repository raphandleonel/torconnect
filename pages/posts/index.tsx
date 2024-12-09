import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "@/components/container";
import { getAllPosts } from "lib/getPost";

export default function Posts({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="max-w-[770px] mx-auto text-center mb-12">
        <h1 className="font-bold text-4xl text-white mb-4">All Posts</h1>
        <p className="text-gray-3">Explore all our blog posts in one place.</p>
      </div>

      {allPosts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <div
              key={post.slug}
              className="group bg-gradient-to-b from-gray-7 to-gray-9 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
            >
              {/* Blog Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.jpg"} // Use a placeholder if no image is available
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-gray-4 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-5 mt-auto">
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  <span className="bg-blue-700 text-white py-1 px-3 rounded-full">
                    {post.category || "General"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-3">No blog posts available.</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "image",
    "category",
    "coverImage",
  ]);

  return {
    props: { allPosts },
  };
}
