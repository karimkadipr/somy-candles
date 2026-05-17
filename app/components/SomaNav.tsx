import { useEffect, useState } from "react";

type NavId = "home" | "boutique" | "lookbook" | "sur-mesure";

export function SomaNav({ current = "home" }: { current?: NavId }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { id: NavId; label: string; href: string }[] = [
    { id: "boutique", label: "La boutique", href: "/boutique" },
    { id: "lookbook", label: "Le lookbook", href: "/lookbook" },
    { id: "sur-mesure", label: "Sur mesure", href: "/#sur-mesure" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(244,236,216,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--soma-line)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="soma-nav-row"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "1.4rem 2.4rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          className="soma-nav-logo"
          style={{
            fontFamily: "var(--soma-display)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "1.7rem",
            letterSpacing: "0.01em",
            color: "var(--soma-ink)",
            textDecoration: "none",
            lineHeight: 1,
            display: "flex",
            alignItems: "baseline",
            gap: "0.7rem",
            flexShrink: 0,
          }}
        >
          Somy Candles
          <span
            className="soma-nav-tagline"
            style={{
              fontFamily: "var(--soma-mono)",
              fontStyle: "normal",
              fontSize: "0.52rem",
              letterSpacing: "0.32em",
              color: "var(--soma-ink-soft)",
              textTransform: "uppercase",
              paddingLeft: "0.7rem",
              borderLeft: "1px solid var(--soma-line)",
              transform: "translateY(-2px)",
            }}
          >
            Bougies fleuries
          </span>
        </a>

        <div
          className="soma-nav-links"
          style={{
            display: "flex",
            gap: "2.2rem",
            fontFamily: "var(--soma-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            alignItems: "center",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              style={{
                color: current === l.id ? "var(--soma-accent)" : "var(--soma-ink)",
                textDecoration: "none",
                transition: "opacity 0.2s",
                borderBottom:
                  current === l.id
                    ? "1px solid var(--soma-accent)"
                    : "1px solid transparent",
                paddingBottom: 3,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
