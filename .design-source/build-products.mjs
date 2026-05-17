// One-off script: reads .design-source/urls.txt and writes
//   app/data/products.ts  (36 products, each with a season)
//   app/data/lookbook.ts  (36 lookbook images — separate array, same URLs)
//
// Run: node .design-source/build-products.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const raw = readFileSync(resolve(__dirname, "urls.txt"), "utf8");
const urls = [
  ...new Set(
    raw
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean)
      .map((u) => u.replace("h_250,fl_preserve_transparency/", "")),
  ),
];

const NAMES = [
  "Rose ancienne",
  "Pivoine d'avril",
  "Lavande de Sault",
  "Camomille des prés",
  "Eucalyptus blanc",
  "Mimosa d'hiver",
  "Jasmin de nuit",
  "Violette du sud",
  "Iris poudré",
  "Magnolia ouvert",
  "Tournesol d'août",
  "Muguet du 1er mai",
  "Hortensia bleu",
  "Pavot rouge",
  "Glycine pendante",
  "Bleuet sauvage",
  "Cosmos rose",
  "Renoncule beurre",
  "Dahlia braise",
  "Anémone violette",
  "Capucine vive",
  "Tubéreuse",
  "Souci doré",
  "Œillet ancien",
  "Pensée mauve",
  "Marguerite des champs",
  "Achillée millefeuille",
  "Gypsophile nuage",
  "Statice violet",
  "Bouquet d'été",
  "Bouquet d'hiver",
  "Mélange séché",
  "Lavande & cèdre",
  "Rose & oud",
  "Trio découverte",
  "Recharge florale",
];

const TONES = ["rose", "butter", "lavender", "terracotta", "ochre", "sage", "cream", "dusk"];

const SUBTITLES = [
  "Bougie fleurie · cire de soja",
  "Bougie fleurie · cire d'abeille",
  "Bougie fleurie · cire végétale",
  "Édition limitée · cire végétale",
  "Édition saisonnière · cire de soja",
];

const PRICES = [48, 54, 46, 52, 58, 64, 56, 78, 86, 42, 50, 44, 68, 76, 62, 84, 72, 88];

const SWATCHES = {
  rose: ["#d4a09a", "#e8c8b8", "#f3dcc8"],
  butter: ["#e8d28a", "#f1e0a8", "#fbf0c8"],
  lavender: ["#a39bc0", "#c4b8d4", "#ddd2e3"],
  terracotta: ["#c98a8a", "#e0a8a8", "#efc8c0"],
  ochre: ["#d4b860", "#e4cd84", "#f0dfa8"],
  sage: ["#a8b8a8", "#c4d0c0", "#dde3d8"],
  cream: ["#ece1cc", "#d4c5a8", "#bca989"],
  dusk: ["#c0a89c", "#d8c0b4", "#ecd8c8"],
};

const NOTE_POOLS = {
  rose: [["Rose ancienne", "Bois de santal", "Iris poudré"], ["Rose blanche", "Musc", "Vanille"]],
  butter: [["Camomille", "Foin coupé", "Miel d'acacia"], ["Tournesol", "Cuir blond", "Caramel"]],
  lavender: [["Lavande fine", "Romarin", "Cèdre blanc"], ["Violette", "Iris", "Sucre cuit"]],
  terracotta: [["Pivoine", "Néroli", "Vétiver"], ["Calendula", "Cuir tanné", "Tabac blond"]],
  ochre: [["Immortelle", "Romarin", "Cuir blond"], ["Tournesol", "Foin", "Pain doré"]],
  sage: [["Eucalyptus", "Coton", "Mousse blanche"], ["Muguet", "Verveine", "Mousse fraîche"]],
  cream: [["Magnolia", "Musc blanc", "Vanille"], ["Découverte", "Multi-floral", "Bois doux"]],
  dusk: [["Fleurs séchées", "Foin", "Bois doux"], ["Rose noire", "Patchouli", "Encens"]],
};

const SCENT_POOLS = {
  rose: ["Rose poudrée", "Rose & oud", "Rose neutre"],
  butter: ["Camomille pure", "Camomille & miel"],
  lavender: ["Lavande nature", "Lavande & cèdre"],
  terracotta: ["Bouquet original", "Pivoine seule"],
  ochre: ["Immortelle pure", "Tournesol & miel"],
  sage: ["Eucalyptus frais", "Coton doux"],
  cream: ["Magnolia", "Mix doux"],
  dusk: ["Composition mixte", "Foin & bois"],
};

const BADGES = ["Édition", "Saison", "Pièce unique", "Cadeau", "Recharge"];

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function sizesFor(i, price) {
  if (i % 4 === 0) {
    return [
      { label: "Petit · 180g", price: Math.round(price * 0.7) },
      { label: "Moyen · 320g", price },
      { label: "Grand · 540g", price: Math.round(price * 1.55) },
    ];
  }
  if (i % 4 === 1) {
    return [
      { label: "Petit · 180g", price: Math.round(price * 0.8) },
      { label: "Moyen · 320g", price },
    ];
  }
  if (i % 4 === 2) {
    return [
      { label: "Moyen · 320g", price },
      { label: "Grand · 540g", price: Math.round(price * 1.5) },
    ];
  }
  return [{ label: "Moyen · 320g", price }];
}

function seasonFor(name, i) {
  const n = name.toLowerCase();
  if (/hiver|mimosa|recharge/.test(n)) return "hiver";
  if (/été|tournesol|hortensia|cosmos|dahlia|capucine|souci|marguerite|achillée|août/.test(n))
    return "été";
  if (/automne|mélange séché|gypsophile|statice|tubéreuse|œillet|pavot/.test(n)) return "automne";
  if (
    /printemps|muguet|pivoine|iris|rose|lavande|magnolia|jasmin|renoncule|anémone|pensée|violette|bleuet|glycine|camomille|eucalyptus|trio|coffret/.test(
      n,
    )
  )
    return "printemps";
  return ["printemps", "été", "automne", "hiver"][i % 4];
}

const products = urls.slice(0, NAMES.length).map((url, i) => {
  const name = NAMES[i];
  const tone = TONES[i % TONES.length];
  const price = PRICES[i % PRICES.length];
  const subtitle = SUBTITLES[i % SUBTITLES.length];
  const notes = NOTE_POOLS[tone][i % NOTE_POOLS[tone].length];
  const scents = SCENT_POOLS[tone];
  const sizes = sizesFor(i, price);
  const badge = i % 6 === 0 ? BADGES[(i / 6) % BADGES.length] : undefined;
  const season = seasonFor(name, i);

  return {
    id: `bougie-${String(i + 1).padStart(2, "0")}-${slugify(name)}`,
    name,
    subtitle,
    price,
    blurb: `${name}, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.`,
    swatch: SWATCHES[tone],
    notes,
    sizes,
    scents,
    placeholderLabel: name.toUpperCase(),
    photoTone: tone,
    photo: url,
    season,
    ...(badge ? { badge } : {}),
  };
});

const productEntries = products
  .map((p) => {
    const sizes = p.sizes
      .map((s) => `      { label: ${JSON.stringify(s.label)}, price: ${s.price} }`)
      .join(",\n");
    const swatch = p.swatch.map((c) => `"${c}"`).join(", ");
    const notes = p.notes.map((n) => JSON.stringify(n)).join(", ");
    const scents = p.scents.map((s) => JSON.stringify(s)).join(", ");
    return `  {
    id: ${JSON.stringify(p.id)},
    name: ${JSON.stringify(p.name)},
    subtitle: ${JSON.stringify(p.subtitle)},
    price: ${p.price},
    blurb:
      ${JSON.stringify(p.blurb)},
    swatch: [${swatch}],
    notes: [${notes}],
    sizes: [
${sizes},
    ],
    scents: [${scents}],
    placeholderLabel: ${JSON.stringify(p.placeholderLabel)},
    photoTone: ${JSON.stringify(p.photoTone)},
    photo:
      ${JSON.stringify(p.photo)},
    season: ${JSON.stringify(p.season)},${p.badge ? `\n    badge: ${JSON.stringify(p.badge)},` : ""}
  }`;
  })
  .join(",\n");

const productsHeader = `export type PhotoTone =
  | "rose"
  | "butter"
  | "lavender"
  | "terracotta"
  | "ochre"
  | "sage"
  | "cream"
  | "dusk";

export type Season = "printemps" | "été" | "automne" | "hiver";

export type ProductSize = { label: string; price: number };

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  blurb: string;
  swatch: string[];
  notes: string[];
  sizes: ProductSize[];
  scents: string[];
  placeholderLabel: string;
  photoTone: PhotoTone;
  photo?: string;
  season: Season;
  badge?: string;
};

export const SOMA_PRODUCTS: Product[] = [
${productEntries},
];
`;

writeFileSync(resolve(projectRoot, "app/data/products.ts"), productsHeader);

/* ---------- lookbook.ts ---------- */

const RATIOS = ["3 / 4", "4 / 5", "1 / 1"];
const FLOURISHES = ["bouquet", "petals", "sprig"];

const lookbookEntries = urls
  .map((url, i) => {
    const tone = TONES[i % TONES.length];
    const ratio = RATIOS[i % RATIOS.length];
    const flourish = FLOURISHES[i % FLOURISHES.length];
    const label = String(i + 1).padStart(2, "0");
    const season = seasonFor(NAMES[i] || `Image ${i + 1}`, i);
    return `  { label: ${JSON.stringify(label)}, tone: ${JSON.stringify(
      tone,
    )}, flourish: ${JSON.stringify(flourish)}, ratio: ${JSON.stringify(
      ratio,
    )}, season: ${JSON.stringify(season)}, src: ${JSON.stringify(url)} }`;
  })
  .join(",\n");

const lookbookFile = `import type { PhotoTone, Season } from "./products";

export type Flourish = "petals" | "bouquet" | "sprig";

export type LookbookImage = {
  label: string;
  tone: PhotoTone;
  flourish: Flourish;
  ratio: string;
  season: Season;
  src: string;
};

// Independent from SOMA_PRODUCTS so labels / order / curation can be edited
// without touching the catalogue.
export const LOOKBOOK_IMAGES: LookbookImage[] = [
${lookbookEntries},
];
`;

writeFileSync(resolve(projectRoot, "app/data/lookbook.ts"), lookbookFile);

console.log(`Wrote ${products.length} products and ${urls.length} lookbook images.`);
