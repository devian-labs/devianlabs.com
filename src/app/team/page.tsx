import { ExternalLink, Users, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Smruti Ranjan Badatya",
    role: "Founder",
    tag: "Engineering · Strategy",
    linkedin: "https://www.linkedin.com/in/iamsmruti/",
    image: "/team/smruti.png"
  },
  {
    name: "Biswajeet Dehuri",
    role: "App",
    tag: "Mobile · UX",
    linkedin: "https://www.linkedin.com/in/biswajeet-dehuri-7b1078224/",
    image: "/team/biswajeet.png"
  },
  {
    name: "Debesh Mohapatra",
    role: "Web",
    tag: "Web · Growth",
    linkedin: "https://www.linkedin.com/in/debesh-mohapatra-650070205/",
    image: "/team/debesh.jpg"
  },
];

export const metadata = {
  title: "Team",
  description: "Meet the engineers and product managers building lean, practical software at Devian Labs.",
  alternates: { canonical: "https://devianlabs.com/team" },
  openGraph: {
    url: "https://devianlabs.com/team",
    title: "Meet the Team | Devian Labs",
    description: "Meet the engineers and product managers building lean, practical software at Devian Labs.",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-24 md:py-32">
        {/* Orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.16] blur-[100px] -top-40 -right-32 animate-orb-1 pointer-events-none will-change-transform" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/[0.12] blur-[80px] -bottom-32 -left-24 animate-orb-2 pointer-events-none will-change-transform" />
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_30%,transparent_100%)]" />

        {/* Back link — left-aligned, outside the centered block */}
        <div className="container relative z-10 mx-auto max-w-4xl mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </Link>
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border border-cyan-500/25 text-cyan-400 bg-cyan-500/[0.07]">
            <Users className="w-3 h-3" /> Leadership
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-50">
            Meet{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A dedicated group of engineers and product managers building lean, practical software.
            No black boxes, no over-engineering.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="px-4 md:px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/[0.08] hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1),0_24px_48px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Edge-to-edge Avatar Block */}
                <div className="relative w-full aspect-[4/3] bg-zinc-950 border-b border-white/[0.05] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} profile`}
                    fill
                    className="object-cover object-top grayscale-[0.8] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  {/* Internal gradient to blend softly to card body */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 pointer-events-none" />
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col items-center text-center relative z-20 -mt-6">
                  <h2 className="font-bold text-zinc-50 text-xl md:text-2xl tracking-tight mb-2">{member.name}</h2>
                  <p className="text-[15px] font-medium text-cyan-400 mb-8">{member.role}</p>

                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-auto py-2.5 px-6 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-100 text-sm font-semibold transition-all duration-300 border border-white/5 hover:border-white/10 w-full hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Visit LinkedIn <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] px-4 md:px-6 py-16">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1 uppercase tracking-widest font-semibold">Work with us</p>
            <p className="text-zinc-200 font-medium">Have a project in mind? Let's talk.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              Our Services
            </Link>
            <Link
              href="mailto:hello@devianlabs.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] transition-all duration-300"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
