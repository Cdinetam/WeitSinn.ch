import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WeitSinn | Psychologische Beratung in Zürich",
    template: "%s | WeitSinn",
  },
  description:
    "Psychologische Beratung in Zürich: Verstehen. Annehmen. Weiterkommen. Tam Nguyen, Psychologe lic. phil. – Klarheit und neue Perspektiven für ein selbstbestimmtes Leben.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WeitSinn | Psychologische Beratung in Zürich",
    description:
      "Psychologische Beratung in Zürich von Tam Nguyen, Psychologe lic. phil. Verstehen. Annehmen. Weiterkommen.",
    locale: "de_CH",
    type: "website",
    url: siteUrl,
    siteName: "WeitSinn",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de-CH"
      className={`${cormorant.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
