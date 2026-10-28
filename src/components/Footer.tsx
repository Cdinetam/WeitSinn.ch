import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <p className="font-serif text-xl text-green">WeitSinn.ch</p>
          <p className="mt-2 text-sm text-foreground-muted">
            Tam Nguyen · Psychologe lic. phil.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground-muted">
          <Link href="/impressum" className="transition-colors hover:text-green">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-green">
            Datenschutz
          </Link>
        </div>

        <p className="text-sm text-foreground-muted">© WeitSinn.ch</p>
      </div>
    </footer>
  );
}
