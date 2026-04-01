import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">Devian Labs</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Building lean, practical software solutions for modern businesses.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Devian Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
