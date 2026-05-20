import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Clock, CheckCircle, Users, Lightbulb, Rocket, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP from Idea",
  description: "Turn your idea into a shipped, working product in weeks. Devian Labs builds lean MVPs for founders validating a market or testing a new line of business.",
  alternates: { canonical: "https://devianlabs.com/services/mvp-from-idea" },
  openGraph: {
    url: "https://devianlabs.com/services/mvp-from-idea",
    title: "MVP from Idea | Devian Labs",
    description: "Turn your idea into a shipped, working product in weeks.",
  },
};

export default function MVPFromIdeaPage() {
  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-20 md:py-28">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.16] blur-[100px] -top-40 -right-32 pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/[0.10] blur-[80px] -bottom-24 -left-24 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl">
          <Link
            href="/#services"
            className="flex w-fit items-center gap-2 text-sm text-zinc-500 hover:text-violet-400 mb-10 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to services
          </Link>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-violet-500/25 text-violet-400 bg-violet-500/[0.07]">
            <Zap className="w-3 h-3" /> Service
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-50 leading-tight">
            <span className="bg-[linear-gradient(90deg,#fff_0%,#c084fc_40%,#67e8f9_70%,#fff_100%)] bg-[size:200%_auto] bg-clip-text text-transparent animate-shimmer">
              MVP from Idea
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            You have an idea and a deadline. We turn it into a shipped, working product in weeks — not the over-engineered v1 you&apos;ll regret, but the lean thing that actually tests your assumptions.
          </p>

          <a
            href="mailto:hello@devianlabs.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-violet-500/35 text-violet-400 bg-violet-500/[0.08] hover:border-violet-400/65 hover:bg-violet-500/[0.14] hover:shadow-[0_0_28px_rgba(139,92,246,0.22)] transition-all duration-300"
          >
            Start a conversation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 md:px-6 py-20">
        <div className="container mx-auto max-w-3xl flex flex-col gap-20">

          {/* The problem */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">The problem</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 tracking-tight">Most MVPs are built wrong from the start.</h2>
            <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
              <p>
                Either the team spends six months building something complete before anyone has tested whether people actually want it — or they hire an agency that bills by the hour and has every incentive to make things complex.
              </p>
              <p>
                The right MVP is the smallest thing that tests your core assumption. One problem. One user flow. Shipped fast enough that you still have budget left to iterate on what you learn.
              </p>
            </div>
          </section>

          {/* What you get */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">What you get</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">A working product you can put in front of users.</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Rocket, title: "Shipped product", desc: "A live, functioning web or mobile application — not a prototype, not a demo, something real users can use." },
                { icon: CheckCircle, title: "Clean codebase", desc: "Code you own completely. No vendor lock-in. Documented and structured so your next engineer can pick it up." },
                { icon: Clock, title: "Fast turnaround", desc: "4–8 weeks depending on scope. We scope tightly so the timeline doesn't slip." },
                { icon: MessageSquare, title: "Direct communication", desc: "You work directly with the person building your product — no account managers, no handoffs." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 h-fit flex-shrink-0">
                    <Icon className="w-4 h-4 text-violet-400" />
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
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">How it works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Three steps. No surprises.</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Scope call",
                  desc: "We spend 60–90 minutes on a call going through your idea, your users, and what success looks like. By the end of the call, we have a written scope — what we're building, what we're not building, and why.",
                },
                {
                  step: "02",
                  title: "Build",
                  desc: "We build in short cycles and ship a working version to a staging environment every week. You see progress constantly, not just at the end. Scope changes happen — we handle them transparently.",
                },
                {
                  step: "03",
                  title: "Ship",
                  desc: "We deploy to production, hand over the codebase with documentation, and stay available for one month post-launch to handle anything that comes up.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center">
                    <span className="text-xs font-bold text-violet-400">{step}</span>
                  </div>
                  <div className="pt-2.5">
                    <h3 className="font-bold text-zinc-100 mb-2">{title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who this is for */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">Who this is for</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 tracking-tight">Good fit and not-so-good fit.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Good fit
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Founder with an idea and a 6–10 week window",
                    "Corporate team testing a new product line",
                    "Side project that needs to ship before motivation runs out",
                    "Existing product that needs a specific new feature fast",
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
                    "No clarity yet on who the user is or what problem you're solving",
                    "Expecting a complete product with all features in week one",
                    "Looking for the cheapest possible option",
                    "Need ongoing retainer work (see Custom Software Development)",
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

        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1 uppercase tracking-widest font-semibold">Ready to start?</p>
            <p className="text-zinc-200 font-medium">Tell us about your idea. We reply within a day.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/services/software-development"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              Custom Dev instead?
            </Link>
            <a
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-violet-500/35 text-violet-400 bg-violet-500/[0.08] hover:border-violet-400/65 hover:bg-violet-500/[0.14] transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
