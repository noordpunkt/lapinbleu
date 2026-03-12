"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: Locale;
  /** path without leading slash: "" (cover), "sommaire", or "beurre-noisette" */
  currentPath: string;
};

function buildHref(lang: Locale, path: string) {
  return path ? `/${lang}/${path}` : `/${lang}`;
}

export function LanguageSwitcher({ currentLang, currentPath }: LanguageSwitcherProps) {
  const otherLang: Locale = currentLang === "fr" ? "en" : "fr";
  const frHref = buildHref("fr", currentPath);
  const enHref = buildHref("en", currentPath);

  return (
    <span className="flex items-center gap-1 text-xs text-neutral-600 bg-white/90 rounded border border-neutral-200 px-2 py-1.5">
      <Link
        href={frHref}
        className={currentLang === "fr" ? "font-semibold text-neutral-900" : "text-neutral-500 hover:text-neutral-700"}
        aria-current={currentLang === "fr" ? "true" : undefined}
      >
        FR
      </Link>
      <span className="text-neutral-300" aria-hidden>|</span>
      <Link
        href={enHref}
        className={currentLang === "en" ? "font-semibold text-neutral-900" : "text-neutral-500 hover:text-neutral-700"}
        aria-current={currentLang === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </span>
  );
}
