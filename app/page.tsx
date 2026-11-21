import Image from 'next/image';
import Link from 'next/link';
import { GitFork } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import JsonLd from '@/components/JsonLd';
import { personalInfo, projects } from '@/lib/data';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Gabriel Haro Vargas | Portafolio de desarrollo web', personalInfo.description, '/');

export default function Home() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', url: absoluteUrl('/'), mainEntity: { '@type': 'Person', name: personalInfo.name, url: absoluteUrl('/'), sameAs: [personalInfo.github] } }} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <p className="eyebrow hero-label"><span aria-hidden="true" /> Desarrollo web</p>
            <h1>Gabriel<br />Haro Vargas<span>.</span></h1>
            <p className="hero-description">Estudiante de desarrollo web. Construyo interfaces con Next.js y TypeScript, con atención al diseño, la accesibilidad y el rendimiento.</p>
            <div className="actions">
              <Link className="button primary" href="/projects">Ver proyectos</Link>
              <a className="button outline" href={personalInfo.github}><GitFork size={18} aria-hidden="true" /> GitHub</a>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/images/hero.webp" fill alt="" sizes="(max-width: 690px) 93vw, (max-width: 1200px) 48vw, 565px" preload />
          </div>
        </div>
      </section>
      <section className="wrap section" aria-labelledby="featured">
        <div className="section-heading">
          <div><p className="eyebrow">Portafolio académico</p><h2 id="featured">Proyectos destacados</h2></div>
          <Link href="/projects" className="text-link">Ver todos los proyectos</Link>
        </div>
        <div className="project-grid">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
      <section className="wrap home-contact">
        <div><h2>Hablemos de tu idea</h2><p>¿Tienes un proyecto web o quieres comentar alguno de estos casos?</p></div>
        <Link href="/contact" className="button dark">Ponerse en contacto</Link>
      </section>
    </>
  );
}
