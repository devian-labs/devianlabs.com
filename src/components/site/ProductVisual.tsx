import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

/** Product screenshot in a device frame: a desktop window or a row of phones. */
export default function ProductVisual({
  product,
  size = "md",
  className,
  priority,
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}) {
  const { visual, accent } = product;

  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] top-[15%] -z-10 h-[70%] rounded-full opacity-25 blur-3xl"
        style={{ background: accent }}
      />
      {visual.kind === "desktop" && <DesktopWindow src={visual.src} alt={visual.alt} priority={priority} size={size} />}
      {visual.kind === "phones" && <PhoneRow screens={visual.screens} size={size} priority={priority} />}
    </div>
  );
}

export function DesktopWindow({
  src,
  alt,
  priority,
  size = "md",
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]", className)}>
      <div className="flex h-7 items-center gap-1.5 border-b border-line bg-surface-2 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={size === "lg" ? "(min-width: 1152px) 1100px, 100vw" : size === "md" ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 400px, 100vw"}
          className="object-cover object-left-top"
        />
      </div>
    </div>
  );
}

function PhoneRow({ screens, size, priority }: { screens: { src: string; alt: string }[]; size: "sm" | "md" | "lg"; priority?: boolean }) {
  // Small cards show two larger phones; bigger frames show three.
  const shown = size === "sm" ? screens.slice(0, 2) : screens.slice(0, 3);
  const width = size === "lg" ? "w-[30%] max-w-[260px]" : size === "md" ? "w-[30%] max-w-[210px]" : "w-[44%]";
  return (
    <div className="flex items-end justify-center gap-[4%]">
      {shown.map((s, i) => (
        <div
          key={s.src}
          className={cn(
            width,
            "overflow-hidden rounded-[1.4rem] border border-line-strong bg-black p-1 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]",
            shown.length === 3 && i === 1 ? "-translate-y-[6%]" : "",
            shown.length === 2 && i === 0 ? "-translate-y-[5%]" : "",
          )}
        >
          <div className="relative aspect-[9/19] overflow-hidden rounded-[1.1rem]">
            <Image src={s.src} alt={s.alt} fill priority={priority} sizes="(min-width: 1024px) 260px, 30vw" className="object-cover object-top" />
          </div>
        </div>
      ))}
    </div>
  );
}
