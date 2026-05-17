import { SOMA_PRODUCTS, type Product } from "../../data/products";
import { ProductCard } from "../ProductCard";

const MAX_HOME_PRODUCTS = 9;

export function ShopGrid({ onOpen }: { onOpen: (p: Product) => void }) {
  const products = SOMA_PRODUCTS.slice(0, MAX_HOME_PRODUCTS);

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
            Tout notre catalogue · {String(SOMA_PRODUCTS.length).padStart(2, "0")} pièces
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
            Nos{" "}
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
              produits
            </em>
            .
          </h2>
        </div>
      </div>

      <div
        className="soma-shop-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.6rem",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={onOpen} density="airy" />
        ))}
      </div>

      <div
        style={{
          marginTop: "3.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--soma-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "var(--soma-ink-soft)",
            textTransform: "uppercase",
          }}
        >
          {products.length} / {SOMA_PRODUCTS.length} bougies
        </div>
        <a
          href="/boutique"
          style={{
            background: "var(--soma-ink)",
            color: "var(--soma-paper)",
            padding: "1.1rem 2.4rem",
            fontFamily: "var(--soma-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          Voir toute la boutique →
        </a>
      </div>
    </section>
  );
}
