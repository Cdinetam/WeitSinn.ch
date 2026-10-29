import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function UeberMich() {
  const t = await getTranslations("UeberMich");

  return (
    <section id="ueber-mich" className="scroll-mt-24 border-t border-line bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <p className="mb-10 text-sm tracking-[0.16em] text-sage-deep uppercase">
          {t("eyebrow")}
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-beige/60 lg:mx-0">
            <Image
              src="/images/weitsinn-portrait.jpg"
              alt={t("imageAlt")}
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
              {t("role")}
            </p>

            <div className="mt-8 space-y-5 leading-relaxed text-foreground-muted">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p className="font-medium text-foreground">{t("p3")}</p>
              <p>
                {t("tavyroBefore")}{" "}
                <a
                  href="https://tavyro.ch"
                  className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
                >
                  TaVyro
                </a>{" "}
                {t("tavyroAfter")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
