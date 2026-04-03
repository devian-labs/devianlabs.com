import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button-variants";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/team",      label: "Team"     },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">

        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/devian-labs-logo.png"
            alt="Devian Labs"
            width={32}
            height={32}
            className="rounded-xl"
            priority
          />
          <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Devian
          </span>
          <span className="text-xl font-bold tracking-tighter text-zinc-400">Labs</span>
        </Link>

        <div className="ml-auto flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400 after:transition-all after:duration-300"
            >
              {label}
            </Link>
          ))}

          <Link
            href="mailto:hello@devianlabs.com"
            className={buttonVariants({ variant: "outline", size: "sm" }) + " border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 rounded-full transition-all duration-200"}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}
