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

export const metadata: Metadata = {
  title: "WeitSinn – Psychologische Beratung | Tam Nguyen",
  description:
    "Psychologische Beratung in der Schweiz: Neue Perspektiven für ein selbstbestimmtes Leben. Tam Nguyen, Psychologe lic. phil.",
  openGraph: {
    title: "WeitSinn – Psychologische Beratung",
    description:
      "Neue Perspektiven für ein selbstbestimmtes Leben. Psychologische Beratung von Tam Nguyen, Psychologe lic. phil.",
    locale: "de_CH",
    type: "website",
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
