import Link from "next/link";
import { getNextPageHref, getPreviousPageHref } from "@/lib/navigation";
import type { Locale, Messages } from "@/lib/i18n";

type MobilePageNavProps = {
  currentIndex: number;
  lang: Locale;
  t: Messages;
  darkBackground?: boolean;
};

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

export function MobilePageNav({ currentIndex, lang, t }: MobilePageNavProps) {
  const previousHref = getPreviousPageHref(lang, currentIndex);
  const nextHref = getNextPageHref(lang, currentIndex);
  const buttonClass =
    "flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2";

  if (!previousHref && !nextHref) return null;

  return (
    <nav
      className="print:hidden fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 md:bottom-6"
      aria-label={`${t.nav.back} / ${t.nav.forward}`}
    >
      {previousHref ? (
        <Link href={previousHref} scroll={false} className={buttonClass} aria-label={t.nav.back}>
          <BackArrowIcon className="h-5 w-5" />
        </Link>
      ) : (
        <span className={`${buttonClass} opacity-25`} aria-hidden="true">
          <BackArrowIcon className="h-5 w-5" />
        </span>
      )}
      {nextHref ? (
        <Link href={nextHref} scroll={false} className={buttonClass} aria-label={t.nav.forward}>
          <ForwardArrowIcon className="h-5 w-5" />
        </Link>
      ) : (
        <span className={`${buttonClass} opacity-25`} aria-hidden="true">
          <ForwardArrowIcon className="h-5 w-5" />
        </span>
      )}
    </nav>
  );
}
