import type { NextConfig } from 'next';

const config: NextConfig = {
  turbopack: { root: process.cwd() },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/photo-**' },
      { protocol: 'https', hostname: 'plus.unsplash.com', pathname: '/premium_photo-**' },
    ],
  },
};

export default config;
