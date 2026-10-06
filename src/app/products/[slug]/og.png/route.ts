import { buildOgImage } from "@/lib/og";
import { getProduct, products } from "@/lib/products";

/* Share image for a product case study. */

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return buildOgImage(product?.name ?? "Product", product?.tagline, "cyan");
}
