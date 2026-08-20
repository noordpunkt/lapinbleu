import { ingredients } from "@/data/ingredients";
import type { Locale } from "@/lib/i18n";

/** 0 = cover, 1 = sommaire, 2+ = ingredients (same order as PageNavDots). */
export function getPageHrefs(lang: Locale): string[] {
  return [
    `/${lang}`,
    `/${lang}/sommaire`,
    ...ingredients.map((i) => `/${lang}/${i.slug}`),
  ];
}

export function getPreviousPageHref(
  lang: Locale,
  currentIndex: number
): string | null {
  if (currentIndex <= 0) return null;
  return getPageHrefs(lang)[currentIndex - 1] ?? null;
}

export function getNextPageHref(
  lang: Locale,
  currentIndex: number
): string | null {
  const pages = getPageHrefs(lang);
  if (currentIndex >= pages.length - 1) return null;
  return pages[currentIndex + 1] ?? null;
}
