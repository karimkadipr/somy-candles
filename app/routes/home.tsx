import { useState } from "react";
import type { Route } from "./+types/home";
import type { Product } from "../data/products";
import { SomaNav } from "../components/SomaNav";
import { SomaFooter } from "../components/SomaFooter";
import { QuickView } from "../components/QuickView";
import { Hero } from "../components/sections/Hero";
import { Marquee } from "../components/sections/Marquee";
import { Lookbook } from "../components/sections/Lookbook";
import { ShopGrid } from "../components/sections/ShopGrid";
import { CraftBand } from "../components/sections/CraftBand";
import { Inquiry } from "../components/sections/Inquiry";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Somy Candles — Bougies fleuries faites main" },
    {
      name: "description",
      content:
        "Soma compose des bougies fleuries en édition limitée. Cueillette à la main, cire de soja française, atelier de Grasse depuis 2019.",
    },
  ];
}

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <div
      style={{
        background: "var(--soma-paper)",
        color: "var(--soma-ink)",
        minHeight: "100vh",
      }}
    >
      <SomaNav current="home" />
      <Hero />
      <Marquee />
      <Lookbook onOpen={setActiveProduct} />
      <ShopGrid onOpen={setActiveProduct} density="airy" />
      <CraftBand />
      <Inquiry />
      <SomaFooter />

      <QuickView product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}
