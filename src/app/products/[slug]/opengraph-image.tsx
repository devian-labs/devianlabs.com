import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getProduct } from '@/lib/products';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return buildOgImage(product?.name ?? 'Product', product?.tagline, 'cyan');
}
