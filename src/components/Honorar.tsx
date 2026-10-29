import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Honorar() {
  const t = await getTranslations("Honorar");

  return (
    <section id="honorar" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
            {t("title")}
          </h2>

          <div className="mt-12 border-y border-line py-12">
            <p className="text-sm tracking-wide text-foreground-muted">
              {t("label")}
            </p>
            <p className="mt-4 font-serif text-3xl tracking-tight text-green sm:text-4xl">
              {t("price")}
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-foreground-muted">
              {t("footnote")}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-lg space-y-4 text-[1.05rem] leading-relaxed text-foreground-muted">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>

          <div className="mt-10">
            <Link
              href="/#kontakt"
              className="inline-flex items-center border border-green bg-green px-6 py-3 text-sm tracking-wide text-white transition-colors hover:border-sage-deep hover:bg-sage-deep"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
