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
                Ich habe Psychologie an der Universität Bern studiert und 2004
                mit dem Lizentiat abgeschlossen. Meine Studienschwerpunkte
                umfassten Arbeits- und Organisationspsychologie sowie Klinische
                Psychologie.
              </p>
              <p>
                Ich verfüge über mehr als 20 Jahre Berufserfahrung in der Arbeit
                mit Menschen, Führung und Veränderungsprozessen.
              </p>
              <p>
                In meiner Beratung verbinde ich wissenschaftlich fundierte
                Psychologie mit philosophischer Reflexion, Resilienz und
                lösungsorientierten Ansätzen. Im Mittelpunkt stehen der Mensch,
                seine individuellen Ressourcen und die Entwicklung neuer
                Perspektiven.
              </p>
              <p>
                Die Psychologie bildet die fachliche Grundlage, meine
                langjährige Berufserfahrung und meine Ausbildung als Executive
                Coach ergänzen meinen Beratungsansatz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
