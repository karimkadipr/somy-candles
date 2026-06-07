import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const p = resolve("app/data/products.ts");
let s = readFileSync(p, "utf8");

const map = {
  "bougie-01-rose-ancienne": "mariage",
  "bougie-02-pivoine-d-avril": "mariage",
  "bougie-03-lavande-de-sault": "decoratives",
  "bougie-04-camomille-des-pres": "naissance",
  "bougie-05-eucalyptus-blanc": "aid",
  "bougie-06-mimosa-d-hiver": "decoratives",
  "bougie-07-jasmin-de-nuit": "mariage",
  "bougie-08-violette-du-sud": "decoratives",
  "bougie-09-iris-poudre": "mariage",
  "bougie-10-magnolia-ouvert": "mariage",
  "bougie-11-tournesol-d-aout": "decoratives",
  "bougie-12-muguet-du-1er-mai": "naissance",
  "bougie-13-hortensia-bleu": "decoratives",
  "bougie-14-pavot-rouge": "decoratives",
  "bougie-15-glycine-pendante": "mariage",
  "bougie-16-bleuet-sauvage": "naissance",
  "bougie-17-cosmos-rose": "decoratives",
  "bougie-18-renoncule-beurre": "naissance",
  "bougie-19-dahlia-braise": "decoratives",
  "bougie-20-anemone-violette": "aid",
  "bougie-21-capucine-vive": "decoratives",
  "bougie-22-tubereuse": "mariage",
  "bougie-23-souci-dore": "aid",
  "bougie-24-oeillet-ancien": "decoratives",
  "bougie-25-pensee-mauve": "naissance",
  "bougie-26-marguerite-des-champs": "naissance",
  "bougie-27-achillee-millefeuille": "aid",
  "bougie-28-gypsophile-nuage": "bouquet",
  "bougie-29-statice-violet": "bouquet",
  "bougie-30-bouquet-d-ete": "bouquet",
  "bougie-31-bouquet-d-hiver": "bouquet",
  "bougie-32-melange-seche": "bouquet",
  "bougie-33-lavande-cedre": "aid",
  "bougie-34-rose-oud": "aid",
  "bougie-35-trio-decouverte": "naissance",
  "bougie-36-recharge-florale": "decoratives",
};

let changed = 0;
for (const [id, col] of Object.entries(map)) {
  const re = new RegExp(`(id: "${id}",[\\s\\S]*?collection: )"[^"]*"`);
  const before = s;
  s = s.replace(re, `$1"${col}"`);
  if (s !== before) changed++;
}

writeFileSync(p, s);
console.log(`Updated ${changed} / ${Object.keys(map).length} products`);
