import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

/* Layout and type building blocks shared by every page. */

/** Renders "*word*" spans in a plain string as <em> (the serif italic accent). */
export function withAccent(text: string): ReactNode {
  return text.split(/\*([^*]+)\*/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 border-b border-line py-24 md:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small monospace label above a heading, e.g. "01 — What we build". */
export function Eyebrow({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-3", className)}>
      {index && <span className="text-fg-2">{index}</span>}
      {index && <span className="h-px w-8 bg-line-strong" />}
      <span>{children}</span>
    </p>
  );
}

/** Section heading. Wrap a word in <em> for the serif italic accent. */
export function Heading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "text-balance font-medium tracking-[-0.035em] text-fg [&_em]:font-serif [&_em]:font-normal [&_em]:italic [&_em]:tracking-[-0.01em]",
        Tag === "h1" ? "text-5xl leading-[1.02] md:text-7xl lg:text-[5.25rem]" : "text-4xl leading-[1.05] md:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn("max-w-2xl text-pretty text-lg leading-relaxed text-fg-2 md:text-xl", className)}>{children}</p>;
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg";

const buttonStyles = {
  primary: "bg-fg text-ink hover:bg-white",
  secondary: "border border-line-strong text-fg hover:border-fg-3 hover:bg-white/[0.04]",
  whatsapp: "border border-emerald-400/30 text-emerald-300 hover:border-emerald-300/60 hover:bg-emerald-400/[0.06]",
};

/** Button styles for elements that aren't a Next.js Link (e.g. EmailLink). */
export const buttonClass = (variant: keyof typeof buttonStyles = "primary", className?: string) =>
  cn(buttonBase, buttonStyles[variant], className);

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: keyof typeof buttonStyles;
  className?: string;
  external?: boolean;
};

export function ButtonLink({ variant = "primary", className, external, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(buttonBase, buttonStyles[variant], className)}
    >
      {children}
    </Link>
  );
}

/** Inline text link with an arrow. External links get the diagonal arrow. */
export function ArrowLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/arrow inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-brand-cyan",
        className,
      )}
    >
      {children}
      <Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/arrow:translate-x-0.5" />
    </Link>
  );
}

export function Chip({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-fg-2",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** GitHub mark (lucide no longer ships brand icons). */
export function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
