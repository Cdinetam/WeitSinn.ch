import { ImagePlaceholder } from "./ImagePlaceholder";

export function UeberMich() {
  return (
    <section id="ueber-mich" className="scroll-mt-24 border-t border-line bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <p className="mb-10 text-sm tracking-[0.16em] text-sage-deep uppercase">
          Über mich
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ImagePlaceholder
            label="Porträt Tam Nguyen"
            aspect="portrait"
            className="mx-auto w-full max-w-sm lg:mx-0"
          />

          <div className="max-w-xl">
            <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
              Tam Nguyen
            </h2>
            <p className="mt-3 text-sm tracking-wide text-foreground-muted">
              Psychologe lic. phil. | Executive Coach
            </p>

            <div className="mt-8 space-y-5 leading-relaxed text-foreground-muted">
              <p>
                Mein Psychologiestudium an der Universität Bern mit den
                Schwerpunkten Arbeits- und Organisationspsychologie sowie
                Klinische Psychologie bildet das wissenschaftliche Fundament
                meiner Arbeit.
              </p>
              <p>
                In über 20 Jahren Berufserfahrung, davon viele Jahre in
                internationalen Führungsfunktionen, habe ich Menschen und Teams
                aus unterschiedlichen Ländern und Kulturen begleitet. Die
                Zusammenarbeit über kulturelle Grenzen hinweg hat mir gezeigt,
                wie unterschiedlich Menschen denken, fühlen, kommunizieren und
                mit Herausforderungen umgehen.
              </p>
              <p>
                Auch meine zahlreichen Reisen und persönlichen Begegnungen mit
                anderen Kulturen haben meinen Blick erweitert. Unterschiedliche
                Vorstellungen von Glück, Erfolg, Beziehungen und einem erfüllten
                Leben sind für mich wertvolle Impulse, vertraute Denkmuster zu
                hinterfragen und neue Perspektiven zu entdecken.
              </p>
              <p>
                Bei WeitSinn verbinde ich wissenschaftlich fundierte Psychologie
                mit philosophischer Reflexion, interkultureller Offenheit,
                Resilienz und lösungsorientierten Ansätzen.
              </p>
              <p className="font-medium text-foreground">
                Mein Ziel ist nicht, vorgefertigte Antworten zu geben, sondern
                gemeinsam zu verstehen, was bewegt, anzunehmen, was ist, und neue
                Handlungsmöglichkeiten zu entwickeln.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
