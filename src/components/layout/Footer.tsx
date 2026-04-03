import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-zinc-950 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Devian
              </span>
              <span className="text-xl font-bold tracking-tighter text-zinc-500">Labs</span>
            </Link>
            <p className="text-sm text-zinc-600 w-full md:w-3/4 leading-relaxed">
              Building lean, practical software solutions for modern businesses.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">Company</h4>
            <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200">About</Link>
            <Link href="/team" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200">Team</Link>
          </div>

          {/* Products + Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">Products</h4>
            <Link href="/products/devian-desktop" className="text-sm text-zinc-600 hover:text-cyan-400 transition-colors duration-200">Devian Desktop</Link>
            <Link href="/products/khaoo" className="text-sm text-zinc-600 hover:text-cyan-400 transition-colors duration-200">Khaoo</Link>
            <Link href="/products/p2p-share" className="text-sm text-zinc-600 hover:text-cyan-400 transition-colors duration-200">P2P Share</Link>
            <div className="pt-2 mt-1 border-t border-zinc-800 flex flex-col gap-3">
              <Link href="/services/software-development" className="text-sm text-zinc-600 hover:text-violet-400 transition-colors duration-200">Software Dev</Link>
              <Link href="/services/mvp-from-idea" className="text-sm text-zinc-600 hover:text-violet-400 transition-colors duration-200">MVP from Idea</Link>
            </div>
          </div>

          {/* Knowledge */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-zinc-400 tracking-widest uppercase">Knowledge</h4>
            <Link
              href="https://www.youtube.com/@AgileCoderYT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
            >
              <PlayCircle className="w-4 h-4 text-red-500/70" /> AgileCoder
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05] text-xs text-zinc-700">
          <p>© {new Date().getFullYear()} Devian Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors duration-200">Terms of Use</Link>
            <a href="/sitemap.xml" className="hover:text-zinc-400 transition-colors duration-200">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
