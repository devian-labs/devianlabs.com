import { buildOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);

  let title = 'Service';
  let description: string | undefined;

  if (fs.existsSync(filePath)) {
    const { data } = matter(fs.readFileSync(filePath, 'utf8'));
    title = data.title ?? title;
    description = data.description;
  }

  return buildOgImage(title, description, 'violet');
}
