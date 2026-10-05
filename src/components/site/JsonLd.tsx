import { jsonLdString } from "@/lib/seo";

/** Structured data for search engines, rendered as a JSON-LD script tag. */
export default function JsonLd({ nodes }: { nodes: object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(...nodes) }} />;
}
