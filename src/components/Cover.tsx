import Link from "next/link";
import { apercu, bodoniBook } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

const COVER_BG = "#081af6";
const COLLECTIONNEURS_URL = "https://www.lescollectionneurs.app";

export function Cover({ lang, title }: { lang: Locale; title: string }) {
  const subtitle =
    lang === "fr"
      ? "UN LIVRE DE CUISINE PAR CHEF ANDRES BUZZIO"
      : "A COOKBOOK BY CHEF ANDRES BUZZIO";
  const ctaLabel = lang === "fr" ? "C'est parti" : "Let's go";
  const smallType = `${apercu.className} font-normal text-xs md:text-sm tracking-[0.18em] uppercase`;

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative px-6"
      style={{ backgroundColor: COVER_BG }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1
          className={`${bodoniBook.className} relative z-10 text-[clamp(2.75rem,9vw,5.5rem)] font-normal leading-none tracking-[0.06em] text-white`}
        >
          {title}
        </h1>
        <p className={`relative z-10 mt-6 max-w-[36em] ${smallType} text-white text-center leading-relaxed`}>
          {subtitle}
        </p>
        <a
          href={COLLECTIONNEURS_URL}
          target="_blank"
          rel="noreferrer"
          className={`relative z-10 mt-3 ${smallType} text-white text-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081af6]`}
        >
          Les Collectionneurs
        </a>
      </div>
      <div className="relative z-10 pb-10 md:pb-12 flex flex-col items-center">
        <Link
          href={`/${lang}/chef`}
          aria-label={
            lang === "fr"
              ? "Commencer Le Lapin Bleu"
              : "Start Le Lapin Bleu"
          }
          className={`inline-flex items-center justify-center border border-white bg-white px-5 py-2 ${smallType} text-[#081af6] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081af6]`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
