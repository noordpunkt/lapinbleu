import Link from "next/link";
import { getPreviousPageHref } from "@/lib/navigation";
import type { Locale, Messages } from "@/lib/i18n";

type MobileBackNavProps = {
  currentIndex: number;
  lang: Locale;
  t: Messages;
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

export function MobileBackNav({ currentIndex, lang, t }: MobileBackNavProps) {
  const previousHref = getPreviousPageHref(lang, currentIndex);
  if (!previousHref) return null;

  return (
    <Link
      href={previousHref}
      scroll={false}
      className="print:hidden md:hidden absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center border border-black bg-black text-white shadow-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
      aria-label={t.nav.back}
    >
      <BackArrowIcon className="h-5 w-5" />
    </Link>
  );
}
