import Head from 'next/head';

import ExploreDarkWeb from '@/components/ExploreDarkWeb';
import Advantages from '@/components/Advantages';

import JoinUsSection from '@/components/JoinUsSection';
import { getAllPosts } from 'lib/getPost';
import { InferGetStaticPropsType } from 'next';
import HeroCarousel from '@/components/HeroCarousel';
import AboutDarkWeb from '@/components/AboutDarkWeb';
import FeaturedMarkets from '@/components/FeaturedMarkets';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import Container from '@/components/container';

export default function Home({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Explore the Dark Web Safely | TorConnect</title>
        <meta
          name="description"
          content="Your ultimate resource for exploring the dark web safely. Learn about darknet marketplaces, anonymity tools, and secure browsing practices."
        />
        <meta
          name="keywords"
          content="dark web, darknet marketplaces, Tor browser, anonymity tools, secure browsing, privacy, hidden web, safe browsing guides"
        />
        <meta name="author" content="TorConnect Team" />
        <meta property="og:title" content="Explore the Dark Web Safely | TorConnect" />
        <meta
          property="og:description"
          content="Discover detailed guides, top darknet marketplaces, and tips for safely browsing the dark web with TorConnect."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://torconnect.io" />
        <meta property="og:image" content="/images/top-darknet-markets-cover.png" />
        <meta name="twitter:title" content="Explore the Dark Web Safely | TorConnect" />
        <meta
          name="twitter:description"
          content="Learn how to browse the dark web safely with TorConnect. Find the best darknet marketplaces and tips for secure browsing."
        />
        <meta name="twitter:image" content="/images/top-darknet-markets-cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container>
        <HeroCarousel allPosts={allPosts} />
        <AboutDarkWeb />
        <ExploreDarkWeb />
        <Advantages />
        <FeaturedMarkets allPosts={allPosts} />
        <LatestBlogPosts allPosts={allPosts} />
        <JoinUsSection />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'excerpt',
    'date',
    'image',
    'coverImage',
    'category',
    'author',
    'authorImage',
  ]);

  return {
    props: { allPosts },
  };
}
