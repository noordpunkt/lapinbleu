"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

type TopMenuProps = {
  currentLang: Locale;
  /** "" (cover), "sommaire" or ingredient slug */
  currentPath: string;
  printLabel: string;
  /** true = couverture (fond noir) : pas de carré, seulement les lignes blanches */
  darkBackground?: boolean;
};

function buildHref(lang: Locale, path: string) {
  return path ? `/${lang}/${path}` : `/${lang}`;
}

export function TopMenu({ currentLang, currentPath, printLabel, darkBackground }: TopMenuProps) {
  const [open, setOpen] = useState(false);

  const frHref = buildHref("fr", currentPath);
  const enHref = buildHref("en", currentPath);
  const homeHref = buildHref(currentLang, "");

  const lineColor = darkBackground ? "bg-white" : "bg-neutral-900";
  const buttonClass = darkBackground
    ? "relative w-8 h-8 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
    : "relative w-8 h-8 flex items-center justify-center bg-white/90 border border-neutral-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-transparent";

  return (
    <>
      <div className="print:hidden fixed top-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={buttonClass}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block absolute h-[1.5px] w-4 ${lineColor} transition-transform duration-200 ${
              open ? "rotate-45" : "-translate-y-[3px]"
            }`}
          />
          <span
            className={`block absolute h-[1.5px] w-4 ${lineColor} transition-transform duration-200 ${
              open ? "-rotate-45" : "translate-y-[3px]"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-sm text-white flex flex-col items-center justify-center gap-8">
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="relative w-8 h-8 flex items-center justify-center cursor-pointer bg-transparent border-none"
              aria-label="Close menu"
            >
              <span className="block absolute h-[1.5px] w-4 bg-white rotate-45" />
              <span className="block absolute h-[1.5px] w-4 bg-white -rotate-45" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 text-3xl md:text-4xl tracking-[0.2em] uppercase">
            <Link href={homeHref} aria-label="Home" className="mb-3">
              <Image
                src="/images/LapinBlanc.svg"
                alt=""
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </Link>
            <Link
              href={frHref}
              onClick={() => setOpen(false)}
              className={currentLang === "fr" ? "font-semibold" : "font-normal opacity-80 hover:opacity-100"}
            >
              FR
            </Link>
            <Link
              href={enHref}
              onClick={() => setOpen(false)}
              className={currentLang === "en" ? "font-semibold" : "font-normal opacity-80 hover:opacity-100"}
            >
              EN
            </Link>
            <button
              type="button"
              onClick={() => {
                window.print();
                setOpen(false);
              }}
              className="mt-4 text-2xl md:text-3xl tracking-[0.18em] uppercase opacity-90 hover:opacity-100 border border-white/60 px-5 py-2"
            >
              {printLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

