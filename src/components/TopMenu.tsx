import { ingredients, sections } from "@/data/ingredients";
import {
  getSignpostActiveKey,
  getSommaireSectionHref,
} from "@/lib/navigation";
import { CoverNav } from "@/components/CoverNav";
import { MobilePageNav } from "@/components/MobilePageNav";
import { getIngredientContent } from "@/lib/i18n";
import type { Locale, Messages } from "@/lib/i18n";

type TopMenuProps = {
  currentLang: Locale;
  /** "" (cover), "sommaire" or ingredient slug */
  currentPath: string;
  currentIndex: number;
  t: Messages;
  darkBackground?: boolean;
};

function buildHref(lang: Locale, path: string) {
  return path ? `/${lang}/${path}` : `/${lang}`;
}

export function TopMenu({
  currentLang,
  currentPath,
  currentIndex,
  t,
  darkBackground,
}: TopMenuProps) {
  const frHref = buildHref("fr", currentPath);
  const enHref = buildHref("en", currentPath);
  const front = [
    { href: `/${currentLang}`, label: t.nav.cover, current: currentPath === "" },
    { href: `/${currentLang}/chef`, label: t.nav.chef, current: currentPath === "chef" },
    { href: `/${currentLang}/sommaire`, label: t.signpost.index, current: currentPath === "sommaire" },
  ];
  const groups = sections.map((section) => ({
    id: section.id,
    label: t.sections[section.id],
    href: getSommaireSectionHref(currentLang, section.id),
    current: getSignpostActiveKey(currentPath) === section.id,
    items: ingredients
      .filter((item) => item.sectionId === section.id)
      .map((item) => ({
        href: `/${currentLang}/${item.slug}`,
        label: getIngredientContent(item.id, t)?.title ?? item.title,
        current: item.slug === currentPath,
      })),
  }));

  return (
    <>
      <CoverNav
        lang={currentLang}
        menuLabel={t.signpost.open}
        closeLabel={t.nav.close}
        frHref={frHref}
        enHref={enHref}
        currentLang={currentLang}
        darkBackground={darkBackground}
        front={front}
        groups={groups}
      />
      {currentPath !== "" && (
        <MobilePageNav
          currentIndex={currentIndex}
          lang={currentLang}
          t={t}
          darkBackground={darkBackground}
        />
      )}
    </>
  );
}
