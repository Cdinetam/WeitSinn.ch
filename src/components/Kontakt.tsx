import { getTranslations } from "next-intl/server";

export async function Kontakt() {
  const t = await getTranslations("Kontakt");

  return (
    <section id="kontakt" className="scroll-mt-24 border-t border-line bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm tracking-[0.16em] text-sage-deep uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-green sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[1.05rem] leading-relaxed text-foreground-muted">
            {t("intro")}
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-sm tracking-wide text-foreground-muted">
              {t("languages")}
            </p>
            <a
              href="mailto:kontakt@weitsinn.ch"
              className="inline-flex items-center border border-green bg-green px-6 py-3 text-sm tracking-wide text-white transition-colors hover:border-sage-deep hover:bg-sage-deep"
            >
              {t("cta")}
            </a>
            <p className="text-sm text-foreground-muted">
              {t("emailLabel")}{" "}
              <a
                href="mailto:kontakt@weitsinn.ch"
                className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
              >
                kontakt@weitsinn.ch
              </a>
            </p>
            <p className="text-sm text-foreground-muted">
              {t("phoneLabel")}{" "}
              <a
                href="tel:+41786868089"
                className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
              >
                +41 78 686 80 89
              </a>
            </p>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-foreground-muted">
              {t("privacyNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
