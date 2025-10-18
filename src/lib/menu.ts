import type { Category, MenuItem } from '$lib/types';

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const makeId = (cat: string, name: string) => `${slugify(cat)}__${slugify(name)}`;

// categories
export const categories: Category[] = [
  { id: 'cookies',   label: 'Cookies & Treats' },
  { id: 'sourdough', label: 'Sourdough Loaves' },
  { id: 'rolls',     label: 'Cinnamon Rolls' }
];

// items
const itemsRaw = [
  // ── Sourdough Loaves
  {
    cat: 'sourdough',
    name: 'Jalapeño Cheddar Loaf',
    price: 14,
    desc: 'Sharp cheddar folded into a tangy sourdough with a gentle jalapeño kick.',
    image: 'https://grantbakes.com/wp-content/uploads/2024/01/Jalapeno-Cheddar-Sourdough-Bread-Loaf-scaled.webp',
    alt: 'Round jalapeño cheddar sourdough loaf',
    href: '/bakes/jalapeno-cheddar-loaf'
  },
  {
    cat: 'sourdough',
    name: 'Traditional Sourdough Loaf',
    price: 10,
    desc: 'Crackly crust, open crumb, and a balanced, naturally leavened tang.',
    image: 'https://amybakesbread.com/wp-content/uploads/2024/12/DSC_9288-768x1096.jpg',
    alt: 'Traditional sourdough loaf on a cutting board',
     href: '/bakes/traditional-sourdough-loaf'
  },
  {
    cat: 'sourdough',
    name: 'Pumpkin Sourdough Loaf',
    price: 12,
    desc: 'Autumn spices and real pumpkin blended into my classic sourdough.',
    image: 'https://www.pantrymama.com/wp-content/uploads/2020/10/EASY-PUMPKIN-SOURDOUGH-BREAD.jpg',
    alt: 'Pumpkin sourdough loaf',
    href: '/bakes/pumpkin-sourdough-loaf'
  },

  // ── Cinnamon Rolls
  {
    cat: 'rolls',
    name: 'Maple Bacon Cinnamon Rolls (4 pack)',
    price: 15,
    desc: 'Warm cinnamon swirls topped with maple glaze and crisp bacon. 4-pack.',
    image: 'https://lilluna.com/wp-content/uploads/2017/02/maple-bacon-cinnamon-rolls-resize-11-520x520.jpg',
    alt: 'Four maple bacon cinnamon rolls with glaze',
    href: '/bakes/maple-bacon-cinnamon-rolls-4-pack'
  },

  // ── Cookies & Treats
  {
    cat: 'cookies',
    name: 'Spooky Sugar Cookies (12 pack)',
    price: 40,
    desc: 'Hand-decorated sugar cookies: pumpkins, ghosts, spiders, and “BOO” plaques. 12-pack.',
    // image: 'https://i.redd.it/zyoe8g7ndlv11.jpg',
    image: 'https://assets.cdn.filesafe.space/a8iObHpvOlsBuCS6edJN/media/68e6972b0650b5eb6af71014.jpeg',
    alt: 'Decorated Halloween sugar cookies',
    tag: 'Limited Run',
    href: '/bakes/spooky-sugar-cookies-12-pack',
  },
  {
    cat: 'cookies',
    name: 'Ghost Sugar Cookies (6 pack)',
    price: 18,
    desc: 'Soft vanilla sugar cookies iced as friendly ghosts. 6-pack.',
    image: 'https://i.etsystatic.com/32834753/r/il/4340a7/5381342788/il_1080xN.5381342788_nng5.jpg',
    alt: 'Ghost-shaped sugar cookies',
    badgeColor: 'bg-orange-600',
    tag: 'fan favorite',
    href: '/bakes/ghost-sugar-cookies-6-pack'
  },
  {
    cat: 'cookies',
    name: 'Chocolate Chip Cookies w/ Sourdough Discard (6 pack)',
    price: 12,
    desc: 'Chewy, bakery-style chocolate chip cookies with a subtle sourdough depth. 6-pack.',
    image: 'https://mysecretconfections.com/wp-content/uploads/2020/05/DSC_1689.jpg',
    alt: 'Chocolate chip cookies on parchment',
    href: '/bakes/chocolate-chip-cookies-sourdough-discard-6-pack'
  }
];


export const items: MenuItem[] = itemsRaw.map((i) => ({ ...i, id: makeId(i.cat, i.name) }));



// Jalapeno Cheddar Loaf - $14
// Traditional Sourdough Loaf - $10
// Pumpkin Sourdough Loaf - $12
// Maple Bacon Cinnamon Rolls (4 pack) - $15
// Spooky Sugar Cookies (12 pack - shaped like pumpkins, ghosts, spiders, boo sign) - $40
// Ghost Sugar Cookies (6 pack - shaped like ghosts) - $18
// Chocoloate Chip Cookies w/ Sourdough Discard (6 pack) - $12
