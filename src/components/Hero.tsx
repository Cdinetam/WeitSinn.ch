import { ImagePlaceholder } from "./ImagePlaceholder";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:px-10 lg:pb-32"
    >
      <div className="fade-up max-w-xl">
        <p className="mb-5 text-sm tracking-[0.18em] text-sage-deep uppercase">
          Psychologische Beratung
        </p>
        <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-tight text-green sm:text-5xl lg:text-[3.35rem]">
          WeitSinn
        </h1>
        <p className="mt-5 font-serif text-2xl font-semibold leading-snug text-foreground sm:text-[1.7rem]">
          Verstehen. Annehmen. Weiterkommen.
        </p>
        <p className="mt-2 font-serif text-xl leading-snug text-foreground-muted sm:text-[1.35rem]">
          Understand. Embrace. Move on.
        </p>
        <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-foreground-muted">
          Psychologische Beratung für Erwachsene, die Klarheit suchen und
          persönliche oder berufliche Fragen bewusst gestalten möchten – ruhig,
          fundiert und auf Augenhöhe.
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

      <div className="fade-up-delayed">
        <ImagePlaceholder
          label="Atmosphärisches Foto – Natur, Licht, Weite oder ruhige Architektur"
          aspect="landscape"
          className="w-full"
        />
      </div>
    </section>
  );
}
