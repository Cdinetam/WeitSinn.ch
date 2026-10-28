import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von WeitSinn.ch – Informationen zum Umgang mit Personendaten.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <p>
        Diese Datenschutzerklärung informiert über den Umgang mit Personendaten
        im Zusammenhang mit der Website WeitSinn.ch (psychologische Beratung,
        Tam Nguyen) nach dem Schweizer Datenschutzgesetz (DSG).
      </p>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Verantwortliche Person
        </h2>
        <p className="mt-3">
          Tam Nguyen
          <br />
          Psychologe lic. phil.
          <br />
          Albisriederstrasse 248
          <br />
          CH-8047 Zürich
          <br />
          E-Mail:{" "}
          <a
            href="mailto:kontakt@weitsinn.ch"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            kontakt@weitsinn.ch
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Zweck der Website
        </h2>
        <p className="mt-3">
          Die Website dient der Information über das Angebot der
          psychologischen Beratung sowie der Kontaktaufnahme. Es werden keine
          Online-Buchungen und keine Online-Bezahlungen angeboten.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Kontaktanfragen
        </h2>
        <p className="mt-3">
          Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen
          mitgeteilten Angaben (insbesondere E-Mail-Adresse, Name und Inhalt der
          Nachricht) zur Bearbeitung Ihrer Anfrage und für die damit
          zusammenhängende Korrespondenz verarbeitet. Bitte senden Sie keine
          vertraulichen Gesundheitsangaben unverschlüsselt per E-Mail.
        </p>
        <p className="mt-3">
          Besonders schützenswerte Personendaten (z.&nbsp;B. Gesundheitsdaten)
          werden nur verarbeitet, soweit Sie diese freiwillig mitteilen und dies
          für die Anfrage oder die Beratung erforderlich ist. Der Schutz solcher
          Daten hat hohe Priorität.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Hosting und Server-Logs
        </h2>
        <p className="mt-3">
          Die Website wird über Vercel gehostet. Beim Aufruf der Seiten können
          technisch notwendige Verbindungsdaten (z.&nbsp;B. IP-Adresse, Zeitpunkt,
          aufgerufene URL, Browser- und Geräteinformationen) in Server-Logs
          verarbeitet werden, soweit dies für Betrieb, Sicherheit und
          Fehleranalyse erforderlich ist. Die Speicherung erfolgt nicht nach dem
          Grundsatz «wir speichern nichts», sondern nach dem Prinzip der
          Erforderlichkeit und den Einstellungen des Hosting-Anbieters.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Schriften und Drittanbieter
        </h2>
        <p className="mt-3">
          Für die Darstellung werden Webfonts verwendet, die beim Build der
          Website eingebunden und über das Hosting ausgeliefert werden. Es
          findet beim Seitenaufruf kein Laden von Schriftarten direkt von
          Google-Servern statt. Es werden derzeit keine Analyse-, Werbe- oder
          Social-Media-Tracking-Tools eingesetzt.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Cookies und Tracking
        </h2>
        <p className="mt-3">
          Es werden keine Tracking-Cookies zu Marketingzwecken gesetzt.
          Technisch notwendige Funktionen des Hostings oder des Browsers können
          temporäre technische Daten speichern.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Aufbewahrung
        </h2>
        <p className="mt-3">
          Kontaktbezogene Daten werden so lange aufbewahrt, wie es für die
          Bearbeitung der Anfrage, allfällige Nachfragen oder gesetzliche
          Aufbewahrungspflichten erforderlich ist.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Ihre Rechte
        </h2>
        <p className="mt-3">
          Sie haben nach Massgabe des Schweizer Datenschutzrechts insbesondere
          das Recht auf Auskunft, Berichtigung und Löschung Ihrer Personendaten
          sowie das Recht, die Bearbeitung einzuschränken oder ihr zu
          widersprechen, soweit die gesetzlichen Voraussetzungen erfüllt sind.
          Anfragen richten Sie bitte an die oben genannte Kontaktadresse.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl tracking-tight text-green">
          Änderungen
        </h2>
        <p className="mt-3">
          Diese Datenschutzerklärung kann angepasst werden, wenn sich das
          Angebot der Website oder rechtliche Anforderungen ändern. Es gilt die
          jeweils auf dieser Seite veröffentlichte Fassung.
        </p>
      </section>
    </LegalPage>
  );
}
