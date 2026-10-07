import type { ImageMetadata } from 'astro';

import cafeLogo from '../images/logo-cafe.png';
import pizzaLogo from '../images/logo-pizza.png';
import cafeHero from '../images/cafe/location-cafe.png';
import pizzaHero from '../images/pizza/pizza-hero-copy.jpeg';
import pizzaDetail from '../images/pizza/nonna-pizza2.jpeg';

export type LocationAssets = {
  logo: ImageMetadata;
  hero: ImageMetadata;
  heroText: string;
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
    heroText: 'Äkta napolitansk pizza, handgjord med kärlek på Blekingegatan.',
    detail: pizzaDetail,
    socialPreview: '/pn-logo.png',
  },
  cafe: {
    logo: cafeLogo,
    hero: cafeHero,
    heroText: 'Äkta napolitansk pizza, handgjord med kärlek på Blekingegatan.',
    detail: pizzaDetail,
    socialPreview: '/pn-logo.png',
  },
} satisfies Record<'pizza' | 'cafe', LocationAssets>;

export const siteAssets = {
  favicon: '/favicon.ico',
  pinnedTabIcon: '/safari-pinned-tab.svg',
} as const;
