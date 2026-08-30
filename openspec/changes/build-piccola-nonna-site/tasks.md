## 1. Project foundation and repository hygiene

- [x] 1.1 Scaffold the Astro TypeScript project and verify the documented production build completes successfully
- [x] 1.2 Add Tailwind CSS and SCSS support while preserving Astro's static build; verify the local development server and production build both run
- [x] 1.3 Create `.gitignore` for Node dependencies, build output, local environment files, and platform clutter; verify required source and configuration files remain tracked
- [x] 1.4 Create `README.md` with project purpose, prerequisites, install/development/build commands, project structure, Netlify deployment workflow, environment-variable guidance, and v1 content-maintenance notes; verify a new maintainer can follow its setup steps
- [x] 1.5 Configure formatting, linting, and type-check/build scripts; verify all checks pass on the initial project

## 2. Styling and content foundations

- [ ] 2.1 Create the SCSS global reset/base layer, custom-property token layer, typography defaults, and reusable mixins; verify global styles load on both routes
- [x] 2.2 Configure Tailwind to use the documented design-token values without duplicating conflicting breakpoints, colours, or spacing values; verify responsive utilities work alongside SCSS base styles
- [ ] 2.3 Define typed static content for Pizza and Cafe identity, location details, opening hours, menus, links, and asset references; verify each route can render from its own content object
- [ ] 2.4 Add a documented asset workflow for supplied logos, imagery, social-preview images, and location-specific Instagram account identifiers; verify missing asset references fail clearly during local validation or build

## 3. Netlify and live Instagram integration

- [ ] 3.1 Connect the repository to Netlify and configure the production build command, publish directory, and deploy-preview workflow; verify a Netlify preview deployment succeeds from a branch or pull request
- [ ] 3.2 Obtain approved API access for the separate Pizza and Cafe Instagram accounts and configure the required secrets only as Netlify environment variables; verify no secret value is committed to the repository or emitted to browser code
- [ ] 3.3 Implement a cached Netlify serverless feed adapter that returns current posts for the requested configured location account; verify each account can be requested independently and provider failures produce a safe response
- [ ] 3.4 Implement the shared Instagram section using the feed adapter and a non-blocking fallback state; verify Pizza displays Pizza posts, Cafe displays Cafe posts, and both location pages remain usable when the feed is unavailable
- [ ] 3.5 Document the Instagram credential, token-renewal, and local-testing workflow in the README without recording secret values; verify the documented configuration names match the integration

## 4. Shared site shell and routing

- [ ] 4.0 Supply and inventory the approved Figma design, font files and usage details, favicon, distinct Pizza and Cafe logos, photography, share images, and final restaurant copy; verify every supplied asset has an intended project location before visual page construction begins
- [ ] 4.1 Build the reusable page layout, header, footer, and responsive navigation from the supplied Figma design; verify they render consistently on `/` and `/cafe`
- [ ] 4.2 Implement the immediate logo-and-location selector at the root experience; verify Pizza and Cafe choices are keyboard- and touch-operable with no timed delay
- [ ] 4.3 Implement the Pizza root route using Pizza-specific logo, imagery, menu, hours, address, and first-come-first-served/no-reservations policy; verify all essential operational information is rendered without client-side scripts
- [ ] 4.4 Implement the `/cafe` route using Cafe-specific logo, imagery, menu, hours, and address; verify direct navigation to `/cafe` renders its complete essential content
- [ ] 4.5 Implement the final Figma visual details and responsive layouts while keeping shared structure reusable; verify layouts at narrow mobile, tablet, and desktop viewport widths without horizontal scrolling

## 5. Discovery, accessibility, and quality

- [ ] 5.1 Generate location-specific titles, descriptions, canonical URLs, social metadata, and supplied share images; verify the root and `/cafe` expose distinct metadata in the built output
- [ ] 5.2 Add location-specific restaurant structured data using available name, address, hours, and public URL values; verify it is present in each route's generated HTML
- [ ] 5.3 Generate the sitemap and `public/robots.txt` from the final public site URL; verify the sitemap lists `/` and `/cafe` and robots.txt permits public crawling and references the sitemap
- [ ] 5.4 Add accessible semantics, alt text, focus states, and keyboard behavior for navigation, location selection, and Instagram controls; verify key flows work with keyboard-only navigation
- [ ] 5.5 Implement Figma-specified motion with CSS-first transitions and reduced-motion handling; verify decorative motion is suppressed while navigation and content remain accessible with reduced motion enabled
- [ ] 5.6 Optimize supplied images and client-side assets; verify the production build succeeds and route content remains readable before client-side JavaScript loads
- [ ] 5.7 Run the documented formatting, linting, type, build, metadata, responsive, and Netlify-preview checks; verify outstanding issues are resolved before production deployment
