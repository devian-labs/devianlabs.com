import Link from "next/link";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-zinc-950 px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-zinc-900 border border-white/10 mb-8">
          <Terminal className="w-8 h-8 text-zinc-500" />
        </div>
        <h1 className="text-6xl font-bold tracking-tighter text-zinc-50 mb-4">404</h1>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-300 mb-6">Page not found</h2>
        <p className="text-zinc-500 max-w-sm mx-auto mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium border border-cyan-500/35 text-cyan-400 bg-cyan-500/[0.08] hover:border-cyan-400/65 hover:bg-cyan-500/[0.14] transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
