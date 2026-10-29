import { getTranslations } from "next-intl/server";

export async function Beratung() {
  const t = await getTranslations("Beratung");
  const themes = [0, 1, 2, 3] as const;

  return (
    <section id="beratung" className="scroll-mt-24 border-t border-line bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm tracking-[0.16em] text-sage-deep uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-foreground-muted">
            {t("intro")}
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {themes.map((index) => (
            <li key={index} className="border-t border-line pt-6">
              <p className="mb-3 font-serif text-sm text-sage-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl tracking-tight text-green">
                {t(`themes.${index}.title`)}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-foreground-muted">
                {t(`themes.${index}.text`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
