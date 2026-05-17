// Shared chrome: Nav + Footer + utilities used across Soma, Boutique, Lookbook pages.

// EUR → DZD (rounded to nearest 100)
function eurToDzd(eur) {
  return Math.round((eur * 145) / 100) * 100;
}
function fmtDzd(eur) {
  return eurToDzd(eur).toLocaleString("fr-FR") + " DA";
}
window.eurToDzd = eurToDzd;
window.fmtDzd = fmtDzd;

const navLink = {
  color: "var(--soma-ink)",
  textDecoration: "none",
  transition: "opacity 0.2s",
};

function SomaNav({ current = "home" }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "boutique", label: "La boutique", href: "Boutique.html" },
    { id: "lookbook", label: "Le lookbook", href: "Lookbook.html" },
    { id: "sur-mesure", label: "Sur mesure", href: "Soma.html#sur-mesure" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(244,236,216,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--soma-line)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="soma-nav-row"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "1.4rem 2.4rem",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div
          className="soma-nav-left"
          style={{
            display: "flex",
            gap: "2rem",
            fontFamily: "var(--soma-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              style={{
                ...navLink,
                color: current === l.id ? "var(--soma-accent)" : "var(--soma-ink)",
                borderBottom: current === l.id ? "1px solid var(--soma-accent)" : "1px solid transparent",
                paddingBottom: 2,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="Soma.html"
          style={{
            fontFamily: "var(--soma-display)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "1.6rem",
            letterSpacing: "0.04em",
            textAlign: "center",
            color: "var(--soma-ink)",
            textDecoration: "none",
          }}
        >
          Somy Candles
          <span
            style={{
              display: "block",
              fontFamily: "var(--soma-mono)",
              fontStyle: "normal",
              fontSize: "0.55rem",
              letterSpacing: "0.4em",
              marginTop: 2,
              color: "var(--soma-ink-soft)",
            }}
          >
            BOUGIES FLEURIES
          </span>
        </a>
        <div />
      </div>
    </nav>
  );
}

function SomaFooter() {
  return (
    <footer className="soma-section-pad-x" style={{ background: "var(--soma-ink)", color: "var(--soma-paper)", padding: "5rem 2.4rem 2rem" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="soma-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(244,236,216,0.15)" }}>
          <div>
            <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1 }}>
              Somy Candles
            </div>
            <p style={{ fontFamily: "var(--soma-body)", fontSize: "0.95rem", lineHeight: 1.5, color: "rgba(244,236,216,0.65)", marginTop: "1rem", maxWidth: 320 }}>
              Bougies fleuries en édition limitée, faites main à Grasse depuis 2019.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.6rem" }}>
              {["Instagram", "Pinterest", "Journal"].map((s) => (
                <a key={s} href="#" style={{ fontFamily: "var(--soma-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", color: "rgba(244,236,216,0.75)", textDecoration: "none", textTransform: "uppercase", borderBottom: "1px solid rgba(244,236,216,0.3)", paddingBottom: 2 }}>{s}</a>
              ))}
            </div>
          </div>
          {[
            ["Boutique", [["Toutes les bougies", "Boutique.html"], ["Lookbook", "Lookbook.html"], ["Sur-mesure", "Soma.html#sur-mesure"]]],
            ["Maison", [["Notre histoire", "#"], ["L'atelier", "#"], ["Journal", "#"], ["Contact", "#"]]],
            ["Aide", [["Livraison", "#"], ["Retours", "#"], ["Précautions d'usage", "#"], ["FAQ", "#"]]],
          ].map(([title, items]) => (
            <div key={title}>
              <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.24em", color: "rgba(244,236,216,0.5)", textTransform: "uppercase", marginBottom: "1.3rem" }}>{title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.7rem" }}>
                {items.map(([label, href]) => (
                  <li key={label}><a href={href} style={{ fontFamily: "var(--soma-body)", fontSize: "0.95rem", color: "var(--soma-paper)", textDecoration: "none", opacity: 0.85 }}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="soma-footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.18em", color: "rgba(244,236,216,0.5)", textTransform: "uppercase" }}>
            © Somy Candles 2026 · Atelier 14 rue de la Lavande, Grasse
          </span>
          <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.18em", color: "rgba(244,236,216,0.5)", textTransform: "uppercase" }}>
            Mentions légales · CGV · Confidentialité
          </span>
        </div>
      </div>
    </footer>
  );
}

window.SomaNav = SomaNav;
window.SomaFooter = SomaFooter;
window.navLink = navLink;
