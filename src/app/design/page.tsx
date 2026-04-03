import { Metadata } from "next";
import {
  ArrowRight, Terminal, Zap, Users, Code2, ExternalLink,
  ChevronRight, Laptop, WifiOff, QrCode,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Design System | Devian Labs",
  description: "Brand design tokens, color palette, typography, and component guide for Devian Labs.",
};

/* ── Helpers ──────────────────────────────────────────────── */
function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-xl font-bold text-zinc-100 tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      {children}
    </section>
  );
}

function Token({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/[0.05]">
      <span className="text-sm text-zinc-400">{label}</span>
      <span className={`text-sm ${mono ? "font-mono text-cyan-400" : "text-zinc-300"}`}>{value}</span>
    </div>
  );
}

function Swatch({ label, value, className }: { label: string; value: string; className: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-xl border border-white/[0.08] ${className}`} />
      <div>
        <p className="text-xs font-medium text-zinc-300">{label}</p>
        <p className="text-xs text-zinc-600 font-mono">{value}</p>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function DesignPage() {
  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-16 md:py-24">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-violet-600/[0.12] blur-[100px] -top-48 -right-32 animate-orb-1 pointer-events-none will-change-transform" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/[0.10] blur-[80px] -bottom-32 -left-20 animate-orb-2 pointer-events-none will-change-transform" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_30%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            <Zap className="w-3 h-3" /> Design System
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-50">
            Devian Labs{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Brand Guide
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            The single source of truth for colors, typography, components, and animation tokens. Frozen for consistency across every product.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24 flex flex-col gap-20">

        {/* ── 01 Color Palette ───────────────────────────────── */}
        <Section title="01 · Color Palette" id="colors">

          {/* Backgrounds */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Backgrounds</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Swatch label="Base" value="zinc-950 · #09090b" className="bg-zinc-950" />
              <Swatch label="Card" value="zinc-900 · #18181b" className="bg-zinc-900" />
              <Swatch label="Elevated" value="zinc-800 · #27272a" className="bg-zinc-800" />
              <Swatch label="Subtle" value="zinc-800/60" className="bg-zinc-800/60" />
            </div>
          </div>

          {/* Neon Accents */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Neon Accents</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Swatch label="Cyan (Primary)" value="cyan-400 · #22d3ee" className="bg-cyan-400" />
              <Swatch label="Violet (Secondary)" value="violet-400 · #a78bfa" className="bg-violet-400" />
              <Swatch label="Emerald (Live/Success)" value="emerald-400 · #34d399" className="bg-emerald-400" />
              <Swatch label="Cyan 300 (Shimmer hi)" value="cyan-300 · #67e8f9" className="bg-cyan-300" />
            </div>
          </div>

          {/* Text */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Text</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Swatch label="Primary" value="zinc-50 · #fafafa" className="bg-zinc-50" />
              <Swatch label="Secondary" value="zinc-300 · #d4d4d8" className="bg-zinc-300" />
              <Swatch label="Muted" value="zinc-400 · #a1a1aa" className="bg-zinc-400" />
              <Swatch label="Subtle" value="zinc-600 · #52525b" className="bg-zinc-600" />
            </div>
          </div>

          {/* Borders */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Borders</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Swatch label="Default" value="white/6%" className="border-2 border-white/[0.06] bg-transparent" />
              <Swatch label="Visible" value="white/8%" className="border-2 border-white/[0.08] bg-transparent" />
              <Swatch label="Cyan accent" value="cyan-500/35%" className="border-2 border-cyan-500/35 bg-transparent" />
              <Swatch label="Violet accent" value="violet-500/35%" className="border-2 border-violet-500/35 bg-transparent" />
            </div>
          </div>
        </Section>

        {/* ── 02 Gradients ───────────────────────────────────── */}
        <Section title="02 · Gradients" id="gradients">
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
              <div className="h-24 bg-[linear-gradient(90deg,#fff_0%,#67e8f9_30%,#c084fc_60%,#fff_100%)] bg-[size:200%_auto] animate-shimmer" />
              <div className="px-4 py-3 bg-zinc-900">
                <p className="text-sm font-medium text-zinc-200">Shimmer — Hero headlines</p>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">#fff → cyan-300 → purple-400 → #fff</p>
                <p className="text-xs text-zinc-600 font-mono">bg-[size:250%_auto] + animate-shimmer</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
              <div className="h-24 bg-gradient-to-r from-cyan-400 to-violet-400" />
              <div className="px-4 py-3 bg-zinc-900">
                <p className="text-sm font-medium text-zinc-200">Neon — Logo, highlights, CTAs</p>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">from-cyan-400 to-violet-400</p>
                <p className="text-xs text-zinc-600 font-mono">bg-gradient-to-r + bg-clip-text</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
              <div className="h-24 bg-gradient-to-r from-violet-400 to-cyan-400" />
              <div className="px-4 py-3 bg-zinc-900">
                <p className="text-sm font-medium text-zinc-200">Neon Reversed — Services accent</p>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">from-violet-400 to-cyan-400</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/[0.07]">
              <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
              <div className="px-4 py-3 bg-zinc-900">
                <p className="text-sm font-medium text-zinc-200">Subtle — Avatar / icon backgrounds</p>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">from-cyan-500/20 to-violet-500/20</p>
              </div>
            </div>

          </div>
        </Section>

        {/* ── 03 Typography ──────────────────────────────────── */}
        <Section title="03 · Typography" id="typography">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-4">
              <Token label="Font Family" value="Inter (Google Fonts)" mono />
              <Token label="Mono Family" value="Geist Mono (system)" mono />
              <Token label="Anti-aliasing" value="antialiased" mono />
              <Token label="Heading tracking" value="tracking-tighter" mono />
            </div>

            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-1">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-3">Type Scale</p>
              <p className="text-xs    text-zinc-500">text-xs · 12px — labels, tags, meta</p>
              <p className="text-sm    text-zinc-400">text-sm · 14px — body, buttons, captions</p>
              <p className="text-base  text-zinc-300">text-base · 16px — standard body</p>
              <p className="text-lg    text-zinc-200">text-lg · 18px — lead paragraph</p>
              <p className="text-xl    text-zinc-100">text-xl · 20px — card titles</p>
              <p className="text-2xl   text-zinc-100 font-bold">text-2xl · 24px — subheadings</p>
              <p className="text-4xl   text-zinc-50  font-bold tracking-tighter">text-4xl · 36px</p>
              <p className="text-5xl   text-zinc-50  font-bold tracking-tighter">text-5xl · 48px</p>
            </div>

          </div>

          {/* Heading examples */}
          <div className="mt-6 rounded-2xl p-8 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-6">
            <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Live Examples</p>

            <div>
              <p className="text-[11px] text-zinc-600 mb-1">Hero headline — shimmer animated</p>
              <span className="text-4xl font-bold tracking-tighter bg-[linear-gradient(90deg,#fff_0%,#67e8f9_30%,#c084fc_60%,#fff_100%)] bg-[size:200%_auto] bg-clip-text text-transparent animate-shimmer">
                We build software.
              </span>
            </div>

            <div>
              <p className="text-[11px] text-zinc-600 mb-1">Section headline — gradient accent</p>
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-50">
                Built lean.{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Shipped fast.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[11px] text-zinc-600 mb-1">Body — muted</p>
              <p className="text-zinc-400 leading-relaxed max-w-lg">Powerful software doesn't have to be complex or expensive. We believe in lean, practical solutions that solve real problems.</p>
            </div>

            <div>
              <p className="text-[11px] text-zinc-600 mb-1">Mono label — terminal / tag</p>
              <p className="font-mono text-cyan-400 text-sm">$ dev --full-stack</p>
            </div>
          </div>
        </Section>

        {/* ── 04 Components ──────────────────────────────────── */}
        <Section title="04 · Components" id="components">

          {/* Buttons */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">Buttons</p>
            <div className="rounded-2xl p-8 bg-zinc-900/50 border border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-4">

                <div className="flex flex-col items-center gap-2">
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22),0_0_56px_rgba(139,92,246,0.12)] transition-all duration-300">
                    Primary CTA <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-zinc-600 font-mono">btn-neon / cyan</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300">
                    Secondary
                  </button>
                  <p className="text-[10px] text-zinc-600 font-mono">btn-outline / zinc</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium transition-colors duration-200">
                    Visit Website <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <p className="text-[10px] text-zinc-600 font-mono">btn-subtle / card action</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 font-medium transition-colors duration-200">
                    Know more <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-zinc-600 font-mono">btn-ghost / inline link</p>
                </div>

              </div>
            </div>
          </div>

          {/* Section tags / badges */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">Section Tags & Badges</p>
            <div className="rounded-2xl p-8 bg-zinc-900/50 border border-white/[0.06] flex flex-wrap items-center gap-4">

              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-ring inline-block" />
                  Live status
                </div>
                <p className="text-[10px] text-zinc-600 font-mono">section-tag + pulse-ring</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
                  <Zap className="w-3 h-3" /> Products
                </div>
                <p className="text-[10px] text-zinc-600 font-mono">section-tag + icon</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium bg-cyan-500/[0.1] text-cyan-400 border-cyan-500/20">
                  <span className="w-1.5 h-1.5 rounded-full inline-block bg-cyan-400" /> Live
                </span>
                <p className="text-[10px] text-zinc-600 font-mono">product badge / cyan</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium bg-violet-500/[0.1] text-violet-400 border-violet-500/20">
                  <span className="w-1.5 h-1.5 rounded-full inline-block bg-violet-400" /> Live
                </span>
                <p className="text-[10px] text-zinc-600 font-mono">product badge / violet</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium bg-emerald-500/[0.1] text-emerald-400 border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full inline-block bg-emerald-400" /> Coming
                </span>
                <p className="text-[10px] text-zinc-600 font-mono">product badge / emerald</p>
              </div>

            </div>
          </div>

          {/* Cards */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">Cards</p>
            <div className="grid md:grid-cols-3 gap-5">

              {/* Neon card */}
              <div className="flex flex-col gap-2">
                <div className="group rounded-2xl p-5 bg-zinc-900/80 border border-white/[0.07] hover:border-cyan-500/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.08),0_24px_48px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-cyan-500/[0.1] border border-cyan-500/20 w-fit mb-4">
                    <Laptop className="w-5 h-5 text-cyan-400 group-hover:animate-icon-float" />
                  </div>
                  <h3 className="font-semibold text-zinc-100 text-base mb-1">Product Card</h3>
                  <p className="text-xs text-zinc-500">Hover to see the neon glow effect on this card.</p>
                </div>
                <p className="text-[10px] text-zinc-600 font-mono text-center">neon-card / cyan accent</p>
              </div>

              {/* Terminal card */}
              <div className="flex flex-col gap-2">
                <div className="group rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.08] hover:border-violet-500/35 hover:shadow-[0_0_30px_rgba(139,92,246,0.1),0_24px_48px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-2 text-xs text-zinc-600 font-mono">$ service</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-zinc-100 mb-1 group-hover:text-violet-300 transition-colors">Service Card</h3>
                    <p className="text-xs text-zinc-500">Terminal chrome with violet hover accent.</p>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-600 font-mono text-center">terminal-card / violet accent</p>
              </div>

              {/* Value card */}
              <div className="flex flex-col gap-2">
                <div className="rounded-2xl p-5 bg-zinc-900/50 border border-white/[0.06] hover:border-cyan-500/25 hover:shadow-[0_0_22px_rgba(34,211,238,0.07)] hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 w-fit mb-4">
                    <Code2 className="w-5 h-5 text-zinc-300" />
                  </div>
                  <h3 className="font-semibold text-zinc-100 text-sm mb-1">Value Card</h3>
                  <p className="text-xs text-zinc-500">Subtle lift, muted icon, minimal border.</p>
                </div>
                <p className="text-[10px] text-zinc-600 font-mono text-center">value-card / approach section</p>
              </div>

            </div>
          </div>

          {/* Nav link */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">Navigation</p>
            <div className="rounded-2xl p-8 bg-zinc-900/50 border border-white/[0.06] flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-start gap-2">
                <a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 after:transition-all after:duration-300 cursor-pointer">
                  Nav link (hover me)
                </a>
                <p className="text-[10px] text-zinc-600 font-mono">nav-glow / gradient underline</p>
              </div>
              <div className="flex items-center gap-1 bg-zinc-950 border border-white/[0.06] px-4 py-2 rounded-xl">
                <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Devian</span>
                <span className="text-xl font-bold tracking-tighter text-zinc-400">Labs</span>
              </div>
            </div>
          </div>

        </Section>

        {/* ── 05 Animation Tokens ────────────────────────────── */}
        <Section title="05 · Animation Tokens" id="animations">
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Registered via @theme inline</p>
              <Token label="animate-shimmer" value="text-shimmer 5s linear infinite" mono />
              <Token label="animate-orb-1" value="orb-drift-1 22s ease-in-out infinite" mono />
              <Token label="animate-orb-2" value="orb-drift-2 28s ease-in-out infinite" mono />
              <Token label="animate-orb-3" value="orb-drift-1 16s ease-in-out infinite reverse" mono />
              <Token label="animate-pulse-ring" value="pulse-ring 2s ease-in-out infinite" mono />
              <Token label="animate-icon-float" value="icon-float 2.5s ease-in-out infinite" mono />
            </div>

            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Usage</p>
              <Token label="shimmer" value="Hero headlines, product titles" />
              <Token label="orb-1 / orb-2 / orb-3" value="Hero + page header backgrounds" />
              <Token label="pulse-ring" value="Live indicator dot in section tags" />
              <Token label="icon-float" value="Product card icon on card hover" />
              <Token label="Transition default" value="duration-300 ease" />
              <Token label="Translate lift" value="-translate-y-1.5 on card hover" />
            </div>

            {/* Live demo */}
            <div className="sm:col-span-2 rounded-2xl p-8 bg-zinc-900/50 border border-white/[0.06]">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-6">Live Animation Preview</p>
              <div className="flex flex-wrap items-center gap-10">

                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-violet-600/20 blur-lg animate-orb-1 will-change-transform" />
                  <p className="text-[10px] text-zinc-600 font-mono">animate-orb-1</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse-ring inline-block" />
                  <p className="text-[10px] text-zinc-600 font-mono">animate-pulse-ring</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Code2 className="w-8 h-8 text-cyan-400 animate-icon-float" />
                  <p className="text-[10px] text-zinc-600 font-mono">animate-icon-float</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="text-2xl font-bold tracking-tighter bg-[linear-gradient(90deg,#fff_0%,#67e8f9_30%,#c084fc_60%,#fff_100%)] bg-[size:200%_auto] bg-clip-text text-transparent animate-shimmer">
                    Shimmer
                  </span>
                  <p className="text-[10px] text-zinc-600 font-mono">animate-shimmer</p>
                </div>

              </div>
            </div>

          </div>
        </Section>

        {/* ── 06 Spacing & Radius ────────────────────────────── */}
        <Section title="06 · Spacing & Radius" id="spacing">
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Border Radius</p>
              <Token label="rounded-full" value="Buttons, pills, badges, dots" />
              <Token label="rounded-2xl" value="Cards (product, service, value)" />
              <Token label="rounded-xl" value="Icon boxes, inner card buttons" />
              <Token label="rounded-lg" value="Code blocks" />
            </div>

            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Section Spacing</p>
              <Token label="Section padding-y" value="py-24 md:py-32" />
              <Token label="Container max-width" value="max-w-5xl (main), max-w-6xl (products)" />
              <Token label="Card gap" value="gap-6" />
              <Token label="Content gap" value="gap-16 (two-col sections)" />
              <Token label="Inner card padding" value="p-6" />
            </div>

            <div className="sm:col-span-2 rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Grid Background Pattern</p>
              <Token label="Background image" value="linear-gradient lines at rgba(255,255,255,0.025–0.04)" />
              <Token label="Background size" value="44px × 44px" />
              <Token label="Mask (hero)" value="radial-gradient ellipse 80%×70% at 50% 30%" />
              <Token label="Orb blur" value="blur-[80px] – blur-[100px]" />
              <Token label="Orb will-change" value="will-change-transform (GPU layer)" />
            </div>

          </div>
        </Section>

        {/* ── 07 Voice & Tone ────────────────────────────────── */}
        <Section title="07 · Voice & Tone" id="voice">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-4">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Principles</p>
              <div className="flex flex-col gap-3 text-sm text-zinc-400">
                <p><span className="text-zinc-200 font-medium">Direct.</span> No jargon. Say what you mean in the fewest words.</p>
                <p><span className="text-zinc-200 font-medium">Confident.</span> We know what we're building. Assert, don't hedge.</p>
                <p><span className="text-zinc-200 font-medium">Lean.</span> Copy mirrors product philosophy — trim the fat.</p>
                <p><span className="text-zinc-200 font-medium">Human.</span> Engineers talking to engineers. Peers, not salespeople.</p>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-zinc-900/50 border border-white/[0.06] flex flex-col gap-4">
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Tagline System</p>
              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/[0.05]">
                  <p className="text-xs text-zinc-500 mb-1">Hero</p>
                  <p className="text-sm text-zinc-200 font-medium">"We build, launch and scale software."</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/[0.05]">
                  <p className="text-xs text-zinc-500 mb-1">Sub-tagline</p>
                  <p className="text-sm text-zinc-200 font-medium">"Powerful software doesn't have to be complex or expensive."</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/[0.05]">
                  <p className="text-xs text-zinc-500 mb-1">Approach</p>
                  <p className="text-sm text-zinc-200 font-medium">"Built lean. Shipped fast."</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-white/[0.05]">
                  <p className="text-xs text-zinc-500 mb-1">Team</p>
                  <p className="text-sm text-zinc-200 font-medium">"Engineers Building Value."</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
