import { getLocale, getTranslations } from "next-intl/server";

export async function JsonLd() {
  const t = await getTranslations("JsonLd");
  const locale = await getLocale();
  const url =
    locale === "de"
      ? "https://www.weitsinn.ch"
      : `https://www.weitsinn.ch/${locale}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WeitSinn",
    description: t("description"),
    url,
    email: "kontakt@weitsinn.ch",
    telephone: "+41-78-686-80-89",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Albisriederstrasse 248",
      postalCode: "8047",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    founder: {
      "@type": "Person",
      name: "Tam Nguyen",
      jobTitle: "Psychologe lic. phil.",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Zürich",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
