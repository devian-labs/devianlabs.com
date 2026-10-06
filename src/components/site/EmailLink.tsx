"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { emailAddress, mailto } from "@/lib/contact";

const subscribe = () => () => {};

/**
 * A mailto link built after hydration, so the address isn't in the server HTML.
 * Before then it points at the contact section. With `showAddress`, the address
 * is shown as the link text once the page has loaded.
 */
export default function EmailLink({
  subject,
  className,
  showAddress,
  children,
}: {
  subject?: string;
  className?: string;
  showAddress?: boolean;
  children?: ReactNode;
}) {
  // false while rendering on the server and hydrating, true in the browser afterwards.
  const ready = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <a href={ready ? mailto(subject) : "/#contact"} className={className}>
      {showAddress && ready ? emailAddress() : children}
    </a>
  );
}
