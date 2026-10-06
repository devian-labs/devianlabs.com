import type { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { services } from '@/lib/services';

const BASE_URL = 'https://devianlabs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: 'monthly' | 'yearly' = 'monthly') => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });

  return [
    page('', 1),
    page('/products', 0.9),
    ...products.map((p) => page(`/products/${p.slug}`, 0.9)),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page('/about', 0.7),
    page('/contact', 0.7),
    page('/privacy', 0.3, 'yearly'),
    page('/terms', 0.3, 'yearly'),
  ];
}
