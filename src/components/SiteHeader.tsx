"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#beratung", label: t("beratung") },
    { href: "/#ansatz", label: t("ansatz") },
    { href: "/#ueber-mich", label: t("ueberMich") },
    { href: "/#honorar", label: t("honorar") },
    { href: "/#kontakt", label: t("kontakt") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-white/95 shadow-[0_1px_0_rgba(47,60,49,0.04)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/#top"
          className="font-serif text-[1.55rem] leading-none tracking-tight text-green transition-opacity hover:opacity-75"
          onClick={() => setOpen(false)}
        >
          WeitSinn
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label={t("mainAria")}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.92rem] tracking-wide text-foreground-muted transition-colors hover:text-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-green"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t("close") : t("menu")}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-line/70 bg-white md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5"
          aria-label={t("mobileAria")}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base text-foreground transition-colors hover:text-green"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
