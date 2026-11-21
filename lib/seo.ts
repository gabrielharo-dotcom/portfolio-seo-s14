import type { Metadata } from 'next';
import { personalInfo } from './data';

const origin = process.env.SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  || 'http://localhost:3000';

export const siteUrl = new URL(origin).origin;
export const preview = process.env.VERCEL_ENV === 'preview';

export function pageMetadata(title: string, description: string, path: string, image = '/images/social.jpg'): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'es_PE',
      siteName: personalInfo.name,
      url: path,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).href;
}
