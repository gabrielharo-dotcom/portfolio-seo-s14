# Portafolio de Gabriel Haro Vargas

Laboratorio 14 de Desarrollo de Aplicaciones Web Avanzado. Portafolio personal en Next.js con App Router, TypeScript, Tailwind CSS y Turbopack. Las fichas describen conceptos académicos de interfaz.

## Ejecutar

Se probó con Node.js 24. Para esta versión de Next.js usa Node.js 20.9 o superior.

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Rutas y SEO

| Ruta | Función |
| --- | --- |
| `/` | Presentación, proyectos destacados y datos estructurados del perfil |
| `/projects` | Catálogo de casos académicos |
| `/projects/ecommerce-platform` | Detalle con título, descripción, canónica y portada social propios |
| `/projects/task-manager` | Detalle de Enfoque |
| `/projects/weather-dashboard` | Detalle de Pulso del Clima |
| `/about` | Perfil y competencias |
| `/contact` | Correo institucional y GitHub |
| `/sitemap.xml` | Genera las siete URLs canónicas desde los datos |
| `/robots.txt` | Permite el rastreo en producción y apunta al sitemap |

Los detalles se prerenderizan con `generateStaticParams` y tienen metadatos generados desde su slug con `generateMetadata`. Las páginas se pueden recorrer mediante enlaces HTML y las fichas incluyen datos de ruta de navegación. Los slugs desconocidos devuelven 404.

`next/image` negocia AVIF o WebP y usa `sizes` para seleccionar el ancho. Las tarjetas y la ilustración de Sobre mí usan carga diferida. La portada principal se precarga. Las imágenes de portada y los casos se generaron para este laboratorio con la herramienta de imágenes integrada, a partir de un concepto visual de escultura metálica verde, fotografía de productos, tablero Kanban y panel meteorológico.

## Producción en Vercel

Importa este repositorio en Vercel con el preset Next.js. Vercel genera un host `.vercel.app` y el proyecto lo usa como origen canónico cuando `SITE_URL` está vacío. Para un dominio personalizado, añade y valida el host en **Settings → Domains**, define `SITE_URL=https://tu-dominio` en producción y vuelve a desplegar. El sitemap, robots, las canónicas y las URLs sociales comparten ese origen.

Comprueba `/sitemap.xml`, `/robots.txt` y las etiquetas canónicas tras el despliegue. Audita la versión de producción en modo móvil y escritorio con Lighthouse. Las vistas preliminares de Vercel bloquean rastreo e indexación.

- [Metadata en Next.js](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Dominio personalizado en Vercel](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [Configurar un subdominio de is-a.dev en Vercel](https://docs.is-a.dev/guides/vercel/)
