import type { Metadata } from "next";
import { PHONE, SOCIAL_LINKS, WHATSAPP_URL } from "./contact";

/* Shared metadata and structured data, so every page gets complete, consistent SEO tags. */

export const SITE_URL = "https://devianlabs.com";
export const SITE_NAME = "Devian Labs";

export const HOME_TITLE = "Devian Labs — We Build Software Products and Client Projects";
export const HOME_DESCRIPTION =
  "Devian Labs builds software products, two of them open source, and client projects of every kind: mobile, web, desktop, extensions and backends.";

/** The default share image, served as a PNG by src/app/og.png/route.tsx. */
export const DEFAULT_OG_IMAGE = "/og.png";

/** Share image tags for a PNG route (see src/lib/og.tsx). */
export function ogImages(url: string, alt: string = SITE_NAME) {
  const image = { url, width: 1200, height: 630, alt, type: "image/png" };
  return { openGraph: [image], twitter: [image] };
}

/**
 * Page metadata with a canonical URL, Open Graph and Twitter tags.
 * Setting `openGraph` on a page replaces the layout's, so the shared fields live here.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the " | Devian Labs" suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
  /** Path of the page's share image, if it has its own og.png route. */
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const images = ogImages(image);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    // The llms.txt link points AI assistants at the plain-text map of the site.
    alternates: { canonical: url, types: { "text/plain": [{ url: "/llms.txt", title: "llms.txt" }] } },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description,
      images: images.openGraph,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: images.twitter },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const ORG_ID = `${SITE_URL}/#organization`;

/*
 * Devian Labs as an organisation and a local business (ProfessionalService is a
 * LocalBusiness type). No email here: the address is kept out of the HTML.
 * Add a street address to `address` once it's confirmed.
 */
export const organizationJsonLd = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/devian-labs-logo-512.png`,
  image: `${SITE_URL}/devian-labs-logo-512.png`,
  telephone: PHONE.schema,
  description:
    "A software studio from India that builds its own products and takes on client work across mobile, web, desktop, extensions, plugins, automations and backends.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: "Worldwide",
  knowsAbout: [
    "Mobile app development",
    "Web development",
    "Desktop app development",
    "Browser extensions",
    "Automation",
    "Backend development",
    "AI agents",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: PHONE.schema,
    url: WHATSAPP_URL,
    availableLanguage: "English",
  },
  sameAs: [...SOCIAL_LINKS.map((s) => s.href), "https://agilecoder.in", "https://www.youtube.com/@AgileCoderYT"],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORG_ID },
};

export const orgRef = { "@id": ORG_ID };

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Serialises one JSON-LD node for a <script> tag, escaping "<" as the Next.js docs advise.
 * Each node gets its own script rather than sharing an @graph wrapper, so every
 * top-level object has an @type.
 */
export function jsonLdString(node: object) {
  return JSON.stringify({ "@context": "https://schema.org", ...node }).replace(/</g, "\\u003c");
}
