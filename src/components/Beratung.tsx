const themes = [
  {
    title: "Klarheit & Orientierung",
    text: "Entscheidungen, Neuorientierung und Lebensfragen mit Ruhe betrachten und einordnen.",
  },
  {
    title: "Belastung & Resilienz",
    text: "Stress und innere Belastung verstehen – Stabilität und Selbstwirksamkeit stärken.",
  },
  {
    title: "Veränderung & Entwicklung",
    text: "Neue Perspektiven öffnen und eigene Lösungswege für den nächsten Schritt entwickeln.",
  },
  {
    title: "Sinn & Werte",
    text: "Werte klären, Lebensgestaltung reflektieren und Sinnfindung konkret machen.",
  },
] as const;

export function Beratung() {
  return (
    <section id="beratung" className="scroll-mt-24 border-t border-line bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm tracking-[0.16em] text-sage-deep uppercase">
            Angebot
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
            Psychologische Beratung
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-foreground-muted">
            Gedanken, Gefühle und Verhaltensmuster besser verstehen – und daraus
            neue Handlungsmöglichkeiten ableiten. Die Beratung richtet sich an
            Erwachsene mit persönlichen oder beruflichen Herausforderungen,
            Veränderungswünschen und Lebensfragen.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {themes.map((theme, index) => (
            <li key={theme.title} className="border-t border-line pt-6">
              <p className="mb-3 font-serif text-sm text-sage-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl tracking-tight text-green">
                {theme.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-foreground-muted">
                {theme.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
