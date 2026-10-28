import Image from "next/image";

export function UeberMich() {
  return (
    <section id="ueber-mich" className="scroll-mt-24 border-t border-line bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <p className="mb-10 text-sm tracking-[0.16em] text-sage-deep uppercase">
          Über mich
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-beige/60 lg:mx-0">
            <Image
              src="/images/weitsinn-portrait.jpg"
              alt="Tam Nguyen, Psychologe lic. phil., Porträt"
              fill
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 90vw"
              className="object-cover object-[center_20%]"
            />
          </div>

          <div className="max-w-xl">
            <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
              Tam Nguyen
            </h2>
            <p className="mt-3 text-sm tracking-wide text-foreground-muted">
              Psychologe lic. phil. | Executive Coach
            </p>

            <div className="mt-8 space-y-5 leading-relaxed text-foreground-muted">
              <p>
                Mein Studium der Psychologie an der Universität Bern habe ich mit
                dem Lizentiat abgeschlossen. Meine Schwerpunkte lagen in der
                Arbeits- und Organisationspsychologie sowie der Klinischen
                Psychologie.
              </p>
              <p>
                Über viele Jahre habe ich Menschen und Teams begleitet – in
                Unternehmen ebenso wie bei persönlichen Anliegen, auch in
                internationalen und interkulturellen Kontexten. Diese Erfahrungen
                haben meinen Blick dafür geschärft, wie unterschiedlich Menschen
                denken, fühlen und mit Herausforderungen umgehen.
              </p>
              <p className="font-medium text-foreground">
                Mein Ziel ist es nicht, vorgefertigte Antworten oder Lösungswege
                vorzugeben, sondern gemeinsam zu verstehen, was bewegt,
                anzunehmen, was ist, und daraus neue Handlungsmöglichkeiten zu
                entwickeln.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
