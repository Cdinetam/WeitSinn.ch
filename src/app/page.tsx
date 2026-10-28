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

export default function Home() {
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
