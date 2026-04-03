import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Devian Labs — We build, launch and scale software.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return buildOgImage(
    'We build, launch and scale software.',
    'Powerful software doesn\'t have to be complex or expensive.',
    'cyan',
  );
}
