import itemsA from "./items-a.json";
import itemsB from "./items-b.json";

export type CatalogItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  badge: string | null;
  rating: number;
  reviews: number;
  specs: Record<string, string>;
  options: string[];
  pdpFaqs: { q: string; a: string }[];
};

export const brand = {
  name: "PlayNest",
  tagline: "POW. Longer play. Bigger grins.",
  slug: "playnest-toys",
  style: "pop-art-kids",
  coupon: "NESTPLAY",
  cta: "Gift finder",
  heroStill: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=1800&q=80",
  heroVideo: null as string | null,
  shopLabel: "Nest picks",
  nichePath: "gifts",
  nicheLabel: "Gifts",
  isBooking: false,
  stickyCta: "Order ahead",
  stickyHref: "/order",
};

export const items: CatalogItem[] = [...itemsA, ...itemsB] as CatalogItem[];

export const reviewList = [
  {
    "name": "Parent Kim",
    "quote": "Gift finder nailed the 6-year-old build set."
  },
  {
    "name": "Uncle Ray",
    "quote": "Pop-art site, calm checkout."
  },
  {
    "name": "Mia (age 8)",
    "quote": "POW stickers forever."
  }
];

export const aiFaqs = [
  {
    "q": "Age filters?",
    "a": "Use /gifts to filter by age and play style."
  },
  {
    "q": "Subscriptions?",
    "a": "Maker Workshop Box ships monthly in this demo."
  },
  {
    "q": "NESTPLAY?",
    "a": "Free sticker vault with Nest Building Set in demo."
  }
];

export const counselTips = [
  {
    "title": "Age bands",
    "body": "Use gift finder for motor-skill match."
  },
  {
    "title": "Batteries",
    "body": "Included where noted on PDP specs."
  },
  {
    "title": "Returns",
    "body": "Demo store — no live returns."
  }
];

export const categories = Array.from(new Set(items.map((i) => i.category))).sort();

export function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getItem(id: string) {
  return items.find((i) => i.id === id);
}

export function relatedItems(id: string, limit = 3) {
  const item = getItem(id);
  if (!item) return [];
  return items.filter((i) => i.category === item.category && i.id !== id).slice(0, limit);
}
