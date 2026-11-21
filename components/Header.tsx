'use client';

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
          <span className="brand-icon" aria-hidden="true">gh<span>.</span></span>
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
