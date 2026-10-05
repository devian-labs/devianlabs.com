import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { services } from '@/lib/services';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return buildOgImage(service?.headline.replaceAll('*', '') ?? 'Services', service?.card, 'violet');
}
