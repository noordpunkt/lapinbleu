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

export function MobilePageNav({ currentIndex, lang, t, darkBackground }: MobilePageNavProps) {
  const previousHref = getPreviousPageHref(lang, currentIndex);
  const nextHref = getNextPageHref(lang, currentIndex);
  const buttonClass = darkBackground
    ? "flex h-10 w-10 items-center justify-center border border-white bg-black text-white shadow-sm transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
    : "flex h-10 w-10 items-center justify-center border border-black bg-white text-black shadow-sm transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2";

  if (!previousHref && !nextHref) return null;

  return (
    <div className="print:hidden md:hidden absolute top-4 left-4 z-20 flex items-center gap-2">
      {previousHref ? (
        <Link
          href={previousHref}
          scroll={false}
          className={buttonClass}
          aria-label={t.nav.back}
        >
          <BackArrowIcon className="h-5 w-5" />
        </Link>
      ) : null}
      {nextHref ? (
        <Link
          href={nextHref}
          scroll={false}
          className={buttonClass}
          aria-label={t.nav.forward}
        >
          <ForwardArrowIcon className="h-5 w-5" />
        </Link>
      ) : null}
    </div>
  );
}
