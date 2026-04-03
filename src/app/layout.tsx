import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "optional" });

const BASE_URL = "https://devianlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Devian Labs | Modern Software Solutions",
    template: "%s | Devian Labs",
  },
  description:
    "We build, launch and scale software products for modern businesses. Simple, focused, and accessible.",
  keywords: [
    "software development",
    "saas products",
    "mvp development",
    "startup software",
    "devian labs",
    "lean software",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: "Devian Labs", url: BASE_URL }],
  creator: "Devian Labs",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Devian Labs",
    title: "Devian Labs | Modern Software Solutions",
    description:
      "We build, launch and scale software products for modern businesses. Simple, focused, and accessible.",
  },

  twitter: {
    card: "summary_large_image",
    site: "@devianlabs",
    creator: "@devianlabs",
    title: "Devian Labs | Modern Software Solutions",
    description:
      "We build, launch and scale software products for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} min-h-full flex flex-col antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
