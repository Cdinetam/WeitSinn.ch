import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von WeitSinn.ch – Tam Nguyen, Psychologe lic. phil., Zürich.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" summary="Impressum anzeigen">
      <div>
        <p className="font-medium text-foreground">Tam Nguyen</p>
        <p>Psychologe lic. phil.</p>
        <p className="mt-3">
          Albisriederstrasse 248
          <br />
          CH-8047 Zürich
        </p>
      </div>

      <div>
        <p>
          Website:{" "}
          <a
            href="https://www.weitsinn.ch"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            www.weitsinn.ch
          </a>
        </p>
        <p className="mt-3">
          E-Mail:{" "}
          <a
            href="mailto:kontakt@weitsinn.ch"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            kontakt@weitsinn.ch
          </a>
        </p>
        <p className="mt-3">
          Telefon:{" "}
          <a
            href="tel:+41786868089"
            className="text-green underline decoration-beige underline-offset-4 transition-colors hover:decoration-sage"
          >
            +41 78 686 80 89
          </a>
        </p>
      </div>

      <div className="border-t border-line pt-8 text-sm">
        <p className="font-medium text-foreground">Noch zu ergänzen / prüfen</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>UID / MWST-Angaben (falls registrierungspflichtig)</li>
          <li>Berufsregister / Aufsicht – nur falls zutreffend und belegt</li>
        </ul>
      </div>
    </LegalPage>
  );
}
