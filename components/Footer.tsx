import Link from 'next/link';
import { GitFork } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-wrap">
        <p>Gabriel Haro Vargas <span>·</span> Portafolio académico</p>
        <div>
          <a href={personalInfo.github}><GitFork size={17} aria-hidden="true" /> GitHub</a>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
