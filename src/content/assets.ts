import type { ImageMetadata } from 'astro';

import cafeLogo from '../images/logo-cafe.png';
import pizzaLogo from '../images/logo-pizza.png';
import cafeHero from '../images/cafe/cafe-hero.png';
import pizzaHero from '../images/pizza/pizza-hero.jpeg';
import pizzaDetail from '../images/pizza/pizza-bg.png';
import cafeDetail from '../images/cafe/gnocci.png';
import pizzaOwners from '../images/staff/owners-pizza2.jpg';
import pizzaCart from '../images/pizza/pizza-cart.jpg';
import cafeOwners from '../images/staff/owners-cafe.png';
import cafeLogoMural from '../images/cafe/location-cafe.png';

export type AboutImage = {
  src: ImageMetadata;
  alt: string;
};

export type LocationAssets = {
  logo: ImageMetadata;
  hero: ImageMetadata;
  heroText: string;
  detail: ImageMetadata;
  aboutImages: [AboutImage, AboutImage];
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
    aboutImages: [
      {
        src: pizzaOwners,
        alt: 'Ägarna till La Piccola Nonna förbereder pizza i köket.',
      },
      {
        src: pizzaCart,
        alt: 'La Piccola Nonnas pizzavagn med cykel och pizzaugn.',
      },
    ],
    socialPreview: '/pn-logo.png',
  },
  cafe: {
    logo: cafeLogo,
    hero: cafeHero,
    heroText:
      'Handgjord gnocchi och grillade mackor, lagade med kärlek i Slakthusområdet.',
    detail: cafeDetail,
    aboutImages: [
      {
        src: cafeLogoMural,
        alt: 'Café-logotypen målas för hand på den gröna väggen inne i caféet.',
      },
      {
        src: cafeOwners,
        alt: 'Gänget bakom La Piccola Nonna Café framför entrén på Fållan 1B.',
      },
    ],
    socialPreview: '/pn-logo.png',
  },
} satisfies Record<'pizza' | 'cafe', LocationAssets>;

export const siteAssets = {
  favicon: '/favicon.ico',
  pinnedTabIcon: '/safari-pinned-tab.svg',
} as const;
