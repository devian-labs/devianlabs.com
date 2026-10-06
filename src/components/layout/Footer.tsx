import Logo from "@/components/site/Logo";
import Link from "next/link";
import { products } from "@/lib/products";
import { services } from "@/lib/services";
import { GITHUB_ORG_URL, PHONE, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/contact";
import EmailLink from "@/components/site/EmailLink";

const linkClass = "text-sm text-fg-2 transition-colors hover:text-fg";

// Pages are prerendered at build time, so this is the date of the latest deploy.
const updated = new Date();

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-7">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[15px] font-semibold tracking-tight text-fg">Devian Labs</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-fg-2">
              A software studio from India. We build our own products, build yours, and partner for the long run.
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <EmailLink showAddress className="w-fit text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg">
                Email us
              </EmailLink>
              <a href={PHONE.href} className="w-fit text-fg-2 transition-colors hover:text-fg">{PHONE.display}</a>
              <p className="text-fg-3">India</p>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer me" className="text-fg-2 transition-colors hover:text-fg">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Products">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className={linkClass}>{p.name}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={linkClass}>{s.name}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <Link href="/about" className={linkClass}>About</Link>
            <Link href="/#work" className={linkClass}>Client work</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp</a>
          </FooterColumn>

          <FooterColumn title="Open source">
            <Link href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub ↗</Link>
            {products.filter((p) => p.github).map((p) => (
              <Link key={p.slug} href={p.github!} target="_blank" rel="noopener noreferrer" className={linkClass}>{p.name} ↗</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Knowledge">
            <Link href="https://agilecoder.in" target="_blank" rel="noopener noreferrer" className={linkClass}>AgileCoder ↗</Link>
            <Link href="https://agilecoder.in/blog" target="_blank" rel="noopener noreferrer" className={linkClass}>Tech blog ↗</Link>
            <Link href="https://build.devianlabs.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Boilerplates ↗</Link>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-fg-3 md:flex-row md:items-center">
          <p>
            © {updated.getFullYear()} Devian Labs. All rights reserved. Last updated{" "}
            <time dateTime={updated.toISOString().slice(0, 10)}>
              {updated.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            .
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-fg">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-fg">Terms</Link>
            <a href="/sitemap.xml" className="transition-colors hover:text-fg">Sitemap</a>
            <a href="/llms.txt" className="transition-colors hover:text-fg">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-3">{title}</p>
      {children}
    </div>
  );
}
