import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LegalDisclosure } from "./LegalDisclosure";

type LegalPageProps = {
  title: string;
  summary: string;
  children: ReactNode;
};

export async function LegalPage({ title, summary, children }: LegalPageProps) {
  const t = await getTranslations("Legal");

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-10">
        <p className="mb-4 text-sm tracking-[0.16em] text-sage-deep uppercase">
          <Link href="/" className="transition-colors hover:text-green">
            WeitSinn.ch
          </Link>
        </p>
        <h1 className="font-serif text-3xl tracking-tight text-green sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-foreground-muted">
          {t("intro")}
        </p>
        <div className="mt-10">
          <LegalDisclosure summary={summary}>{children}</LegalDisclosure>
        </div>
      </main>
      <Footer />
    </>
  );
}
