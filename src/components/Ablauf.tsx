const steps = [
  {
    title: "Kontakt",
    text: "Sie melden sich unverbindlich. Wir klären in einem kurzen Austausch, ob und wie eine Beratung zu Ihrer Situation passen könnte.",
  },
  {
    title: "Verstehen",
    text: "Im Gespräch ordnen wir gemeinsam ein, was Sie bewegt – Gedanken, Gefühle, Muster und den Kontext Ihres Alltags.",
  },
  {
    title: "Eigene Wege",
    text: "Daraus entstehen neue Perspektiven und konkrete Handlungsmöglichkeiten, die Sie in Ihrem Tempo weiterverfolgen können.",
  },
] as const;

export function Ablauf() {
  return (
    <section id="ablauf" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm tracking-[0.16em] text-sage-deep uppercase">
            Ablauf
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
            So läuft die Beratung ab
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-6">
              <p className="mb-3 font-serif text-sm text-sage-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl tracking-tight text-green">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-foreground-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-2xl text-[1.05rem] leading-relaxed text-foreground-muted">
          Die Schritte sind bewusst einfach gehalten. Im Mittelpunkt stehen Sie,
          Ihre Fragen und Ihr Tempo.
        </p>
      </div>
    </section>
  );
}
