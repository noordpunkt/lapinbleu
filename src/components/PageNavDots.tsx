import Link from "next/link";
import { ingredients } from "@/data/ingredients";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

type PageNavDotsProps = {
  /** 0 = couverture, 1 = première page ingrédient, etc. */
  currentIndex: number;
  lang: Locale;
  t: Messages;
};

function rulerTickClass(i: number, isCurrent: boolean, currentIndex: number) {
  const base =
    isCurrent
      ? i === 0
        ? "bg-white"
        : "bg-black"
      : "bg-neutral-300 group-hover:bg-neutral-500";
  // Mobile: traits verticaux (règle vers le haut) ; md+: horizontaux
  if (i % 10 === 0) return `h-10 w-[3px] md:h-[4px] md:w-12 ${base}`;
  if (i % 5 === 0) return `h-5 w-[1.5px] md:h-[2px] md:w-6 ${base}`;
  return `h-2 w-px md:h-px md:w-2 md:w-3 ${base}`;
}

export function PageNavDots({ currentIndex, lang, t }: PageNavDotsProps) {
  const pages = [
    { href: `/${lang}`, pageNumber: 0 as const },
    { href: `/${lang}/sommaire`, pageNumber: "sommaire" as const },
    ...ingredients.map((i) => ({ href: `/${lang}/${i.slug}`, pageNumber: i.pageNumber })),
  ];

  return (
    <nav
      className="print:hidden flex flex-row md:flex-col items-start justify-start gap-0.5 md:gap-1 py-4 px-4 md:py-8 md:pl-4 md:pr-2 md:justify-start flex-shrink-0"
      aria-label="Navigation des pages"
    >
      {pages.map((page, i) => {
        const isCurrent = i === currentIndex;
        const title =
          page.pageNumber === 0
            ? t.nav.cover
            : page.pageNumber === "sommaire"
              ? t.nav.sommaire
              : `${t.nav.page} ${page.pageNumber}`;
        return (
          <Link
            key={page.href}
            href={page.href}
            className="group flex items-center justify-start min-w-[20px] min-h-[12px] md:min-w-[24px] md:min-h-[14px] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-current={isCurrent ? "page" : undefined}
            title={title}
          >
            <span className={`transition-all duration-150 ${rulerTickClass(i, isCurrent, currentIndex)}`} />
          </Link>
        );
      })}
    </nav>
  );
}
