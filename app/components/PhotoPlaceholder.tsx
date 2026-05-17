import { useId, type CSSProperties } from "react";
import type { PhotoTone } from "../data/products";

type Flourish = "petals" | "bouquet" | "sprig" | "none";

type TonePalette = { a: string; b: string; c: string; glow: string };

const TONE_PALETTES: Record<PhotoTone, TonePalette> = {
  rose:       { a: "#e8cabc", b: "#d4a59a", c: "#b9837c", glow: "#f3dcc8" },
  butter:     { a: "#f1e0a8", b: "#e3c878", c: "#bca25a", glow: "#fbf0c8" },
  lavender:   { a: "#cdc2dc", b: "#a89cc0", c: "#7e7298", glow: "#e3dceb" },
  terracotta: { a: "#e0a89c", b: "#c47a6e", c: "#9c5a4f", glow: "#efc8c0" },
  ochre:      { a: "#e4cd84", b: "#c9aa55", c: "#94793c", glow: "#f0dfa8" },
  sage:       { a: "#c4d0c0", b: "#9aab98", c: "#6f7f6e", glow: "#dde3d8" },
  cream:      { a: "#ece1cc", b: "#d6c5a4", c: "#a89070", glow: "#f4ecd8" },
  dusk:       { a: "#c8b8b0", b: "#9a857c", c: "#6e5b53", glow: "#dccec5" },
};

export type PhotoPlaceholderProps = {
  tone?: PhotoTone;
  label?: string;
  ratio?: string;
  caption?: string;
  flourish?: Flourish;
  src?: string | null;
  objectPosition?: string;
  className?: string;
  style?: CSSProperties;
};

export function PhotoPlaceholder({
  tone = "rose",
  label = "PHOTO",
  ratio = "4 / 5",
  caption,
  flourish = "petals",
  src = null,
  objectPosition = "center",
  className = "",
  style,
}: PhotoPlaceholderProps) {
  const p = TONE_PALETTES[tone] || TONE_PALETTES.rose;
  const gradId = useId();

  if (src) {
    return (
      <div
        className={`soma-photo ${className}`}
        style={{
          position: "relative",
          aspectRatio: ratio,
          background: p.b,
          overflow: "hidden",
          ...style,
        }}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            display: "block",
            filter: "saturate(0.88) contrast(0.96) sepia(0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(244,236,216,0.04), rgba(60,40,30,0.10))",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "1.1rem",
            bottom: "1rem",
            right: "1.1rem",
            fontFamily: "var(--soma-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            color: "rgba(255,248,232,0.92)",
            textShadow: "0 1px 4px rgba(0,0,0,0.45)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <span>{label}</span>
          {caption && (
            <span style={{ textAlign: "right", maxWidth: "60%" }}>{caption}</span>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            top: "0.9rem",
            right: "1rem",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "rgba(255,248,232,0.7)",
            boxShadow: "0 0 6px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    );
  }

  const safeId = gradId.replace(/[:]/g, "");
  return (
    <div
      className={`soma-photo ${className}`}
      style={{
        position: "relative",
        aspectRatio: ratio,
        background: `radial-gradient(120% 90% at 30% 25%, ${p.glow} 0%, ${p.a} 45%, ${p.b} 100%)`,
        overflow: "hidden",
        ...style,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, mixBlendMode: "multiply", opacity: 0.18 }}
        aria-hidden="true"
      >
        <defs>
          <filter id={`grain-${safeId}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={3} />
            <feColorMatrix values="0 0 0 0 0.4  0 0 0 0 0.3  0 0 0 0 0.25  0 0 0 0.5 0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter={`url(#grain-${safeId})`} />
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(60,40,30,0.18) 100%)",
          pointerEvents: "none",
        }}
      />

      <Flourish kind={flourish} palette={p} />

      <div
        style={{
          position: "absolute",
          left: "1.1rem",
          bottom: "1rem",
          right: "1.1rem",
          fontFamily: "var(--soma-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          color: "rgba(40,28,22,0.55)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
        }}
      >
        <span>{label}</span>
        {caption && (
          <span style={{ textAlign: "right", maxWidth: "60%" }}>{caption}</span>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          top: "0.9rem",
          right: "1rem",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "rgba(40,28,22,0.18)",
        }}
      />
    </div>
  );
}

function Flourish({ kind, palette: p }: { kind: Flourish; palette: TonePalette }) {
  if (kind === "none") return null;

  if (kind === "petals") {
    return (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55 }}
        aria-hidden="true"
      >
        <ellipse cx="50" cy="58" rx="34" ry="28" fill={p.b} opacity="0.55" />
        <ellipse cx="42" cy="50" rx="18" ry="22" fill={p.c} opacity="0.45" />
        <ellipse cx="62" cy="62" rx="14" ry="18" fill={p.glow} opacity="0.6" />
        <rect x="48" y="78" width="3" height="22" fill={p.c} opacity="0.55" />
      </svg>
    );
  }

  if (kind === "bouquet") {
    return (
      <svg
        viewBox="0 0 100 130"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55 }}
        aria-hidden="true"
      >
        <ellipse cx="40" cy="48" rx="22" ry="26" fill={p.b} opacity="0.5" />
        <ellipse cx="62" cy="44" rx="20" ry="24" fill={p.c} opacity="0.45" />
        <ellipse cx="52" cy="62" rx="28" ry="22" fill={p.glow} opacity="0.6" />
        <ellipse cx="35" cy="64" rx="10" ry="14" fill={p.c} opacity="0.4" />
        <path
          d="M50 78 L46 130 M52 78 L56 130 M48 80 L40 128 M53 80 L62 130"
          stroke={p.c}
          strokeWidth="1.2"
          opacity="0.5"
          fill="none"
        />
      </svg>
    );
  }

  if (kind === "sprig") {
    return (
      <svg
        viewBox="0 0 100 130"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}
        aria-hidden="true"
      >
        <path d="M50 10 Q48 60 50 120" stroke={p.c} strokeWidth="1.6" fill="none" opacity="0.6" />
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 22 + i * 11;
          const side = i % 2 === 0 ? -1 : 1;
          return (
            <ellipse
              key={i}
              cx={50 + side * 8}
              cy={y}
              rx={9}
              ry={3.4}
              fill={p.b}
              opacity="0.5"
              transform={`rotate(${side * 25} ${50 + side * 8} ${y})`}
            />
          );
        })}
      </svg>
    );
  }

  return null;
}
