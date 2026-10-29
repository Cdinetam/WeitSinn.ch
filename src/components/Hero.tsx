import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:px-10 lg:pb-32"
    >
      <div className="fade-up max-w-xl">
        <p className="mb-5 text-sm tracking-[0.18em] text-sage-deep uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-tight text-green sm:text-5xl lg:text-[3.35rem]">
          WeitSinn
        </h1>
        <p className="mt-5 font-serif text-2xl font-semibold leading-snug text-foreground sm:text-[1.7rem]">
          {t("claim")}
        </p>
        <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-foreground-muted">
          {t("intro")}
        </p>
        <div className="mt-10">
          <Link
            href="/#kontakt"
            className="inline-flex items-center border border-green bg-green px-6 py-3 text-sm tracking-wide text-white transition-colors hover:border-sage-deep hover:bg-sage-deep"
          >
            {t("cta")}
          </Link>
        </div>
      </div>

      <div className="fade-up-delayed">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige/60">
          <Image
            src="/images/weitsinn-hero.jpg"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
