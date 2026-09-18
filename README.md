# Portfolio — Tomás Jopia

Portfolio personal construido con Next.js (App Router) + TypeScript + Tailwind CSS, exportado como sitio estático para GitHub Pages.

## Correr en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

Genera el sitio estático en la carpeta `out/`. Podés previsualizarlo con:

```bash
npx serve out
```

## Deploy en GitHub Pages

El repo incluye `.github/workflows/deploy.yml`, que en cada push a `main` buildea el proyecto y lo publica automáticamente en GitHub Pages.

Pasos para habilitarlo en GitHub (una sola vez):

1. Subí este proyecto al repositorio `jopiatomas/jopiatomas.github.io` en la rama `main`.
2. En GitHub, andá a **Settings → Pages**.
3. En **Build and deployment → Source**, elegí **GitHub Actions** (no "Deploy from a branch").
4. Hacé push a `main` — el workflow "Deploy to GitHub Pages" se dispara solo y publica el sitio en `https://jopiatomas.github.io`.

No hace falta configurar `basePath` porque este repo es un *user site* (`<usuario>.github.io`), que se sirve desde la raíz del dominio.

## Editar contenido

Todo el contenido real (nombre, bio, stack, proyectos, contacto) vive en un único archivo: `src/data/site.ts`. Para actualizar cualquier dato del portfolio, editá ese archivo — no hace falta tocar los componentes.
