"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const labels: Record<AppLocale, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher() {
  const t = useTranslations("Nav");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.08em] text-foreground-muted"
      aria-label={t("languageAria")}
      role="navigation"
    >
      {routing.locales.map((code, index) => (
        <span key={code} className="inline-flex items-center gap-1.5">
          {index > 0 ? <span aria-hidden className="text-line">|</span> : null}
          {locale === code ? (
            <span className="text-green" aria-current="true">
              {labels[code]}
            </span>
          ) : (
            <Link
              href={pathname}
              locale={code}
              prefetch
              className="transition-colors hover:text-green"
              hrefLang={code}
            >
              {labels[code]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
