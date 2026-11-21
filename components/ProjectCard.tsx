import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="card-link">
        <Image src={project.image} alt={project.alt} width={760} height={455} sizes="(max-width: 690px) 93vw, (max-width: 1200px) 46vw, 550px" loading="lazy" className="card-image" />
        <div className="card-copy">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="muted">{project.description}</p>
          <ul className="tags" aria-label="Tecnologías propuestas">
            {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
      </Link>
    </article>
  );
}
