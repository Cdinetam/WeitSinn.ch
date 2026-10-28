import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
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
        <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-foreground-muted">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
