import Head from "next/head";
import ExploreDarkWeb from "@/components/ExploreDarkWeb";
import Advantages from "@/components/Advantages";
import JoinUsSection from "@/components/JoinUsSection";
import { getAllPosts } from "lib/getPost";
import { InferGetStaticPropsType } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import AboutDarkWeb from "@/components/AboutDarkWeb";
import FeaturedMarkets from "@/components/FeaturedMarkets";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import Container from "@/components/container";
import Script from "next/script";

export default function Home({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const siteName = "TorConnect";
  const siteDescription =
    "TorConnect is your trusted guide to safely explore the dark web. Learn about Tor Browser, anonymity tools, and the top darknet marketplaces.";
  const siteUrl = "https://torconnect.io";
  const ogImage = `${siteUrl}/images/top-darknet-markets-cover.png`;

  return (
    <>
      <Head>
        <title>{`${siteName} - Safely Explore the Dark Web & Darknet Markets`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="dark web, darknet marketplaces, Tor browser, anonymity tools, secure browsing, privacy, hidden web, darknet guides"
        />
        <meta name="author" content="TorConnect Team" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={`${siteName} - Safely Explore the Dark Web`} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteName} - Safely Explore the Dark Web`} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NSNM5F6DNF"
          strategy="afterInteractive"
        />
      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NSNM5F6DNF');
        `}
      </Script>

      <Container>
        {/* Hero Section */}
        <HeroCarousel allPosts={allPosts} />

        {/* About Dark Web Section */}
        <AboutDarkWeb />

        {/* Explore the Dark Web Section */}
        <ExploreDarkWeb />

        {/* Advantages Section */}
        <Advantages />

        {/* Featured Markets Section */}
        <FeaturedMarkets allPosts={allPosts} />

        {/* Latest Blog Posts Section */}
        <LatestBlogPosts allPosts={allPosts} />

        {/* Join Us Newsletter Section */}
        <JoinUsSection />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "image",
    "coverImage",
    "category",
    "author",
    "authorImage",
  ]);

  return {
    props: { allPosts },
  };
}
