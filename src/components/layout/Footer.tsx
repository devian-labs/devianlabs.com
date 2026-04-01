import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter">Devian Labs</span>
            </Link>
            <p className="text-sm text-muted-foreground w-full md:w-3/4">
              Building lean, practical software solutions for modern businesses.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Company</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground hover:underline">About Company</Link>
            <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Team</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Products</h4>
            <Link href="/products/devian-desktop" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Devian Desktop</Link>
            <Link href="/products/khaoo" className="text-sm text-muted-foreground hover:text-foreground hover:underline">Khaoo</Link>
            <Link href="/products/p2p-share" className="text-sm text-muted-foreground hover:text-foreground hover:underline">P2P Share</Link>
            <Link href="/services/software-development" className="text-sm text-muted-foreground hover:text-foreground hover:underline pt-2 border-t mt-1">Software Development</Link>
            <Link href="/services/mvp-from-idea" className="text-sm text-muted-foreground hover:text-foreground hover:underline">MVP from Idea</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Knowledge</h4>
            <Link href="https://www.youtube.com/@AgileCoderYT" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground hover:underline flex items-center gap-1.5">
              <PlayCircle className="w-4 h-4 text-red-500" /> AgileCoder
            </Link>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-muted-foreground/10 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Devian Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-foreground hover:underline transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-foreground hover:underline transition-colors">Terms of Use</Link>
            <Link href="/" className="hover:text-foreground hover:underline transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
