export function Marquee() {
  const items = [
    "Cueillette en Drôme provençale",
    "Cire de soja française",
    "Mèche en coton non traité",
    "Édition limitée saisonnière",
    "Livraison neutre en carbone",
    "Atelier ouvert sur rendez-vous",
    "Composition florale décorative",
    "Six étapes faites main",
    "Pour mariage, naissance et Aïd",
    "Parfums au choix",
    "Coffret cadeau sur demande",
    "Commande sur WhatsApp",
  ];
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="soma-marquee-wrap"
      style={{
        borderTop: "1px solid var(--soma-line)",
        borderBottom: "1px solid var(--soma-line)",
        background: "var(--soma-paper-2)",
        overflow: "hidden",
        padding: "1.2rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "3rem",
          animation: "soma-marquee 50s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {repeated.map((s, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--soma-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              color: "var(--soma-ink)",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            {s}
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--soma-accent)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
