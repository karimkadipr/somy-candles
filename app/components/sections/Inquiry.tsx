import { useState, type FormEvent } from "react";
import { whatsappLink } from "../../lib/contact";

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "grid", gap: "0.4rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "var(--soma-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "var(--soma-ink-soft)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
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

export function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    count: "50",
    note: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      "Bonjour Somy Candles, demande de devis sur-mesure :",
      "",
      `Nom : ${form.name || "—"}`,
      form.date ? `Date de l'événement : ${form.date}` : null,
      `Nombre de pièces : ${form.count || "—"}`,
      "",
      "Bouquet :",
      form.note || "—",
    ]
      .filter((l): l is string => l !== null)
      .join("\n");
    window.open(whatsappLink(lines), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const offers: [string, string][] = [
    ["Mariage", "à partir de 28€ / pièce · 30 pièces minimum"],
    ["Événement d'entreprise", "devis sur demande · personnalisation logo"],
    ["Cadeau intime", "édition unique · à partir d'une pièce"],
  ];

  return (
    <section
      id="sur-mesure"
      data-screen-label="04 Sur-mesure"
      className="soma-section-pad soma-section-pad-x"
      style={{ padding: "8rem 2.4rem", maxWidth: 1440, margin: "0 auto" }}
    >
      <div
        className="soma-inquiry-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <div className="soma-inquiry-aside" style={{ position: "sticky", top: "6rem" }}>
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
            Sur-mesure · mariage & événement
          </p>
          <h2
            style={{
              fontFamily: "var(--soma-display)",
              fontWeight: 400,
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              margin: "0.6rem 0 1.5rem",
              lineHeight: 0.98,
              color: "var(--soma-ink)",
            }}
          >
            Votre bouquet,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--soma-accent)" }}>
              en bougie.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--soma-body)",
              fontSize: "1.1rem",
              lineHeight: 1.55,
              color: "var(--soma-ink-soft)",
              maxWidth: 460,
            }}
          >
            Reproduire votre bouquet de mariée en bougie fleurie, ou créer un cadeau
            d'invité unique pour votre événement. Nous travaillons sur devis, à
            partir de 30 pièces, avec un délai de 8 semaines.
          </p>

          <div style={{ marginTop: "2.4rem", display: "grid", gap: "1.2rem" }}>
            {offers.map(([t, d]) => (
              <div
                key={t}
                style={{
                  borderLeft: "2px solid var(--soma-accent)",
                  paddingLeft: "1.1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--soma-display)",
                    fontStyle: "italic",
                    fontSize: "1.25rem",
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.1em",
                    color: "var(--soma-ink-soft)",
                    marginTop: 4,
                  }}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
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
              <div
                style={{
                  fontFamily: "var(--soma-display)",
                  fontStyle: "italic",
                  fontSize: "2.4rem",
                  lineHeight: 1,
                  color: "var(--soma-accent)",
                  marginBottom: "1rem",
                }}
              >
                Merci.
              </div>
              <p
                style={{
                  fontFamily: "var(--soma-body)",
                  fontSize: "1rem",
                  color: "var(--soma-ink-soft)",
                  margin: 0,
                }}
              >
                Votre message est prêt sur WhatsApp — il ne reste plus qu'à
                appuyer sur envoyer. Nous revenons vers vous dans la journée.
              </p>
            </div>
          ) : (
            <>
              <div
                style={{
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  color: "var(--soma-ink-soft)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Demande de devis · 02 minutes
              </div>
              <Field
                label="Votre nom"
                id="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <div
                className="soma-form-row"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              >
                <Field
                  label="Date de l'événement"
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(v) => setForm({ ...form, date: v })}
                />
                <Field
                  label="Nombre de pièces"
                  id="count"
                  type="number"
                  value={form.count}
                  onChange={(v) => setForm({ ...form, count: v })}
                />
              </div>
              <div style={{ display: "grid", gap: "0.4rem" }}>
                <label
                  htmlFor="note"
                  style={{
                    fontFamily: "var(--soma-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "var(--soma-ink-soft)",
                    textTransform: "uppercase",
                  }}
                >
                  Décrivez votre bouquet
                </label>
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
                  background: "var(--soma-ink)",
                  color: "var(--soma-paper)",
                  padding: "1.1rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--soma-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.7rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#25D366";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--soma-ink)";
                  e.currentTarget.style.color = "var(--soma-paper)";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Envoyer sur WhatsApp
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
