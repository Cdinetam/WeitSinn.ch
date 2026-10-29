import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const base = "https://www.weitsinn.ch";

function localizedPath(locale: string, path: string): string {
  const suffix = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) {
    return `${base}${suffix || "/"}`;
  }
  return `${base}/${locale}${suffix}`;
}

function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedPath(locale, path)]),
  ) as Record<string, string>;
  languages["x-default"] = localizedPath(routing.defaultLocale, path);

  return {
    url: localizedPath(routing.defaultLocale, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", "monthly", 1),
    entry("/impressum", "yearly", 0.3),
    entry("/datenschutz", "yearly", 0.3),
    ...routing.locales
      .filter((locale) => locale !== routing.defaultLocale)
      .flatMap((locale) => [
        {
          url: localizedPath(locale, "/"),
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 1,
          alternates: {
            languages: {
              de: localizedPath("de", "/"),
              en: localizedPath("en", "/"),
              fr: localizedPath("fr", "/"),
              "x-default": localizedPath("de", "/"),
            },
          },
        },
        {
          url: localizedPath(locale, "/impressum"),
          lastModified: new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.3,
          alternates: {
            languages: {
              de: localizedPath("de", "/impressum"),
              en: localizedPath("en", "/impressum"),
              fr: localizedPath("fr", "/impressum"),
              "x-default": localizedPath("de", "/impressum"),
            },
          },
        },
        {
          url: localizedPath(locale, "/datenschutz"),
          lastModified: new Date(),
          changeFrequency: "yearly" as const,
          priority: 0.3,
          alternates: {
            languages: {
              de: localizedPath("de", "/datenschutz"),
              en: localizedPath("en", "/datenschutz"),
              fr: localizedPath("fr", "/datenschutz"),
              "x-default": localizedPath("de", "/datenschutz"),
            },
          },
        },
      ]),
  ];
}
