import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowDown, Code2, Zap, TrendingUp,
  ExternalLink, Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { ElementType, ReactNode } from "react";

/*
 * Home page sections: 01 products, 02 client work and services, then contact.
 * (03 AgileCoder and the Team section are commented out for now.)
 */

const products: {
  name: string;
  logo: string;
  /** Extra classes for logos that need help standing off the dark background. */
  logoClass?: string;
  blurb: string;
  href: string;
  websiteUrl?: string;
  extraLink?: { label: string; href: string };
  githubUrl?: string;
  badge?: string;
}[] = [
  {
    name: "Mohur",
    logo: "/products/mohur.png",
    // Black coin face on transparency: sit it on a raised tile with a gold edge so it doesn't sink into the page.
    logoClass: "p-1 bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-amber-300/30 shadow-[0_0_18px_rgba(251,191,36,0.18)]",
    blurb: "A coin collecting app for people who see history in coins. Keep your collection in one place, learn the story behind each coin, and ask other collectors for an honest second opinion. In open beta on Android.",
    websiteUrl: "https://mohur.devianlabs.com",
    extraLink: { label: "Join the Android beta", href: "https://groups.google.com/g/mohur-beta-testers" },
    href: "/products/mohur",
  },
  // Hidden for now:
  /*
  {
    name: "Devian Desktop",
    logo: "/products/devian-desktop.png",
    blurb: "A control center for the AI coding agents on your machine. See what Claude Code, Codex, Cursor and others actually did, stop the servers they left running, and track token usage. Free and fully local.",
    websiteUrl: "https://devian.app",
    githubUrl: "https://github.com/devian-labs/devian",
    badge: "Open source",
    href: "/products/devian-desktop",
  },
  */
  {
    name: "Campfyr",
    logo: "/products/campfyr-icon.png",
    blurb: "An off-grid companion for group trips. SOS alerts over Bluetooth, shared itineraries, expense splitting and photo sharing, all working without a signal.",
    href: "/products/campfyr",
  },
  // Hidden for now:
  /*
  {
    name: "Khao",
    logo: "/products/khao.png",
    blurb: "QR menus and table ordering for small food vendors. Customers order from any phone browser with no app to install, and vendors see orders come in live.",
    websiteUrl: "https://khao.app",
    href: "/products/khao",
  },
  */
];

const clientWork = [
  {
    name: "Aveline Homes",
    kind: "Real estate",
    image: "/clients/realestate.png",
    href: "https://avelinehomes.in/",
  },
  {
    name: "The Balkrishna Palace",
    kind: "Hotel · Jeypore",
    image: "/clients/balkrishnapalace.png",
    href: "https://balkrishnapalace.com/",
  },
  {
    name: "Siridi Sai Mobiles",
    kind: "Electronics store",
    image: "/clients/electronics.png",
    href: "https://devian-labs.github.io/Siridi-Sai-Mobiles/",
  },
  {
    name: "Sri Ganesh Bike Point",
    kind: "Bike servicing · Jeypore",
    image: "/clients/bikepoint.png",
    href: "https://devian-labs.github.io/Sri-Ganesh-Bike-Point/",
  },
];

// TODO: Team section hidden for now — restore later (also re-import `Users` from lucide-react)
// const teamMembers = [
//   {
//     name: "Smruti Ranjan Badatya",
//     role: "Founder",
//     linkedin: "https://www.linkedin.com/in/iamsmruti/",
//     image: "/team/smruti.png",
//   },
//   {
//     name: "Biswajeet Dehuri",
//     role: "App Engineering Lead",
//     linkedin: "https://www.linkedin.com/in/biswajeet-dehuri-7b1078224/",
//     image: "/team/biswajeet.png",
//   },
//   {
//     name: "Debesh Mohapatra",
//     role: "Web Engineering Lead",
//     linkedin: "https://www.linkedin.com/in/debesh-mohapatra-650070205/",
//     image: "/team/debesh.jpg",
//   },
//   {
//     name: "Rohit Mohanty",
//     role: "Client Relations Lead",
//     linkedin: "https://www.linkedin.com/in/rohit-mohanty-3013511b5/",
//     image: "/team/rohit.png",
//   },
// ];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center border-b bg-zinc-950">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-violet-600/[0.18] blur-[100px] -top-56 -right-40 animate-orb-1 pointer-events-none will-change-transform" />
        <div className="absolute w-[580px] h-[580px] rounded-full bg-cyan-500/[0.14] blur-[100px] -bottom-48 -left-32 animate-orb-2 pointer-events-none will-change-transform" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-emerald-500/[0.10] blur-[80px] top-1/3 left-[42%] animate-orb-3 pointer-events-none will-change-transform" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_30%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center px-4 md:px-6 py-24 md:py-32">

          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring inline-block flex-shrink-0" />
            A Software Studio from India
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-6 leading-[0.95]">
            <span className="bg-[linear-gradient(90deg,#fff_0%,#67e8f9_25%,#c084fc_55%,#fff_80%,#67e8f9_100%)] bg-[size:250%_auto] bg-clip-text text-transparent animate-shimmer">
              We build, launch
            </span>
            <br />
            <span className="bg-[linear-gradient(90deg,#fff_0%,#67e8f9_25%,#c084fc_55%,#fff_80%,#67e8f9_100%)] bg-[size:250%_auto] bg-clip-text text-transparent animate-shimmer [animation-delay:-2.5s]">
              and scale software.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-[640px] leading-relaxed">
            We design, build and run our own software products, and deliver web and mobile projects for
            founders and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300"
            >
              See Our Work <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Our products */}
          <div className="flex items-center gap-3 md:gap-4">
            {products.map(({ name, logo, logoClass }, i, all) => (
              <div key={name} className="flex items-center gap-3 md:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={logo}
                    alt={name}
                    width={56}
                    height={56}
                    className={cn("w-11 h-11 md:w-14 md:h-14 object-contain rounded-xl", logoClass)}
                  />
                  <span className="text-[10px] md:text-[11px] text-zinc-500 font-medium whitespace-nowrap">{name}</span>
                </div>
                {i < all.length - 1 && <span className="w-4 md:w-8 h-px bg-gradient-to-r from-cyan-500/40 to-violet-500/40 mb-5" />}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 01 · Products ────────────────────────────── */}
      <section className="px-4 md:px-6 py-24 md:py-32 bg-background border-b">
        <div id="products" className="scroll-mt-16 container mx-auto max-w-5xl">

          <SectionLabel n="01" label="Products" />
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                products.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Software we design, build and maintain in-house, across mobile, web and desktop.
            </p>
          </div>

          <ol className="relative border-l border-white/[0.08] ml-6 md:ml-10 flex flex-col gap-16">
            {products.map((p) => (
              <li key={p.name} className="relative pl-12 md:pl-20">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={80}
                  height={80}
                  className={cn("absolute -left-6 md:-left-10 top-0 w-12 h-12 md:w-20 md:h-20 object-contain rounded-2xl outline outline-4 outline-background", p.logoClass)}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 md:pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-50">{p.name}</h3>
                  {p.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {p.websiteUrl && (
                    <Link href={p.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors">
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors">
                      <GitHubMark className="w-3.5 h-3.5" /> GitHub
                    </Link>
                  )}
                  {p.extraLink && (
                    <Link href={p.extraLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors">
                      {p.extraLink.label} <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  <Link href={p.href} className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors">
                    Case study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* ── 02 · Client work ─────────────────────────────────── */}
      <section id="work" className="scroll-mt-16 px-4 md:px-6 py-24 md:py-32 bg-background border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-5xl mx-auto">
            <SectionLabel n="02" label="Client work" />
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
                Selected{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  client projects.
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Custom software for founders, and websites that help local businesses get found online.
              </p>
            </div>
          </div>

          {/* Custom software */}
          <ClientGroupHeading
            title="Custom software"
            desc="Products designed and built end to end, from first brief to launch."
            href="/services/software-development"
          />
          <Link
            href="https://thenolia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid lg:grid-cols-[1.4fr_1fr] rounded-3xl overflow-hidden bg-zinc-900/50 border border-white/[0.07] hover:border-cyan-500/30 hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.15)] transition-all duration-300 mb-16"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] bg-zinc-950 overflow-hidden">
              <Image
                src="/clients/nolia.png"
                alt="Nolia website"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-3">Cloud kitchen · Built end to end</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-50 mb-4">Nolia</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                An artisanal dessert storefront where customers craft and order their own treats. Live with real
                customers since launch.
              </p>
              <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <TrendingUp className="w-4 h-4" /> ₹1.5 lakh+ in orders
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                Visit site <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Helping local businesses go digital */}
          <ClientGroupHeading
            title="Helping local businesses go digital"
            desc="Fast, modern websites for shops, hotels and service businesses that bring in customers."
            href="/services/helping-biz-go-digital"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {clientWork.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/[0.07] hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-zinc-950 border-b border-white/[0.05] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.name} website`}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-100 text-sm mb-1 flex items-center justify-between gap-2">
                    {c.name}
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </h3>
                  <p className="text-xs text-zinc-500">{c.kind}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* How to become the next one */}
          <div id="services" className="scroll-mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4">
                Three ways{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  we can help.
                </span>
              </h3>
              <p className="text-muted-foreground max-w-[500px] mx-auto">
                We don&apos;t pretend to do everything. These are the things we&apos;re good at.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard
                icon={Zap}
                title="MVP from Idea"
                description="You have an idea and a deadline. We turn it into a shipped, working product in weeks."
                href="/services/mvp-from-idea"
                tag="mvp --speed-first"
                color="violet"
              />
              <ServiceCard
                icon={Code2}
                title="Custom Software Dev"
                description="End-to-end delivery for teams who know what they need built. Web apps, internal tools, integrations. Built lean, documented properly."
                href="/services/software-development"
                tag="dev --full-stack"
                color="cyan"
              />
              <ServiceCard
                icon={Globe}
                title="Helping Biz go Digital"
                description="Local businesses that need a real online presence. Fast, modern websites that bring in customers, like the ones above."
                href="/services/helping-biz-go-digital"
                tag="web --go-live"
                color="emerald"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 · AgileCoder ───────────────────────────────── */}
      {/* TODO: AgileCoder section hidden for now — restore later (also re-import PlayCircle, FileText, Package)
      <section id="agilecoder" className="scroll-mt-16 px-4 md:px-6 py-24 md:py-32 bg-zinc-950 border-b">
        <div className="container mx-auto max-w-5xl">
          <SectionLabel n="03" label="Knowledge" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
                We share{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  what we learn.
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Through AgileCoder, our knowledge arm, we publish tutorials, write books and ship developer tools.
                It keeps us honest, and it helps other developers ship better software.
              </p>
              <Link
                href="https://agilecoder.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22)] transition-all duration-300"
              >
                Visit AgileCoder <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: PlayCircle, label: "Video Tutorials", sub: "300+ subscribers · 1,000+ watch hours", href: "https://www.youtube.com/@AgileCoderYT", color: "text-red-400" },
                { icon: FileText, label: "Tech Blog", sub: "Practical writing for working developers", href: "https://agilecoder.in/blog", color: "text-cyan-400" },
                { icon: Package, label: "AI-Ready Boilerplates", sub: "Production scaffolds for modern stacks", href: "https://build.devianlabs.com", color: "text-violet-400" },
              ].map(({ icon: Icon, label, sub, href, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl p-5 bg-zinc-900/50 border border-white/[0.06] hover:border-cyan-500/25 hover:shadow-[0_0_22px_rgba(34,211,238,0.07)] hover:translate-x-1 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 shrink-0">
                    <Icon className={cn("w-5 h-5", color)} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-zinc-100 text-sm mb-0.5 group-hover:text-white transition-colors">{label}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{sub}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ── Team ─────────────────────────────────────────────── */}
      {/* TODO: Team section hidden for now — restore later
      <section id="team" className="relative overflow-hidden px-4 md:px-6 py-24 md:py-32 bg-zinc-950 border-b">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.10] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
              <Users className="w-3 h-3" /> The Team
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-50 leading-tight">
              Four People.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Real Work.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-[600px] mx-auto leading-relaxed">
              We&apos;re a small team on purpose - it&apos;s how we ship faster than agencies twice our size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/[0.08] hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1),0_24px_48px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] bg-zinc-950 border-b border-white/[0.05] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale-[0.8] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 pointer-events-none" />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col items-center text-center relative z-20 -mt-6">
                  <h3 className="font-bold text-zinc-50 text-sm md:text-base tracking-tight mb-1">{member.name}</h3>
                  <p className="text-[15px] font-medium text-cyan-400 mb-8">{member.role}</p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-auto py-2.5 px-6 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-100 text-sm font-semibold transition-all duration-300 border border-white/5 hover:border-white/10 w-full hover:scale-[1.02] active:scale-[0.98]"
                  >
                    LinkedIn <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ── Get in Touch ─────────────────────────────────────── */}
      <section id="contact" className="px-4 md:px-6 py-24 md:py-32 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            Work With Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
            Have something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              to build?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[480px] mx-auto mb-10 leading-relaxed">
            Tell us what you&apos;re working on. We reply within a day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-semibold border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-semibold border border-emerald-500/35 text-emerald-400 bg-emerald-500/[0.08] hover:border-emerald-400/65 hover:bg-emerald-500/[0.14] hover:shadow-[0_0_28px_rgba(52,211,153,0.22)] transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" /> Message on WhatsApp
            </a>
          </div>
          <p className="text-sm text-zinc-600">
            Or email us directly at{" "}
            <a href="mailto:hello@devianlabs.com" className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
              hello@devianlabs.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}

/* ── Service Card ─────────────────────────────────────────── */
function ServiceCard({ icon: Icon, title, description, href, color = "cyan" }: {
  icon: ElementType;
  title: string;
  description: string;
  href: string;
  tag: string;
  color?: "cyan" | "violet" | "emerald";
}) {
  const styles = {
    cyan: {
      card: "hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.15)] hover:border-cyan-500/30",
      orb: "bg-cyan-500/20",
      iconBox: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20",
      arrow: "bg-cyan-500 hover:bg-cyan-400 text-cyan-950",
    },
    violet: {
      card: "hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] hover:border-violet-500/30",
      orb: "bg-violet-500/20",
      iconBox: "bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20",
      arrow: "bg-violet-500 hover:bg-violet-400 text-violet-950",
    },
    emerald: {
      card: "hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30",
      orb: "bg-emerald-500/20",
      iconBox: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20",
      arrow: "bg-emerald-500 hover:bg-emerald-400 text-emerald-950",
    },
  }[color];
  return (
    <div className={cn(
      "group relative flex flex-col rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/[0.08] transition-all duration-300 hover:-translate-y-1.5",
      styles.card
    )}>
      <div className={cn(
        "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
        styles.orb
      )} />

      <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
        <div className="mb-10 w-fit">
          <div className={cn(
            "p-4 rounded-2xl border transition-colors duration-500 shadow-sm",
            styles.iconBox
          )}>
            <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-zinc-50 mb-4 tracking-tight group-hover:text-white transition-colors duration-300 whitespace-nowrap">
          {title}
        </h3>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10 flex-grow">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-3 text-zinc-100 font-semibold group/link w-fit"
        >
          How we work
          <span className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md group-hover/link:translate-x-1 hover:scale-105 active:scale-95",
            styles.arrow
          )}>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}

/* ── Client work group heading ───────────────────────────── */
function ClientGroupHeading({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
      <div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-50 mb-1">{title}</h3>
        <p className="text-sm text-zinc-500">{desc}</p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
      >
        About this service <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

/* ── GitHub mark (lucide no longer ships brand icons) ────── */
function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ── Section label ────────────────────────────────────────── */
function SectionLabel({ n, label }: { n: string; label: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-sm font-semibold text-cyan-400">{n}</span>
      <span className="h-px w-12 bg-gradient-to-r from-cyan-500/60 to-violet-500/40" />
      <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400">{label}</span>
    </div>
  );
}
