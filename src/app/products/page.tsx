import type { Metadata } from "next";
import { products } from "@/lib/products";
import { Container, Eyebrow, Heading, Lead } from "@/components/site/primitives";
import { ProductFeature, ProductTile } from "@/components/site/ProductCard";
import ContactBand from "@/components/site/ContactBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software Devian Labs designs, builds and runs in-house: Devian Desktop and Betelgeuse (open source), Mohur, Campfyr and Khao. Read the case study for each.",
  alternates: { canonical: "https://devianlabs.com/products" },
  openGraph: { url: "https://devianlabs.com/products", title: "Products built by Devian Labs" },
};

export default function ProductsPage() {
  const openSource = products.filter((p) => p.openSource);
  const others = products.filter((p) => !p.openSource);

  return (
    <>
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
