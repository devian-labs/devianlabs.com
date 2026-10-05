"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

/** Disclosure menu for small screens. Closes itself after navigating. */
export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="group relative lg:hidden">
      <summary
        aria-label="Menu"
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-line-strong text-fg [&::-webkit-details-marker]:hidden"
      >
        <Menu className="h-4 w-4 group-open:hidden" />
        <X className="hidden h-4 w-4 group-open:block" />
      </summary>
      <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-2xl border border-line-strong bg-surface p-2 shadow-2xl">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => ref.current && (ref.current.open = false)}
            className="block rounded-xl px-4 py-3 text-sm text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {label}
          </Link>
        ))}
      </div>
    </details>
  );
}
