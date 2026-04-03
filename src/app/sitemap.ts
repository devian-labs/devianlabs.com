import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://devianlabs.com';

function getSlugs(dir: string): string[] {
  const full = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).map((f) => f.replace('.md', ''));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getSlugs('products');
  const serviceSlugs = getSlugs('services');

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...productSlugs.map((slug) => ({
      url: `${BASE_URL}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
