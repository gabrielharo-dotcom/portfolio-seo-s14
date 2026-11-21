import type { MetadataRoute } from 'next';
import { absoluteUrl, preview } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  if (preview) return { rules: { userAgent: '*', disallow: '/' } };

  return { rules: { userAgent: '*', allow: '/' }, sitemap: absoluteUrl('/sitemap.xml') };
}
