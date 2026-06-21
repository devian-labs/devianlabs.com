import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Globe, Gauge, Search, Smartphone, ExternalLink, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helping Biz go Digital",
  description: "We design and build fast, modern websites that bring local businesses online and bring in customers — from real estate agents to electronics stores.",
  alternates: { canonical: "https://devianlabs.com/services/helping-biz-go-digital" },
  openGraph: {
    url: "https://devianlabs.com/services/helping-biz-go-digital",
    title: "Helping Biz go Digital | Devian Labs",
    description: "Fast, modern websites that bring local businesses online and bring in customers.",
  },
};

// Clients whose owners agreed to be displayed on the site.
const clients = [
  {
    name: "Aveline Homes",
    blurb: "A clean, mobile-first real estate site with property listings and an enquiry flow that turns browsers into leads.",
    image: "/clients/realestate.png",
    href: "https://avelinehomes.in/",
  },
  {
    name: "Siridi Sai Mobiles",
    blurb: "A modern storefront for a mobile and electronics shop that brings in walk-in customers from local search.",
    image: "/clients/electronics.png",
    href: "https://devian-labs.github.io/Siridi-Sai-Mobiles/",
  },
  {
    name: "Balkrishna Palace",
    blurb: "An elegant hotel site with rooms, amenities, and a booking flow that turns visitors into direct bookings.",
    image: "/clients/balkrishnapalace.png",
    href: "https://balkrishnapalace.com/",
  },
];

export default function HelpingBizGoDigitalPage() {
  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-20 md:py-28">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-600/[0.16] blur-[100px] -top-40 -right-32 pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/[0.10] blur-[80px] -bottom-24 -left-24 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl">
          <Link
            href="/#services"
            className="flex w-fit items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400 mb-10 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to services
          </Link>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-emerald-500/25 text-emerald-400 bg-emerald-500/[0.07]">
            <Globe className="w-3 h-3" /> Service
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-50 leading-tight">
            <span className="bg-[linear-gradient(90deg,#fff_0%,#34d399_40%,#67e8f9_70%,#fff_100%)] bg-[size:200%_auto] bg-clip-text text-transparent animate-shimmer">
              Helping Biz go Digital
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Your customers look you up online before they ever walk in. We build fast, modern websites that make local businesses easy to find, easy to trust, and easy to buy from.
          </p>

          <a
            href="mailto:hello@devianlabs.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-emerald-500/35 text-emerald-400 bg-emerald-500/[0.08] hover:border-emerald-400/65 hover:bg-emerald-500/[0.14] hover:shadow-[0_0_28px_rgba(16,185,129,0.22)] transition-all duration-300"
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
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">The problem</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 tracking-tight">A great business with no online presence is invisible.</h2>
            <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
              <p>
                Most local businesses still rely on word of mouth and a phone number. But customers search before they decide — and if you don&apos;t show up, or show up with a slow, dated site, they pick the competitor who does.
              </p>
              <p>
                You don&apos;t need a 50-page website. You need a fast, trustworthy one that answers what customers ask, works perfectly on a phone, and turns a search into a visit, a call, or a sale.
              </p>
            </div>
          </section>

          {/* What you get */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">What you get</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">A website that actually works for your business.</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Gauge, title: "Fast & modern", desc: "Pages that load instantly and look current — built on the same stack we use for our products." },
                { icon: Smartphone, title: "Mobile-first", desc: "Most of your customers are on a phone. Your site is designed for that screen first." },
                { icon: Search, title: "Found on search", desc: "Set up to rank for local searches so customers in your area actually find you." },
                { icon: Globe, title: "Yours to keep", desc: "Your own domain, your own site. No monthly platform lock-in, no surprise fees." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 h-fit flex-shrink-0">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-100 text-sm mb-1">{title}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who this is for */}
          <section>
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">Who this is for</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 tracking-tight">Good fit and not-so-good fit.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Good fit
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Local business with no website, or a dated one",
                    "Shop or agency that relies on walk-ins and referrals",
                    "Service provider who wants to be found on Google",
                    "Anyone who needs a clean, credible online presence fast",
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
                    "Large e-commerce catalog with complex inventory",
                    "Custom web app or internal tooling (see Custom Software Dev)",
                    "A brand-new product idea to validate (see MVP from Idea)",
                    "Looking for the cheapest template you can find",
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
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">Some of our work</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Real sites for real local businesses.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {clients.map(({ name, blurb, image, href }) => (
                <div
                  key={name}
                  className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] bg-zinc-950 border-b border-white/[0.05] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${name} website`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-zinc-100 mb-2">{name}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">{blurb}</p>
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Visit site <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.06] px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1 uppercase tracking-widest font-semibold">Ready to go digital?</p>
            <p className="text-zinc-200 font-medium">Tell us about your business. We reply within a day.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/services/mvp-from-idea"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              Have an idea instead?
            </Link>
            <a
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-emerald-500/35 text-emerald-400 bg-emerald-500/[0.08] hover:border-emerald-400/65 hover:bg-emerald-500/[0.14] transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
