import { useState, type FormEvent } from "react";

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
    email: "",
    date: "",
    count: "50",
    note: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                Nous revenons vers vous sous 48 heures, avec une proposition.
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
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
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
