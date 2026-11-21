import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { projects } from '@/lib/data';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return pageMetadata(`${project.title} · ${project.category} | Gabriel Haro`, project.description, `/projects/${slug}`, `/images/social-${slug}.jpg`);
}

export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="wrap section internal">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        ['Inicio', '/'], ['Proyectos', '/projects'], [project.title, `/projects/${slug}`],
      ].map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: absoluteUrl(path) })) }} />
      <nav aria-label="Ruta de navegación" className="breadcrumbs"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><Link href="/projects">Proyectos</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav>
      <p className="eyebrow">{project.category} · Concepto académico</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>
      <ul className="tags" aria-label="Tecnologías propuestas">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      <Image src={project.image} alt={project.alt} width={760} height={455} sizes="(max-width: 1200px) 94vw, 1100px" preload className="detail-image" />
      <div className="case-grid">
        <section><h2>El reto</h2><p>{project.challenge}</p></section>
        <section><h2>La propuesta</h2><p>{project.proposal}</p></section>
        <section><h2>Decisiones de diseño</h2><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></section>
      </div>
      <Link className="button dark" href="/projects">Volver a proyectos</Link>
    </article>
  );
}
