import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { mailto } from "@/lib/contact";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/#work", label: "Client work" },
  { href: "/#services", label: "Services" },
  { href: "/services/technology-partner", label: "Partner with us" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center gap-8 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Devian Labs home">
          <Image src="/devian-labs-logo.png" alt="" width={28} height={28} className="rounded-lg" priority />
          <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-fg">Devian Labs</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm text-fg-2 transition-colors hover:text-fg">
              {label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href={mailto()}
            className="inline-flex items-center whitespace-nowrap rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Start a project</span>
          </Link>

          <MobileMenu links={navLinks} />
        </div>
      </nav>
    </header>
  );
}
