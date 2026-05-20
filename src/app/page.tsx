import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Code2, Terminal, Users, Cpu, Layout, Zap,
  PlayCircle, FileText, Package, BookOpen, ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";
import { ProductCarousel } from "@/components/ProductCarousel";

const teamMembers = [
  {
    name: "Smruti Ranjan Badatya",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/iamsmruti/",
    image: "/team/smruti.png",
  },
  {
    name: "Biswajeet Dehuri",
    role: "App Engineering Lead",
    linkedin: "https://www.linkedin.com/in/biswajeet-dehuri-7b1078224/",
    image: "/team/biswajeet.png",
  },
  {
    name: "Debesh Mohapatra",
    role: "Web Engineering Lead",
    linkedin: "https://www.linkedin.com/in/debesh-mohapatra-650070205/",
    image: "/team/debesh.jpg",
  },
];

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

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-[600px] leading-relaxed">
            Shipping our own products and helping founders go from idea to launched MVP in weeks, not quarters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300"
            >
              See What We&apos;ve Built
            </Link>
          </div>

        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="px-4 md:px-6 py-24 md:py-32 bg-background border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
              <Code2 className="w-3 h-3" /> Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
              What We Build{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                for Clients.
              </span>
            </h2>
            <p className="text-muted-foreground max-w-[500px] mx-auto">
              Two things we&apos;re good at. We don&apos;t pretend to do everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Zap}
              title="MVP from Idea"
              description="You have an idea and a deadline. We turn it into a shipped, working product in weeks. Ideal for founders validating a market or testing a new line of business."
              href="/services/mvp-from-idea"
              tag="mvp --speed-first"
              color="violet"
            />
            <ServiceCard
              icon={Code2}
              title="Custom Software Dev"
              description="End-to-end delivery for teams who know what they need built. Web apps, internal tools, integrations — built lean, shipped clean, documented properly."
              href="/services/software-development"
              tag="dev --full-stack"
              color="cyan"
            />
          </div>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────────── */}
      <section id="products" className="px-4 md:px-6 py-24 md:py-32 bg-zinc-950 border-b">
        <div className="container mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
              <Zap className="w-3 h-3" /> Products
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
              Things{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                We&apos;ve Built.
              </span>
            </h2>
            <p className="text-muted-foreground max-w-[560px] mx-auto">
              We build products for ourselves, too. It&apos;s how we stay sharp - and it&apos;s why clients trust us to build theirs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProductCarousel
              title="Devian Desktop"
              slides={[
                { text: "The control center for your dev machine.", image: "/devian-desktop-preview.png" },
                { text: "Find abandoned projects and clean up clutter.", image: "/devian-desktop-preview.png" },
                { text: "Filter by tech stack, age, and activity.", image: "/devian-desktop-preview.png" },
                { text: "Reclaim disk space with one click.", image: "/devian-desktop-preview.png" },
              ]}
              href="/products/devian-desktop"
              websiteUrl="https://devian.app"
            />
            <ProductCarousel
              title="Khao"
              slides={[
                { text: "QR-based menu and table ordering for small food vendors.", image: "/Khao-preview.png" },
                { text: "Real-time orders — no app install required.", image: "/Khao-preview.png" },
                { text: "Works on any smartphone browser.", image: "/Khao-preview.png" },
                { text: "Vendor dashboard for live order management.", image: "/Khao-preview.png" },
              ]}
              href="/products/khao"
              websiteUrl="https://khao.app"
            />
            <ProductCarousel
              title="Campfyr"
              slides={[
                { text: "SOS alert when you're in trouble — nearby members get it over Bluetooth, no signal needed.", image: "/campfyr-preview.png" },
                { text: "Split trip expenses as you go. No spreadsheets, no settling up at the end.", image: "/campfyr-preview.png" },
                { text: "Share photos with the group instantly — offline, peer-to-peer, no upload.", image: "/campfyr-preview.png" },
                { text: "Plan your itinerary together before you leave. Stays on your phone when you're off-grid.", image: "/campfyr-preview.png" },
              ]}
              href="/products/campfyr"
            />
          </div>

        </div>
      </section>

      {/* ── AgileCoder ───────────────────────────────────────── */}
      <section id="agilecoder" className="px-4 md:px-6 py-24 md:py-32 bg-background border-b">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
              <BookOpen className="w-3 h-3" /> Knowledge
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
              We Share{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                What We Learn.
              </span>
            </h2>
            <p className="text-muted-foreground max-w-[560px] mx-auto leading-relaxed">
              Through AgileCoder, our knowledge arm, we publish tutorials, write books, and ship developer tools. It keeps us honest — and it helps other developers ship better software.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {[
              {
                icon: PlayCircle,
                label: "Video Tutorials",
                sub: "300+ subscribers · 1,000+ watch hours",
                href: "https://www.youtube.com/@AgileCoderYT",
                color: "text-red-400",
              },
              {
                icon: FileText,
                label: "Tech Blog",
                sub: "Practical writing for working developers",
                href: "https://agilecoder.in/blog",
                color: "text-cyan-400",
              },
              {
                icon: Package,
                label: "AI-Ready Boilerplates",
                sub: "Production scaffolds for modern stacks",
                href: "https://build.devianlabs.com",
                color: "text-violet-400",
              },
            ].map(({ icon: Icon, label, sub, href, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] hover:border-cyan-500/25 hover:shadow-[0_0_22px_rgba(34,211,238,0.07)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 w-fit">
                  <Icon className={cn("w-5 h-5", color)} />
                </div>
                <div>
                  <p className="font-semibold text-zinc-100 text-sm mb-1 group-hover:text-white transition-colors">{label}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{sub}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://agilecoder.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22)] transition-all duration-300"
            >
              Visit AgileCoder <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────── */}
      <section id="approach" className="px-4 md:px-6 py-24 md:py-32 bg-background border-b">
        <div className="container mx-auto max-w-5xl">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
              <Terminal className="w-3 h-3" /> Our Approach
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-tight">
              Built lean.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Shipped fast.
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We don&apos;t sell hours. We ship work. Here&apos;s how we think about it.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                icon: Layout,
                label: "Lean",
                desc: "No bloat. Every feature earns its place. We ship what's needed, nothing more.",
              },
              {
                icon: Terminal,
                label: "Practical",
                desc: "Grounded in real use cases. Built for how people actually work, not edge cases.",
              },
              {
                icon: Cpu,
                label: "Focused",
                desc: "One problem solved well beats ten solved halfway.",
              },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl p-6 flex flex-col gap-4 bg-zinc-900/50 border border-white/[0.06] hover:border-cyan-500/25 hover:shadow-[0_0_22px_rgba(34,211,238,0.07)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 w-fit">
                  <Icon className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section id="team" className="relative overflow-hidden px-4 md:px-6 py-24 md:py-32 bg-zinc-950 border-b">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.10] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
              <Users className="w-3 h-3" /> The Team
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-50 leading-tight">
              Three People.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Real Work.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-[600px] mx-auto leading-relaxed">
              We&apos;re a small team on purpose - it&apos;s how we ship faster than agencies twice our size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                  <h3 className="font-bold text-zinc-50 text-xl tracking-tight mb-1">{member.name}</h3>
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
          <Link
            href="mailto:hello@devianlabs.com"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-semibold border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300 mb-4"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
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
  color?: "cyan" | "violet";
}) {
  const isCyan = color === "cyan";
  return (
    <div className={cn(
      "group relative flex flex-col rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/[0.08] transition-all duration-300 hover:-translate-y-1.5",
      isCyan
        ? "hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.15)] hover:border-cyan-500/30"
        : "hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] hover:border-violet-500/30"
    )}>
      <div className={cn(
        "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
        isCyan ? "bg-cyan-500/20" : "bg-violet-500/20"
      )} />

      <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
        <div className="mb-10 w-fit">
          <div className={cn(
            "p-4 rounded-2xl border transition-colors duration-500 shadow-sm",
            isCyan
              ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20"
              : "bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20"
          )}>
            <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
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
            isCyan
              ? "bg-cyan-500 hover:bg-cyan-400 text-cyan-950"
              : "bg-violet-500 hover:bg-violet-400 text-violet-950"
          )}>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
