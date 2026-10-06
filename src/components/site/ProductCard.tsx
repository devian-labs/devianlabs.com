import Img from "./Img";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import ProductVisual from "./ProductVisual";
import { ArrowLink, Chip, GitHubMark, stretchedCard, stretchedLink } from "./primitives";

// Static classes per size, so the icon is sized by the stylesheet rather than an inline style.
const iconSizes = { 32: "size-8", 36: "size-9", 40: "size-10", 56: "size-14", 64: "size-16" } as const;

export function ProductIcon({
  product,
  size = 40,
  className,
}: {
  product: Product;
  size?: keyof typeof iconSizes;
  className?: string;
}) {
  return (
    <Img
      src={product.icon}
      alt={`${product.name} logo`}
      width={size}
      height={size}
      className={cn("shrink-0 rounded-[22%] object-contain", iconSizes[size], product.iconClass, className)}
    />
  );
}

/** Large card with the product's screenshot. Used for featured products. */
export function ProductFeature({ product, priority }: { product: Product; priority?: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-line-strong">
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden border-b border-line bg-ink px-6 pt-10 md:px-10 md:pt-12">
        <span className="sr-only">{product.name} case study</span>
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-50" />
        <ProductVisual
          product={product}
          priority={priority}
          className="translate-y-6 transition-transform duration-500 group-hover:translate-y-3"
        />
      </Link>
      <div className="flex flex-1 flex-col p-7 md:p-9">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <ProductIcon product={product} size={36} />
          <h3 className="text-2xl font-medium tracking-tight text-fg">{product.name}</h3>
          {product.openSource && <Chip className="border-emerald-400/25 text-emerald-300">Open source</Chip>}
        </div>
        <p className="mb-3 text-lg text-fg">{product.tagline}</p>
        <p className="mb-6 text-sm leading-relaxed text-fg-2">{product.summary}</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {product.stack.slice(0, 5).map((s) => <Chip key={s}>{s}</Chip>)}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
          <ArrowLink href={`/products/${product.slug}`}>Read the case study</ArrowLink>
          {product.github && (
            <Link
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fg-2 transition-colors hover:text-fg"
            >
              <GitHubMark className="h-3.5 w-3.5" /> GitHub
            </Link>
          )}
          {product.links[0] && (
            <Link href={product.links[0].href} target="_blank" rel="noopener noreferrer" className="text-sm text-fg-2 transition-colors hover:text-fg">
              {product.links[0].label} ↗
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/** Compact card for the products grid. */
export function ProductTile({ product }: { product: Product }) {
  return (
    <article
      className={cn("group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-line-strong", stretchedCard)}
    >
      <div className="relative flex aspect-[5/4] items-end overflow-hidden border-b border-line bg-ink px-6 pt-8">
        <div className="bg-grid mask-fade-radial pointer-events-none absolute inset-0 opacity-50" />
        <ProductVisual
          product={product}
          size="sm"
          className={cn("w-full transition-transform duration-500 group-hover:-translate-y-1", product.visual.kind === "phones" ? "translate-y-[18%]" : "translate-y-4")}
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex items-center gap-3">
          <ProductIcon product={product} size={32} />
          <div>
            <h3 className="font-medium text-fg">
              <Link href={`/products/${product.slug}`} className={stretchedLink}>{product.name}</Link>
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-3">{product.category}</p>
          </div>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-fg-2">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-xs text-fg-3">{product.status}</span>
          <span className="text-sm font-medium text-fg transition-colors group-hover:text-brand-cyan">Case study →</span>
        </div>
      </div>
    </article>
  );
}
