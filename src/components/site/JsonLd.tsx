import { jsonLdString } from "@/lib/seo";

/** Structured data for search engines, rendered as one JSON-LD script tag per node. */
export default function JsonLd({ nodes }: { nodes: object[] }) {
  return nodes.map((node, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(node) }} />
  ));
}
