import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter">Devian Labs</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/#products" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block">
            Products
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block">
            Services
          </Link>
          <Link href="/#team" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block">
            Team
          </Link>
          <Link href="mailto:hello@devianlabs.com" className={buttonVariants({ variant: "outline", size: "sm" })}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
