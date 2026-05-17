// Quick-view modal with variant picker (size, scent), image zoom, gallery.

function QuickView({ product, onClose }) {
  const [sizeIdx, setSizeIdx] = React.useState(0);
  const [scentIdx, setScentIdx] = React.useState(0);
  const [galleryIdx, setGalleryIdx] = React.useState(0);
  const [zoom, setZoom] = React.useState(false);
  const [zoomPos, setZoomPos] = React.useState({ x: 50, y: 50 });
  const [added, setAdded] = React.useState(false);

  React.useEffect(() => {
    if (!product) return;
    setSizeIdx(0);
    setScentIdx(0);
    setGalleryIdx(0);
    setAdded(false);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const galleryFlourishes = ["petals", "bouquet", "sprig"];
  const currentSize = product.sizes[sizeIdx];
  const currentPrice = currentSize.price;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleMouseMove = (e) => {
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

        {/* Gallery */}
        <div className="soma-quickview-gallery" style={{ background: "var(--soma-paper-2)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
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
                transform: zoom ? `scale(1.7)` : "scale(1)",
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transition: zoom ? "none" : "transform 0.4s",
              }}
            >
              <PhotoPlaceholder
                key={galleryIdx}
                tone={product.photoTone}
                label={product.placeholderLabel + " · " + (galleryIdx + 1).toString().padStart(2, "0")}
                ratio="4 / 5"
                flourish={galleryFlourishes[galleryIdx % galleryFlourishes.length]}
              />
            </div>
            {!zoom && (
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
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {galleryFlourishes.map((f, i) => (
              <button
                key={i}
                onClick={() => setGalleryIdx(i)}
                style={{
                  flex: 1,
                  padding: 0,
                  border: galleryIdx === i ? "1.5px solid var(--soma-ink)" : "1px solid var(--soma-line)",
                  background: "transparent",
                  cursor: "pointer",
                  overflow: "hidden",
                  outlineOffset: 2,
                }}
              >
                <PhotoPlaceholder
                  tone={product.photoTone}
                  label=""
                  ratio="1 / 1"
                  flourish={f}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="soma-quickview-details" style={{ padding: "3rem 2.6rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.22em", color: "var(--soma-accent)", margin: 0, textTransform: "uppercase" }}>
              {product.subtitle}
            </p>
            <h2 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontStyle: "italic", fontSize: "2.6rem", margin: "0.4rem 0 0", lineHeight: 1.05, color: "var(--soma-ink)" }}>
              {product.name}
            </h2>
            <div style={{ marginTop: "0.9rem", fontFamily: "var(--soma-mono)", fontSize: "0.95rem", letterSpacing: "0.04em", color: "var(--soma-ink)" }}>
              {window.fmtDzd ? window.fmtDzd(currentPrice) : currentPrice + "€"} <span style={{ color: "var(--soma-ink-soft)", fontSize: "0.7rem", marginLeft: "0.4rem" }}>TTC · livraison offerte dès 12 000 DA</span>
            </div>
          </div>

          <p style={{ fontFamily: "var(--soma-body)", fontSize: "1rem", lineHeight: 1.55, color: "var(--soma-ink)", margin: 0 }}>
            {product.blurb}
          </p>

          <div style={{ borderTop: "1px solid var(--soma-line)", paddingTop: "1.1rem" }}>
            <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", margin: "0 0 0.6rem", textTransform: "uppercase" }}>
              Notes olfactives
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {product.notes.map((n) => (
                <span key={n} style={{ fontFamily: "var(--soma-body)", fontStyle: "italic", fontSize: "0.95rem", padding: "0.3rem 0.7rem", border: "1px solid var(--soma-line)", borderRadius: 999 }}>
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Size picker */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", textTransform: "uppercase" }}>Format</span>
              <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.04em", color: "var(--soma-ink-soft)" }}>{product.sizes[sizeIdx].label}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${product.sizes.length}, 1fr)`, gap: "0.5rem" }}>
              {product.sizes.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setSizeIdx(i)}
                  style={{
                    padding: "0.7rem 0.5rem",
                    border: sizeIdx === i ? "1.5px solid var(--soma-ink)" : "1px solid var(--soma-line)",
                    background: sizeIdx === i ? "var(--soma-paper-2)" : "transparent",
                    cursor: "pointer",
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    color: "var(--soma-ink)",
                    transition: "all 0.2s",
                  }}
                >
                  {s.label.split(" · ")[0]}
                  <div style={{ fontSize: "0.6rem", color: "var(--soma-ink-soft)", marginTop: 2 }}>{window.fmtDzd ? window.fmtDzd(s.price) : s.price + "€"}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Scent picker */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", textTransform: "uppercase" }}>Parfum</span>
              <span style={{ fontFamily: "var(--soma-body)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--soma-ink)" }}>{product.scents[scentIdx]}</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {product.scents.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setScentIdx(i)}
                  style={{
                    padding: "0.55rem 0.9rem",
                    border: scentIdx === i ? "1.5px solid var(--soma-ink)" : "1px solid var(--soma-line)",
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

          <button
            onClick={handleAdd}
            style={{
              padding: "1.1rem 1.5rem",
              background: added ? "var(--soma-accent)" : "var(--soma-ink)",
              color: "var(--soma-paper)",
              border: "none",
              fontFamily: "var(--soma-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            {added ? "✓ Ajouté au panier" : `Ajouter — ${window.fmtDzd ? window.fmtDzd(currentPrice) : currentPrice + "€"}`}
          </button>

          <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--soma-ink-soft)", margin: 0, textAlign: "center" }}>
            Fait main · expédié sous 3 jours ouvrés
          </p>
        </div>
      </div>
    </div>
  );
}

window.QuickView = QuickView;
