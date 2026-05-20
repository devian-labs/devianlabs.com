import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Devian Labs is a three-person software studio from India. We build our own products, take on selected client work, and share what we learn through AgileCoder.",
  alternates: { canonical: "https://devianlabs.com/about" },
  openGraph: {
    url: "https://devianlabs.com/about",
    title: "About Devian Labs",
    description: "Devian Labs is a three-person software studio from India. We build our own products, take on selected client work, and share what we learn through AgileCoder.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-24 md:py-32">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.16] blur-[100px] -top-40 -right-32 animate-orb-1 pointer-events-none will-change-transform" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/[0.12] blur-[80px] -bottom-32 -left-24 animate-orb-2 pointer-events-none will-change-transform" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_30%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </Link>
        </div>

        <div className="container relative z-10 mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-50">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Devian Labs
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Devian Labs is a three-person software studio based in India. We build our own products, take on selected client work, and share what we learn through AgileCoder, our knowledge arm.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 md:px-6 py-20">
        <div className="container mx-auto max-w-3xl flex flex-col gap-16">

          {/* What we believe */}
          <section>
            <h2 className="text-xl font-bold text-zinc-100 mb-6 tracking-tight">What we believe</h2>
            <div className="flex flex-col gap-5 text-zinc-400 leading-relaxed">
              <p>
                Good software is simple. It does exactly what it needs to do, nothing more. We&apos;ve seen too many tools collapse under the weight of features nobody asked for, and too many projects fail because they were solving the wrong problem first.
              </p>
              <p>
                We build focused software. Every feature earns its place. Every decision is grounded in how people actually work, not how we imagine they might. One problem solved well beats ten solved halfway.
              </p>
              <p>
                We believe good software should be within reach — not locked behind enterprise pricing or buried in complexity. That&apos;s true for the products we build for ourselves, and it&apos;s the standard we hold for client work too.
              </p>
            </div>
          </section>

          {/* What we work on */}
          <section>
            <h2 className="text-xl font-bold text-zinc-100 mb-6 tracking-tight">What we work on</h2>
            <div className="flex flex-col gap-6 text-zinc-400 leading-relaxed">
              <p>
                <span className="text-zinc-200 font-medium">Products.</span>{" "}
                We ship software for ourselves. <Link href="/products/devian-desktop" className="text-cyan-400 hover:text-cyan-300 transition-colors">Devian Desktop</Link> is a control center for your dev machine — scan, clean, and organise local repos. <Link href="/products/Khao" className="text-cyan-400 hover:text-cyan-300 transition-colors">Khao</Link> is a QR-based menu and table ordering system for small food vendors. <Link href="/products/campfyr" className="text-cyan-400 hover:text-cyan-300 transition-colors">Campfyr</Link> is an offline companion app for group travel — SOS alerts over Bluetooth, shared itineraries, expense splitting, and photo sharing without a signal.
              </p>
              <p>
                <span className="text-zinc-200 font-medium">Services.</span>{" "}
                We take on selected client work — two things specifically. We help founders turn an idea into a shipped MVP in weeks, not quarters. And we build custom software end-to-end for teams who know what they need: web apps, internal tools, integrations — lean and properly documented.{" "}
                <a href="mailto:hello@devianlabs.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">Get in touch</a> if you have something to build.
              </p>
              <p>
                <span className="text-zinc-200 font-medium">Knowledge.</span>{" "}
                Through <Link href="https://agilecoder.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1">AgileCoder <ExternalLink className="w-3 h-3" /></Link>, we publish tutorials, write about what we&apos;re building, ship AI-ready boilerplates on Gumroad, and have a book out on Kindle. It keeps us honest — and it helps other developers ship better software.
              </p>
            </div>
          </section>

          {/* The team */}
          <section className="border-t border-white/[0.06] pt-12">
            <h2 className="text-xl font-bold text-zinc-100 mb-4 tracking-tight">The team</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We&apos;re three people: a founder, an app lead, and a web lead. Small on purpose.
            </p>
            <Link
              href="/#team"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
            >
              Meet the team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </section>

        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1 uppercase tracking-widest font-semibold">Work with us</p>
            <p className="text-zinc-200 font-medium">Have something to build? Let&apos;s talk.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              Our Services
            </Link>
            <a
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
