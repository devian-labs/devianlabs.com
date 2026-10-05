import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct } from "@/lib/products";
import { capabilities } from "@/lib/capabilities";
import { mailto } from "@/lib/contact";
import { ButtonLink, Chip, Container, Eyebrow, GitHubMark, Heading, Section } from "@/components/site/primitives";
import { ProductIcon } from "@/components/site/ProductCard";
import ProductVisual from "@/components/site/ProductVisual";
import ContactBand from "@/components/site/ContactBand";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  const url = `https://devianlabs.com/products/${slug}`;
  return {
    title: `${product.name}: case study`,
    description: product.summary,
    alternates: { canonical: url },
    openGraph: { url, title: `${product.name} · ${product.tagline}`, description: product.summary },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const index = products.findIndex((p) => p.slug === slug);
  const next = products[(index + 1) % products.length];
  const proven = capabilities.filter((c) => product.proves.includes(c.name));

  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-14rem] h-[28rem] w-[56rem] -translate-x-1/2 rounded-full opacity-[0.12] blur-3xl"
          style={{ background: product.accent }}
        />
        <Container className="relative pt-16 md:pt-24">
          <Eyebrow>
            <Link href="/products" className="hover:text-fg">Products</Link> / Case study
          </Eyebrow>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <ProductIcon product={product} size={56} />
            <div>
              <p className="text-2xl font-medium tracking-tight text-fg">{product.name}</p>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-fg-3">{product.category}</p>
            </div>
            {product.openSource && <Chip className="border-emerald-400/25 text-emerald-300">Open source · MIT</Chip>}
          </div>

          <Heading as="h1" className="max-w-4xl md:text-6xl lg:text-7xl">{product.tagline}</Heading>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-fg-2 md:text-xl">{product.summary}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {product.links.map((l, i) => (
              <ButtonLink key={l.href} href={l.href} external variant={i === 0 ? "primary" : "secondary"}>
                {l.label} ↗
              </ButtonLink>
            ))}
            {product.github && (
              <ButtonLink href={product.github} external variant="secondary">
                <GitHubMark className="h-4 w-4" /> Source on GitHub
              </ButtonLink>
            )}
          </div>

          {/* Fact row */}
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
            <Fact label="Platforms">{product.platforms.join(", ")}</Fact>
            <Fact label="Status">{product.status}</Fact>
            <Fact label="Built by">Devian Labs, in-house</Fact>
            <Fact label="Stack">{product.stack.slice(0, 4).join(", ")}</Fact>
          </dl>

          <ProductVisual product={product} size="lg" priority className="mx-auto mt-16 max-w-5xl translate-y-8 md:mt-20" />
        </Container>
      </header>

      {/* Problem */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <Eyebrow index="01">The problem</Eyebrow>
            {product.quote && (
              <p className="font-serif text-3xl italic leading-snug text-fg md:text-4xl">&ldquo;{product.quote}&rdquo;</p>
            )}
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-fg-2">
            {product.problem.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </Section>

      {/* What we built */}
      <Section>
        <Eyebrow index="02">What we built</Eyebrow>
        <Heading className="mb-14 max-w-2xl md:text-4xl">The product.</Heading>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {product.built.map((f) => (
            <div key={f.title} className="bg-ink p-7 md:p-8">
              <h3 className="mb-3 font-medium text-fg">{f.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{f.desc}</p>
            </div>
          ))}
        </div>

        {product.gallery && (
          <div className={product.visual.kind === "phones" ? "mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3" : "mt-16 grid gap-6 md:grid-cols-2"}>
            {product.gallery.map((g) => (
              <figure key={g.src}>
                <div
                  className={
                    product.visual.kind === "phones"
                      ? "relative mx-auto aspect-[9/19] max-w-[260px] overflow-hidden rounded-[1.4rem] border border-line-strong bg-black"
                      : "relative aspect-[16/10] overflow-hidden rounded-xl border border-line-strong bg-surface"
                  }
                >
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover object-left-top" />
                </div>
                <figcaption className="mt-3 text-center text-sm text-fg-3">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </Section>

      {/* Engineering */}
      <Section className="bg-surface/40">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <Eyebrow index="03">Under the hood</Eyebrow>
            <Heading className="md:text-4xl">The engineering <em>we own.</em></Heading>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {product.stack.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>
        <ol className="flex flex-col">
          {product.engineering.map((e, i) => (
            <li key={e.title} className="grid gap-4 border-t border-line py-8 md:grid-cols-[4rem_1fr_1.6fr] md:gap-8">
              <span className="font-mono text-sm text-fg-3">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-medium tracking-tight text-fg">{e.title}</h3>
              <p className="leading-relaxed text-fg-2">{e.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Decisions */}
      <Section>
        <Eyebrow index="04">Key decisions</Eyebrow>
        <div className={`grid gap-x-10 gap-y-12 md:grid-cols-2 ${product.decisions.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {product.decisions.map((d) => (
            <div key={d.title} className="border-t border-line-strong pt-6">
              <h3 className="mb-3 font-medium text-fg">{d.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Status */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <Eyebrow index="05">Where it is today</Eyebrow>
            <p className="text-3xl font-medium tracking-tight text-fg">{product.status}</p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-fg-2">{product.statusNote}</p>
            {product.next && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-fg-3">Up next</p>
                <div className="flex flex-wrap gap-2">
                  {product.next.map((n) => <Chip key={n}>{n}</Chip>)}
                </div>
              </div>
            )}
            {product.install && (
              <div className="mt-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-fg-3">Install</p>
                <code className="block overflow-x-auto rounded-xl border border-line bg-surface px-4 py-3 font-mono text-sm text-fg">
                  {product.install}
                </code>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {product.links.map((l) => (
                <Link key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg">
                  {l.label} ↗
                </Link>
              ))}
              {product.github && (
                <Link href={product.github} target="_blank" rel="noopener noreferrer" className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg">
                  GitHub ↗
                </Link>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Bridge to client work */}
      <Section>
        <div className="rounded-3xl border border-line-strong bg-surface p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cyan">For your project</p>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-fg">
                Need something like {product.name}?
              </h2>
              <p className="mb-8 max-w-lg leading-relaxed text-fg-2">
                The team and the engineering behind {product.name} are available for client projects and long-term
                partnerships.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={mailto(`Project like ${product.name}`)}>Talk to us</ButtonLink>
                <ButtonLink href="/services/technology-partner" variant="secondary">Partner with us</ButtonLink>
              </div>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {proven.map(({ name, icon: Icon, desc }) => (
                <li key={name} className="flex gap-4 bg-ink p-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-fg-2" strokeWidth={1.5} />
                  <div>
                    <p className="mb-1 text-sm font-medium text-fg">{name}</p>
                    <p className="text-sm text-fg-2">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Next case study */}
      <Link href={`/products/${next.slug}`} className="group block border-b border-line">
        <Container className="flex items-center justify-between gap-6 py-14">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-fg-3">Next case study</p>
            <p className="text-3xl font-medium tracking-tight text-fg transition-colors group-hover:text-brand-cyan md:text-4xl">{next.name}</p>
            <p className="mt-2 text-fg-2">{next.tagline}</p>
          </div>
          <ProductIcon product={next} size={64} className="transition-transform duration-300 group-hover:scale-105" />
        </Container>
      </Link>

      <ContactBand />
    </>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{label}</dt>
      <dd className="text-sm text-fg">{children}</dd>
    </div>
  );
}
