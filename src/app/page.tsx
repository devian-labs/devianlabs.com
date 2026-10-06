import Img from "@/components/site/Img";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { products, getProduct } from "@/lib/products";
import { capabilities } from "@/lib/capabilities";
import { services, getService } from "@/lib/services";
import { featuredClient, localBusinessSites } from "@/lib/clients";
import EmailLink from "@/components/site/EmailLink";
import { ArrowLink, ButtonLink, buttonClass, Container, Eyebrow, Heading, Lead, Section, stretchedCard, stretchedLink, withAccent } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import { ProductFeature, ProductTile } from "@/components/site/ProductCard";
import { DesktopWindow } from "@/components/site/ProductVisual";
import ContactBand from "@/components/site/ContactBand";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: HOME_TITLE, absoluteTitle: true, description: HOME_DESCRIPTION, path: "" });

/*
 * Home: who we are (hero), what we build, our products as proof, client work,
 * ways to work with us, how we work, then contact.
 */

const openSource = products.filter((p) => p.openSource);
const otherProducts = products.filter((p) => !p.openSource);

const principles = [
  { title: "We ship our own products", desc: "We know what it takes to launch, support and grow software, not just to build it. Every client project gets that experience." },
  { title: "One team, every platform", desc: "The app, the backend, the desktop client and the extension come from the same people, so nothing falls between vendors." },
  { title: "You own everything", desc: "Code, infrastructure and accounts are yours, documented so any engineer can pick them up. No lock-in." },
  { title: "Straight to the builders", desc: "You talk to the people writing the code. The founder is involved in every engagement." },
];

export default function Home() {
  const partner = getService("technology-partner");
  const otherServices = services.filter((s) => s.slug !== partner.slug);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(103,232,249,0.10),rgba(196,161,255,0.06),transparent)]" />

        <Container className="relative pt-20 md:pt-28">
          <div>
            <Eyebrow className="mb-8">
              <span className="mr-3 inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400 align-middle" />
              Devian Labs · Software and app development studio, India
            </Eyebrow>
            <Heading as="h1" className="max-w-5xl">
              We build our own products. <em className="text-brand pr-2">Then we build yours.</em>
            </Heading>
            <Lead className="mt-8">
              Devian Labs is an independent software studio. We build and run products of our own, and take on client
              projects of every kind, from a single automation to a complete product. For businesses in it for the long
              haul, we stay on as their product team.
            </Lead>
            <div className="mt-10 flex flex-wrap gap-3">
              <EmailLink className={buttonClass()}>Start a project</EmailLink>
              <ButtonLink href="#products" variant="secondary">See what we&apos;ve built</ButtonLink>
            </div>
            <p className="mt-10 font-mono text-xs leading-relaxed tracking-wide text-fg-3">
              Mobile · Web · Desktop · Extensions · Plugins · Automations · Backends · AI agents
            </p>
          </div>

          {/* Product collage: real screens from our products */}
          <div className="relative mt-16 h-[300px] sm:h-[420px] md:mt-20 md:h-[520px] lg:h-[600px]" aria-label="Screens from Devian Labs products">
            <div className="absolute left-0 top-10 w-[68%] opacity-90 md:top-14 md:w-[58%]">
              <DesktopWindow src="/products/betelgeuse/editor.jpg" alt="Betelgeuse, our open-source notes and docs app" eager size="md" />
            </div>
            <div className="absolute right-0 top-0 z-10 w-[74%] md:w-[62%]">
              <DesktopWindow src="/products/devian-desktop/dashboard.png" alt="Devian Desktop, our open-source control center for AI coding agents" priority size="lg" />
            </div>
            <div className="absolute bottom-[-2rem] left-[30%] z-20 w-[22%] max-w-[190px] md:left-[34%] md:w-[15%]">
              <div className="overflow-hidden rounded-[1.4rem] border border-line-strong bg-black p-1 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.1rem]">
                  <Img src="/products/campfyr/trips.webp" alt="Campfyr, our group travel app" fill loading="eager" fetchPriority="low" sizes="190px" className="object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-40 bg-gradient-to-t from-ink to-transparent" />
          </div>
        </Container>
      </section>

      {/* ── 01 · What we build ─────────────────────────────── */}
      <Section id="capabilities">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <Eyebrow index="01">What we build</Eyebrow>
            <Heading>Whatever it runs on, <em>we build it.</em></Heading>
          </div>
          <Lead className="md:text-lg">
            Client projects of any kind, from a single automation to a full product across mobile, web and desktop. If
            it&apos;s software, we&apos;ll build it, and most of it we&apos;ve already shipped for ourselves.
          </Lead>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ name, icon: Icon, desc, proof }) => (
            <div key={name} className="flex flex-col bg-ink p-7 transition-colors hover:bg-surface">
              <Icon className="mb-8 h-5 w-5 text-fg-2" strokeWidth={1.5} />
              <h3 className="mb-2 font-medium text-fg">{name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-fg-2">{desc}</p>
              {proof.length > 0 && (
                <p className="mt-auto text-xs text-fg-3">
                  In production:{" "}
                  {proof.map((slug, i) => {
                    const p = getProduct(slug)!;
                    return (
                      <span key={slug}>
                        <Link href={`/products/${slug}`} className="text-fg-2 underline decoration-line-strong underline-offset-4 hover:text-fg">
                          {p.name}
                        </Link>
                        {i < proof.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── 02 · Products ──────────────────────────────────── */}
      <Section id="products">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <Eyebrow index="02">Our products</Eyebrow>
            <Heading>Our products are <em>our R&amp;D.</em></Heading>
          </div>
          <Lead className="md:text-lg">
            We design, build and run our own software. It&apos;s where we take technical risks, build IP we can reuse, and
            learn what it takes to launch and maintain a product, before a client ever pays for that lesson.
          </Lead>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Open source</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {openSource.map((p) => <ProductFeature key={p.slug} product={p} />)}
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Mobile and web</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {otherProducts.map((p) => <ProductTile key={p.slug} product={p} />)}
        </div>

        <div className="mt-12">
          <ArrowLink href="/products">All products and case studies</ArrowLink>
        </div>
      </Section>

      {/* ── 03 · Client work ───────────────────────────────── */}
      <Section id="work">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <Eyebrow index="03">Client work</Eyebrow>
            <Heading>Selected <em>client projects.</em></Heading>
          </div>
          <Lead className="md:text-lg">
            Custom software for founders, and websites that help local businesses get found online.
          </Lead>
        </div>

        <article
          className={cn("group mb-6 grid overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-line-strong lg:grid-cols-[1.4fr_1fr]", stretchedCard)}
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-ink lg:aspect-auto lg:min-h-[380px]">
            <Img
              src={featuredClient.image!}
              alt={`${featuredClient.name} website`}
              fill
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{featuredClient.kind}</p>
            <h3 className="mb-4 text-3xl font-medium tracking-tight text-fg">
              <Link href={featuredClient.href!} target="_blank" rel="noopener noreferrer" className={stretchedLink}>
                {featuredClient.name}
              </Link>
            </h3>
            <p className="mb-6 leading-relaxed text-fg-2">{featuredClient.desc}</p>
            <span className="mb-8 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-sm text-emerald-300">
              <TrendingUp className="h-4 w-4" /> {featuredClient.stat}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg group-hover:text-brand-cyan">
              Visit site <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </article>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {localBusinessSites.map((c) => (
            <article
              key={c.name}
              className={cn("group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong", stretchedCard)}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
                <Img
                  src={c.image!}
                  alt={`${c.name} website`}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 flex items-center justify-between gap-2 text-sm font-medium text-fg">
                  <Link href={c.href!} target="_blank" rel="noopener noreferrer" className={stretchedLink}>
                    {c.name}
                  </Link>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-fg-3 transition-colors group-hover:text-fg" />
                </h3>
                <p className="text-xs text-fg-3">{c.kind}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── 04 · Ways to work with us ──────────────────────── */}
      <Section id="services">
        <div className="mb-14 max-w-3xl">
          <Eyebrow index="04">Work with us</Eyebrow>
          <Heading>Build a project, <em>or build a future.</em></Heading>
        </div>

        {/* Technology partner, the long-term option */}
        <article
          className={cn("group mb-6 grid overflow-hidden rounded-3xl border border-line-strong bg-surface transition-colors hover:border-fg-3 lg:grid-cols-[1fr_1fr]", stretchedCard)}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-violet/10 blur-3xl" />
          <div className="relative p-8 md:p-12">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cyan">Long-term partnership</p>
            <h3 className="mb-5 text-3xl font-medium tracking-tight text-fg md:text-4xl">
              <Link href={`/services/${partner.slug}`} className={stretchedLink}>{withAccent(partner.headline)}</Link>
            </h3>
            <p className="mb-8 max-w-md leading-relaxed text-fg-2">{partner.summary}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg group-hover:text-brand-cyan">
              How partnerships work →
            </span>
          </div>
          <ul className="relative grid content-center gap-px border-t border-line bg-line lg:border-l lg:border-t-0">
            {partner.included.items.slice(0, 4).map((item) => (
              <li key={item.title} className="bg-surface px-8 py-6 md:px-10">
                <p className="mb-1 font-medium text-fg">{item.title}</p>
                <p className="text-sm text-fg-2">{item.desc}</p>
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-6 md:grid-cols-3">
          {otherServices.map((s) => (
            <article
              key={s.slug}
              className={cn("group flex flex-col rounded-3xl border border-line p-8 transition-colors hover:border-line-strong hover:bg-surface", stretchedCard)}
            >
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{s.forWho}</p>
              <h3 className="mb-3 text-xl font-medium tracking-tight text-fg">
                <Link href={`/services/${s.slug}`} className={stretchedLink}>{s.name}</Link>
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-fg-2">{s.card}</p>
              <span className="mt-auto text-sm font-medium text-fg group-hover:text-brand-cyan">Learn more →</span>
            </article>
          ))}
        </div>
      </Section>

      {/* ── 05 · How we work ───────────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Eyebrow index="05">How we work</Eyebrow>
            <Heading className="md:text-4xl">Small team. <em>Real products.</em> No middle layer.</Heading>
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="border-t border-line-strong pt-6">
                <span className="font-mono text-xs text-fg-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-3 mt-3 font-medium text-fg">{p.title}</h3>
                <p className="text-sm leading-relaxed text-fg-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ContactBand />
    </>
  );
}
