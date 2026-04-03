import { ExternalLink, Users } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Smruti Ranjan Badatya",
    role: "Founder",
    tag: "Engineering · Strategy",
    linkedin: "https://www.linkedin.com/in/iamsmruti/",
  },
  {
    name: "Biswajeet Dehuri",
    role: "Product Manager — App",
    tag: "Mobile · UX",
    linkedin: "https://www.linkedin.com/in/biswajeet-dehuri-7b1078224/",
  },
  {
    name: "Debesh Mohapatra",
    role: "Product Manager — Web",
    tag: "Web · Growth",
    linkedin: "https://www.linkedin.com/in/debesh-mohapatra-650070205/",
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
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl p-6 flex flex-col gap-5 bg-zinc-900/80 border border-white/[0.07] hover:border-cyan-500/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.08),0_24px_48px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/[0.08] flex items-center justify-center text-xl font-bold text-zinc-300">
                  {member.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <p className="text-xs text-cyan-400 font-mono mb-1 tracking-wide">{member.tag}</p>
                  <h2 className="font-semibold text-zinc-100 text-lg leading-tight mb-1">{member.name}</h2>
                  <p className="text-sm text-zinc-500">{member.role}</p>
                </div>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" /> LinkedIn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
