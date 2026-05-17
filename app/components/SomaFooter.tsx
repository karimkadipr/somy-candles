export function SomaFooter() {
  const columns: [string, [string, string][]][] = [
    [
      "Boutique",
      [
        ["Toutes les bougies", "/boutique"],
        ["Lookbook", "/lookbook"],
        ["Sur-mesure", "/#sur-mesure"],
      ],
    ],
    [
      "Maison",
      [
        ["Notre histoire", "#"],
        ["L'atelier", "#"],
        ["Journal", "#"],
        ["Contact", "#"],
      ],
    ],
    [
      "Aide",
      [
        ["Livraison", "#"],
        ["Retours", "#"],
        ["Précautions d'usage", "#"],
        ["FAQ", "#"],
      ],
    ],
  ];

  return (
    <footer
      className="soma-section-pad-x"
      style={{
        background: "var(--soma-ink)",
        color: "var(--soma-paper)",
        padding: "5rem 2.4rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          className="soma-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(244,236,216,0.15)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--soma-display)",
                fontStyle: "italic",
                fontSize: "2rem",
                lineHeight: 1,
              }}
            >
              Somy Candles
            </div>
            <p
              style={{
                fontFamily: "var(--soma-body)",
                fontSize: "0.95rem",
                lineHeight: 1.5,
                color: "rgba(244,236,216,0.65)",
                marginTop: "1rem",
                maxWidth: 320,
              }}
            >
              Bougies fleuries en édition limitée, faites main à Grasse depuis 2019.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.6rem" }}>
              {["Instagram", "Pinterest", "Journal"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    color: "rgba(244,236,216,0.75)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(244,236,216,0.3)",
                    paddingBottom: 2,
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {columns.map(([title, items]) => (
            <div key={title}>
              <div
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.24em",
                  color: "rgba(244,236,216,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "1.3rem",
                }}
              >
                {title}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "0.7rem",
                }}
              >
                {items.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--soma-body)",
                        fontSize: "0.95rem",
                        color: "var(--soma-paper)",
                        textDecoration: "none",
                        opacity: 0.85,
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="soma-footer-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "rgba(244,236,216,0.5)",
              textTransform: "uppercase",
            }}
          >
            © Somy Candles 2026 · Atelier 14 rue de la Lavande, Grasse
          </span>
          <span
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "rgba(244,236,216,0.5)",
              textTransform: "uppercase",
            }}
          >
            Mentions légales · CGV · Confidentialité
          </span>
        </div>
      </div>
    </footer>
  );
}
