import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en", "fr"],
  defaultLocale: "de",
  // DE at `/`, EN at `/en`, FR at `/fr`
  localePrefix: "as-needed",
  localeDetection: true,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type AppLocale = (typeof routing.locales)[number];
