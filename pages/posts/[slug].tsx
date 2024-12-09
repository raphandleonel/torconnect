import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import Comment from "@/components/comment";

export default function PostPage({
  post,
  relatedPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const lastUpdated = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : null;

  const readTime = post.readTime || "1 min read";

  return (
    <Container>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div className="lg:flex lg:space-x-8 relative">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <Head>
              <title>{post.title} | TorConnect Blog</title>
              <meta name="description" content={post.excerpt} />
              <meta name="author" content={post.author || "Unknown"} />
              <meta property="og:title" content={post.title} />
              <meta property="og:description" content={post.excerpt} />
              <meta
                property="og:image"
                content={post.image || "/default-image.jpg"}
              />
              <meta property="og:type" content="article" />
              <meta
                property="article:published_time"
                content={new Date(post.date).toISOString()}
              />
              {post.date && (
                <meta
                  property="article:modified_time"
                  content={new Date(post.date).toISOString()}
                />
              )}
              {post.category && (
                <meta
                  property="article:section"
                  content={post.category}
                />
              )}
              {post.tags &&
                post.tags.map((tag) => (
                  <meta
                    key={tag}
                    property="article:tag"
                    content={tag}
                  />
                ))}
            </Head>

            <section className="p-4">
              <div className="text-center">
                {post.category && (
                  <Link
                    href={`/category/${post.category.toLowerCase()}`}
                    className="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-1"
                  >
                    {post.category}
                  </Link>
                )}
                <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-white mb-5">
                  {post.title.split(':')[0]}
                </h1>
                <p className="text-gray-4">{post.excerpt}</p>
                <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-4">
                  <span>Read Time: {readTime}</span>
                  {lastUpdated && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-gray-4"></span>
                      <span>Last Updated: {lastUpdated}</span>
                    </>
                  )}
                </div>
              </div>
              {/* Breadcrumb */}
              <nav className="text-lg text-gray-4 mt-6 flex items-center">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:text-blue-light-4 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mx-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </li>
                  <li>
                    <Link href="/posts" className="hover:text-blue-4 transition-colors">
                      Posts
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mx-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </li>
                  <li className="text-gray-3 truncate font-semibold">
                    {post.title}
                  </li>
                </ol>
              </nav>

              {(post.image || post.coverImage) && (
                <div className="relative w-full mt-6 mb-8">
                  <Image
                    src={post.coverImage || post.image}
                    alt={post.title}
                    layout="responsive"
                    width={800}
                    height={450}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              <div className="prose prose-lg prose-invert text-white max-w-full break-words overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <div className="flex justify-center w-full mt-10">

                <Link
                  href="/posts"
                  className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
                >
                  View All Posts
                </Link>
              </div>
            </section>
          </div>

          {/* Related Posts */}
          <div className="lg:w-1/4 mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-[50vh] lg:-translate-y-1/2 bg-gradient-to-r from-gray-9 rounded-[20px] to-blue-dark text-white py-5 px-5">
              <h2 className="text-xl font-bold mb-4 text-white">Related Posts</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.slug}
                    className="flex items-center gap-4 bg-gray-700 p-3 rounded-lg"
                  >
                    {/* Image Section */}
                    <Link
                      href={`/posts/${relatedPost.slug}`}
                      className="block w-16 h-16 rounded overflow-hidden flex-shrink-0"
                    >
                      <div className="w-full h-full">
                        <Image
                          src={relatedPost.image || relatedPost.coverImage || "/default-image.jpg"}
                          alt={relatedPost.title}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                    <div className="flex-1 truncate">
                      <Link
                        href={`/posts/${relatedPost.slug}`}
                        className="text-sm text-white hover:underline flex-1 truncate"
                      >
                        {relatedPost.title}
                      </Link>
                      <p className="text-xs text-gray-4 truncate mt-1">
                        {relatedPost.excerpt || "No description available"}
                      </p>
                      <p className="text-xs text-gray-5 mt-1">
                        {new Date(relatedPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      )}
      <Comment />
    </Container>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
    "category",
    "image",
    "coverImage",
    "author",
    "authorImage",
    "authorBio",
    "readTime",
    "tags",
  ]);
  const allPosts = getAllPosts([
    "slug",
    "title",
    "category",
    "image",
    "coverImage",
    "excerpt",
    "date",
    "tags",
  ]);
  const content = await markdownToHtml(post.content || "");

  const relatedPosts = allPosts.filter(
    (otherPost) =>
      otherPost.slug !== post.slug && otherPost.category === post.category
  ).splice(0,5)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      relatedPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
