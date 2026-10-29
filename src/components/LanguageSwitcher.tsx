"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
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
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-1.5 text-[0.8rem] tracking-[0.08em] text-foreground-muted"
      aria-label={t("languageAria")}
    >
      {routing.locales.map((code, index) => (
        <span key={code} className="inline-flex items-center gap-1.5">
          {index > 0 ? <span aria-hidden className="text-line">|</span> : null}
          <button
            type="button"
            className={`transition-colors hover:text-green ${
              locale === code ? "text-green" : ""
            }`}
            aria-current={locale === code ? "true" : undefined}
            onClick={() => {
              if (code === locale) return;
              router.replace(pathname, { locale: code });
            }}
          >
            {labels[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
