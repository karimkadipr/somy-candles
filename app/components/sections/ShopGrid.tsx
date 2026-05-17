import { useState } from "react";
import { SOMA_PRODUCTS, type Product } from "../../data/products";
import { ProductCard } from "../ProductCard";

type Density = "airy" | "compact";

export function ShopGrid({
  onOpen,
  density = "airy",
}: {
  onOpen: (p: Product) => void;
  density?: Density;
}) {
  const [filter, setFilter] = useState("tout");

  const isBouquet = (p: Product) => /^(Bouquet|Mélange)/i.test(p.name);
  const isCadeau = (p: Product) =>
    /^(Trio|Recharge|Coffret|Carte cadeau)/i.test(p.name) ||
    p.badge === "Cadeau" ||
    p.badge === "Recharge";
  const isEdition = (p: Product) =>
    p.badge === "Édition" || p.badge === "Pièce unique" || p.badge === "Saison";

  const filters = [
    { id: "tout", label: `Tout · ${SOMA_PRODUCTS.length}` },
    { id: "fleur", label: "Mono-fleur" },
    { id: "bouquet", label: "Bouquets" },
    { id: "edition", label: "Éditions" },
    { id: "cadeau", label: "Coffrets & cadeaux" },
  ];

  const filtered = SOMA_PRODUCTS.filter((p) => {
    if (filter === "tout") return true;
    if (filter === "edition") return isEdition(p);
    if (filter === "bouquet") return isBouquet(p);
    if (filter === "cadeau") return isCadeau(p);
    if (filter === "fleur") return !isBouquet(p) && !isCadeau(p);
    return true;
  });

  return (
    <section
      id="shop"
      data-screen-label="03 Boutique"
      className="soma-section-pad soma-section-pad-x"
      style={{ padding: "6rem 2.4rem", maxWidth: 1440, margin: "0 auto" }}
    >
      <div
        className="soma-shop-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              color: "var(--soma-accent)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            La boutique · {SOMA_PRODUCTS.length.toString().padStart(2, "0")} pièces
          </p>
          <h2
            style={{
              fontFamily: "var(--soma-display)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              margin: "0.6rem 0 0",
              lineHeight: 1,
              color: "var(--soma-ink)",
            }}
          >
            Notre collection{" "}
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
              de saison
            </em>
            .
          </h2>
        </div>
        <div
          className="soma-filter-row"
          style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: "0.55rem 1rem",
                background: filter === f.id ? "var(--soma-ink)" : "transparent",
                color: filter === f.id ? "var(--soma-paper)" : "var(--soma-ink)",
                border: "1px solid var(--soma-ink)",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="soma-shop-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            density === "compact" ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
          gap: density === "compact" ? "1rem" : "1.6rem",
        }}
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={onOpen} density={density} />
        ))}
      </div>

      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontFamily: "var(--soma-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "var(--soma-ink-soft)",
          textTransform: "uppercase",
        }}
      >
        {filtered.length} pièce{filtered.length > 1 ? "s" : ""} affichée
        {filtered.length > 1 ? "s" : ""} · livraison France &amp; Algérie
      </div>
    </section>
  );
}
