import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/LegalPage";

const siteUrl = "https://www.weitsinn.ch";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = locale === "de" ? "/datenschutz" : `/${locale}/datenschutz`;
  const languages: Record<string, string> = {
    de: `${siteUrl}/datenschutz`,
    en: `${siteUrl}/en/datenschutz`,
    fr: `${siteUrl}/fr/datenschutz`,
    "x-default": `${siteUrl}/datenschutz`,
  };

  return {
    title: t("datenschutzTitle"),
    description: t("datenschutzDescription"),
    alternates: {
      canonical: path,
      languages,
    },
  };
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal");
  const meta = await getTranslations("Meta");

  return (
    <LegalPage
      title={meta("datenschutzTitle")}
      summary={t("datenschutzSummary")}
    >
      <p>{t("privacyIntro")}</p>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("controllerTitle")}
        </h2>
        <p className="mt-3">
          Tam Nguyen
          <br />
          Psychologe lic. phil.
          <br />
          Albisriederstrasse 248
          <br />
          CH-8047 Zürich
          <br />
          {t("emailLabel")}{" "}
          <a
            href="mailto:kontakt@weitsinn.ch"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            kontakt@weitsinn.ch
          </a>
          <br />
          {t("phoneLabel")}{" "}
          <a
            href="tel:+41786868089"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            +41 78 686 80 89
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("purposeTitle")}
        </h2>
        <p className="mt-3">{t("purposeText")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("contactTitle")}
        </h2>
        <p className="mt-3">{t("contactP1")}</p>
        <p className="mt-3">{t("contactP2")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("hostingTitle")}
        </h2>
        <p className="mt-3">{t("hostingText")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("fontsTitle")}
        </h2>
        <p className="mt-3">{t("fontsText")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("cookiesTitle")}
        </h2>
        <p className="mt-3">{t("cookiesText")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("retentionTitle")}
        </h2>
        <p className="mt-3">{t("retentionText")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("rightsTitle")}
        </h2>
        <p className="mt-3">{t("rightsText")}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          {t("changesTitle")}
        </h2>
        <p className="mt-3">{t("changesText")}</p>
      </section>
    </LegalPage>
  );
}
