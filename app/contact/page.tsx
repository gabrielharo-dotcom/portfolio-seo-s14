import { GitFork, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Contacto | Gabriel Haro Vargas', 'Encuentra los canales de contacto de Gabriel Haro Vargas para conversar sobre proyectos web, colaborar o comentar su portafolio.', '/contact');

export default function Contact() {
  return (
    <section className="wrap section internal contact">
      <p className="eyebrow">Contacto</p>
      <h1>Conversemos</h1>
      <p className="lead">Si quieres hablar sobre desarrollo web, proponer una colaboración o comentar un caso del portafolio, puedes encontrarme aquí.</p>
      <div className="contact-grid">
        {personalInfo.email && <a className="contact-card" href={`mailto:${personalInfo.email}`}><Mail size={24} aria-hidden="true" /><h2>Correo</h2><p>{personalInfo.email}</p></a>}
        <a className="contact-card" href={personalInfo.github}><GitFork size={24} aria-hidden="true" /><h2>GitHub</h2><p>@gabrielharo-dotcom</p></a>
      </div>
    </section>
  );
}
