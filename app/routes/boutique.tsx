import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/boutique";
import { SomaNav } from "../components/SomaNav";
import { SomaFooter } from "../components/SomaFooter";
import { ProductCard } from "../components/ProductCard";
import { QuickView } from "../components/QuickView";
import { SOMA_PRODUCTS, type Product } from "../data/products";
import { COLLECTIONS } from "../data/collections";

type SortOption = "featured" | "name" | "price-asc" | "price-desc";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "La boutique — Somy Candles" },
    {
      name: "description",
      content:
        "Toutes nos bougies fleuries — mono-fleurs, bouquets et éditions saisonnières, composées à la main dans notre atelier de Grasse.",
    },
  ];
}

export default function BoutiquePage() {
  const [params, setParams] = useSearchParams();
  const filter = params.get("collection") ?? "tout";
  const setFilter = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === "tout") next.delete("collection");
    else next.set("collection", id);
    setParams(next, { replace: true });
  };
  const [visible, setVisible] = useState(9);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [sort, setSort] = useState<SortOption>("featured");

  const filters = [
    { id: "tout", label: `Tout · ${SOMA_PRODUCTS.length}` },
    ...COLLECTIONS.map((c) => {
      const count = SOMA_PRODUCTS.filter((p) => p.collection === c.slug).length;
      return {
        id: c.slug,
        label: `${c.label} · ${String(count).padStart(2, "0")}`,
      };
    }),
  ];

  let filtered = SOMA_PRODUCTS.filter((p) => {
    if (filter === "tout") return true;
    return p.collection === filter;
  });

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "name")
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, "fr"));

  useEffect(() => {
    setVisible(9);
  }, [filter, sort]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div
      style={{
        background: "var(--soma-paper)",
        color: "var(--soma-ink)",
        minHeight: "100vh",
      }}
    >
      <SomaNav current="boutique" />

      <section
        className="soma-section-pad-x"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "4rem 2.4rem 2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            marginBottom: "1rem",
          }}
        >
          <span style={{ width: 36, height: 1, background: "var(--soma-accent)" }} />
          <span
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              color: "var(--soma-accent)",
              textTransform: "uppercase",
            }}
          >
            La boutique · {SOMA_PRODUCTS.length} pièces
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--soma-display)",
            fontWeight: 400,
            fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
            lineHeight: 0.98,
            margin: 0,
            color: "var(--soma-ink)",
          }}
        >
          Toutes nos{" "}
          <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
            bougies fleuries
          </em>
          .
        </h1>
        <p
          style={{
            fontFamily: "var(--soma-body)",
            fontSize: "1.1rem",
            lineHeight: 1.55,
            color: "var(--soma-ink-soft)",
            marginTop: "1.4rem",
            maxWidth: 560,
          }}
        >
          Mono-fleurs, bouquets et éditions saisonnières. Toutes nos bougies sont
          composées à la main dans notre atelier, en petites quantités.
        </p>
      </section>

      <section
        className="soma-section-pad-x"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "2rem 2.4rem",
          borderBottom: "1px solid var(--soma-line)",
        }}
      >
        <div
          className="soma-shop-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.2rem",
          }}
        >
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

          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <span
              style={{
                fontFamily: "var(--soma-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "var(--soma-ink-soft)",
                textTransform: "uppercase",
              }}
            >
              Trier
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              style={{
                background: "transparent",
                border: "1px solid var(--soma-line)",
                padding: "0.5rem 0.8rem",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "var(--soma-ink)",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              <option value="featured">À la une</option>
              <option value="name">Nom · A → Z</option>
              <option value="price-asc">Prix · croissant</option>
              <option value="price-desc">Prix · décroissant</option>
            </select>
          </div>
        </div>
      </section>

      <section
        className="soma-section-pad-x soma-section-pad"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "3rem 2.4rem 6rem",
        }}
      >
        <div
          className="soma-shop-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.6rem",
          }}
        >
          {shown.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={setActiveProduct}
              density="airy"
            />
          ))}
        </div>

        <div
          style={{
            marginTop: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.2rem",
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
            {Math.min(visible, filtered.length)} / {filtered.length} pièce
            {filtered.length > 1 ? "s" : ""}
          </div>
          {hasMore ? (
            <button
              onClick={() => setVisible((v) => v + 9)}
              style={{
                background: "var(--soma-ink)",
                color: "var(--soma-paper)",
                border: "none",
                padding: "1.1rem 2.4rem",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              Voir plus
            </button>
          ) : filtered.length > 9 ? (
            <div
              style={{
                fontFamily: "var(--soma-display)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "var(--soma-ink-soft)",
              }}
            >
              · vous avez tout vu ·
            </div>
          ) : null}
        </div>
      </section>

      <SomaFooter />
      <QuickView product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}
