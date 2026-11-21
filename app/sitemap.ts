import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/projects', '/about', '/contact', ...projects.map(({ slug }) => `/projects/${slug}`)];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
