import { products } from "@/lib/products";
import { Container, Eyebrow, Heading, Lead } from "@/components/site/primitives";
import { ProductFeature, ProductTile } from "@/components/site/ProductCard";
import ContactBand from "@/components/site/ContactBand";
import JsonLd from "@/components/site/JsonLd";
import { SITE_URL, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products and Case Studies",
  description:
    "Software Devian Labs designs, builds and runs in-house: Devian Desktop and Betelgeuse (open source), Mohur, Campfyr and Khao, with a case study for each.",
  path: "/products",
});

export default function ProductsPage() {
  const openSource = products.filter((p) => p.openSource);
  const others = products.filter((p) => !p.openSource);

  const itemList = {
    "@type": "ItemList",
    name: "Products built by Devian Labs",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd nodes={[itemList, breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "Products", path: "/products" }])]} />
      <header className="relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative py-20 md:py-28">
          <Eyebrow>Products · Case studies</Eyebrow>
          <Heading as="h1" className="max-w-4xl md:text-6xl lg:text-7xl">
            Software we build <em>for ourselves.</em>
          </Heading>
          <Lead className="mt-8">
            Every product here is designed, engineered and run by Devian Labs. Each case study covers the problem, what
            we built, and the engineering underneath: the same work we do for clients.
          </Lead>
        </Container>
      </header>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Open source</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="mb-16 grid gap-6 lg:grid-cols-2">
            {openSource.map((p, i) => <ProductFeature key={p.slug} product={p} priority={i === 0} />)}
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Mobile and web</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((p) => <ProductTile key={p.slug} product={p} />)}
          </div>
        </Container>
      </section>

      <ContactBand heading="Want a product like these, *built for you?*" />
    </>
  );
}
