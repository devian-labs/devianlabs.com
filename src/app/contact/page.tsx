import { GITHUB_ORG_URL, PHONE, WHATSAPP_URL } from "@/lib/contact";
import { services } from "@/lib/services";
import EmailLink from "@/components/site/EmailLink";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ArrowLink, ButtonLink, buttonClass, Container, Eyebrow, Heading, Lead, Section } from "@/components/site/primitives";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd, orgRef, pageMetadata } from "@/lib/seo";

const description =
  "Contact Devian Labs about a new product, a client project on any platform, or a long-term technology partnership. Email, call or message us on WhatsApp.";

export const metadata = pageMetadata({ title: "Contact Devian Labs", absoluteTitle: true, description, path: "/contact" });

const channels = [
  { label: "Phone", value: PHONE.display, href: PHONE.href, note: "Call or text the team directly." },
  { label: "WhatsApp", value: "Message us", href: WHATSAPP_URL, note: "The quickest way to reach the team.", external: true },
  { label: "GitHub", value: "github.com/devian-labs", href: GITHUB_ORG_URL, note: "Our open-source products and issues.", external: true },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        nodes={[
          { "@type": "ContactPage", name: "Contact Devian Labs", description, about: orgRef },
          breadcrumbJsonLd([{ name: "Home", path: "" }, { name: "Contact", path: "/contact" }]),
        ]}
      />
      <header className="relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-60" />
        <Container className="relative py-20 md:py-28">
          <Eyebrow>Contact</Eyebrow>
          <Heading as="h1" className="max-w-4xl md:text-6xl lg:text-7xl">
            Tell us what you&apos;re <em>building.</em>
          </Heading>
          <Lead className="mt-8">
            A new product, a project on any platform, or a long-term partnership. Send us a few lines about what
            you&apos;re working on and we&apos;ll reply within a day.
          </Lead>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <EmailLink subject="New project enquiry" className={buttonClass("primary", "px-8 py-3.5")}>Email us</EmailLink>
            <ButtonLink href={WHATSAPP_URL} external variant="whatsapp" className="px-8 py-3.5">
              <WhatsAppIcon className="h-4 w-4" /> Message on WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </header>

      <Section>
        <Eyebrow index="01">Ways to reach us</Eyebrow>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-3xl border border-line bg-surface p-8">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">Email</h2>
            <EmailLink showAddress className="mb-3 w-fit text-lg text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg">
              Email us
            </EmailLink>
            <p className="text-sm text-fg-2">For project briefs, quotes and partnerships.</p>
          </div>
          {channels.map((c) => (
            <div key={c.label} className="flex flex-col rounded-3xl border border-line bg-surface p-8">
              <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{c.label}</h2>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mb-3 w-fit text-lg text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg"
              >
                {c.value}
              </a>
              <p className="text-sm text-fg-2">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <Eyebrow index="02">What happens next</Eyebrow>
            <Heading className="md:text-4xl">A conversation, <em>not a sales funnel.</em></Heading>
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-fg-2">
            <p>
              We reply within a day, and you talk straight to the people who would write the code. There&apos;s no
              account manager in between, and the founder is involved in every engagement.
            </p>
            <p>
              We start with a scope call about your idea, your users and what success looks like, and you leave with a
              written scope: what we&apos;re building, what we&apos;re not, and why.
            </p>
            <p>We&apos;re based in India and work with clients worldwide, in English.</p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow index="03">Not sure what you need?</Eyebrow>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {services.map((s) => (
            <ArrowLink key={s.slug} href={`/services/${s.slug}`}>{s.name}</ArrowLink>
          ))}
          <ArrowLink href="/products">See what we&apos;ve built</ArrowLink>
        </div>
      </Section>
    </>
  );
}
