import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ArrowLink, Container, Eyebrow, Heading, Lead, Section } from "@/components/site/primitives";
import { ProductIcon } from "@/components/site/ProductCard";
import ContactBand from "@/components/site/ContactBand";

const description =
  "Devian Labs is a software studio from India. We build our own products, take on client work across every platform, and partner long term with businesses that need a product team.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "https://devianlabs.com/about" },
  openGraph: { url: "https://devianlabs.com/about", title: "About Devian Labs", description },
};

const pillars = [
  {
    title: "We build products",
    desc: "We keep designing, building and running our own software. It's where we take risks, build IP and learn what it takes to keep a product alive after launch.",
    href: "/products",
    link: "Our products",
  },
  {
    title: "We build for clients",
    desc: "Mobile, web, desktop, browser extensions, plugins, automations and backends. Client projects of any kind, built with the same care as our own.",
    href: "/services/software-development",
    link: "Custom software",
  },
  {
    title: "We partner for the long run",
    desc: "For businesses whose product is core to what they do, we become the ongoing product team: building, running and growing it with them, month after month.",
    href: "/services/technology-partner",
    link: "Technology partner",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative py-20 md:py-28">
          <Eyebrow>About Devian Labs</Eyebrow>
          <Heading as="h1" className="max-w-4xl md:text-6xl lg:text-7xl">
            A product studio that <em>builds yours too.</em>
          </Heading>
          <Lead className="mt-8">{description}</Lead>
        </Container>
      </header>

      <Section>
        <Eyebrow index="01">What we do</Eyebrow>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex flex-col rounded-3xl border border-line bg-surface p-8">
              <span className="mb-10 font-mono text-xs text-fg-3">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mb-3 text-xl font-medium tracking-tight text-fg">{p.title}</h2>
              <p className="mb-8 text-sm leading-relaxed text-fg-2">{p.desc}</p>
              <ArrowLink href={p.href} className="mt-auto">{p.link}</ArrowLink>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <Eyebrow index="02">What we believe</Eyebrow>
            <Heading className="md:text-4xl">Good software is <em>simple.</em></Heading>
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-fg-2">
            <p>
              Good software does exactly what it needs to do and nothing more. We&apos;ve seen too many tools collapse
              under features nobody asked for, and too many projects fail because they solved the wrong problem first.
            </p>
            <p>
              So we build focused software. Every feature earns its place, and every decision starts from how people
              actually work. One problem solved well beats ten solved halfway.
            </p>
            <p>
              We also believe people should own what they make. Our desktop apps keep your data on your own machine,
              Campfyr encrypts every trip end to end, two of our products are open source, and every client gets their
              code, accounts and infrastructure in their own name.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <Eyebrow index="03">Built in-house</Eyebrow>
            <Heading className="md:text-4xl">Five products, <em>one team.</em></Heading>
          </div>
          <ul className="flex flex-col">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="group flex items-center gap-5 border-t border-line py-5 transition-colors">
                  <ProductIcon product={p} size={40} />
                  <div className="flex-1">
                    <p className="font-medium text-fg transition-colors group-hover:text-brand-cyan">{p.name}</p>
                    <p className="text-sm text-fg-2">{p.tagline}</p>
                  </div>
                  <span className="hidden text-xs text-fg-3 sm:block">{p.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <Eyebrow index="04">Knowledge</Eyebrow>
            <Heading className="md:text-4xl">We share <em>what we learn.</em></Heading>
          </div>
          <div>
            <p className="mb-8 text-lg leading-relaxed text-fg-2">
              Through AgileCoder, our knowledge arm, we publish tutorials, write about what we&apos;re building, ship
              AI-ready boilerplates and have a book out on Kindle. It keeps us honest, and it helps other developers ship
              better software.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <ArrowLink href="https://agilecoder.in" external>AgileCoder</ArrowLink>
              <ArrowLink href="https://agilecoder.in/blog" external>Tech blog</ArrowLink>
              <ArrowLink href="https://www.youtube.com/@AgileCoderYT" external>YouTube</ArrowLink>
              <ArrowLink href="https://build.devianlabs.com" external>Boilerplates</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <ContactBand />
    </>
  );
}
