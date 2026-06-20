import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Code2, CheckCircle, GitBranch, Layers, Shield, Users, ExternalLink, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description: "End-to-end software delivery for teams who know what they need built. Web apps, internal tools, integrations - built lean, shipped clean, documented properly.",
  alternates: { canonical: "https://devianlabs.com/services/software-development" },
  openGraph: {
    url: "https://devianlabs.com/services/software-development",
    title: "Custom Software Development | Devian Labs",
    description: "End-to-end software delivery. Web apps, internal tools, integrations - built lean, shipped clean.",
  },
};

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-20 md:py-28">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/[0.14] blur-[100px] -top-40 -right-32 pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-violet-600/[0.10] blur-[80px] -bottom-24 -left-24 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl">
          <Link
            href="/#services"
            className="flex w-fit items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 mb-10 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to services
          </Link>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            <Code2 className="w-3 h-3" /> Service
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-50 leading-tight">
            <span className="bg-[linear-gradient(90deg,#fff_0%,#67e8f9_40%,#c084fc_70%,#fff_100%)] bg-[size:200%_auto] bg-clip-text text-transparent animate-shimmer">
              Custom Software Dev
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            End-to-end delivery for teams who know what they need built. Web apps, internal tools, integrations - built lean, shipped clean, documented properly so your team can own it.
          </p>

          <a
            href="mailto:hello@devianlabs.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_28px_rgba(34,211,238,0.22)] transition-all duration-300"
          >
            Start a conversation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 md:px-6 py-20">
        <div className="container mx-auto max-w-3xl flex flex-col gap-20">

          {/* What we build */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4">What we build</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 tracking-tight">Most software problems fall into a small number of categories.</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We&apos;ve built across all of them. We don&apos;t try to do everything — we&apos;re good at web applications, internal tooling, API development and integrations. If your problem is in one of those categories, we&apos;re a strong fit.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Layers, title: "Web applications", desc: "Full-stack products: customer-facing apps, dashboards, admin panels, SaaS platforms. React/Next.js frontend, Node or Python backend." },
                { icon: GitBranch, title: "Internal tools", desc: "The software your team uses every day to do their job. Ops dashboards, data pipelines, automation — built to match your actual workflow." },
                { icon: Code2, title: "APIs and integrations", desc: "Connecting systems that don't talk to each other. Third-party API integrations, webhooks, data sync between platforms." },
                { icon: Shield, title: "Existing codebase work", desc: "Picking up someone else's code, adding features, fixing architecture problems, or migrating to a new stack." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 h-fit flex-shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-100 text-sm mb-1">{title}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4">How we work</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Transparent, milestone-driven delivery.</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Requirements and scope",
                  desc: "We spend time understanding the problem before writing any code. We document requirements, define success criteria, and agree on scope in writing. No surprises later.",
                },
                {
                  step: "02",
                  title: "Architecture and stack",
                  desc: "We design the technical architecture before we build it — data models, API contracts, infrastructure decisions. This is where most projects go wrong, so we don't rush it.",
                },
                {
                  step: "03",
                  title: "Iterative build",
                  desc: "We build in milestones. You see working software every week. Scope changes are handled transparently — we'll tell you the time/cost impact before we proceed.",
                },
                {
                  step: "04",
                  title: "Deploy and hand over",
                  desc: "We deploy to your infrastructure, write documentation, and walk your team through the codebase. You own everything — no lock-in, no ongoing dependency on us.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center">
                    <span className="text-xs font-bold text-cyan-400">{step}</span>
                  </div>
                  <div className="pt-2.5">
                    <h3 className="font-bold text-zinc-100 mb-2">{title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why small team */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4">Why us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 tracking-tight">Small team. No middle layer.</h2>
            <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
              <p>
                With a large agency, you talk to a project manager who talks to a tech lead who talks to developers. Every layer adds latency, misinterpretation, and cost. With us, you talk directly to the person writing the code.
              </p>
              <p>
                We&apos;re three people. The founder is involved in every engagement. That means faster decisions, fewer miscommunications, and accountability that doesn&apos;t get diffused across a team of twelve.
              </p>
            </div>
          </section>

          {/* Good fit */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4">Who this is for</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">The kind of work we take on.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Good fit
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Team with clear requirements who needs execution",
                    "Startup scaling past MVP that needs a proper technical foundation",
                    "Company with an internal problem that off-the-shelf software doesn't solve",
                    "Product that needs new capabilities built on top of an existing codebase",
                  ].map((item) => (
                    <li key={item} className="text-sm text-zinc-400 flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" /> Not a good fit
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "No defined requirements — this is the MVP service instead",
                    "Need a large team embedded for 12+ months",
                    "Require 24/7 support or on-call engineering",
                    "Looking for offshore body-shopping at the lowest hourly rate",
                  ].map((item) => (
                    <li key={item} className="text-sm text-zinc-400 flex gap-2 items-start">
                      <span className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5 text-lg leading-none">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Work / showcase */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4">Some of our work</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Software people actually use.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative w-full aspect-[16/10] bg-zinc-950 border-b border-white/[0.05] overflow-hidden">
                  <Image
                    src="/clients/nolia.png"
                    alt="Nolia website"
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-bold text-zinc-100">Nolia</h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      <TrendingUp className="w-3.5 h-3.5" /> ₹1.5 lakh+ in orders
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    An artisanal cloud-kitchen storefront for crafting and ordering desserts — built end to end, live with real customers, and already driving ₹1.5 lakh+ in orders.
                  </p>
                  <Link
                    href="https://thenolia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit site <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1 uppercase tracking-widest font-semibold">Ready to start?</p>
            <p className="text-zinc-200 font-medium">Send us a brief on what you need built.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/services/mvp-from-idea"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              Need an MVP instead?
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
