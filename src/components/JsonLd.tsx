export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WeitSinn",
    description:
      "Psychologische Beratung in Zürich von Tam Nguyen, Psychologe lic. phil.",
    url: "https://www.weitsinn.ch",
    email: "kontakt@weitsinn.ch",
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
