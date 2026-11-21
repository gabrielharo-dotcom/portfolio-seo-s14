import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Proyectos de desarrollo web | Gabriel Haro', 'Explora tres casos académicos de Gabriel Haro Vargas: una tienda online, un tablero Kanban y un panel meteorológico.', '/projects');

export default function Projects() {
  return (
    <section className="wrap section internal">
      <p className="eyebrow">Portafolio académico</p>
      <h1>Proyectos de desarrollo web</h1>
      <p className="lead">Tres propuestas de interfaz que exploran el comercio electrónico, la organización del trabajo y la visualización de datos.</p>
      <h2 className="sr-only">Casos de estudio</h2>
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
  );
}
