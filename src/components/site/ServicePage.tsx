import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check, Minus, TrendingUp } from "lucide-react";
import { services, type Service } from "@/lib/services";
import { mailto } from "@/lib/contact";
import { ArrowLink, ButtonLink, Container, Eyebrow, Heading, Lead, Section, withAccent } from "./primitives";
import ContactBand from "./ContactBand";

export function serviceMetadata(service: Service): Metadata {
  const url = `https://devianlabs.com/services/${service.slug}`;
  const title = service.headline.replaceAll("*", "");
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: { url, title: `${title} | Devian Labs`, description: service.card },
  };
}

export default function ServicePage({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative py-20 md:py-28">
          <Eyebrow>
            <Link href="/#services" className="hover:text-fg">Services</Link> / {service.name}
          </Eyebrow>
          <Heading as="h1" className="max-w-4xl md:text-6xl lg:text-7xl">{withAccent(service.headline)}</Heading>
          <Lead className="mt-8">{service.summary}</Lead>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={mailto(`Enquiry: ${service.name}`)}>Start a conversation</ButtonLink>
            <ButtonLink href="/products" variant="secondary">See what we&apos;ve built</ButtonLink>
          </div>
        </Container>
      </header>

      {/* The problem */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Heading className="md:text-4xl">{service.problem.heading}</Heading>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-fg-2">
            {service.problem.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <Eyebrow index="01">What you get</Eyebrow>
        <Heading className="mb-14 max-w-2xl md:text-4xl">{service.included.heading}</Heading>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {service.included.items.map((item) => (
            <div key={item.title} className="bg-ink p-7 md:p-8">
              <h3 className="mb-3 font-medium text-fg">{item.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <Eyebrow index="02">Process</Eyebrow>
        <Heading className="mb-14 max-w-2xl md:text-4xl">{service.process.heading}</Heading>
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {service.process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-line-strong pt-6">
              <span className="font-mono text-xs text-fg-3">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mb-3 mt-3 font-medium text-fg">{step.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Fit */}
      <Section>
        <Eyebrow index="03">Is it a fit?</Eyebrow>
        <div className="grid gap-6 md:grid-cols-2">
          <FitList title="A good fit" items={service.fit.good} good />
          <FitList title="Probably not a fit" items={service.fit.notGood} />
        </div>
      </Section>

      {/* Proof */}
      {service.proof && (
        <Section>
          <Eyebrow index="04">Our work</Eyebrow>
          <Heading className="mb-12 max-w-2xl md:text-4xl">{service.proof.heading}</Heading>
          <div className={service.proof.items.length > 1 ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-4" : "grid"}>
            {service.proof.items.map((item) => <ProofCard key={item.name} item={item} wide={service.proof!.items.length === 1} />)}
          </div>
        </Section>
      )}

      {/* Other services */}
      <Section>
        <Eyebrow>Other ways to work with us</Eyebrow>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-line p-7 transition-colors hover:border-line-strong hover:bg-surface"
            >
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{s.forWho}</p>
              <h3 className="mb-3 text-lg font-medium text-fg">{s.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-fg-2">{s.card}</p>
              <span className="text-sm font-medium text-fg group-hover:text-brand-cyan">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <ContactBand heading={service.cta} subject={`Enquiry: ${service.name}`} />
    </>
  );
}

function FitList({ title, items, good }: { title: string; items: string[]; good?: boolean }) {
  const Icon = good ? Check : Minus;
  return (
    <div className="rounded-2xl border border-line bg-surface p-7 md:p-8">
      <h3 className="mb-5 font-medium text-fg">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-2">
            <Icon className={good ? "mt-0.5 h-4 w-4 shrink-0 text-emerald-400" : "mt-0.5 h-4 w-4 shrink-0 text-fg-3"} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProofCard({ item, wide }: { item: NonNullable<Service["proof"]>["items"][number]; wide: boolean }) {
  const body = (
    <>
      {item.image && (
        <div className={wide ? "relative aspect-[16/10] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[340px]" : "relative aspect-[16/10] overflow-hidden border-b border-line bg-surface"}>
          <Image
            src={item.image}
            alt={`${item.name} website`}
            fill
            sizes={wide ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className={wide ? "flex flex-col justify-center p-8 md:p-10" : "p-5"}>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{item.kind}</p>
        <h3 className={wide ? "mb-3 text-2xl font-medium text-fg" : "flex items-center justify-between text-sm font-medium text-fg"}>
          {item.name}
          {!wide && item.href && <ArrowUpRight className="h-3.5 w-3.5 text-fg-3 group-hover:text-fg" />}
        </h3>
        {item.desc && <p className="mb-5 leading-relaxed text-fg-2">{item.desc}</p>}
        {item.stat && (
          <span className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-sm text-emerald-300">
            <TrendingUp className="h-4 w-4" /> {item.stat}
          </span>
        )}
        {wide && item.href && <ArrowLink href={item.href} external>Visit site</ArrowLink>}
      </div>
    </>
  );
  const className = wide
    ? "group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong lg:grid-cols-[1.4fr_1fr]"
    : "group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong";

  return item.href && !wide ? (
    <Link href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{body}</Link>
  ) : (
    <div className={className}>{body}</div>
  );
}
