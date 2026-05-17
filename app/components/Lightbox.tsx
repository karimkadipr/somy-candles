import { useEffect, type CSSProperties } from "react";
import type { PhotoTone } from "../data/products";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export type LightboxImage = {
  src?: string | null;
  tone: PhotoTone;
  flourish: "petals" | "bouquet" | "sprig";
  ratio: string;
  label?: string;
};

type Pos = "left" | "right" | "topright";

function lightboxBtn(pos: Pos): CSSProperties {
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

export function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: LightboxImage | null;
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
          label={image.label ?? ""}
          src={image.src ?? null}
          flourish={image.flourish}
          ratio={image.ratio}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
