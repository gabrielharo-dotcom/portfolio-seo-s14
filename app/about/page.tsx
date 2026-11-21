import Image from 'next/image';
import Link from 'next/link';
import { CodeXml, Gauge, LayoutTemplate } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Sobre mí | Gabriel Haro Vargas', 'Conoce el enfoque de Gabriel Haro Vargas, estudiante de desarrollo web interesado en interfaces accesibles, SEO técnico y rendimiento.', '/about');

const skills = [
  { icon: CodeXml, title: 'Desarrollo web', description: 'Componentes tipados en TypeScript y rutas con Next.js App Router.' },
  { icon: LayoutTemplate, title: 'Diseño de interfaces', description: 'Jerarquía visual, navegación por teclado y diseños adaptables.' },
  { icon: Gauge, title: 'SEO y rendimiento', description: 'Metadatos por ruta, imágenes responsivas y auditorías con Lighthouse.' },
];

export default function About() {
  return (
    <section className="wrap section internal">
      <div className="about-grid">
        <div><p className="eyebrow">Sobre mí</p><h1>Gabriel Haro Vargas</h1>
          <p className="lead">Soy estudiante de desarrollo web. Me interesa cómo la estructura, el diseño y el rendimiento de una página influyen en la experiencia de quien la visita.</p>
          <p>En este portafolio pongo en práctica lo aprendido en Desarrollo de Aplicaciones Web Avanzado. Diseño cada página para que se pueda recorrer desde el celular, navegar con teclado y compartir con una vista previa propia.</p>
          <Link className="button dark" href="/projects">Explorar mis proyectos</Link>
        </div>
        <Image src="/images/gabriel-haro.webp" alt="Gabriel Haro Vargas en una plaza urbana" width={640} height={640} sizes="(max-width: 690px) 93vw, 44vw" loading="lazy" />
      </div>
      <h2 className="skills-title">Cómo trabajo</h2>
      <div className="skill-grid">{skills.map(({ icon: Icon, title, description }) => (
        <section key={title} className="skill"><Icon aria-hidden="true" size={24} /><h3>{title}</h3><p>{description}</p></section>
      ))}</div>
    </section>
  );
}
