import { PhotoPlaceholder } from "../PhotoPlaceholder";

export function CraftBand() {
  const steps: [string, string, string][] = [
    ["01", "Fonte", "de la cire à la température idéale"],
    ["02", "Préparation", "et fixation de la mèche dans le moule"],
    ["03", "Composition", "décorative — fleurs, design, éléments"],
    ["04", "Coulage", "de la cire colorée"],
    ["05", "Stabilisation", "et refroidissement complet"],
    ["06", "Démoulage", "finition et étiquetage à la main"],
  ];

  return (
    <section
      className="soma-section-pad soma-section-pad-x"
      style={{
        background: "var(--soma-paper-2)",
        padding: "7rem 2.4rem",
        borderTop: "1px solid var(--soma-line)",
        borderBottom: "1px solid var(--soma-line)",
      }}
    >
      <div
        className="soma-craft-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <PhotoPlaceholder
            tone="cream"
            label="ATELIER · GRASSE"
            caption="mains, cire, fleurs séchées"
            ratio="3 / 4"
            flourish="bouquet"
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&q=80"
          />
          <div
            className="soma-craft-aside"
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              background: "var(--soma-paper)",
              padding: "1.4rem 1.6rem",
              border: "1px solid var(--soma-line)",
              maxWidth: 200,
            }}
          >
            <div
              style={{
                fontFamily: "var(--soma-display)",
                fontStyle: "italic",
                fontSize: "2.5rem",
                color: "var(--soma-accent)",
                lineHeight: 1,
              }}
            >
              06
            </div>
            <div
              style={{
                fontFamily: "var(--soma-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                color: "var(--soma-ink-soft)",
                marginTop: "0.4rem",
                textTransform: "uppercase",
              }}
            >
              étapes par bougie
              <br />
              tout à la main
            </div>
          </div>
        </div>

        <div>
          <p
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              color: "var(--soma-accent)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            La maison
          </p>
          <h2
            style={{
              fontFamily: "var(--soma-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              margin: "0.6rem 0 1.4rem",
              lineHeight: 1.05,
              color: "var(--soma-ink)",
            }}
          >
            Six étapes,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
              entièrement faites à la main.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--soma-body)",
              fontSize: "1.05rem",
              lineHeight: 1.55,
              color: "var(--soma-ink-soft)",
              marginBottom: "2rem",
            }}
          >
            Fonte de la cire à la bonne température. Préparation et fixation de la
            mèche dans le moule. Composition décorative — fleurs, design, éléments.
            Coulage de la cire colorée. Stabilisation et refroidissement complet.
            Démoulage, finition et étiquetage à la main.
          </p>

          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "0.9rem",
            }}
          >
            {steps.map(([n, t, d]) => (
              <li
                key={n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  alignItems: "baseline",
                  gap: "1.4rem",
                  paddingBottom: "0.9rem",
                  borderBottom: "1px solid var(--soma-line)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    color: "var(--soma-ink-soft)",
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontFamily: "var(--soma-display)",
                    fontStyle: "italic",
                    fontSize: "1.4rem",
                    color: "var(--soma-ink)",
                  }}
                >
                  {t}
                </span>
                <span
                  style={{
                    fontFamily: "var(--soma-body)",
                    fontSize: "0.9rem",
                    color: "var(--soma-ink-soft)",
                    fontStyle: "italic",
                  }}
                >
                  {d}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
