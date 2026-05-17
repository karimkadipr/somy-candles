// Lookbook — true masonry, images only.

const LOOKBOOK_IMAGES = [
  { tone: "rose",       label: "01", flourish: "bouquet", src: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&q=80", ratio: "3 / 4" },
  { tone: "butter",     label: "02", flourish: "petals",  ratio: "4 / 5" },
  { tone: "terracotta", label: "03", flourish: "bouquet", src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80", ratio: "1 / 1" },
  { tone: "lavender",   label: "04", flourish: "sprig",   ratio: "3 / 4" },
  { tone: "cream",      label: "05", flourish: "petals",  src: "https://images.unsplash.com/photo-1495231916356-a86217efff12?w=900&q=80", ratio: "4 / 5" },
  { tone: "sage",       label: "06", flourish: "sprig",   ratio: "1 / 1" },
  { tone: "dusk",       label: "07", flourish: "bouquet", src: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=900&q=80", ratio: "3 / 4" },
  { tone: "ochre",      label: "08", flourish: "petals",  ratio: "4 / 5" },
  { tone: "rose",       label: "09", flourish: "bouquet", src: "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=900&q=80", ratio: "1 / 1" },
  { tone: "terracotta", label: "10", flourish: "petals",  ratio: "3 / 4" },
  { tone: "lavender",   label: "11", flourish: "petals",  ratio: "4 / 5" },
  { tone: "sage",       label: "12", flourish: "sprig",   ratio: "3 / 4" },
  { tone: "ochre",      label: "13", flourish: "petals",  ratio: "1 / 1" },
  { tone: "rose",       label: "14", flourish: "petals",  ratio: "4 / 5" },
  { tone: "dusk",       label: "15", flourish: "petals",  ratio: "3 / 4" },
  { tone: "butter",     label: "16", flourish: "petals",  ratio: "1 / 1" },
  { tone: "cream",      label: "17", flourish: "bouquet", ratio: "4 / 5" },
  { tone: "lavender",   label: "18", flourish: "sprig",   ratio: "3 / 4" },
];

function MasonryItem({ image, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick && onClick(image)}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        marginBottom: "1.1rem",
        overflow: "hidden",
        cursor: "zoom-in",
        breakInside: "avoid",
        WebkitColumnBreakInside: "avoid",
        pageBreakInside: "avoid",
      }}
    >
      <div style={{
        transform: hover ? "scale(1.04)" : "scale(1)",
        transition: "transform 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}>
        <PhotoPlaceholder
          tone={image.tone}
          label=""
          src={image.src}
          flourish={image.flourish}
          ratio={image.ratio}
        />
      </div>
      {/* Hover overlay — just a tiny index in the corner */}
      <div style={{
        position: "absolute",
        top: "1rem",
        left: "1rem",
        fontFamily: "var(--soma-mono)",
        fontSize: "0.62rem",
        letterSpacing: "0.2em",
        padding: "0.35rem 0.55rem",
        background: "rgba(244,236,216,0.85)",
        color: "var(--soma-ink)",
        opacity: hover ? 1 : 0,
        transition: "opacity 0.3s",
        pointerEvents: "none",
      }}>
        {image.label}
      </div>
    </div>
  );
}

function Lightbox({ image, onClose, onPrev, onNext }) {
  React.useEffect(() => {
    if (!image) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [image, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(20,12,8,0.94)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        animation: "soma-fade 0.3s ease",
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Précédent"
        style={lightboxBtn("left")}
      >←</button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Suivant"
        style={lightboxBtn("right")}
      >→</button>
      <button
        onClick={onClose}
        aria-label="Fermer"
        style={{ ...lightboxBtn("topright"), width: 40, height: 40 }}
      >×</button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 1100,
          maxHeight: "85vh",
          width: "auto",
          height: "85vh",
          animation: "soma-rise 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          aspectRatio: image.ratio,
        }}
      >
        <PhotoPlaceholder
          tone={image.tone}
          label=""
          src={image.src}
          flourish={image.flourish}
          ratio={image.ratio}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

const lightboxBtn = (pos) => ({
  position: "absolute",
  ...(pos === "left" && { left: "2rem", top: "50%", transform: "translateY(-50%)" }),
  ...(pos === "right" && { right: "2rem", top: "50%", transform: "translateY(-50%)" }),
  ...(pos === "topright" && { top: "2rem", right: "2rem" }),
  width: 48,
  height: 48,
  background: "transparent",
  border: "1px solid rgba(244,236,216,0.4)",
  color: "var(--soma-paper)",
  cursor: "pointer",
  fontFamily: "var(--soma-mono)",
  fontSize: "1.1rem",
  borderRadius: "50%",
  zIndex: 5,
});

function LookbookApp() {
  const [activeIdx, setActiveIdx] = React.useState(null);
  const active = activeIdx === null ? null : LOOKBOOK_IMAGES[activeIdx];

  const open = (img) => setActiveIdx(LOOKBOOK_IMAGES.indexOf(img));
  const close = () => setActiveIdx(null);
  const prev = () => setActiveIdx((i) => (i === null ? null : (i - 1 + LOOKBOOK_IMAGES.length) % LOOKBOOK_IMAGES.length));
  const next = () => setActiveIdx((i) => (i === null ? null : (i + 1) % LOOKBOOK_IMAGES.length));

  return (
    <div style={{ background: "var(--soma-paper)", color: "var(--soma-ink)", minHeight: "100vh" }}>
      <SomaNav current="lookbook" />

      {/* Minimal header */}
      <section className="soma-section-pad-x" style={{ maxWidth: 1440, margin: "0 auto", padding: "4rem 2.4rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.32em", color: "var(--soma-accent)", textTransform: "uppercase", marginBottom: "1rem" }}>
          Lookbook · {LOOKBOOK_IMAGES.length} images
        </div>
        <h1 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(2.6rem, 6vw, 4.8rem)", lineHeight: 1, margin: 0, color: "var(--soma-ink)" }}>
          Printemps 2026.
        </h1>
      </section>

      {/* Masonry */}
      <section className="soma-section-pad-x soma-masonry-wrap" style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2.4rem 6rem" }}>
        <div
          className="soma-masonry"
          style={{
            columnCount: 4,
            columnGap: "1.1rem",
          }}
        >
          {LOOKBOOK_IMAGES.map((img, i) => (
            <MasonryItem key={i} image={img} onClick={open} />
          ))}
        </div>
      </section>

      <SomaFooter />

      <Lightbox image={active} onClose={close} onPrev={prev} onNext={next} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LookbookApp />);
