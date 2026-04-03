import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ChevronRight, Check, Code2, Terminal, Users, Cpu, Globe,
  ExternalLink, Laptop, QrCode, WifiOff, Layout, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";
import { ProductCarousel } from "@/components/ProductCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center border-b bg-zinc-950">

        {/* Animated orbs */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-violet-600/[0.18] blur-[100px] -top-56 -right-40 animate-orb-1 pointer-events-none will-change-transform" />
        <div className="absolute w-[580px] h-[580px] rounded-full bg-cyan-500/[0.14] blur-[100px] -bottom-48 -left-32 animate-orb-2 pointer-events-none will-change-transform" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-emerald-500/[0.10] blur-[80px] top-1/3 left-[42%] animate-orb-3 pointer-events-none will-change-transform" />

        {/* Tech grid */}
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_30%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center px-4 md:px-6 py-24 md:py-32">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring inline-block flex-shrink-0" />
            Building the future, today
          </div>

          {/* Headline */}
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
            Powerful software doesn't have to be complex or expensive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300"
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300"
            >
              Work With Us
            </Link>
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
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Shipped Products.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProductCarousel
              title="Devian Desktop"
              slides={[
                { text: "Scan and index all local repositories", image: "/devian-desktop-preview.png" },
                { text: "Identify abandoned and cleanable projects", image: "/devian-desktop-preview.png" },
                { text: "Filter by tech stack, age, and activity", image: "/devian-desktop-preview.png" },
                { text: "Reclaim disk space with one click", image: "/devian-desktop-preview.png" },
              ]}
              href="/products/devian-desktop"
              websiteUrl="https://devian.app"
            />
            <ProductCarousel
              title="Khaoo"
              slides={[
                { text: "QR code menu — no app required", image: "/khaoo-preview.png" },
                { text: "Real-time table ordering", image: "/khaoo-preview.png" },
                { text: "Vendor dashboard for order management", image: "/khaoo-preview.png" },
                { text: "Works on any smartphone browser", image: "/khaoo-preview.png" },
              ]}
              href="/products/khaoo"
              websiteUrl="https://khaoo.vercel.app"
            />
            <ProductCarousel
              title="P2P Share"
              slides={[
                { text: "Fully offline — no internet needed", image: "/p2p-share-preview.png" },
                { text: "Peer-to-peer local network transfer", image: "/p2p-share-preview.png" },
                { text: "Share with an entire group at once", image: "/p2p-share-preview.png" },
                { text: "No accounts, no cloud, no limits", image: "/p2p-share-preview.png" },
              ]}
              href="/products/p2p-share"
            />
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
              Software{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Services.
              </span>
            </h2>
            <p className="text-muted-foreground max-w-[500px] mx-auto">
              We help build robust technological solutions catered strictly to your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Code2}
              title="Software Development"
              description="End-to-end software delivery based on precise requirements. Fully scalable, tailored architectures built to perform."
              href="/services/software-development"
              tag="dev --full-stack"
              color="cyan"
            />
            <ServiceCard
              icon={Zap}
              title="MVP from Idea"
              description="Quick and lean MVP development scaling your raw ideas into actionable products, enabling hyper-fast market validation."
              href="/services/mvp-from-idea"
              tag="mvp --speed-first"
              color="violet"
            />
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────── */}
      <section id="approach" className="px-4 md:px-6 py-24 md:py-32 bg-background border-b">
        <div className="container mx-auto max-w-5xl">

          {/* Centered heading */}
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
              Too many tools are overloaded with features and cost. We build software that does one thing well—simple, focused, and accessible to everyone.
            </p>
          </div>

          {/* Four value cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                desc: "One problem solved exceptionally well beats ten solved halfway.",
              },
              {
                icon: Globe,
                label: "Accessible",
                desc: "Great software should be within reach—not locked behind enterprise pricing.",
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
      <section id="team" className="relative overflow-hidden px-4 md:px-6 py-24 md:py-32 bg-zinc-950">
        {/* Background glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.10] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            <Users className="w-3 h-3" /> The Team
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-50 leading-tight">
            Engineers{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Building Value.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-[600px] mx-auto leading-relaxed">
            A dedicated team of engineers who have built and delivered software across multiple domains—from MVPs to production systems. Fast, clean, reliable.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300"
          >
            Meet the Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

/* ── Product Card ─────────────────────────────────────────── */
const accentConfig = {
  cyan: {
    iconBg:  "bg-cyan-500/[0.1] border-cyan-500/20",
    icon:    "text-cyan-400",
    badge:   "bg-cyan-500/[0.1] text-cyan-400 border-cyan-500/20",
    dot:     "bg-cyan-400",
    hover:   "hover:border-cyan-500/35 hover:shadow-[0_0_28px_rgba(34,211,238,0.09),0_24px_48px_rgba(0,0,0,0.5)]",
  },
  purple: {
    iconBg:  "bg-violet-500/[0.1] border-violet-500/20",
    icon:    "text-violet-400",
    badge:   "bg-violet-500/[0.1] text-violet-400 border-violet-500/20",
    dot:     "bg-violet-400",
    hover:   "hover:border-violet-500/35 hover:shadow-[0_0_28px_rgba(139,92,246,0.09),0_24px_48px_rgba(0,0,0,0.5)]",
  },
  green: {
    iconBg:  "bg-emerald-500/[0.1] border-emerald-500/20",
    icon:    "text-emerald-400",
    badge:   "bg-emerald-500/[0.1] text-emerald-400 border-emerald-500/20",
    dot:     "bg-emerald-400",
    hover:   "hover:border-emerald-500/35 hover:shadow-[0_0_28px_rgba(52,211,153,0.09),0_24px_48px_rgba(0,0,0,0.5)]",
  },
} as const;


/* ── Service Card ─────────────────────────────────────────── */
function ServiceCard({ icon: Icon, title, description, href, tag, color = "cyan" }: {
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
      isCyan ? "hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.15)] hover:border-cyan-500/30" : "hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.15)] hover:border-violet-500/30"
    )}>
      {/* Ambient background glow inside card */}
      <div className={cn(
        "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
        isCyan ? "bg-cyan-500/20" : "bg-violet-500/20"
      )} />

      <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
        <div className="mb-10 w-fit">
          <div className={cn(
            "p-4 rounded-2xl border transition-colors duration-500 shadow-sm",
            isCyan ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20" : "bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20"
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
          Explore Service 
          <span className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md group-hover/link:translate-x-1 hover:scale-105 active:scale-95",
            isCyan ? "bg-cyan-500 hover:bg-cyan-400 text-cyan-950" : "bg-violet-500 hover:bg-violet-400 text-violet-950"
          )}>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
