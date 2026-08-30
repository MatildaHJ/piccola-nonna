## Why

Piccola Nonna needs a fast, maintainable web presence that helps visitors quickly find the menu and opening hours for its original vegetarian and vegan Neapolitan pizza restaurant in Sodermalm, Stockholm, while introducing its new gnocchi-focused cafe in Slakthusomradet. The second location opens soon, so the site must establish both locations under one domain without diluting the pizza restaurant's existing search presence.

## What Changes

- Create a static Astro website, deployed automatically to Netlify from the repository.
- Provide the Pizza restaurant at the root route and the Cafe at `/cafe`, with equal visual treatment but Pizza remaining the primary domain destination.
- Add an immediate location-selection treatment with the supplied animated logo and choices for Pizza and Cafe; it must not delay navigation or conceal practical information from visitors and search engines.
- Establish a shared responsive site shell, including header, footer, and a live Instagram section, with location-specific logos, imagery, menus, opening hours, and details supplied as static content.
- Establish Tailwind CSS and SCSS foundations: global base styles, shared CSS variables, and reusable SCSS mixins alongside Tailwind utilities.
- Include accessible, performance-conscious interactions and motion, with the final visual language implemented from the Figma design.
- Include SEO metadata, social-sharing metadata, restaurant structured data, and static operational content for both locations.
- Document local development, content maintenance, deployment, and project structure in the README; configure repository hygiene such as `.gitignore`.

## Capabilities

### New Capabilities

- `restaurant-site-shell`: Provide the shared, responsive, accessible shell and location selection used across the Piccola Nonna site.
- `restaurant-location-pages`: Present the Pizza and Cafe locations, including their distinct static operational and menu content, at their public routes.
- `restaurant-site-discovery`: Provide search-engine and social-sharing metadata for the restaurant site and its location pages.
- `restaurant-site-operations`: Provide documented local development, content maintenance, repository hygiene, and automated Netlify deployment.

### Modified Capabilities

- None.

## Impact

- Adds the initial Astro, TypeScript, Tailwind CSS, and SCSS project configuration and source structure.
- Adds static site assets and content supplied by the restaurant, including distinct location logos, photography, menus, hours, and the Pizza and Cafe Instagram account identifiers.
- Connects the repository to Netlify for build previews and production deployments.
- Adds project documentation and ignores generated, local, and sensitive files from version control.
