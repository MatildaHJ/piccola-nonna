## Context

This repository contains only OpenSpec configuration. See `proposal.md` for the product motivation and scope. The initial release is a static, two-location restaurant site: the established Pizza restaurant is served from the root route and the new Gnocchi Cafe is served from `/cafe`. The user has selected Tailwind CSS with SCSS base styles, variables, and mixins, and deployment through Netlify.

## Goals / Non-Goals

**Goals:**

- Deliver a small, static site architecture that is fast, search-engine friendly, and straightforward to maintain in version control.
- Keep the Pizza and Cafe visually sibling locations without duplicating their shared layout and behavior.
- Make menu and operational changes explicit, local edits rather than requiring a database or runtime service.
- Give the Figma design a stable implementation foundation without prematurely prescribing visual details.

**Non-Goals:**

- Online reservations, ordering, payments, accounts, or a runtime backend.
- A headless CMS in the initial release; content editing will be revisited in v2.
- Defining the final visual design, copy, photography, or brand assets before they are supplied.
- Artificial animation gates that delay access to restaurant information.

## Decisions

### Astro static site with TypeScript

Use Astro to generate static HTML for both public routes. Astro is suited to the static, content-led scope and keeps client JavaScript optional. TypeScript will make the location content and reusable component inputs safe to change.

Alternative considered: Next.js. It provides more application and server capabilities but introduces complexity that the initial static scope does not need.

### Route and location model

Use `/` for Pizza and `/cafe` for Cafe. Both routes consume a shared location-page composition and independently supplied content/assets. The root route includes an immediate, non-blocking choice between Pizza and Cafe that is compatible with Pizza remaining the primary domain destination.

The exact visual relationship between the chooser and Pizza content will be implemented from the Figma design, but essential Pizza content must remain present in the initial root document for SEO and no-delay usability.

### Content co-located in typed static modules

Store location details, menus, opening hours, links, and image references in a dedicated content layer within the repository. Page components receive location data rather than embedding operational facts directly in their markup.

Alternative considered: a CMS. It is deferred because menus are stable and the initial maintainer workflow can use version control. A CMS can replace this layer later if non-technical, frequent editing becomes necessary.

### Styling boundary

Use SCSS for the global reset/base layer, CSS custom-property design tokens, typography defaults, and reusable mixins. Use Tailwind utilities for component layout, responsive composition, spacing, and state variants. Tailwind configuration and SCSS variables must derive from one documented set of design values once Figma establishes them, preventing divergent breakpoints, colours, or spacing scales.

Alternative considered: Tailwind only. SCSS is retained because the project explicitly needs a structured global base, variables, and mixins.

### Design and asset readiness

The SCSS and Tailwind foundation may use clearly identified placeholder colours and system-font fallbacks while the project is being set up. Construction of the visual page composition begins only after the Figma design and production assets have been supplied: font files and licensing/use instructions, favicon, Pizza and Cafe logos, photography, social-sharing images, and final operational/menu copy. This prevents placeholder design decisions from becoming accidental production brand choices.

### Shared components and minimal client interactivity

Model shared header, footer, Instagram section, layout, and location-selection behavior as reusable Astro components. Render menus and operational information statically. Add client-side JavaScript only to interactions that require it, such as a final Instagram carousel implementation. Animation should prefer CSS and must honor reduced-motion preferences.

Alternative considered: a fully client-rendered application. It would reduce initial-content availability and add unnecessary JavaScript for primarily static content.

### Live, location-specific Instagram feed

Use a Netlify serverless function as a same-origin adapter for the approved Instagram API or service. The function holds provider credentials in Netlify environment variables, requests posts for the Pizza or Cafe account, returns a minimal feed payload, and applies caching. The browser receives no provider secret. Each location's static content config identifies its own account and feed request.

This is the sole dynamic feature in an otherwise static site. If a feed request fails or credentials are unavailable, the page must remain usable and the Instagram section must fail gracefully without blocking location content.

Alternative considered: static curated posts. It was rejected for v1 because both locations need current posts from their separate accounts.

### Netlify delivery pipeline

Deploy Astro's static `dist` output to Netlify and connect the repository to Netlify. The production branch produces the public deployment and pull requests/branches use Netlify previews. The live Instagram adapter will be implemented as an independent Netlify Function; it does not require Astro server-side rendering. Production configuration stays in version control where possible; secrets, if later needed, are configured in Netlify and documented without recording their values.

### SEO and performance baseline

Generate route-level titles, descriptions, canonical URLs, social metadata, and restaurant structured data from location content. Optimize supplied images, reserve their layout space, and ship only required assets and client JavaScript. The root and `/cafe` must have meaningful HTML independently of script execution.

## Risks / Trade-offs

- [The root location chooser could obscure Pizza content or confuse crawlers] -> Keep Pizza content in the root document and treat the chooser as an immediate enhancement, not a separate splash-only route.
- [Tailwind tokens and SCSS variables can diverge] -> Define an explicit token-source approach during styling setup and document it in the README.
- [Restaurant hours or menus become stale] -> Centralize static content and document the update workflow and build verification.
- [Instagram API access, token expiry, privacy, and provider limits can interrupt the feed] -> Use the official/approved provider path, keep credentials only in Netlify environment variables, cache responses, and render a non-blocking fallback state.
- [Large photography can harm mobile performance] -> Optimize assets, use responsive image handling, and test the production build on mobile-sized viewports and slower networks.
- [Figma output may not map directly to accessible interactions] -> Treat supplied Figma as the visual source while preserving semantic HTML, keyboard operation, contrast, and reduced-motion behavior.
- [Missing production assets can stall or distort visual implementation] -> Complete the design-and-asset readiness task before constructing location-page visuals.

## Migration Plan

1. Create the source project and repository hygiene files.
2. Configure the static build locally and on Netlify, then confirm a preview deployment.
3. Obtain the two account identifiers and approved API access, then configure credentials only in Netlify.
4. Add shared foundations, content modules, both public routes, and the live feed adapter.
5. Implement the supplied Figma design and assets, then validate responsiveness, metadata, accessibility, feed fallback, and production build output.
6. Connect the production domain after the Netlify production deployment is verified.

Rollback consists of redeploying the last successful Netlify production deployment or reverting the relevant source change. Since the initial site is static and has no data migration, rollback requires no database recovery.

## Open Questions

- The final production branch name, Git hosting connection, and custom-domain DNS ownership.
