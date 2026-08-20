import Link from "next/link";
import { getNextPageHref, getPreviousPageHref } from "@/lib/navigation";
import type { Locale, Messages } from "@/lib/i18n";

type TopMenuProps = {
  currentLang: Locale;
  /** "" (cover), "sommaire" or ingredient slug */
  currentPath: string;
  currentIndex: number;
  t: Messages;
  /** true = couverture (fond noir) */
  darkBackground?: boolean;
};

function buildHref(lang: Locale, path: string) {
  return path ? `/${lang}/${path}` : `/${lang}`;
}

function TeaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 10h10v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M15 11h2a2 2 0 1 1 0 4h-2" />
      <path d="M4 20h14" />
      <path d="M8 8c0-1 .8-1.4.8-2.4S8 4.2 8 3.4" />
      <path d="M11 8c0-1 .8-1.4.8-2.4S11 4.2 11 3.4" />
    </svg>
  );
}

function CroissantIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="rotate(-22 12 12)">
        <path d="M5.5 15.7c1.8-5.2 5-8 6.8-8.8.8-.3 1.3-.3 2.1 0 1.8.8 5 3.6 6.8 8.8-.8.7-1.9 1.2-3 1.2-1.7 0-2.9-.8-4.2-1.9-.6-.5-1.2-.7-2-.7s-1.4.2-2 .7c-1.3 1.1-2.5 1.9-4.2 1.9-1.1 0-2.2-.5-3-1.2Z" />
        <path d="M8.7 15.8c.8-.6 1.6-1.4 2.4-2.5" />
        <path d="M12 14.2c.7-.9 1.4-1.9 2-3.1" />
        <path d="M15.2 15.8c.6-.6 1.2-1.3 1.8-2.2" />
      </g>
    </svg>
  );
}

function BackArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ForwardArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function TopMenu({ currentLang, currentPath, currentIndex, t, darkBackground }: TopMenuProps) {
  const frHref = buildHref("fr", currentPath);
  const enHref = buildHref("en", currentPath);
  const previousHref = getPreviousPageHref(currentLang, currentIndex);
  const nextHref = getNextPageHref(currentLang, currentIndex);
  const wrapperClass = darkBackground
    ? "bg-black text-white"
    : "bg-white text-black";
  const activeClass = "opacity-100 font-semibold";
  const inactiveClass = "opacity-50 hover:opacity-100";
  const navButtonClass = darkBackground
    ? "flex items-center justify-center px-2.5 py-2 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset disabled:pointer-events-none disabled:opacity-30"
    : "flex items-center justify-center px-2.5 py-2 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-inset disabled:pointer-events-none disabled:opacity-30";

  return (
    <div
      className={`print:hidden absolute top-4 right-4 z-20 flex items-center shadow-sm ${wrapperClass}`}
    >
      <div className="flex items-center gap-3 px-3 py-2">
        <Link
          href={enHref}
          className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] transition-opacity ${
            currentLang === "en" ? activeClass : inactiveClass
          }`}
          aria-current={currentLang === "en" ? "true" : undefined}
        >
          <TeaIcon className="h-4 w-4" />
          <span>EN</span>
        </Link>
        <Link
          href={frHref}
          className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] transition-opacity ${
            currentLang === "fr" ? activeClass : inactiveClass
          }`}
          aria-current={currentLang === "fr" ? "true" : undefined}
        >
          <CroissantIcon className="h-4 w-4" />
          <span>FR</span>
        </Link>
        {previousHref ? (
          <Link
            href={previousHref}
            scroll={false}
            className={navButtonClass}
            aria-label={t.nav.back}
          >
            <BackArrowIcon className="h-4 w-4" />
          </Link>
        ) : (
          <span className={`${navButtonClass} opacity-30`} aria-hidden="true">
            <BackArrowIcon className="h-4 w-4" />
          </span>
        )}
        {nextHref ? (
          <Link
            href={nextHref}
            scroll={false}
            className={navButtonClass}
            aria-label={t.nav.forward}
          >
            <ForwardArrowIcon className="h-4 w-4" />
          </Link>
        ) : (
          <span className={`${navButtonClass} opacity-30`} aria-hidden="true">
            <ForwardArrowIcon className="h-4 w-4" />
          </span>
        )}
      </div>
    </div>
  );
}

