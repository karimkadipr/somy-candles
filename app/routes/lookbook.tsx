import { useState } from "react";
import type { Route } from "./+types/lookbook";
import { SomaNav } from "../components/SomaNav";
import { SomaFooter } from "../components/SomaFooter";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { Lightbox } from "../components/Lightbox";
import { LOOKBOOK_IMAGES, type LookbookImage } from "../data/lookbook";
import { ACTIVE_LOOKBOOK_COLLECTION } from "../data/collections";

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

export default function LookbookPage() {
  const images = LOOKBOOK_IMAGES.filter(
    (img) => img.collection === ACTIVE_LOOKBOOK_COLLECTION.slug,
  );
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active = activeIdx === null ? null : images[activeIdx];

  const open = (img: LookbookImage) => setActiveIdx(images.indexOf(img));
  const close = () => setActiveIdx(null);
  const prev = () =>
    setActiveIdx((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  const next = () =>
    setActiveIdx((i) => (i === null ? null : (i + 1) % images.length));

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
          Lookbook · {ACTIVE_LOOKBOOK_COLLECTION.label} {ACTIVE_LOOKBOOK_COLLECTION.year} · {String(images.length).padStart(2, "0")} images
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
          {ACTIVE_LOOKBOOK_COLLECTION.tagline}.
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
          {images.map((img, i) => (
            <MasonryItem key={i} image={img} onClick={open} />
          ))}
        </div>
      </section>

      <SomaFooter />

      <Lightbox image={active} onClose={close} onPrev={prev} onNext={next} />
    </div>
  );
}
