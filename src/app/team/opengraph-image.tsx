import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Meet the team at Devian Labs';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return buildOgImage(
    'Engineers Building Value.',
    'Meet the team behind Devian Labs.',
    'violet',
  );
}
