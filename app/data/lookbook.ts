import type { PhotoTone, Season } from "./products";

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
  { label: "01", tone: "rose", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.52_1_t85yhq.jpg?_s=public-apps" },
  { label: "02", tone: "butter", flourish: "petals", ratio: "4 / 5", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.52_2_mnlbj2.jpg?_s=public-apps" },
  { label: "03", tone: "lavender", flourish: "sprig", ratio: "1 / 1", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.52_favort.jpg?_s=public-apps" },
  { label: "04", tone: "terracotta", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.53_1_qhmfhv.jpg?_s=public-apps" },
  { label: "05", tone: "ochre", flourish: "petals", ratio: "4 / 5", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.53_pnczyy.jpg?_s=public-apps" },
  { label: "06", tone: "sage", flourish: "sprig", ratio: "1 / 1", season: "hiver", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_1_ravbpf.jpg?_s=public-apps" },
  { label: "07", tone: "cream", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_2_vay6wx.jpg?_s=public-apps" },
  { label: "08", tone: "dusk", flourish: "petals", ratio: "4 / 5", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_3_mw6lkz.jpg?_s=public-apps" },
  { label: "09", tone: "rose", flourish: "sprig", ratio: "1 / 1", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.57_4_xetec9.jpg?_s=public-apps" },
  { label: "10", tone: "butter", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.57_5_rupb8a.jpg?_s=public-apps" },
  { label: "11", tone: "lavender", flourish: "petals", ratio: "4 / 5", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_6_bvq3nc.jpg?_s=public-apps" },
  { label: "12", tone: "terracotta", flourish: "sprig", ratio: "1 / 1", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_7_ymokux.jpg?_s=public-apps" },
  { label: "13", tone: "ochre", flourish: "bouquet", ratio: "3 / 4", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_8_xsjwaf.jpg?_s=public-apps" },
  { label: "14", tone: "sage", flourish: "petals", ratio: "4 / 5", season: "automne", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030687/WhatsApp_Image_2026-05-10_at_18.30.57_gsbrn8.jpg?_s=public-apps" },
  { label: "15", tone: "cream", flourish: "sprig", ratio: "1 / 1", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_1_tfgaoy.jpg?_s=public-apps" },
  { label: "16", tone: "dusk", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_2_lwmj39.jpg?_s=public-apps" },
  { label: "17", tone: "rose", flourish: "petals", ratio: "4 / 5", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_3_snwqjp.jpg?_s=public-apps" },
  { label: "18", tone: "butter", flourish: "sprig", ratio: "1 / 1", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_4_bnvu7a.jpg?_s=public-apps" },
  { label: "19", tone: "lavender", flourish: "bouquet", ratio: "3 / 4", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_5_u8w1vg.jpg?_s=public-apps" },
  { label: "20", tone: "terracotta", flourish: "petals", ratio: "4 / 5", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.30.58_ylryu0.jpg?_s=public-apps" },
  { label: "21", tone: "ochre", flourish: "sprig", ratio: "1 / 1", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.31.35_1_w1mmk2.jpg?_s=public-apps" },
  { label: "22", tone: "sage", flourish: "bouquet", ratio: "3 / 4", season: "automne", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.31.35_2_tuc3mm.jpg?_s=public-apps" },
  { label: "23", tone: "cream", flourish: "petals", ratio: "4 / 5", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030688/WhatsApp_Image_2026-05-10_at_18.31.35_3_kp98cz.jpg?_s=public-apps" },
  { label: "24", tone: "dusk", flourish: "sprig", ratio: "1 / 1", season: "automne", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.35_4_hpq2cq.jpg?_s=public-apps" },
  { label: "25", tone: "rose", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.35_ta9dqy.jpg?_s=public-apps" },
  { label: "26", tone: "butter", flourish: "petals", ratio: "4 / 5", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_1_qgl913.jpg?_s=public-apps" },
  { label: "27", tone: "lavender", flourish: "sprig", ratio: "1 / 1", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_2_hjjrey.jpg?_s=public-apps" },
  { label: "28", tone: "terracotta", flourish: "bouquet", ratio: "3 / 4", season: "automne", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_3_fc9pw7.jpg?_s=public-apps" },
  { label: "29", tone: "ochre", flourish: "petals", ratio: "4 / 5", season: "automne", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_4_skkoae.jpg?_s=public-apps" },
  { label: "30", tone: "sage", flourish: "sprig", ratio: "1 / 1", season: "été", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_5_xotniq.jpg?_s=public-apps" },
  { label: "31", tone: "cream", flourish: "bouquet", ratio: "3 / 4", season: "hiver", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_6_kq39nw.jpg?_s=public-apps" },
  { label: "32", tone: "dusk", flourish: "petals", ratio: "4 / 5", season: "automne", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.36_urzjfn.jpg?_s=public-apps" },
  { label: "33", tone: "rose", flourish: "sprig", ratio: "1 / 1", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030689/WhatsApp_Image_2026-05-10_at_18.31.37_1_m38ltf.jpg?_s=public-apps" },
  { label: "34", tone: "butter", flourish: "bouquet", ratio: "3 / 4", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030690/WhatsApp_Image_2026-05-10_at_18.31.37_2_rfwoia.jpg?_s=public-apps" },
  { label: "35", tone: "lavender", flourish: "petals", ratio: "4 / 5", season: "printemps", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030690/WhatsApp_Image_2026-05-10_at_18.31.37_3_yrjda7.jpg?_s=public-apps" },
  { label: "36", tone: "terracotta", flourish: "sprig", ratio: "1 / 1", season: "hiver", src: "https://res.cloudinary.com/smartiniaaaaaa/image/upload/v1779030690/WhatsApp_Image_2026-05-10_at_18.31.37_cvikag.jpg?_s=public-apps" },
];
