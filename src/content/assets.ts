import type { ImageMetadata } from 'astro';

import cafeLogo from '../images/logo-cafe.svg';
import pizzaLogo from '../images/logo-pizza.svg';
import cafeHero from '../images/alina.jpg';
import pizzaHero from '../images/nonna-pizza.jpg';
import pizzaDetail from '../images/nonna-pizza2.jpeg';

export type LocationAssets = {
  logo: ImageMetadata;
  hero: ImageMetadata;
  detail: ImageMetadata;
  socialPreview: string;
};

/**
 * Central asset inventory. Keep source photography in `src/images` so Astro
 * validates imports during development and production builds. Public files
 * such as the favicon are referenced from `public/` by their site URL.
 */
export const locationAssets = {
  pizza: {
    logo: pizzaLogo,
    hero: pizzaHero,
    detail: pizzaDetail,
    socialPreview: '/pn-logo.png',
  },
  cafe: {
    logo: cafeLogo,
    hero: cafeHero,
    detail: pizzaDetail,
    socialPreview: '/pn-logo.png',
  },
} satisfies Record<'pizza' | 'cafe', LocationAssets>;

export const siteAssets = {
  favicon: '/favicon.ico',
  pinnedTabIcon: '/safari-pinned-tab.svg',
} as const;
