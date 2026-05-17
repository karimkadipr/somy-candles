export type PhotoTone =
  | "rose"
  | "butter"
  | "lavender"
  | "terracotta"
  | "ochre"
  | "sage"
  | "cream"
  | "dusk";

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
  collection: string;
  badge?: string;
};

export const SOMA_PRODUCTS: Product[] = [
  {
    id: "bougie-01-rose-ancienne",
    name: "Rose ancienne",
    subtitle: "Bougie fleurie · cire de soja",
    price: 48,
    blurb:
      "Rose ancienne, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4a09a", "#e8c8b8", "#f3dcc8"],
    notes: ["Rose ancienne", "Bois de santal", "Iris poudré"],
    sizes: [
      { label: "Petit · 180g", price: 34 },
      { label: "Moyen · 320g", price: 48 },
      { label: "Grand · 540g", price: 74 },
    ],
    scents: ["Rose poudrée", "Rose & oud", "Rose neutre"],
    placeholderLabel: "ROSE ANCIENNE",
    photoTone: "rose",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.52_1_t85yhq.jpg?_s=public-apps",
    collection: "printemps-2026",
    badge: "Édition",
  },
  {
    id: "bougie-02-pivoine-d-avril",
    name: "Pivoine d'avril",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 54,
    blurb:
      "Pivoine d'avril, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#e8d28a", "#f1e0a8", "#fbf0c8"],
    notes: ["Tournesol", "Cuir blond", "Caramel"],
    sizes: [
      { label: "Petit · 180g", price: 43 },
      { label: "Moyen · 320g", price: 54 },
    ],
    scents: ["Camomille pure", "Camomille & miel"],
    placeholderLabel: "PIVOINE D'AVRIL",
    photoTone: "butter",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.52_2_mnlbj2.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-03-lavande-de-sault",
    name: "Lavande de Sault",
    subtitle: "Bougie fleurie · cire végétale",
    price: 46,
    blurb:
      "Lavande de Sault, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a39bc0", "#c4b8d4", "#ddd2e3"],
    notes: ["Lavande fine", "Romarin", "Cèdre blanc"],
    sizes: [
      { label: "Moyen · 320g", price: 46 },
      { label: "Grand · 540g", price: 69 },
    ],
    scents: ["Lavande nature", "Lavande & cèdre"],
    placeholderLabel: "LAVANDE DE SAULT",
    photoTone: "lavender",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.52_favort.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-04-camomille-des-pres",
    name: "Camomille des prés",
    subtitle: "Édition limitée · cire végétale",
    price: 52,
    blurb:
      "Camomille des prés, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c98a8a", "#e0a8a8", "#efc8c0"],
    notes: ["Calendula", "Cuir tanné", "Tabac blond"],
    sizes: [
      { label: "Moyen · 320g", price: 52 },
    ],
    scents: ["Bouquet original", "Pivoine seule"],
    placeholderLabel: "CAMOMILLE DES PRÉS",
    photoTone: "terracotta",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.53_1_qhmfhv.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-05-eucalyptus-blanc",
    name: "Eucalyptus blanc",
    subtitle: "Édition saisonnière · cire de soja",
    price: 58,
    blurb:
      "Eucalyptus blanc, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4b860", "#e4cd84", "#f0dfa8"],
    notes: ["Immortelle", "Romarin", "Cuir blond"],
    sizes: [
      { label: "Petit · 180g", price: 41 },
      { label: "Moyen · 320g", price: 58 },
      { label: "Grand · 540g", price: 90 },
    ],
    scents: ["Immortelle pure", "Tournesol & miel"],
    placeholderLabel: "EUCALYPTUS BLANC",
    photoTone: "ochre",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.53_pnczyy.jpg?_s=public-apps",
    collection: "eid-adhaa-2026",
  },
  {
    id: "bougie-06-mimosa-d-hiver",
    name: "Mimosa d'hiver",
    subtitle: "Bougie fleurie · cire de soja",
    price: 64,
    blurb:
      "Mimosa d'hiver, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a8b8a8", "#c4d0c0", "#dde3d8"],
    notes: ["Muguet", "Verveine", "Mousse fraîche"],
    sizes: [
      { label: "Petit · 180g", price: 51 },
      { label: "Moyen · 320g", price: 64 },
    ],
    scents: ["Eucalyptus frais", "Coton doux"],
    placeholderLabel: "MIMOSA D'HIVER",
    photoTone: "sage",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_1_ravbpf.jpg?_s=public-apps",
    collection: "hiver-2026",
  },
  {
    id: "bougie-07-jasmin-de-nuit",
    name: "Jasmin de nuit",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 56,
    blurb:
      "Jasmin de nuit, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#ece1cc", "#d4c5a8", "#bca989"],
    notes: ["Magnolia", "Musc blanc", "Vanille"],
    sizes: [
      { label: "Moyen · 320g", price: 56 },
      { label: "Grand · 540g", price: 84 },
    ],
    scents: ["Magnolia", "Mix doux"],
    placeholderLabel: "JASMIN DE NUIT",
    photoTone: "cream",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_2_vay6wx.jpg?_s=public-apps",
    collection: "printemps-2026",
    badge: "Saison",
  },
  {
    id: "bougie-08-violette-du-sud",
    name: "Violette du sud",
    subtitle: "Bougie fleurie · cire végétale",
    price: 78,
    blurb:
      "Violette du sud, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c0a89c", "#d8c0b4", "#ecd8c8"],
    notes: ["Rose noire", "Patchouli", "Encens"],
    sizes: [
      { label: "Moyen · 320g", price: 78 },
    ],
    scents: ["Composition mixte", "Foin & bois"],
    placeholderLabel: "VIOLETTE DU SUD",
    photoTone: "dusk",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_3_mw6lkz.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-09-iris-poudre",
    name: "Iris poudré",
    subtitle: "Édition limitée · cire végétale",
    price: 86,
    blurb:
      "Iris poudré, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4a09a", "#e8c8b8", "#f3dcc8"],
    notes: ["Rose ancienne", "Bois de santal", "Iris poudré"],
    sizes: [
      { label: "Petit · 180g", price: 60 },
      { label: "Moyen · 320g", price: 86 },
      { label: "Grand · 540g", price: 133 },
    ],
    scents: ["Rose poudrée", "Rose & oud", "Rose neutre"],
    placeholderLabel: "IRIS POUDRÉ",
    photoTone: "rose",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.57_4_xetec9.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-10-magnolia-ouvert",
    name: "Magnolia ouvert",
    subtitle: "Édition saisonnière · cire de soja",
    price: 42,
    blurb:
      "Magnolia ouvert, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#e8d28a", "#f1e0a8", "#fbf0c8"],
    notes: ["Tournesol", "Cuir blond", "Caramel"],
    sizes: [
      { label: "Petit · 180g", price: 34 },
      { label: "Moyen · 320g", price: 42 },
    ],
    scents: ["Camomille pure", "Camomille & miel"],
    placeholderLabel: "MAGNOLIA OUVERT",
    photoTone: "butter",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.57_5_rupb8a.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-11-tournesol-d-aout",
    name: "Tournesol d'août",
    subtitle: "Bougie fleurie · cire de soja",
    price: 50,
    blurb:
      "Tournesol d'août, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a39bc0", "#c4b8d4", "#ddd2e3"],
    notes: ["Lavande fine", "Romarin", "Cèdre blanc"],
    sizes: [
      { label: "Moyen · 320g", price: 50 },
      { label: "Grand · 540g", price: 75 },
    ],
    scents: ["Lavande nature", "Lavande & cèdre"],
    placeholderLabel: "TOURNESOL D'AOÛT",
    photoTone: "lavender",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_6_bvq3nc.jpg?_s=public-apps",
    collection: "ete-2026",
  },
  {
    id: "bougie-12-muguet-du-1er-mai",
    name: "Muguet du 1er mai",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 44,
    blurb:
      "Muguet du 1er mai, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c98a8a", "#e0a8a8", "#efc8c0"],
    notes: ["Calendula", "Cuir tanné", "Tabac blond"],
    sizes: [
      { label: "Moyen · 320g", price: 44 },
    ],
    scents: ["Bouquet original", "Pivoine seule"],
    placeholderLabel: "MUGUET DU 1ER MAI",
    photoTone: "terracotta",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_7_ymokux.jpg?_s=public-apps",
    collection: "eid-adhaa-2026",
  },
  {
    id: "bougie-13-hortensia-bleu",
    name: "Hortensia bleu",
    subtitle: "Bougie fleurie · cire végétale",
    price: 68,
    blurb:
      "Hortensia bleu, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4b860", "#e4cd84", "#f0dfa8"],
    notes: ["Immortelle", "Romarin", "Cuir blond"],
    sizes: [
      { label: "Petit · 180g", price: 48 },
      { label: "Moyen · 320g", price: 68 },
      { label: "Grand · 540g", price: 105 },
    ],
    scents: ["Immortelle pure", "Tournesol & miel"],
    placeholderLabel: "HORTENSIA BLEU",
    photoTone: "ochre",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_8_xsjwaf.jpg?_s=public-apps",
    collection: "ete-2026",
    badge: "Pièce unique",
  },
  {
    id: "bougie-14-pavot-rouge",
    name: "Pavot rouge",
    subtitle: "Édition limitée · cire végétale",
    price: 76,
    blurb:
      "Pavot rouge, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a8b8a8", "#c4d0c0", "#dde3d8"],
    notes: ["Muguet", "Verveine", "Mousse fraîche"],
    sizes: [
      { label: "Petit · 180g", price: 61 },
      { label: "Moyen · 320g", price: 76 },
    ],
    scents: ["Eucalyptus frais", "Coton doux"],
    placeholderLabel: "PAVOT ROUGE",
    photoTone: "sage",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_gsbrn8.jpg?_s=public-apps",
    collection: "automne-2026",
  },
  {
    id: "bougie-15-glycine-pendante",
    name: "Glycine pendante",
    subtitle: "Édition saisonnière · cire de soja",
    price: 62,
    blurb:
      "Glycine pendante, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#ece1cc", "#d4c5a8", "#bca989"],
    notes: ["Magnolia", "Musc blanc", "Vanille"],
    sizes: [
      { label: "Moyen · 320g", price: 62 },
      { label: "Grand · 540g", price: 93 },
    ],
    scents: ["Magnolia", "Mix doux"],
    placeholderLabel: "GLYCINE PENDANTE",
    photoTone: "cream",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_1_tfgaoy.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-16-bleuet-sauvage",
    name: "Bleuet sauvage",
    subtitle: "Bougie fleurie · cire de soja",
    price: 84,
    blurb:
      "Bleuet sauvage, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c0a89c", "#d8c0b4", "#ecd8c8"],
    notes: ["Rose noire", "Patchouli", "Encens"],
    sizes: [
      { label: "Moyen · 320g", price: 84 },
    ],
    scents: ["Composition mixte", "Foin & bois"],
    placeholderLabel: "BLEUET SAUVAGE",
    photoTone: "dusk",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_2_lwmj39.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-17-cosmos-rose",
    name: "Cosmos rose",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 72,
    blurb:
      "Cosmos rose, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4a09a", "#e8c8b8", "#f3dcc8"],
    notes: ["Rose ancienne", "Bois de santal", "Iris poudré"],
    sizes: [
      { label: "Petit · 180g", price: 50 },
      { label: "Moyen · 320g", price: 72 },
      { label: "Grand · 540g", price: 112 },
    ],
    scents: ["Rose poudrée", "Rose & oud", "Rose neutre"],
    placeholderLabel: "COSMOS ROSE",
    photoTone: "rose",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_3_snwqjp.jpg?_s=public-apps",
    collection: "ete-2026",
  },
  {
    id: "bougie-18-renoncule-beurre",
    name: "Renoncule beurre",
    subtitle: "Bougie fleurie · cire végétale",
    price: 88,
    blurb:
      "Renoncule beurre, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#e8d28a", "#f1e0a8", "#fbf0c8"],
    notes: ["Tournesol", "Cuir blond", "Caramel"],
    sizes: [
      { label: "Petit · 180g", price: 70 },
      { label: "Moyen · 320g", price: 88 },
    ],
    scents: ["Camomille pure", "Camomille & miel"],
    placeholderLabel: "RENONCULE BEURRE",
    photoTone: "butter",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_4_bnvu7a.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-19-dahlia-braise",
    name: "Dahlia braise",
    subtitle: "Édition limitée · cire végétale",
    price: 48,
    blurb:
      "Dahlia braise, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a39bc0", "#c4b8d4", "#ddd2e3"],
    notes: ["Lavande fine", "Romarin", "Cèdre blanc"],
    sizes: [
      { label: "Moyen · 320g", price: 48 },
      { label: "Grand · 540g", price: 72 },
    ],
    scents: ["Lavande nature", "Lavande & cèdre"],
    placeholderLabel: "DAHLIA BRAISE",
    photoTone: "lavender",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_5_u8w1vg.jpg?_s=public-apps",
    collection: "ete-2026",
    badge: "Cadeau",
  },
  {
    id: "bougie-20-anemone-violette",
    name: "Anémone violette",
    subtitle: "Édition saisonnière · cire de soja",
    price: 54,
    blurb:
      "Anémone violette, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c98a8a", "#e0a8a8", "#efc8c0"],
    notes: ["Calendula", "Cuir tanné", "Tabac blond"],
    sizes: [
      { label: "Moyen · 320g", price: 54 },
    ],
    scents: ["Bouquet original", "Pivoine seule"],
    placeholderLabel: "ANÉMONE VIOLETTE",
    photoTone: "terracotta",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_ylryu0.jpg?_s=public-apps",
    collection: "eid-adhaa-2026",
  },
  {
    id: "bougie-21-capucine-vive",
    name: "Capucine vive",
    subtitle: "Bougie fleurie · cire de soja",
    price: 46,
    blurb:
      "Capucine vive, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4b860", "#e4cd84", "#f0dfa8"],
    notes: ["Immortelle", "Romarin", "Cuir blond"],
    sizes: [
      { label: "Petit · 180g", price: 32 },
      { label: "Moyen · 320g", price: 46 },
      { label: "Grand · 540g", price: 71 },
    ],
    scents: ["Immortelle pure", "Tournesol & miel"],
    placeholderLabel: "CAPUCINE VIVE",
    photoTone: "ochre",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.31.35_1_w1mmk2.jpg?_s=public-apps",
    collection: "ete-2026",
  },
  {
    id: "bougie-22-tubereuse",
    name: "Tubéreuse",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 52,
    blurb:
      "Tubéreuse, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a8b8a8", "#c4d0c0", "#dde3d8"],
    notes: ["Muguet", "Verveine", "Mousse fraîche"],
    sizes: [
      { label: "Petit · 180g", price: 42 },
      { label: "Moyen · 320g", price: 52 },
    ],
    scents: ["Eucalyptus frais", "Coton doux"],
    placeholderLabel: "TUBÉREUSE",
    photoTone: "sage",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.31.35_2_tuc3mm.jpg?_s=public-apps",
    collection: "automne-2026",
  },
  {
    id: "bougie-23-souci-dore",
    name: "Souci doré",
    subtitle: "Bougie fleurie · cire végétale",
    price: 58,
    blurb:
      "Souci doré, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#ece1cc", "#d4c5a8", "#bca989"],
    notes: ["Magnolia", "Musc blanc", "Vanille"],
    sizes: [
      { label: "Moyen · 320g", price: 58 },
      { label: "Grand · 540g", price: 87 },
    ],
    scents: ["Magnolia", "Mix doux"],
    placeholderLabel: "SOUCI DORÉ",
    photoTone: "cream",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.31.35_3_kp98cz.jpg?_s=public-apps",
    collection: "ete-2026",
  },
  {
    id: "bougie-24-illet-ancien",
    name: "Œillet ancien",
    subtitle: "Édition limitée · cire végétale",
    price: 64,
    blurb:
      "Œillet ancien, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c0a89c", "#d8c0b4", "#ecd8c8"],
    notes: ["Rose noire", "Patchouli", "Encens"],
    sizes: [
      { label: "Moyen · 320g", price: 64 },
    ],
    scents: ["Composition mixte", "Foin & bois"],
    placeholderLabel: "ŒILLET ANCIEN",
    photoTone: "dusk",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.35_4_hpq2cq.jpg?_s=public-apps",
    collection: "automne-2026",
  },
  {
    id: "bougie-25-pensee-mauve",
    name: "Pensée mauve",
    subtitle: "Édition saisonnière · cire de soja",
    price: 56,
    blurb:
      "Pensée mauve, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4a09a", "#e8c8b8", "#f3dcc8"],
    notes: ["Rose ancienne", "Bois de santal", "Iris poudré"],
    sizes: [
      { label: "Petit · 180g", price: 39 },
      { label: "Moyen · 320g", price: 56 },
      { label: "Grand · 540g", price: 87 },
    ],
    scents: ["Rose poudrée", "Rose & oud", "Rose neutre"],
    placeholderLabel: "PENSÉE MAUVE",
    photoTone: "rose",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.35_ta9dqy.jpg?_s=public-apps",
    collection: "printemps-2026",
    badge: "Recharge",
  },
  {
    id: "bougie-26-marguerite-des-champs",
    name: "Marguerite des champs",
    subtitle: "Bougie fleurie · cire de soja",
    price: 78,
    blurb:
      "Marguerite des champs, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#e8d28a", "#f1e0a8", "#fbf0c8"],
    notes: ["Tournesol", "Cuir blond", "Caramel"],
    sizes: [
      { label: "Petit · 180g", price: 62 },
      { label: "Moyen · 320g", price: 78 },
    ],
    scents: ["Camomille pure", "Camomille & miel"],
    placeholderLabel: "MARGUERITE DES CHAMPS",
    photoTone: "butter",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_1_qgl913.jpg?_s=public-apps",
    collection: "ete-2026",
  },
  {
    id: "bougie-27-achillee-millefeuille",
    name: "Achillée millefeuille",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 86,
    blurb:
      "Achillée millefeuille, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a39bc0", "#c4b8d4", "#ddd2e3"],
    notes: ["Lavande fine", "Romarin", "Cèdre blanc"],
    sizes: [
      { label: "Moyen · 320g", price: 86 },
      { label: "Grand · 540g", price: 129 },
    ],
    scents: ["Lavande nature", "Lavande & cèdre"],
    placeholderLabel: "ACHILLÉE MILLEFEUILLE",
    photoTone: "lavender",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_2_hjjrey.jpg?_s=public-apps",
    collection: "eid-adhaa-2026",
  },
  {
    id: "bougie-28-gypsophile-nuage",
    name: "Gypsophile nuage",
    subtitle: "Bougie fleurie · cire végétale",
    price: 42,
    blurb:
      "Gypsophile nuage, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c98a8a", "#e0a8a8", "#efc8c0"],
    notes: ["Calendula", "Cuir tanné", "Tabac blond"],
    sizes: [
      { label: "Moyen · 320g", price: 42 },
    ],
    scents: ["Bouquet original", "Pivoine seule"],
    placeholderLabel: "GYPSOPHILE NUAGE",
    photoTone: "terracotta",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_3_fc9pw7.jpg?_s=public-apps",
    collection: "automne-2026",
  },
  {
    id: "bougie-29-statice-violet",
    name: "Statice violet",
    subtitle: "Édition limitée · cire végétale",
    price: 50,
    blurb:
      "Statice violet, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4b860", "#e4cd84", "#f0dfa8"],
    notes: ["Immortelle", "Romarin", "Cuir blond"],
    sizes: [
      { label: "Petit · 180g", price: 35 },
      { label: "Moyen · 320g", price: 50 },
      { label: "Grand · 540g", price: 78 },
    ],
    scents: ["Immortelle pure", "Tournesol & miel"],
    placeholderLabel: "STATICE VIOLET",
    photoTone: "ochre",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_4_skkoae.jpg?_s=public-apps",
    collection: "automne-2026",
  },
  {
    id: "bougie-30-bouquet-d-ete",
    name: "Bouquet d'été",
    subtitle: "Édition saisonnière · cire de soja",
    price: 44,
    blurb:
      "Bouquet d'été, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a8b8a8", "#c4d0c0", "#dde3d8"],
    notes: ["Muguet", "Verveine", "Mousse fraîche"],
    sizes: [
      { label: "Petit · 180g", price: 35 },
      { label: "Moyen · 320g", price: 44 },
    ],
    scents: ["Eucalyptus frais", "Coton doux"],
    placeholderLabel: "BOUQUET D'ÉTÉ",
    photoTone: "sage",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_5_xotniq.jpg?_s=public-apps",
    collection: "ete-2026",
  },
  {
    id: "bougie-31-bouquet-d-hiver",
    name: "Bouquet d'hiver",
    subtitle: "Bougie fleurie · cire de soja",
    price: 68,
    blurb:
      "Bouquet d'hiver, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#ece1cc", "#d4c5a8", "#bca989"],
    notes: ["Magnolia", "Musc blanc", "Vanille"],
    sizes: [
      { label: "Moyen · 320g", price: 68 },
      { label: "Grand · 540g", price: 102 },
    ],
    scents: ["Magnolia", "Mix doux"],
    placeholderLabel: "BOUQUET D'HIVER",
    photoTone: "cream",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_6_kq39nw.jpg?_s=public-apps",
    collection: "hiver-2026",
    badge: "Édition",
  },
  {
    id: "bougie-32-melange-seche",
    name: "Mélange séché",
    subtitle: "Bougie fleurie · cire d'abeille",
    price: 76,
    blurb:
      "Mélange séché, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c0a89c", "#d8c0b4", "#ecd8c8"],
    notes: ["Rose noire", "Patchouli", "Encens"],
    sizes: [
      { label: "Moyen · 320g", price: 76 },
    ],
    scents: ["Composition mixte", "Foin & bois"],
    placeholderLabel: "MÉLANGE SÉCHÉ",
    photoTone: "dusk",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_urzjfn.jpg?_s=public-apps",
    collection: "automne-2026",
  },
  {
    id: "bougie-33-lavande-cedre",
    name: "Lavande & cèdre",
    subtitle: "Bougie fleurie · cire végétale",
    price: 62,
    blurb:
      "Lavande & cèdre, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#d4a09a", "#e8c8b8", "#f3dcc8"],
    notes: ["Rose ancienne", "Bois de santal", "Iris poudré"],
    sizes: [
      { label: "Petit · 180g", price: 43 },
      { label: "Moyen · 320g", price: 62 },
      { label: "Grand · 540g", price: 96 },
    ],
    scents: ["Rose poudrée", "Rose & oud", "Rose neutre"],
    placeholderLabel: "LAVANDE & CÈDRE",
    photoTone: "rose",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.37_1_m38ltf.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-34-rose-oud",
    name: "Rose & oud",
    subtitle: "Édition limitée · cire végétale",
    price: 84,
    blurb:
      "Rose & oud, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#e8d28a", "#f1e0a8", "#fbf0c8"],
    notes: ["Tournesol", "Cuir blond", "Caramel"],
    sizes: [
      { label: "Petit · 180g", price: 67 },
      { label: "Moyen · 320g", price: 84 },
    ],
    scents: ["Camomille pure", "Camomille & miel"],
    placeholderLabel: "ROSE & OUD",
    photoTone: "butter",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030690/WhatsApp_Image_2026-05-10_at_18.31.37_2_rfwoia.jpg?_s=public-apps",
    collection: "eid-adhaa-2026",
  },
  {
    id: "bougie-35-trio-decouverte",
    name: "Trio découverte",
    subtitle: "Édition saisonnière · cire de soja",
    price: 72,
    blurb:
      "Trio découverte, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#a39bc0", "#c4b8d4", "#ddd2e3"],
    notes: ["Lavande fine", "Romarin", "Cèdre blanc"],
    sizes: [
      { label: "Moyen · 320g", price: 72 },
      { label: "Grand · 540g", price: 108 },
    ],
    scents: ["Lavande nature", "Lavande & cèdre"],
    placeholderLabel: "TRIO DÉCOUVERTE",
    photoTone: "lavender",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030690/WhatsApp_Image_2026-05-10_at_18.31.37_3_yrjda7.jpg?_s=public-apps",
    collection: "printemps-2026",
  },
  {
    id: "bougie-36-recharge-florale",
    name: "Recharge florale",
    subtitle: "Bougie fleurie · cire de soja",
    price: 88,
    blurb:
      "Recharge florale, composée à la main dans notre atelier. Cire végétale fondue à basse température, fleurs séchées au cœur de la bougie.",
    swatch: ["#c98a8a", "#e0a8a8", "#efc8c0"],
    notes: ["Calendula", "Cuir tanné", "Tabac blond"],
    sizes: [
      { label: "Moyen · 320g", price: 88 },
    ],
    scents: ["Bouquet original", "Pivoine seule"],
    placeholderLabel: "RECHARGE FLORALE",
    photoTone: "terracotta",
    photo:
      "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030690/WhatsApp_Image_2026-05-10_at_18.31.37_cvikag.jpg?_s=public-apps",
    collection: "hiver-2026",
  },
];
