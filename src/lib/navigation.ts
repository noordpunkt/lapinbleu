import { ingredients, type SectionId } from "@/data/ingredients";
import type { Locale } from "@/lib/i18n";

export type SignpostActiveKey = "cover" | "chef" | "sommaire" | SectionId;

export function getSignpostActiveKey(currentPath: string): SignpostActiveKey {
  if (!currentPath) return "cover";
  if (currentPath === "chef") return "chef";
  if (currentPath === "sommaire") return "sommaire";
  return ingredients.find((item) => item.slug === currentPath)?.sectionId ?? "sommaire";
}

export function getSommaireSectionHref(lang: Locale, sectionId: SectionId): string {
  return `/${lang}/sommaire#${sectionId}`;
}

/** 0 = cover, 1 = chef, 2 = sommaire, 3+ = ingredients. */
export function getPageHrefs(lang: Locale): string[] {
  return [
    `/${lang}`,
    `/${lang}/chef`,
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
