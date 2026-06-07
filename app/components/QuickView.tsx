import { useEffect, useState, type MouseEvent } from "react";
import type { Product } from "../data/products";
import { fmtDzd } from "../lib/format";
import { whatsappLink } from "../lib/contact";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [formatIdx, setFormatIdx] = useState(0);
  const [scentIdx, setScentIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!product) return;
    setFormatIdx(0);
    setScentIdx(0);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentFormat = product.formats[formatIdx];
  const currentPrice = currentFormat.price;
  const currentScent = product.scents[scentIdx];
  const priceStr = fmtDzd(currentPrice);

  const orderMessage = [
    `Bonjour Somy Candles, je souhaite commander la bougie « ${product.name} ».`,
    "",
    `Format : ${currentFormat.label}`,
    `Parfum : ${currentScent}`,
    `Prix : ${priceStr}`,
  ].join("\n");
  const orderHref = whatsappLink(orderMessage);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!zoom) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="soma-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(35,22,15,0.55)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        animation: "soma-fade 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="soma-quickview-modal"
        style={{
          background: "var(--soma-paper)",
          maxWidth: 1100,
          width: "100%",
          maxHeight: "92vh",
          overflow: "auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          position: "relative",
          animation: "soma-rise 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            width: 36,
            height: 36,
            background: "var(--soma-paper)",
            border: "1px solid var(--soma-line)",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
            fontFamily: "var(--soma-mono)",
            fontSize: "0.9rem",
            color: "var(--soma-ink)",
          }}
        >
          ×
        </button>

        <div
          className="soma-quickview-gallery"
          style={{
            background: "var(--soma-paper-2)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
        >
          <div
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMouseMove}
            style={{
              position: "relative",
              cursor: zoom ? "zoom-out" : "zoom-in",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                transform: zoom ? "scale(1.7)" : "scale(1)",
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transition: zoom ? "none" : "transform 0.4s",
              }}
            >
              <PhotoPlaceholder
                tone={product.photoTone}
                label=""
                ratio="4 / 5"
                src={product.photo ?? null}
                flourish="bouquet"
              />
            </div>
            {!zoom && product.photo && (
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  color: "rgba(40,28,22,0.55)",
                  background: "rgba(244,236,216,0.7)",
                  padding: "0.35rem 0.6rem",
                }}
              >
                ⌕ SURVOLER POUR ZOOMER
              </div>
            )}
          </div>
        </div>

        <div
          className="soma-quickview-details"
          style={{
            padding: "3rem 2.6rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--soma-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                color: "var(--soma-accent)",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              {product.subtitle}
            </p>
            <h2
              style={{
                fontFamily: "var(--soma-display)",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "2.6rem",
                margin: "0.4rem 0 0",
                lineHeight: 1.05,
                color: "var(--soma-ink)",
              }}
            >
              {product.name}
            </h2>
            <div
              style={{
                marginTop: "0.9rem",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                color: "var(--soma-ink)",
              }}
            >
              {fmtDzd(currentPrice)}{" "}
              <span
                style={{
                  color: "var(--soma-ink-soft)",
                  fontSize: "0.7rem",
                  marginLeft: "0.4rem",
                }}
              >
                TTC · livraison offerte dès 12 000 DA
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--soma-body)",
              fontSize: "1rem",
              lineHeight: 1.55,
              color: "var(--soma-ink)",
              margin: 0,
            }}
          >
            {product.blurb}
          </p>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--soma-ink-soft)",
                  textTransform: "uppercase",
                }}
              >
                Format
              </span>
              <span
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.04em",
                  color: "var(--soma-ink-soft)",
                }}
              >
                {product.formats[formatIdx].label}
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${product.formats.length}, 1fr)`,
                gap: "0.5rem",
              }}
            >
              {product.formats.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setFormatIdx(i)}
                  style={{
                    padding: "0.7rem 0.5rem",
                    border:
                      formatIdx === i
                        ? "1.5px solid var(--soma-ink)"
                        : "1px solid var(--soma-line)",
                    background: formatIdx === i ? "var(--soma-paper-2)" : "transparent",
                    cursor: "pointer",
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    color: "var(--soma-ink)",
                    transition: "all 0.2s",
                  }}
                >
                  {s.label}
                  <div
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--soma-ink-soft)",
                      marginTop: 2,
                    }}
                  >
                    {fmtDzd(s.price)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--soma-ink-soft)",
                  textTransform: "uppercase",
                }}
              >
                Parfum
              </span>
              <span
                style={{
                  fontFamily: "var(--soma-body)",
                  fontStyle: "italic",
                  fontSize: "0.85rem",
                  color: "var(--soma-ink)",
                }}
              >
                {product.scents[scentIdx]}
              </span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {product.scents.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setScentIdx(i)}
                  style={{
                    padding: "0.55rem 0.9rem",
                    border:
                      scentIdx === i
                        ? "1.5px solid var(--soma-ink)"
                        : "1px solid var(--soma-line)",
                    background: scentIdx === i ? "var(--soma-ink)" : "transparent",
                    color: scentIdx === i ? "var(--soma-paper)" : "var(--soma-ink)",
                    cursor: "pointer",
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1.1rem 1.5rem",
              background: "var(--soma-ink)",
              color: "var(--soma-paper)",
              border: "none",
              fontFamily: "var(--soma-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.7rem",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#25D366";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--soma-ink)";
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Commander sur WhatsApp — {priceStr}
          </a>

          <p
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "var(--soma-ink-soft)",
              margin: 0,
              textAlign: "center",
            }}
          >
            Fait main · expédié sous 3 jours ouvrés
          </p>
        </div>
      </div>
    </div>
  );
}
