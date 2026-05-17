import { useEffect, useState, type CSSProperties } from "react";
import type { Route } from "./+types/lookbook";
import { SomaNav } from "../components/SomaNav";
import { SomaFooter } from "../components/SomaFooter";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { LOOKBOOK_IMAGES, type LookbookImage } from "../data/lookbook";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Le lookbook — Somy Candles" },
    {
      name: "description",
      content: "Lookbook printemps 2026 — bougies fleuries Somy Candles.",
    },
  ];
}

function MasonryItem({
  image,
  onClick,
}: {
  image: LookbookImage;
  onClick: (img: LookbookImage) => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(image)}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        marginBottom: "1.1rem",
        overflow: "hidden",
        cursor: "zoom-in",
        breakInside: "avoid",
        pageBreakInside: "avoid",
      }}
    >
      <div
        style={{
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <PhotoPlaceholder
          tone={image.tone}
          label=""
          src={image.src}
          flourish={image.flourish}
          ratio={image.ratio}
        />
      </div>
      <div
        style={{
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
        }}
      >
        {image.label}
      </div>
    </div>
  );
}

type LightboxBtnPos = "left" | "right" | "topright";

function lightboxBtn(pos: LightboxBtnPos): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
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
  };
  if (pos === "left")
    return { ...base, left: "2rem", top: "50%", transform: "translateY(-50%)" };
  if (pos === "right")
    return { ...base, right: "2rem", top: "50%", transform: "translateY(-50%)" };
  return { ...base, top: "2rem", right: "2rem" };
}

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: LookbookImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
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
        position: "fixed",
        inset: 0,
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
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Précédent"
        style={lightboxBtn("left")}
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Suivant"
        style={lightboxBtn("right")}
      >
        →
      </button>
      <button
        onClick={onClose}
        aria-label="Fermer"
        style={{ ...lightboxBtn("topright"), width: 40, height: 40 }}
      >
        ×
      </button>

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

export default function LookbookPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active = activeIdx === null ? null : LOOKBOOK_IMAGES[activeIdx];

  const open = (img: LookbookImage) =>
    setActiveIdx(LOOKBOOK_IMAGES.indexOf(img));
  const close = () => setActiveIdx(null);
  const prev = () =>
    setActiveIdx((i) =>
      i === null
        ? null
        : (i - 1 + LOOKBOOK_IMAGES.length) % LOOKBOOK_IMAGES.length,
    );
  const next = () =>
    setActiveIdx((i) =>
      i === null ? null : (i + 1) % LOOKBOOK_IMAGES.length,
    );

  return (
    <div
      style={{
        background: "var(--soma-paper)",
        color: "var(--soma-ink)",
        minHeight: "100vh",
      }}
    >
      <SomaNav current="lookbook" />

      <section
        className="soma-section-pad-x"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "4rem 2.4rem 3rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--soma-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.32em",
            color: "var(--soma-accent)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Lookbook · {LOOKBOOK_IMAGES.length} images
        </div>
        <h1
          style={{
            fontFamily: "var(--soma-display)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
            lineHeight: 1,
            margin: 0,
            color: "var(--soma-ink)",
          }}
        >
          Printemps 2026.
        </h1>
      </section>

      <section
        className="soma-section-pad-x soma-masonry-wrap"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 2.4rem 6rem",
        }}
      >
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
