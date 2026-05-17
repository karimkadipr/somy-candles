import { PhotoPlaceholder } from "../PhotoPlaceholder";

export function Hero() {
  const stats: { n: string; l: string }[] = [
    { n: "06", l: "fleurs de saison" },
    { n: "42h", l: "de combustion" },
    { n: "100%", l: "fait main, France" },
  ];

  return (
    <section
      data-screen-label="01 Hero"
      className="soma-section-pad-x"
      style={{
        position: "relative",
        padding: "2rem 2.4rem 6rem",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <div
        className="soma-hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div style={{ paddingTop: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: 36, height: 1, background: "var(--soma-accent)" }} />
            <span
              style={{
                fontFamily: "var(--soma-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                color: "var(--soma-accent)",
                textTransform: "uppercase",
              }}
            >
              Atelier · Grasse · 2019
            </span>
          </div>
          <h1
            className="soma-hero-headline"
            style={{
              fontFamily: "var(--soma-display)",
              fontWeight: 400,
              fontSize: "clamp(3.2rem, 6.5vw, 6rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              margin: 0,
              color: "var(--soma-ink)",
            }}
          >
            Des fleurs
            <br />
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
              cueillies à la main,
            </em>
            <br />
            coulées dans la cire.
          </h1>
          <p
            style={{
              fontFamily: "var(--soma-body)",
              fontSize: "1.15rem",
              lineHeight: 1.55,
              color: "var(--soma-ink-soft)",
              marginTop: "1.8rem",
              maxWidth: 460,
            }}
          >
            Soma compose des bougies fleuries en édition limitée. Chaque pièce est
            unique : une saison, un bouquet, un parfum naturel — figés dans la cire de
            soja, pour brûler doucement.
          </p>
          <div
            className="soma-cta-row"
            style={{
              display: "flex",
              gap: "0.8rem",
              marginTop: "2.4rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/boutique"
              style={{
                background: "var(--soma-ink)",
                color: "var(--soma-paper)",
                padding: "1rem 1.6rem",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Découvrir la collection
            </a>
            <a
              href="#sur-mesure"
              style={{
                background: "transparent",
                color: "var(--soma-ink)",
                padding: "1rem 1.6rem",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid var(--soma-ink)",
              }}
            >
              Mariage & sur-mesure
            </a>
          </div>
          <div
            className="soma-stats-row"
            style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem" }}
          >
            {stats.map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "var(--soma-display)",
                    fontStyle: "italic",
                    fontSize: "1.7rem",
                    color: "var(--soma-ink)",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: "var(--soma-ink-soft)",
                    textTransform: "uppercase",
                    marginTop: "0.2rem",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="soma-hero-photo"
          style={{ position: "relative", height: "min(82vh, 720px)" }}
        >
          <div
            style={{
              position: "absolute",
              top: "8%",
              right: "6%",
              width: "62%",
              height: "78%",
            }}
          >
            <PhotoPlaceholder
              tone="rose"
              label="HERO · BOUGIE PIVOINE"
              caption="lifestyle, lumière du matin"
              ratio="auto"
              flourish="bouquet"
              src="https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=1200&q=80"
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "44%",
              height: "44%",
              boxShadow: "0 30px 60px -30px rgba(40,28,22,0.4)",
            }}
          >
            <PhotoPlaceholder
              tone="butter"
              label="DÉTAIL · CAMOMILLE"
              ratio="auto"
              flourish="petals"
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "8%",
              width: "26%",
              height: "32%",
              boxShadow: "0 20px 40px -20px rgba(40,28,22,0.3)",
            }}
          >
            <PhotoPlaceholder
              tone="sage"
              label="ATELIER"
              ratio="auto"
              flourish="sprig"
              src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?w=600&q=80"
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          </div>

          <div
            className="soma-handwritten-note"
            style={{
              position: "absolute",
              bottom: "8%",
              right: "0%",
              background: "var(--soma-paper)",
              padding: "1rem 1.4rem",
              border: "1px solid var(--soma-line)",
              transform: "rotate(2deg)",
              maxWidth: 220,
              boxShadow: "0 10px 30px -10px rgba(40,28,22,0.2)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--soma-display)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                lineHeight: 1.3,
              }}
            >
              «&nbsp;Une fleur qui ne meurt pas, c'est ça l'idée.&nbsp;»
            </div>
            <div
              style={{
                fontFamily: "var(--soma-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                color: "var(--soma-ink-soft)",
                marginTop: "0.6rem",
                textTransform: "uppercase",
              }}
            >
              Léa, fondatrice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
