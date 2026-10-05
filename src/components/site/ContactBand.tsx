import { EMAIL, WHATSAPP_URL, mailto } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ButtonLink, Container, Heading } from "./primitives";

/** Closing call to action shown at the bottom of most pages. */
export default function ContactBand({
  heading = "Have something to *build?*",
  subject,
}: {
  heading?: string;
  subject?: string;
}) {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-brand-violet/[0.07] blur-3xl" />
      <Container className="relative py-24 text-center md:py-32">
        <Heading className="mx-auto max-w-3xl md:text-6xl">
          {heading.split(/\*([^*]+)\*/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))}
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-lg text-fg-2">
          A new product, a project on any platform, or a long-term partnership. Tell us what you&apos;re working on and we&apos;ll reply within a day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={mailto(subject)} className="px-8 py-3.5">Email {EMAIL}</ButtonLink>
          <ButtonLink href={WHATSAPP_URL} external variant="whatsapp" className="px-8 py-3.5">
            <WhatsAppIcon className="h-4 w-4" /> Message on WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
