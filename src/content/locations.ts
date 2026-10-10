import { locationAssets, type LocationAssets } from './assets';

export type OpeningHour = {
  days: string;
  hours: string;
};

export type MenuItem = {
  name: string;
  description: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type LocationInfoCard = {
  title: string;
  content: (string | { text: string; href?: string }[])[];
  link?: {
    href: string;
    label: string;
  };
};

export type Location = {
  id: 'pizza' | 'cafe';
  name: string;
  shortName: string;
  route: '/' | '/cafe';
  locationLabel: string;
  address: string;
  locality: string;
  mapUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  intro: string;
  openingHours: OpeningHour[];
  menu: MenuSection[];
  menuStatus?: string;
  menuNote?: string;
  notices?: string[];
  visitPolicy?: string;
  infoCards: LocationInfoCard[];
  assets: LocationAssets;
};

const placeholderHours: OpeningHour[] = [
  { days: 'Måndag–tisdag', hours: 'Stängt' },
  { days: 'Onsdag–söndag', hours: 'Öppettider kommer snart' },
];

export const locations = {
  pizza: {
    id: 'pizza',
    name: 'Piccola Nonna Pizza',
    shortName: 'Pizza',
    route: '/',
    locationLabel: 'Södermalm',
    address: 'Blekingegatan 36',
    locality: 'Södermalm, Stockholm',
    mapUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Blekingegatan%2036%2C%20S%C3%B6dermalm%2C%20Stockholm',
    instagramHandle: 'lapiccolanonnapizza',
    instagramUrl: 'https://www.instagram.com/lapiccolanonnapizza/',
    intro:
      'Vegetarisk och vegansk napolitansk pizza, bakad i små upplagor på Södermalm.',
    openingHours: placeholderHours,
    menu: [
      {
        title: 'Le Rosse',
        items: [
          { name: 'Marinara', description: 'Tomat, Vitlök, Oregano, Olivolja' },
          {
            name: 'Margherita',
            description: 'Tomat, Fior di Latte, Pecorino, Basilika, Olivolja',
          },
          {
            name: 'Nduja',
            description:
              'Tomat, Fior di Latte, Pecorino, Veg Nduja, Basilika, Olivolja',
          },
          {
            name: 'Jammin',
            description:
              'Tomat, Fior di Latte, Pecorino, Seitan, Vitlök- & Chilisylt, Basilika, Olivolja',
          },
          {
            name: 'Napolitanish',
            description:
              'Tomat, Fior di Latte, Pecorino, Oregano, Oliver, Kapris, Kronärtskocka',
          },
        ],
      },
      {
        title: 'Le Bianche',
        items: [
          {
            name: 'Patata',
            description:
              'Crème fraîche, Pecorino, Fior di Latte, Rosmarin, Potatis, Tomatpesto, Olivolja',
          },
          {
            name: 'Al Funghi',
            description:
              'Crème fraîche, Pecorino, Fior di Latte, Champinjoner, Persilja, Vitlöksolja',
          },
          {
            name: 'Blue',
            description:
              'Crème fraîche, Pecorino, Fior di Latte, Gorgonzola, Päron, Valnötter, Honung, Olivolja',
          },
        ],
      },
    ],
    menuStatus: 'Alla pizzor går att få veganska eller vegetariska.',
    menuNote: 'En bit av Neapel',
    notices: ['Vi erbjuder inte glutenfri pizzabotten eller hemleverans.'],
    visitPolicy:
      'Begränsat antal pizzor och platser. Vi tar inte bokningar – först till kvarn gäller.',
    infoCards: [
      {
        title: 'Öppet',
        content: [
          'Ons - Sön 15:00-20:30 ( Eller tills degen är slut )',
          'Öppettiderna kan variera och endast drop in på borden.',
          [
            { text: 'Håll koll på våra sociala medier ' },
            {
              text: 'Instagram',
              href: 'https://www.instagram.com/lapiccolanonnapizza/',
            },
            { text: ' och ' },
            {
              text: 'Facebook',
              href: 'https://www.facebook.com/lapiccolanonnapizza/',
            },
          ],
        ],
      },
      {
        title: 'Paxa pizza',
        content: [
          'Du kan säkra din pizza genom att komma in till oss under våra öppettider och boka deg. ',
          'Vid större beställningar (fler än 6), maila med framförhållning:',
          [
            {
              text: 'lapiccolanonna@gmail.com',
              href: 'mailto:lapiccolanonna@gmail.com',
            },
          ],
        ],
      },
      {
        title: 'Vi älskar hundar',
        content: [
          'Din gulliga hund är välkommen hos oss. Lämna dina stökiga barn hemma. Vi har inga barnstolar av en anledning.',
        ],
      },
    ],
    assets: locationAssets.pizza,
  },
  cafe: {
    id: 'cafe',
    name: 'Piccola Nonna Café',
    shortName: 'Café',
    route: '/cafe',
    locationLabel: 'Slakthusområdet',
    address: 'Fållan 1B',
    locality: 'Slakthusområdet, Stockholm',
    mapUrl:
      'https://www.google.com/maps/dir/?api=1&destination=F%C3%A5llan%201B%2C%20Slakthusomr%C3%A5det%2C%20Stockholm',
    instagramHandle: 'lapiccolanonnacafe',
    instagramUrl: 'https://www.instagram.com/lapiccolanonnacafe/',
    intro: 'Gnocchi och goda stunder i Slakthusområdet.',
    openingHours: placeholderHours,
    menu: [
      { title: 'Gnocchi', items: [] },
      { title: 'Sandwiches', items: [] },
    ],
    menuStatus: 'Menyn kommer snart.',
    menuNote: 'Gnocchi och sandwiches, direkt från köket.',
    infoCards: [
      {
        title: 'Hitta hit',
        content: ['Fållan 1B', 'Slakthusområdet, Stockholm'],
        link: {
          href: 'https://www.google.com/maps/dir/?api=1&destination=F%C3%A5llan%201B%2C%20Slakthusomr%C3%A5det%2C%20Stockholm',
          label: 'Vägbeskrivning',
        },
      },
      {
        title: 'Öppettider',
        content: [
          'Måndag–tisdag: Stängt',
          'Onsdag–söndag: Öppettider kommer snart',
        ],
      },
      {
        title: 'Meny',
        content: ['Gnocchi och sandwiches. Menyn kommer snart.'],
      },
    ],
    assets: locationAssets.cafe,
  },
} satisfies Record<'pizza' | 'cafe', Location>;

export const pizzaLocation = locations.pizza;
export const cafeLocation = locations.cafe;
