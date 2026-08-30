# Piccola Nonna

The static website for Piccola Nonna's Pizza restaurant in Sodermalm and Gnocchi Cafe in Slakthusomradet, Stockholm.

## Stack

- Astro with TypeScript
- Tailwind CSS for component layout and responsive styling
- SCSS for global base styles, design tokens, and mixins
- Netlify for static deployment and, later, the live Instagram feed function

## Prerequisites

- Node.js 22.12 or newer (use Node `22.23.2` locally)
- npm

If you use `nvm`, run `nvm use` in the project directory before installing dependencies or running commands.

## Local development

```sh
npm install
npm run dev
```

The development server is available at the URL printed in the terminal, normally `http://localhost:4321`.

## Quality checks and production preview

```sh
npm run build
npm run preview
```

`npm run build` generates the static production output in `dist/`.

## Project structure

```text
src/
  pages/       Public routes (`/` and `/cafe`)
  styles/      Tailwind SCSS entry point, tokens, base styles, and mixins
  content/     Static Pizza and Cafe details, menus, hours, and asset inventory
  components/  Shared layout and page sections
  images/      Source logos and photography, processed by Astro during builds
public/        Browser-served files such as the favicon and pinned-tab icon
netlify/
  functions/   Live Instagram feed adapter (added when credentials are available)
```

## Content maintenance in v1

Restaurant content is intentionally static in v1. There is no CMS in this release.

- Update menus, opening hours, addresses, policy copy, maps, and Instagram account identifiers in `src/content/locations.ts`.
- Update imported logo, photography, and social-preview references in `src/content/assets.ts`. Keep source images in `src/images/` so Astro validates and optimizes them at build time.
- Keep browser-served site files such as the favicon in `public/` and reference them with a leading slash (for example, `/favicon.ico`).
- Replace `socialPreview` in the asset inventory with a location-specific share image once one is supplied. The temporary value uses the existing site logo.
- Run `npm run check` and `npm run build` after every content or asset change. Missing imported source assets fail the TypeScript check or production build clearly.

The current v1 asset inventory is intentionally small: the supplied Pizza and temporary Cafe logo are used per location; Pizza uses `nonna-pizza.jpg` and Café uses `alina.jpg`; the favicon and Safari pinned-tab icon stay in `public/`. The Cafe logo can be replaced later by changing only its import in `src/content/assets.ts`.

## Netlify deployment

The site remains a static Astro deployment. To connect it when the repository is ready:

1. Push the repository to GitHub.
2. In Netlify, select **Add new site** then **Import an existing project**.
3. Choose the GitHub repository and confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Production branch: `main` (or the repository's chosen production branch)
4. Deploy. Future pushes to the production branch deploy automatically; pull requests can use deploy previews.

In Netlify's project settings, set `NODE_VERSION` to `22.23.2` before the first deploy. The future Instagram integration uses Netlify Functions, but it does not change the website from a static Astro build.

## Environment variables

The initial site has no required environment variables. Future Instagram credentials belong in Netlify environment-variable settings and in a local uncommitted `.env` file for development. Never commit credentials; `.env*` is ignored by Git and `.env.example` is reserved for safe variable-name documentation.
