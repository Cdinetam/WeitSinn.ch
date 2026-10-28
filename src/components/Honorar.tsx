export function Honorar() {
  return (
    <section id="honorar" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
            Beratung & Honorar
          </h2>

          <div className="mt-12 border-y border-line py-12">
            <p className="text-sm tracking-wide text-foreground-muted">
              Psychologische Einzelberatung
            </p>
            <p className="mt-4 font-serif text-3xl tracking-tight text-green sm:text-4xl">
              CHF 160.– / 60 Minuten
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-lg text-[1.05rem] leading-relaxed text-foreground-muted">
            Die Beratung bietet Raum, persönliche oder berufliche
            Herausforderungen zu reflektieren, Klarheit zu gewinnen und eigene
            Handlungsmöglichkeiten zu entwickeln.
          </p>

          <div className="mt-10">
            <a
              href="#kontakt"
              className="inline-flex items-center border border-green bg-green px-6 py-3 text-sm tracking-wide text-white transition-colors hover:border-sage-deep hover:bg-sage-deep"
            >
              Gespräch anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
