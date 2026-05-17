import { useState, type ReactNode } from "react";
import { SOMA_PRODUCTS } from "../../data/products";
import { ACTIVE_LOOKBOOK_COLLECTION } from "../../data/collections";
import { PhotoPlaceholder } from "../PhotoPlaceholder";
import { Lightbox, type LightboxImage } from "../Lightbox";

type Flourish = "petals" | "bouquet" | "sprig";

function LookbookTile({
  children,
  lookNumber,
  productName,
  onClick,
}: {
  children: ReactNode;
  lookNumber: string;
  productName: string;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        {children}
      </div>

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
        }}
      >
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
          {productName}
        </div>
      </div>
    </div>
  );
}

export function Lookbook() {
  const collectionProducts = SOMA_PRODUCTS.filter(
    (p) => p.collection === ACTIVE_LOOKBOOK_COLLECTION.slug,
  ).slice(0, 5);

  const flourishes: Flourish[] = ["bouquet", "petals", "sprig", "bouquet", "sprig"];

  const looks = collectionProducts.map((p, i) => ({
    num: String(i + 1).padStart(2, "0"),
    product: p,
    flourish: flourishes[i % flourishes.length],
  }));

  const lightboxImages: LightboxImage[] = looks.map((look) => ({
    src: look.product.photo ?? null,
    tone: look.product.photoTone,
    flourish: look.flourish,
    ratio: "4 / 5",
    label: `${look.product.name} · LK ${look.num}`,
  }));

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const activeImage = activeIdx === null ? null : lightboxImages[activeIdx];
  const open = (i: number) => setActiveIdx(i);
  const close = () => setActiveIdx(null);
  const prev = () =>
    setActiveIdx((i) =>
      i === null ? null : (i - 1 + lightboxImages.length) % lightboxImages.length,
    );
  const next = () =>
    setActiveIdx((i) =>
      i === null ? null : (i + 1) % lightboxImages.length,
    );

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
            Lookbook · {ACTIVE_LOOKBOOK_COLLECTION.label}{" "}
            {ACTIVE_LOOKBOOK_COLLECTION.year} ·{" "}
            {String(looks.length).padStart(2, "0")} looks
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
            {ACTIVE_LOOKBOOK_COLLECTION.tagline},{" "}
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
              en cire
            </em>
            .
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
            Cliquez une image pour l'agrandir.
          </p>
        </div>
        <a
          href="/lookbook"
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
          Voir tout le lookbook →
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
              lookNumber={look.num}
              productName={look.product.name}
              onClick={() => open(i)}
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

      <Lightbox image={activeImage} onClose={close} onPrev={prev} onNext={next} />
    </section>
  );
}
