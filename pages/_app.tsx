import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
// import Preloader from "@/components/Preloader";
import "../public/css/index.css";
import "../public/css/global.css";
import Layout from "@/components/Layout";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  const siteName = "TorConnect";
  const siteDescription =
    "Learn how to use the Tor Browser, explore the Dark Web safely, and access .onion sites and darknet markets. Stay updated with the latest guides and resources.";
  const siteUrl = "https://torconnect.io";
  const ogImage = `${siteUrl}/images/logo/logo.png`;

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      {/* <Preloader /> */}
      <Head>
        <title>{`${siteName} - Explore the Dark Web with Safety and Confidence`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDescription} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={`${siteName} - Explore the Dark Web`} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteName} - Explore the Dark Web`} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical Link */}
        <link rel="canonical" href={siteUrl} />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NSNM5F6DNF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NSNM5F6DNF');
        `}
        </Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
}
