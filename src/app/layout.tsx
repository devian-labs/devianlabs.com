import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const BASE_URL = "https://devianlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Devian Labs — Software Studio for Products, Client Work and Partnerships",
    template: "%s | Devian Labs",
  },
  description:
    "Devian Labs is a software studio from India. We build our own products, two of them open source, and take on client work across mobile, web, desktop, extensions, plugins, automations and backends.",
  keywords: [
    "software development",
    "saas products",
    "mvp development",
    "startup software",
    "devian labs",
    "web development",
    "mobile app development",
    "desktop app development",
    "browser extensions",
    "automation",
    "backend development",
    "technology partner",
  ],
  authors: [{ name: "Devian Labs", url: BASE_URL }],
  creator: "Devian Labs",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Devian Labs",
    title: "Devian Labs — Software Studio for Products, Client Work and Partnerships",
    description:
      "Devian Labs is a software studio from India. We build our own products, two of them open source, and take on client work across mobile, web, desktop, extensions, plugins, automations and backends.",
  },

  twitter: {
    card: "summary_large_image",
    site: "@devianlabs",
    creator: "@devianlabs",
    title: "Devian Labs — Software Studio for Products, Client Work and Partnerships",
    description:
      "Devian Labs is a software studio from India. We build our own products, two of them open source, and take on client work across mobile, web, desktop, extensions, plugins, automations and backends.",
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
    <html
      lang="en"
      className={`dark scroll-smooth ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CYX4NC6G1R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
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
