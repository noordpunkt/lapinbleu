"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { bodoniBook } from "@/lib/fonts";
import type { SectionId } from "@/data/ingredients";
import { SECTION_GROUND } from "@/lib/section-theme";

export type CoverNavLink = {
  href: string;
  label: string;
  current: boolean;
};

export type CoverNavGroup = {
  id: string;
  label: string;
  href: string;
  current: boolean;
  items: CoverNavLink[];
};

type CoverNavProps = {
  lang: string;
  menuLabel: string;
  closeLabel: string;
  frHref: string;
  enHref: string;
  currentLang: "fr" | "en";
  darkBackground?: boolean;
  front: CoverNavLink[];
  groups: CoverNavGroup[];
};

type Panel = "root" | "book";

const bigLink = `${bodoniBook.className} font-normal text-[clamp(3.5rem,12vw,6.5rem)] leading-none`;

export function CoverNav({
  lang,
  menuLabel,
  closeLabel,
  frHref,
  enHref,
  currentLang,
  darkBackground,
  front,
  groups,
}: CoverNavProps) {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>("root");
  const [atTop, setAtTop] = useState(true);
  const panelId = useId();
  const headerShown = open || atTop;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (panel === "book") setPanel("root");
        else setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, panel]);

  useEffect(() => {
    if (!open) setPanel("root");
  }, [open]);

  useEffect(() => {
    const update = () => setAtTop(window.scrollY <= 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const logoOnDark = open || Boolean(darkBackground);

  return (
    <>
      <header
        className={`print:hidden fixed top-0 left-0 right-0 transition-transform duration-300 ease-out ${
          open ? "z-[70]" : "z-50"
        } ${headerShown ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
      >
        <div className="relative flex items-center justify-center px-4 py-5 md:py-6">
          <Link href={`/${lang}`} className="relative z-[80]" onClick={() => setOpen(false)}>
            <img
              src="/images/LesCollectionneurs.svg"
              alt="Les Collectionneurs"
              className={`h-7 md:h-8 w-auto transition-[filter] duration-300 ${logoOnDark ? "" : "brightness-0"}`}
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="absolute right-4 top-1/2 z-[80] flex h-11 w-11 -translate-y-1/2 flex-col items-center justify-center gap-[7px]"
            aria-label={open ? closeLabel : menuLabel}
            aria-expanded={open}
            aria-controls={panelId}
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                logoOnDark ? "bg-white" : "bg-black"
              } ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ${
                logoOnDark ? "bg-white" : "bg-black"
              } ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        id={panelId}
        className={`print:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.92)" }}
        aria-hidden={!open}
      >
        {panel === "root" ? (
          <nav
            className="flex h-full w-full flex-col items-center justify-center gap-8 px-8 md:gap-10"
            aria-label={menuLabel}
          >
            <button
              type="button"
              onClick={() => setPanel("book")}
              className={`${bigLink} text-white opacity-90 transition-opacity duration-200 hover:opacity-100`}
            >
              LE MENU
            </button>
            <Link
              href={frHref}
              onClick={() => setOpen(false)}
              aria-current={currentLang === "fr" ? "true" : undefined}
              className={`${bigLink} text-white transition-opacity duration-200 ${
                currentLang === "fr" ? "opacity-100" : "opacity-45 hover:opacity-80"
              }`}
            >
              FR
            </Link>
            <Link
              href={enHref}
              onClick={() => setOpen(false)}
              aria-current={currentLang === "en" ? "true" : undefined}
              className={`${bigLink} text-white transition-opacity duration-200 ${
                currentLang === "en" ? "opacity-100" : "opacity-45 hover:opacity-80"
              }`}
            >
              EN
            </Link>
          </nav>
        ) : (
          <nav
            aria-label={menuLabel}
            className="h-full overflow-y-auto px-6 pt-28 pb-16 text-white md:px-12"
          >
            <button
              type="button"
              onClick={() => setPanel("root")}
              className={`${bodoniBook.className} mb-10 font-normal text-[clamp(1.25rem,3vw,1.75rem)] leading-none text-white/70 uppercase transition-opacity hover:text-white`}
            >
              ← LE MENU
            </button>
            <ul className="mb-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
              {front.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`${bodoniBook.className} font-normal text-[clamp(1.75rem,5vw,2.75rem)] leading-none no-underline transition-opacity ${
                      item.current ? "text-white opacity-100" : "text-white opacity-45 hover:opacity-80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mx-auto w-full max-w-4xl space-y-12">
              {groups.map((group) => {
                const swatch = SECTION_GROUND[group.id as SectionId];
                return (
                <section key={group.id}>
                  <h2
                    className={`${bodoniBook.className} mb-5 flex items-center gap-3 font-normal text-[clamp(1.5rem,4vw,2.25rem)] leading-none text-white uppercase`}
                  >
                    {swatch ? (
                      <span
                        className="inline-block h-[0.55em] w-[0.55em] shrink-0 border border-white/35"
                        style={{ backgroundColor: swatch }}
                        aria-hidden
                      />
                    ) : null}
                    <Link
                      href={group.href}
                      aria-current={group.current ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="text-white no-underline opacity-90 transition-opacity hover:opacity-100"
                    >
                      {group.label}
                    </Link>
                  </h2>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={`${bodoniBook.className} font-normal text-[clamp(1.05rem,2.4vw,1.35rem)] leading-snug no-underline transition-opacity ${
                            item.current
                              ? "text-white opacity-100"
                              : "text-white opacity-45 hover:opacity-80"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
