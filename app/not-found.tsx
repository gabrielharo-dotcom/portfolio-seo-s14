import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="wrap section internal">
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>
      <p className="lead">Revisa la dirección o vuelve al listado para encontrar el proyecto que buscas.</p>
      <Link href="/projects" className="button dark">Ver proyectos</Link>
    </section>
  );
}
