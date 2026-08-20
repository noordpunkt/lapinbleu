"use client";
import Link from "next/link";
import { useRef, useEffect, useCallback } from "react";
import { getPageHrefs } from "@/lib/navigation";
import { ingredients } from "@/data/ingredients";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

const SCROLL_KEY = "pageNavScroll";

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
  const navRef = useRef<HTMLElement>(null);

  // Restore saved scroll position on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved && navRef.current) {
      const [top, left] = saved.split(",").map(Number);
      navRef.current.scrollTop = top;
      navRef.current.scrollLeft = left;
    }
  }, []);

  // Save scroll position whenever the nav is scrolled
  const handleScroll = useCallback(() => {
    if (navRef.current) {
      const { scrollTop, scrollLeft } = navRef.current;
      sessionStorage.setItem(SCROLL_KEY, `${scrollTop},${scrollLeft}`);
    }
  }, []);

  const pages = getPageHrefs(lang).map((href, i) => {
    if (i === 0) return { href, pageNumber: 0 as const };
    if (i === 1) return { href, pageNumber: "sommaire" as const };
    return { href, pageNumber: ingredients[i - 2].pageNumber };
  });

  return (
    <nav
      ref={navRef as React.RefObject<HTMLElement>}
      onScroll={handleScroll}
      className="no-scrollbar print:hidden flex w-full max-w-full flex-row md:flex-col items-start justify-start gap-0.5 md:gap-1 py-4 px-4 md:py-8 md:pl-4 md:pr-2 md:justify-start flex-shrink-0 overflow-x-auto md:overflow-x-visible md:overflow-y-auto overscroll-x-contain md:overscroll-y-contain md:max-h-screen"
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
            scroll={false}
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
