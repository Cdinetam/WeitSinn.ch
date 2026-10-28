import { Ansatz } from "@/components/Ansatz";
import { Beratung } from "@/components/Beratung";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Honorar } from "@/components/Honorar";
import { Kontakt } from "@/components/Kontakt";
import { UeberMich } from "@/components/UeberMich";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beratung />
        <Ansatz />
        <UeberMich />
        <Honorar />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
