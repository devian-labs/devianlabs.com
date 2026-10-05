import type { Metadata } from "next";
import { EMAIL, GITHUB_ORG_URL } from "./contact";

/* Shared metadata and structured data, so every page gets complete, consistent SEO tags. */

export const SITE_URL = "https://devianlabs.com";
export const SITE_NAME = "Devian Labs";

export const HOME_TITLE = "Devian Labs — Software Studio for Products and Client Work";
export const HOME_DESCRIPTION =
  "Devian Labs builds its own software products and takes on client projects of every kind: mobile, web, desktop, extensions, automations and backends.";

/**
 * Page metadata with a canonical URL, Open Graph and Twitter tags.
 * Setting `openGraph` on a page replaces the layout's, so the shared fields live here.
 * Pages with their own opengraph-image file pass `ownImage` so that file is used instead of the default.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
  ownImage,
}: {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the " | Devian Labs" suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
  /** The route has its own opengraph-image file. */
  ownImage?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description,
      ...(ownImage ? {} : { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }] }),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const ORG_ID = `${SITE_URL}/#organization`;

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/devian-labs-logo-512.png`,
  email: EMAIL,
  description:
    "A software studio from India that builds its own products and takes on client work across mobile, web, desktop, extensions, plugins, automations and backends.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: [GITHUB_ORG_URL, "https://agilecoder.in", "https://www.youtube.com/@AgileCoderYT"],
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

/** Serialises a JSON-LD graph for a <script> tag, escaping "<" as the Next.js docs advise. */
export function jsonLdString(...nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
}
