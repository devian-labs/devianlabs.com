import { buildOgImage } from "@/lib/og";
import { services } from "@/lib/services";

/* Share image for a service page. */

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return buildOgImage(service?.headline.replaceAll("*", "") ?? "Services", service?.card, "violet");
}
