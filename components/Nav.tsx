"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: t("work") },
    { href: "#perspective", label: t("perspective") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a href="#top" className="mark">
          JJPR
        </a>
        <ul className="navlinks">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="navright">
          <ThemeToggle />
          <div className="langtoggle" role="group" aria-label="Language">
            <Link href={pathname} locale="en" aria-current={locale === "en"}>
              EN
            </Link>
            <Link href={pathname} locale="es" aria-current={locale === "es"}>
              ES
            </Link>
          </div>
          <a href="#contact" className="btn btn-primary pressable">
            {t("cta")}
          </a>
          <button
            type="button"
            className="navtoggle pressable"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={t("menu")}
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
      <nav className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobile-nav">
        <div className="wrap" style={{ display: "flex", flexDirection: "column" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
