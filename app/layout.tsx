import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { personalInfo } from '@/lib/data';
import { preview, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: personalInfo.name, template: `%s | ${personalInfo.name}` },
  description: personalInfo.description,
  icons: { icon: '/marca.svg' },
  applicationName: 'Portafolio de Gabriel Haro Vargas',
  authors: [{ name: personalInfo.name, url: '/' }],
  ...(preview ? { robots: { index: false, follow: false } } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE">
      <body>
        <a href="#contenido" className="skip">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
