export function Impressum() {
  return (
    <section id="impressum" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
            Impressum
          </h2>
          <div className="mt-8 space-y-6 text-[1.05rem] leading-relaxed text-foreground-muted">
            <div>
              <p className="font-medium text-foreground">Tam Nguyen</p>
              <p>Psychologe lic. phil. | Executive Coach</p>
              <p className="mt-3">
                Albisriederstrasse 248
                <br />
                CH-8047 Zürich
              </p>
            </div>
            <p>
              Website:{" "}
              <a
                href="https://weitsinn.ch"
                className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
              >
                WeitSinn.ch
              </a>
            </p>
            <p>
              Kontakt:{" "}
              <a
                href="mailto:kontakt@weitsinn.ch"
                className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
              >
                kontakt@weitsinn.ch
              </a>{" "}
              <span className="text-sm">(E-Mail-Platzhalter)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
