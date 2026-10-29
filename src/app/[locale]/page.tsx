import { setRequestLocale } from "next-intl/server";
import { Ablauf } from "@/components/Ablauf";
import { Ansatz } from "@/components/Ansatz";
import { Beratung } from "@/components/Beratung";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Honorar } from "@/components/Honorar";
import { JsonLd } from "@/components/JsonLd";
import { Kontakt } from "@/components/Kontakt";
import { UeberMich } from "@/components/UeberMich";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Beratung />
        <Ablauf />
        <Ansatz />
        <UeberMich />
        <Honorar />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
