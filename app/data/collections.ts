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
    slug: "printemps-2026",
    label: "Printemps",
    year: 2026,
    tagline: "Le mois de mai",
    active: true,
    activeLookbook: true,
  },
  {
    slug: "ete-2026",
    label: "Été",
    year: 2026,
    tagline: "Soleil et fleurs hautes",
  },
  {
    slug: "automne-2026",
    label: "Automne",
    year: 2026,
    tagline: "Fleurs séchées, lumière basse",
  },
  {
    slug: "hiver-2026",
    label: "Hiver",
    year: 2026,
    tagline: "Mimosa et veillées",
  },
  {
    slug: "eid-adhaa-2026",
    label: "Eid Adhaa",
    year: 2026,
    tagline: "Édition de l'Aïd",
  },
];

export const ACTIVE_COLLECTION =
  COLLECTIONS.find((c) => c.active) ?? COLLECTIONS[0];

export const ACTIVE_LOOKBOOK_COLLECTION =
  COLLECTIONS.find((c) => c.activeLookbook) ?? ACTIVE_COLLECTION;

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
