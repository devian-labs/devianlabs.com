import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/site/JsonLd";
import { DEFAULT_OG_IMAGE, HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL, ogImages, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

/*
 * Every font file the page uses is preloaded, so none waits for the stylesheet to be
 * discovered: latin-ext covers the ₹ sign, and Mono sets the hero's labels.
 */
const geistSans = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Devian Labs",
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ogImages(DEFAULT_OG_IMAGE).openGraph,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ogImages(DEFAULT_OG_IMAGE).twitter,
  },
  robots: {
    index: true,
    follow: true,
    // Only the directive that differs from Google's defaults; snippets are unrestricted by default.
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  // No site-wide canonical: each page sets its own, so pages never point at the home page by accident.
};

export const viewport: Viewport = {
  themeColor: "#09090a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark scroll-smooth ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <JsonLd nodes={[organizationJsonLd, websiteJsonLd]} />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CYX4NC6G1R"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CYX4NC6G1R');
        `}
      </Script>
    </html>
  );
}
