// Soma — bougies fleuries · landing page

const SOMA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "density": "airy"
}/*EDITMODE-END*/;

const PALETTES = {
  cream: {
    label: "Crème & rose",
    paper: "#f4ecd8",
    paper2: "#ece1cc",
    ink: "#2a1f17",
    inkSoft: "#6b574a",
    line: "#d4c5a8",
    accent: "#a85a4f",
  },
  bone: {
    label: "Os & encre",
    paper: "#ebe5d8",
    paper2: "#ddd4c0",
    ink: "#1f1a14",
    inkSoft: "#5e544a",
    line: "#c8baa0",
    accent: "#876048",
  },
  sage: {
    label: "Sauge & sépia",
    paper: "#eee8d4",
    paper2: "#dfd9c2",
    ink: "#2a2820",
    inkSoft: "#6a6650",
    line: "#c8c0a0",
    accent: "#6a7a52",
  },
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.cream;
  const r = document.documentElement.style;
  r.setProperty("--soma-paper", p.paper);
  r.setProperty("--soma-paper-2", p.paper2);
  r.setProperty("--soma-ink", p.ink);
  r.setProperty("--soma-ink-soft", p.inkSoft);
  r.setProperty("--soma-line", p.line);
  r.setProperty("--soma-accent", p.accent);
}

function App() {
  const [tweaks, setTweak] = useTweaks(SOMA_TWEAK_DEFAULTS);
  const [activeProduct, setActiveProduct] = React.useState(null);

  React.useEffect(() => {
    applyPalette(tweaks.palette);
  }, [tweaks.palette]);

  return (
    <div style={{ background: "var(--soma-paper)", color: "var(--soma-ink)", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Marquee />
      <Lookbook onOpen={setActiveProduct} />
      <ShopGrid onOpen={setActiveProduct} density={tweaks.density} />
      <CraftBand />
      <Inquiry />
      <Footer />

      <QuickView product={activeProduct} onClose={() => setActiveProduct(null)} />

      <TweaksPanel title="Tweaks" subtitle="Soma · landing">
        <TweakSection title="Palette">
          <TweakRadio
            value={tweaks.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              { value: "cream", label: "Crème" },
              { value: "bone", label: "Os" },
              { value: "sage", label: "Sauge" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Densité de la grille">
          <TweakRadio
            value={tweaks.density}
            onChange={(v) => setTweak("density", v)}
            options={[
              { value: "airy", label: "Aérée" },
              { value: "compact", label: "Compacte" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */

function Nav() {
  return <SomaNav current="home" />;
}


/* ----------------------------- HERO ----------------------------- */

function Hero() {
  return (
    <section data-screen-label="01 Hero" className="soma-section-pad-x" style={{ position: "relative", padding: "2rem 2.4rem 6rem", maxWidth: 1440, margin: "0 auto" }}>
      <div className="soma-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "3rem", alignItems: "center" }}>
        <div style={{ paddingTop: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.5rem" }}>
            <span style={{ width: 36, height: 1, background: "var(--soma-accent)" }} />
            <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.28em", color: "var(--soma-accent)", textTransform: "uppercase" }}>
              Atelier · Grasse · 2019
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontSize: "clamp(3.2rem, 6.5vw, 6rem)", lineHeight: 0.98, letterSpacing: "-0.01em", margin: 0, color: "var(--soma-ink)" }}>
            Des fleurs<br />
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>cueillies à la main,</em><br />
            coulées dans la cire.
          </h1>
          <p style={{ fontFamily: "var(--soma-body)", fontSize: "1.15rem", lineHeight: 1.55, color: "var(--soma-ink-soft)", marginTop: "1.8rem", maxWidth: 460 }}>
            Soma compose des bougies fleuries en édition limitée. Chaque pièce est unique : 
            une saison, un bouquet, un parfum naturel — figés dans la cire de soja, pour brûler doucement.
          </p>
          <div className="soma-cta-row" style={{ display: "flex", gap: "0.8rem", marginTop: "2.4rem", flexWrap: "wrap" }}>
            <a href="#shop" style={{
              background: "var(--soma-ink)", color: "var(--soma-paper)", padding: "1rem 1.6rem",
              fontFamily: "var(--soma-mono)", fontSize: "0.7rem", letterSpacing: "0.22em",
              textTransform: "uppercase", textDecoration: "none",
            }}>
              Découvrir la collection
            </a>
            <a href="#sur-mesure" style={{
              background: "transparent", color: "var(--soma-ink)", padding: "1rem 1.6rem",
              fontFamily: "var(--soma-mono)", fontSize: "0.7rem", letterSpacing: "0.22em",
              textTransform: "uppercase", textDecoration: "none",
              border: "1px solid var(--soma-ink)",
            }}>
              Mariage & sur-mesure
            </a>
          </div>
          <div className="soma-stats-row" style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem" }}>
            {[
              { n: "06", l: "fleurs de saison" },
              { n: "42h", l: "de combustion" },
              { n: "100%", l: "fait main, France" },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "1.7rem", color: "var(--soma-ink)" }}>{s.n}</div>
                <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", textTransform: "uppercase", marginTop: "0.2rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="soma-hero-photo" style={{ position: "relative", height: "min(82vh, 720px)" }}>
          <div style={{ position: "absolute", top: "8%", right: "6%", width: "62%", height: "78%" }}>
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
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "44%", height: "44%", boxShadow: "0 30px 60px -30px rgba(40,28,22,0.4)" }}>
            <PhotoPlaceholder
              tone="butter"
              label="DÉTAIL · CAMOMILLE"
              ratio="auto"
              flourish="petals"
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          </div>
          <div style={{ position: "absolute", top: 0, left: "8%", width: "26%", height: "32%", boxShadow: "0 20px 40px -20px rgba(40,28,22,0.3)" }}>
            <PhotoPlaceholder
              tone="sage"
              label="ATELIER"
              ratio="auto"
              flourish="sprig"
              src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?w=600&q=80"
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          </div>

          {/* handwritten note */}
          <div className="soma-handwritten-note" style={{
            position: "absolute", bottom: "8%", right: "0%",
            background: "var(--soma-paper)",
            padding: "1rem 1.4rem",
            border: "1px solid var(--soma-line)",
            transform: "rotate(2deg)",
            maxWidth: 220,
            boxShadow: "0 10px 30px -10px rgba(40,28,22,0.2)",
          }}>
            <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.3 }}>
              « Une fleur qui ne meurt pas, c'est ça l'idée. »
            </div>
            <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", marginTop: "0.6rem", textTransform: "uppercase" }}>
              Léa, fondatrice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- MARQUEE ----------------------------- */

function Marquee() {
  const items = [
    "Cueillette en Drôme provençale",
    "Cire de soja française",
    "Mèche en coton non traité",
    "Édition limitée saisonnière",
    "Livraison neutre en carbone",
    "Atelier ouvert sur rendez-vous",
  ];
  const repeated = [...items, ...items, ...items];
  return (
    <div className="soma-marquee-wrap" style={{ borderTop: "1px solid var(--soma-line)", borderBottom: "1px solid var(--soma-line)", background: "var(--soma-paper-2)", overflow: "hidden", padding: "1.2rem 0" }}>
      <div style={{ display: "flex", gap: "3rem", animation: "soma-marquee 50s linear infinite", whiteSpace: "nowrap" }}>
        {repeated.map((s, i) => (
          <span key={i} style={{ fontFamily: "var(--soma-mono)", fontSize: "0.7rem", letterSpacing: "0.28em", color: "var(--soma-ink)", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "3rem" }}>
            {s}
            <span style={{ width: 6, height: 6, background: "var(--soma-accent)", borderRadius: "50%", display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- LOOKBOOK ----------------------------- */

// Convert EUR price → DZD (rounded to nearest 100)
function eurToDzd(eur) {
  return Math.round((eur * 145) / 100) * 100;
}
function fmtDzd(eur) {
  return eurToDzd(eur).toLocaleString("fr-FR") + " DA";
}

function LookbookTile({ children, productId, onOpen, lookNumber }) {
  const product = SOMA_PRODUCTS.find((p) => p.id === productId);
  const [hover, setHover] = React.useState(false);

  const handleClick = () => product && onOpen && onOpen(product);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      style={{ position: "relative", cursor: product ? "pointer" : "default", overflow: "hidden" }}
    >
      <div style={{
        height: "100%", width: "100%",
        transform: hover && product ? "scale(1.04)" : "scale(1)",
        transition: "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}>
        {children}
      </div>

      {product && (
        <>
          {/* gradient at bottom for legibility */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, transparent 50%, rgba(20,12,8,0.65) 100%)",
            pointerEvents: "none",
          }} />

          {/* product chip — bottom-left */}
          <div style={{
            position: "absolute", left: "1.1rem", bottom: "1.1rem",
            color: "#f4ecd8",
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            right: "1.1rem", gap: "1rem",
          }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.75, marginBottom: 4 }}>
                Look {lookNumber}
              </div>
              <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "1.4rem", lineHeight: 1.05, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                {product.name}
              </div>
              <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.65rem", letterSpacing: "0.06em", marginTop: 4, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                {fmtDzd(product.price)}
              </div>
            </div>

            <span style={{
              flexShrink: 0,
              fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.22em",
              padding: "0.55rem 0.8rem",
              background: hover ? "var(--soma-paper)" : "rgba(244,236,216,0.18)",
              backdropFilter: "blur(6px)",
              color: hover ? "var(--soma-ink)" : "#f4ecd8",
              border: "1px solid rgba(244,236,216,0.4)",
              textTransform: "uppercase",
              transition: "all 0.3s",
              alignSelf: "flex-end",
            }}>
              Acheter →
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function Lookbook({ onOpen }) {
  const looks = [
    { num: "01", productId: "rose-de-mai" },
    { num: "02", productId: "champ-de-camomille" },
    { num: "03", productId: "lavande-haute" },
    { num: "04", productId: "bouquet-aout" },
    { num: "05", productId: "eucalyptus-blanc" },
  ];
  return (
    <section id="lookbook" data-screen-label="02 Lookbook" className="soma-section-pad soma-section-pad-x" style={{ padding: "8rem 2.4rem", maxWidth: 1440, margin: "0 auto" }}>
      <div className="soma-lookbook-header" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", marginBottom: "3rem", gap: "2rem" }}>
        <div>
          <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.28em", color: "var(--soma-accent)", textTransform: "uppercase", margin: 0 }}>
            Lookbook · Saison printemps 2026 · 05 looks
          </p>
          <h2 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontSize: "clamp(2.2rem, 4vw, 3.6rem)", margin: "0.6rem 0 0.5rem", lineHeight: 1, color: "var(--soma-ink)" }}>
            Le mois de mai, <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>en cire</em>.
          </h2>
          <p style={{ fontFamily: "var(--soma-body)", fontSize: "0.95rem", color: "var(--soma-ink-soft)", margin: 0, fontStyle: "italic" }}>
            Cliquez une image pour ajouter au panier.
          </p>
        </div>
        <a href="#shop" style={{ fontFamily: "var(--soma-mono)", fontSize: "0.65rem", letterSpacing: "0.22em", color: "var(--soma-ink)", textDecoration: "none", textTransform: "uppercase", whiteSpace: "nowrap", borderBottom: "1px solid var(--soma-ink)", paddingBottom: 4 }}>
          Voir tout le shop →
        </a>
      </div>

      <div className="soma-lookbook-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gridTemplateRows: "340px 340px", gap: "1.2rem" }}>
        <LookbookTile productId={looks[0].productId} onOpen={onOpen} lookNumber={looks[0].num}>
          <div className="soma-lookbook-tile-hero" style={{ gridRow: "1 / 3", position: "relative", height: "100%" }}>
            <PhotoPlaceholder
              tone="rose"
              label="LK · 01 / TABLE DRESSÉE"
              ratio="auto"
              flourish="bouquet"
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1000&q=80"
              style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
            />
          </div>
        </LookbookTile>
        <LookbookTile productId={looks[1].productId} onOpen={onOpen} lookNumber={looks[1].num}>
          <PhotoPlaceholder
            tone="butter"
            label="LK · 02 / CHAMP"
            ratio="auto"
            flourish="petals"
            style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
          />
        </LookbookTile>
        <LookbookTile productId={looks[2].productId} onOpen={onOpen} lookNumber={looks[2].num}>
          <PhotoPlaceholder
            tone="lavender"
            label="LK · 03 / NUIT"
            ratio="auto"
            flourish="sprig"
            style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
          />
        </LookbookTile>
        <LookbookTile productId={looks[3].productId} onOpen={onOpen} lookNumber={looks[3].num}>
          <PhotoPlaceholder
            tone="terracotta"
            label="LK · 04 / BOUQUET"
            ratio="auto"
            flourish="bouquet"
            style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
          />
        </LookbookTile>
        <LookbookTile productId={looks[4].productId} onOpen={onOpen} lookNumber={looks[4].num}>
          <PhotoPlaceholder
            tone="sage"
            label="LK · 05 / ATELIER"
            ratio="auto"
            flourish="sprig"
            style={{ height: "100%", width: "100%", aspectRatio: "auto" }}
          />
        </LookbookTile>
      </div>
    </section>
  );
}

window.fmtDzd = fmtDzd;
window.eurToDzd = eurToDzd;

/* ----------------------------- SHOP GRID ----------------------------- */

function ShopGrid({ onOpen, density }) {
  const [filter, setFilter] = React.useState("tout");
  const editionIds = new Set(["bouquet-aout", "fleurs-sechees-mix", "muguet-mai", "rose-noire", "table-dressee"]);
  const bouquetIds = new Set(["bouquet-aout", "fleurs-sechees-mix", "table-dressee"]);
  const cadeauIds = new Set(["trio-decouverte", "carte-cadeau", "recharge-rose", "table-dressee"]);

  const filters = [
    { id: "tout", label: `Tout · ${SOMA_PRODUCTS.length}` },
    { id: "fleur", label: "Mono-fleur" },
    { id: "bouquet", label: "Bouquets" },
    { id: "edition", label: "Éditions" },
    { id: "cadeau", label: "Coffrets & cadeaux" },
  ];
  const filtered = SOMA_PRODUCTS.filter((p) => {
    if (filter === "tout") return true;
    if (filter === "edition") return editionIds.has(p.id);
    if (filter === "bouquet") return bouquetIds.has(p.id);
    if (filter === "cadeau") return cadeauIds.has(p.id);
    if (filter === "fleur") return !bouquetIds.has(p.id) && !cadeauIds.has(p.id);
    return true;
  });

  return (
    <section id="shop" data-screen-label="03 Boutique" className="soma-section-pad soma-section-pad-x" style={{ padding: "6rem 2.4rem", maxWidth: 1440, margin: "0 auto" }}>
      <div className="soma-shop-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
        <div>
          <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.28em", color: "var(--soma-accent)", textTransform: "uppercase", margin: 0 }}>
            La boutique · {SOMA_PRODUCTS.length.toString().padStart(2, "0")} pièces
          </p>
          <h2 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontSize: "clamp(2.2rem, 4vw, 3.6rem)", margin: "0.6rem 0 0", lineHeight: 1, color: "var(--soma-ink)" }}>
            Notre collection <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>de saison</em>.
          </h2>
        </div>
        <div className="soma-filter-row" style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: "0.55rem 1rem",
                background: filter === f.id ? "var(--soma-ink)" : "transparent",
                color: filter === f.id ? "var(--soma-paper)" : "var(--soma-ink)",
                border: "1px solid var(--soma-ink)",
                fontFamily: "var(--soma-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="soma-shop-grid" style={{ display: "grid", gridTemplateColumns: density === "compact" ? "repeat(4, 1fr)" : "repeat(3, 1fr)", gap: density === "compact" ? "1rem" : "1.6rem" }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={onOpen} density={density} />
        ))}
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center", fontFamily: "var(--soma-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", textTransform: "uppercase" }}>
        {filtered.length} pièce{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""} · livraison France &amp; Algérie
      </div>
    </section>
  );
}

/* ----------------------------- CRAFT BAND ----------------------------- */

function CraftBand() {
  return (
    <section className="soma-section-pad soma-section-pad-x" style={{ background: "var(--soma-paper-2)", padding: "7rem 2.4rem", borderTop: "1px solid var(--soma-line)", borderBottom: "1px solid var(--soma-line)" }}>
      <div className="soma-craft-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <PhotoPlaceholder
            tone="cream"
            label="ATELIER · GRASSE"
            caption="mains, cire, fleurs séchées"
            ratio="3 / 4"
            flourish="bouquet"
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&q=80"
          />
          <div className="soma-craft-aside" style={{
            position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
            background: "var(--soma-paper)",
            padding: "1.4rem 1.6rem",
            border: "1px solid var(--soma-line)",
            maxWidth: 200,
          }}>
            <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "2.5rem", color: "var(--soma-accent)", lineHeight: 1 }}>
              06
            </div>
            <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", color: "var(--soma-ink-soft)", marginTop: "0.4rem", textTransform: "uppercase" }}>
              étapes par bougie<br />tout à la main
            </div>
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.28em", color: "var(--soma-accent)", textTransform: "uppercase", margin: 0 }}>
            La maison
          </p>
          <h2 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", margin: "0.6rem 0 1.4rem", lineHeight: 1.05, color: "var(--soma-ink)" }}>
            Six étapes,<br /><em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>aucune machine.</em>
          </h2>
          <p style={{ fontFamily: "var(--soma-body)", fontSize: "1.05rem", lineHeight: 1.55, color: "var(--soma-ink-soft)", marginBottom: "2rem" }}>
            Cueillette à l'aube. Séchage tête en bas, deux semaines au minimum. Composition florale dans le moule. Coulage de la cire à 62°C. Mèche centrée à la pince. Étiquette manuscrite.
          </p>

          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.9rem" }}>
            {[
              ["01", "Cueillir", "à la main, à l'aube"],
              ["02", "Sécher", "deux semaines, à l'ombre"],
              ["03", "Composer", "fleur par fleur, dans le moule"],
              ["04", "Couler", "cire de soja à 62°C"],
              ["05", "Mécher", "coton centré à la pince"],
              ["06", "Signer", "étiquette manuscrite"],
            ].map(([n, t, d]) => (
              <li key={n} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "baseline", gap: "1.4rem", paddingBottom: "0.9rem", borderBottom: "1px solid var(--soma-line)" }}>
                <span style={{ fontFamily: "var(--soma-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--soma-ink-soft)" }}>{n}</span>
                <span style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--soma-ink)" }}>{t}</span>
                <span style={{ fontFamily: "var(--soma-body)", fontSize: "0.9rem", color: "var(--soma-ink-soft)", fontStyle: "italic" }}>{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INQUIRY ----------------------------- */

function Inquiry() {
  const [form, setForm] = React.useState({ name: "", email: "", date: "", count: "50", note: "" });
  const [sent, setSent] = React.useState(false);

  return (
    <section id="sur-mesure" data-screen-label="04 Sur-mesure" className="soma-section-pad soma-section-pad-x" style={{ padding: "8rem 2.4rem", maxWidth: 1440, margin: "0 auto" }}>
      <div className="soma-inquiry-grid" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "5rem", alignItems: "start" }}>
        <div className="soma-inquiry-aside" style={{ position: "sticky", top: "6rem" }}>
          <p style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.28em", color: "var(--soma-accent)", textTransform: "uppercase", margin: 0 }}>
            Sur-mesure · mariage & événement
          </p>
          <h2 style={{ fontFamily: "var(--soma-display)", fontWeight: 400, fontSize: "clamp(2.4rem, 4.5vw, 4rem)", margin: "0.6rem 0 1.5rem", lineHeight: 0.98, color: "var(--soma-ink)" }}>
            Votre bouquet,<br /><em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>en bougie.</em>
          </h2>
          <p style={{ fontFamily: "var(--soma-body)", fontSize: "1.1rem", lineHeight: 1.55, color: "var(--soma-ink-soft)", maxWidth: 460 }}>
            Reproduire votre bouquet de mariée en bougie fleurie, ou créer un cadeau d'invité unique pour votre événement. Nous travaillons sur devis, à partir de 30 pièces, avec un délai de 8 semaines.
          </p>

          <div style={{ marginTop: "2.4rem", display: "grid", gap: "1.2rem" }}>
            {[
              ["Mariage", "à partir de 28€ / pièce · 30 pièces minimum"],
              ["Événement d'entreprise", "devis sur demande · personnalisation logo"],
              ["Cadeau intime", "édition unique · à partir d'une pièce"],
            ].map(([t, d]) => (
              <div key={t} style={{ borderLeft: "2px solid var(--soma-accent)", paddingLeft: "1.1rem" }}>
                <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "1.25rem" }}>{t}</div>
                <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.66rem", letterSpacing: "0.1em", color: "var(--soma-ink-soft)", marginTop: 4 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="soma-form"
          style={{
            background: "var(--soma-paper-2)",
            padding: "3rem",
            display: "grid",
            gap: "1.4rem",
            border: "1px solid var(--soma-line)",
          }}
        >
          {sent ? (
            <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--soma-display)", fontStyle: "italic", fontSize: "2.4rem", lineHeight: 1, color: "var(--soma-accent)", marginBottom: "1rem" }}>
                Merci.
              </div>
              <p style={{ fontFamily: "var(--soma-body)", fontSize: "1rem", color: "var(--soma-ink-soft)", margin: 0 }}>
                Nous revenons vers vous sous 48 heures, avec une proposition.
              </p>
            </div>
          ) : (
            <>
              <div style={{ fontFamily: "var(--soma-mono)", fontSize: "0.62rem", letterSpacing: "0.28em", color: "var(--soma-ink-soft)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Demande de devis · 02 minutes
              </div>
              <Field label="Votre nom" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <div className="soma-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <Field label="Date de l'événement" id="date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
                <Field label="Nombre de pièces" id="count" type="number" value={form.count} onChange={(v) => setForm({ ...form, count: v })} />
              </div>
              <div style={{ display: "grid", gap: "0.4rem" }}>
                <label htmlFor="note" style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", textTransform: "uppercase" }}>Décrivez votre bouquet</label>
                <textarea
                  id="note"
                  rows={4}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Pivoines, eucalyptus, lin… une photo si vous l'avez."
                  style={{
                    background: "var(--soma-paper)",
                    border: "1px solid var(--soma-line)",
                    padding: "0.9rem",
                    fontFamily: "var(--soma-body)",
                    fontSize: "1rem",
                    color: "var(--soma-ink)",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: "var(--soma-ink)", color: "var(--soma-paper)",
                  padding: "1.1rem", border: "none", cursor: "pointer",
                  fontFamily: "var(--soma-mono)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                Envoyer la demande →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", value, onChange }) {
  return (
    <div style={{ display: "grid", gap: "0.4rem" }}>
      <label htmlFor={id} style={{ fontFamily: "var(--soma-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--soma-ink-soft)", textTransform: "uppercase" }}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: "var(--soma-paper)",
          border: "1px solid var(--soma-line)",
          padding: "0.9rem",
          fontFamily: "var(--soma-body)",
          fontSize: "1rem",
          color: "var(--soma-ink)",
        }}
      />
    </div>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return <SomaFooter />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
