import { preload } from "react-dom";
import { cn } from "@/lib/utils";

const SRC = "/devian-labs-logo-64.png";

/**
 * The Devian Labs mark at 28px. A small static PNG (2x for retina) rather than an
 * optimised image, so it has a descriptive URL and its preload matches the <img>.
 * The navbar copy is above the fold, so it loads at high priority.
 */
export default function Logo({ priority, className }: { priority?: boolean; className?: string }) {
  if (priority) preload(SRC, { as: "image", fetchPriority: "high" });
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SRC}
      alt="Devian Labs logo"
      width={28}
      height={28}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn("rounded-lg", className)}
    />
  );
}
