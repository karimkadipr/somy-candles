export type Collection = {
  slug: string;
  label: string;
  year: number;
  tagline: string;
  active?: boolean;
  activeLookbook?: boolean;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "mariage",
    label: "Mariage",
    year: 2026,
    tagline: "Pour le grand jour",
    active: true,
    activeLookbook: true,
  },
  {
    slug: "naissance",
    label: "Naissance",
    year: 2026,
    tagline: "Bienvenue au monde",
  },
  {
    slug: "aid",
    label: "Aïd",
    year: 2026,
    tagline: "Pour l'Aïd",
  },
  {
    slug: "bouquet",
    label: "Bouquet",
    year: 2026,
    tagline: "Bouquets composés",
  },
  {
    slug: "decoratives",
    label: "Décoratives",
    year: 2026,
    tagline: "Touche florale",
  },
];

export const ACTIVE_COLLECTION =
  COLLECTIONS.find((c) => c.active) ?? COLLECTIONS[0];

export const ACTIVE_LOOKBOOK_COLLECTION =
  COLLECTIONS.find((c) => c.activeLookbook) ?? ACTIVE_COLLECTION;

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
