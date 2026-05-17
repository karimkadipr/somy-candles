import { useState, type MouseEvent } from "react";
import type { Product } from "../data/products";
import { fmtDzd } from "../lib/format";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type Density = "airy" | "compact";

export function ProductCard({
  product,
  onOpen,
  density = "airy",
}: {
  product: Product;
  onOpen: (p: Product) => void;
  density?: Density;
}) {
  const [hover, setHover] = useState(false);
  const padX = density === "compact" ? "0.75rem" : "1.1rem";
  const padY = density === "compact" ? "0.9rem" : "1.3rem";

  const flourish =
    product.id === "bouquet-aout"
      ? "bouquet"
      : product.id === "lavande-haute"
        ? "sprig"
        : "petals";

  const phone = "213555000000";
  const priceStr = fmtDzd(product.price);
  const message = `Bonjour Soma, je suis intéressé(e) par la bougie « ${product.name} » (${priceStr}). Est-elle disponible ?`;
  const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <article
      className="soma-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(product)}
      style={{
        cursor: "pointer",
        position: "relative",
        background: "var(--soma-paper-2)",
        transition:
          "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <PhotoPlaceholder
          tone={product.photoTone}
          label={product.placeholderLabel}
          ratio="4 / 5"
          src={product.photo || null}
          flourish={flourish}
          style={{
            transition:
              "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.5s",
            transform: hover ? "scale(1.04)" : "scale(1)",
            filter: hover ? "saturate(1.05) brightness(1.02)" : "none",
          }}
        />
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background: "var(--soma-ink)",
              color: "var(--soma-paper)",
              fontFamily: "var(--soma-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              padding: "0.35rem 0.6rem",
            }}
          >
            {product.badge.toUpperCase()}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "1.2rem",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.4s",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              background: "var(--soma-paper)",
              color: "var(--soma-ink)",
              fontFamily: "var(--soma-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              padding: "0.7rem 1.2rem",
              textTransform: "uppercase",
              transform: hover ? "translateY(0)" : "translateY(8px)",
              transition: "transform 0.4s",
            }}
          >
            Aperçu
          </span>
        </div>
      </div>

      <div style={{ padding: `${padY} ${padX}` }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--soma-display)",
              fontWeight: 400,
              fontSize: "1.4rem",
              margin: 0,
              lineHeight: 1.1,
              fontStyle: "italic",
            }}
          >
            {product.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.78rem",
              color: "var(--soma-ink)",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            {priceStr}
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--soma-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            color: "var(--soma-ink-soft)",
            margin: "0.5rem 0 0",
            textTransform: "uppercase",
          }}
        >
          {product.subtitle}
        </p>

        <div style={{ display: "flex", gap: "0.3rem", marginTop: "0.9rem" }}>
          {product.swatch.map((c, i) => (
            <span
              key={i}
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: c,
                boxShadow: "inset 0 0 0 1px rgba(40,28,22,0.08)",
              }}
            />
          ))}
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
            const el = e.currentTarget;
            el.style.background = "#25D366";
            el.style.color = "#fff";
            el.style.borderColor = "#25D366";
          }}
          onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
            const el = e.currentTarget;
            el.style.background = "var(--soma-paper)";
            el.style.color = "var(--soma-ink)";
            el.style.borderColor = "var(--soma-ink)";
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.55rem",
            marginTop: "1rem",
            padding: "0.7rem 0.9rem",
            background: "var(--soma-paper)",
            color: "var(--soma-ink)",
            border: "1px solid var(--soma-ink)",
            fontFamily: "var(--soma-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
}
