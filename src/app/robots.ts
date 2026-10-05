import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /design is noindex rather than disallowed, so crawlers can see the noindex tag.
      },
    ],
    sitemap: 'https://devianlabs.com/sitemap.xml',
  };
}
