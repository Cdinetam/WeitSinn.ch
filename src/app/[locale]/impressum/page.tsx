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
  const path = locale === "de" ? "/impressum" : `/${locale}/impressum`;
  const languages: Record<string, string> = {
    de: `${siteUrl}/impressum`,
    en: `${siteUrl}/en/impressum`,
    fr: `${siteUrl}/fr/impressum`,
    "x-default": `${siteUrl}/impressum`,
  };

  return {
    title: t("impressumTitle"),
    description: t("impressumDescription"),
    alternates: {
      canonical: path,
      languages,
    },
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal");
  const meta = await getTranslations("Meta");

  return (
    <LegalPage title={meta("impressumTitle")} summary={t("impressumSummary")}>
      <div>
        <p className="font-medium text-foreground">Tam Nguyen</p>
        <p>Psychologe lic. phil.</p>
        <p className="mt-3">
          Albisriederstrasse 248
          <br />
          CH-8047 Zürich
        </p>
      </div>

      <div>
        <p>
          {t("websiteLabel")}{" "}
          <a
            href="https://www.weitsinn.ch"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            www.weitsinn.ch
          </a>
        </p>
        <p className="mt-3">
          {t("emailLabel")}{" "}
          <a
            href="mailto:kontakt@weitsinn.ch"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            kontakt@weitsinn.ch
          </a>
        </p>
        <p className="mt-3">
          {t("phoneLabel")}{" "}
          <a
            href="tel:+41786868089"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            +41 78 686 80 89
          </a>
        </p>
      </div>
    </LegalPage>
  );
}
