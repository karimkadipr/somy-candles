import { useState, type ReactNode } from "react";
import { SOMA_PRODUCTS, type Product, type Season } from "../../data/products";
import { fmtDzd } from "../../lib/format";
import { PhotoPlaceholder } from "../PhotoPlaceholder";

const CURRENT_SEASON: Season = "printemps";
const SEASON_YEAR = 2026;
const SEASON_LABEL: Record<Season, string> = {
  printemps: "printemps",
  "été": "été",
  automne: "automne",
  hiver: "hiver",
};

function LookbookTile({
  children,
  productId,
  onOpen,
  lookNumber,
}: {
  children: ReactNode;
  productId: string;
  onOpen: (p: Product) => void;
  lookNumber: string;
}) {
  const product = SOMA_PRODUCTS.find((p) => p.id === productId);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (product) onOpen(product);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      style={{
        position: "relative",
        cursor: product ? "pointer" : "default",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          transform: hover && product ? "scale(1.04)" : "scale(1)",
          transition: "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        {children}
      </div>

      {product && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 50%, rgba(20,12,8,0.65) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "1.1rem",
              bottom: "1.1rem",
              right: "1.1rem",
              color: "#f4ecd8",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  opacity: 0.75,
                  marginBottom: 4,
                }}
              >
                Look {lookNumber}
              </div>
              <div
                style={{
                  fontFamily: "var(--soma-display)",
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                  lineHeight: 1.05,
                  textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                }}
              >
                {product.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.06em",
                  marginTop: 4,
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                {fmtDzd(product.price)}
              </div>
            </div>

            <span
              style={{
                flexShrink: 0,
                fontFamily: "var(--soma-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                padding: "0.55rem 0.8rem",
                background: hover ? "var(--soma-paper)" : "rgba(244,236,216,0.18)",
                backdropFilter: "blur(6px)",
                color: hover ? "var(--soma-ink)" : "#f4ecd8",
                border: "1px solid rgba(244,236,216,0.4)",
                textTransform: "uppercase",
                transition: "all 0.3s",
                alignSelf: "flex-end",
              }}
            >
              Acheter →
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export function Lookbook({ onOpen }: { onOpen: (p: Product) => void }) {
  const seasonProducts = SOMA_PRODUCTS.filter((p) => p.season === CURRENT_SEASON).slice(0, 5);
  const flourishes = ["bouquet", "petals", "sprig", "bouquet", "sprig"] as const;
  const looks = seasonProducts.map((p, i) => ({
    num: String(i + 1).padStart(2, "0"),
    product: p,
    flourish: flourishes[i % flourishes.length],
  }));

  return (
    <section
      id="lookbook"
      data-screen-label="02 Lookbook"
      className="soma-section-pad soma-section-pad-x"
      style={{ padding: "8rem 2.4rem", maxWidth: 1440, margin: "0 auto" }}
    >
      <div
        className="soma-lookbook-header"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "end",
          marginBottom: "3rem",
          gap: "2rem",
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
            Lookbook · Saison {SEASON_LABEL[CURRENT_SEASON]} {SEASON_YEAR} · {String(looks.length).padStart(2, "0")} looks
          </p>
          <h2
            style={{
              fontFamily: "var(--soma-display)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              margin: "0.6rem 0 0.5rem",
              lineHeight: 1,
              color: "var(--soma-ink)",
            }}
          >
            Le mois de mai,{" "}
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>en cire</em>.
          </h2>
          <p
            style={{
              fontFamily: "var(--soma-body)",
              fontSize: "0.95rem",
              color: "var(--soma-ink-soft)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Cliquez une image pour ajouter au panier.
          </p>
        </div>
        <a
          href="/boutique"
          style={{
            fontFamily: "var(--soma-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            color: "var(--soma-ink)",
            textDecoration: "none",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            borderBottom: "1px solid var(--soma-ink)",
            paddingBottom: 4,
          }}
        >
          Voir tout le shop →
        </a>
      </div>

      <div
        className="soma-lookbook-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gridTemplateRows: "340px 340px",
          gap: "1.2rem",
        }}
      >
        {looks.map((look, i) => {
          const tile = (
            <PhotoPlaceholder
              tone={look.product.photoTone}
              label={`LK · ${look.num} / ${look.product.name.toUpperCase()}`}
              ratio="auto"
              flourish={look.flourish}
              src={look.product.photo ?? null}
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          );
          return (
            <LookbookTile
              key={look.product.id}
              productId={look.product.id}
              onOpen={onOpen}
              lookNumber={look.num}
            >
              {i === 0 ? (
                <div
                  className="soma-lookbook-tile-hero"
                  style={{ gridRow: "1 / 3", position: "relative", height: "100%" }}
                >
                  {tile}
                </div>
              ) : (
                tile
              )}
            </LookbookTile>
          );
        })}
      </div>
    </section>
  );
}
