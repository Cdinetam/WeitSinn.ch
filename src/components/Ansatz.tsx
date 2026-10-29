import { getTranslations } from "next-intl/server";

export async function Ansatz() {
  const t = await getTranslations("Ansatz");

  return (
    <section id="ansatz" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm tracking-[0.16em] text-sage-deep uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-green sm:text-4xl">
              {t("title")}
            </h2>
          </div>

          <div className="max-w-xl space-y-6 text-[1.05rem] leading-relaxed text-foreground-muted">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>

        <div className="mt-16 max-w-2xl border-t border-line pt-12 lg:mt-20">
          <h3 className="font-serif text-2xl tracking-tight text-green">
            {t("whyTitle")}
          </h3>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-foreground-muted">
            <p>
              {t("whyP1Before")}{" "}
              <span className="font-medium text-foreground">
                {t("whyP1Highlight")}
              </span>{" "}
              {t("whyP1After")}
            </p>
            <p>{t("whyP2")}</p>
            <p>{t("whyP3")}</p>
            <p className="pt-2 text-sm italic leading-relaxed text-sage-deep/90">
              {t("whySource")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
