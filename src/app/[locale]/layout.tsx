import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.weitsinn.ch";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const languages: Record<string, string> = {
    de: `${siteUrl}/`,
    en: `${siteUrl}/en`,
    fr: `${siteUrl}/fr`,
    "x-default": `${siteUrl}/`,
  };

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    alternates: {
      canonical: locale === "de" ? "/" : `/${locale}`,
      languages,
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: locale === "de" ? "de_CH" : locale === "fr" ? "fr_CH" : "en_GB",
      type: "website",
      url: locale === "de" ? siteUrl : `${siteUrl}/${locale}`,
      siteName: "WeitSinn",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const htmlLang = locale === "de" ? "de-CH" : locale === "fr" ? "fr-CH" : "en";

  return (
    <html
      lang={htmlLang}
      className={`${cormorant.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
