import type { Project } from '@/types';

export const personalInfo = {
  name: 'Gabriel Haro Vargas',
  shortName: 'Gabriel Haro',
  title: 'Desarrollador web',
  description: 'Portafolio de Gabriel Haro Vargas, estudiante de desarrollo web. Explora proyectos académicos con Next.js, TypeScript y diseño de interfaces.',
  email: 'gabriel.haro@tecsup.edu.pe',
  github: 'https://github.com/gabrielharo-dotcom',
};

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Nativa Store',
    category: 'Comercio electrónico',
    description: 'Concepto de tienda online para explorar un catálogo de cuidado personal y reducir fricción en el recorrido de compra.',
    image: '/images/nativa.webp',
    alt: 'Frascos verdes de cuidado personal sobre un pedestal iluminado',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    challenge: 'Una tienda con un catálogo pequeño necesita que cada ficha responda rápido qué es el producto, para quién sirve y cómo comprarlo.',
    proposal: 'La propuesta organiza la compra en tres pasos: explorar por categoría, consultar una ficha clara y revisar el carrito antes de continuar.',
    decisions: ['Mostrar atributos y precio junto al primer llamado a la acción.', 'Reservar el espacio de las fotografías para evitar saltos en la cuadrícula.', 'Usar una URL por ficha para compartirla y permitir su indexación.'],
  },
  {
    slug: 'task-manager',
    title: 'Enfoque',
    category: 'Productividad',
    description: 'Concepto de tablero Kanban para organizar tareas, distinguir prioridades y seguir el avance de un equipo.',
    image: '/images/enfoque.webp',
    alt: 'Portátil con un tablero Kanban de tres columnas sobre un fondo violeta',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    challenge: 'Cuando las tareas se reparten entre mensajes, cuesta detectar quién es responsable y qué trabajo está bloqueado.',
    proposal: 'El tablero agrupa tareas en Pendiente, En curso y Hecho. Las tarjetas muestran responsable y prioridad sin obligar a abrir el detalle.',
    decisions: ['Incluir texto junto al color para identificar cada estado.', 'Separar las tareas por estado y mantener el mismo orden de lectura.', 'Plantear un control de cambio de estado operable por teclado.'],
  },
  {
    slug: 'weather-dashboard',
    title: 'Pulso del Clima',
    category: 'Visualización de datos',
    description: 'Concepto de panel meteorológico con condiciones actuales, pronóstico por horas y una lectura rápida de la lluvia.',
    image: '/images/clima.webp',
    alt: 'Tableta que presenta un pronóstico y un gráfico azul junto a una nube blanca',
    technologies: ['Next.js', 'TypeScript', 'Chart.js'],
    featured: false,
    challenge: 'Un pronóstico tiene que ayudar a decidir cuándo salir, especialmente cuando la lluvia cambia a lo largo del día.',
    proposal: 'La vista prioriza ubicación, temperatura y probabilidad de lluvia. Debajo, una línea de tiempo permite comparar las siguientes horas.',
    decisions: ['Mostrar unidades junto a cada cifra y rotular los ejes.', 'Acompañar el gráfico con una tabla legible en pantallas pequeñas.', 'Distinguir el estado de error de una previsión real de 0 % de lluvia.'],
  },
];
