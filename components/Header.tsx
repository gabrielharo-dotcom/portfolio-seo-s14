'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Inicio'],
  ['/projects', 'Proyectos'],
  ['/about', 'Sobre mí'],
  ['/contact', 'Contacto'],
];

export default function Header() {
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <Link href="/" className="brand">
          <Image src="/marca.svg" width={40} height={40} alt="" className="brand-icon" unoptimized />
          <span>Gabriel Haro</span>
        </Link>
        <nav aria-label="Navegación principal">
          {links.map(([href, label]) => {
            const active = path === href || (href !== '/' && path.startsWith(href + '/'));
            return <Link key={href} href={href} className={active ? 'nav-link active' : 'nav-link'} aria-current={active ? (path === href ? 'page' : 'location') : undefined}>{label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
