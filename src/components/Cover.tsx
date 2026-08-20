import Image from "next/image";
import { bodoniBook } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

const COVER_BG = "#000000";
const COLLECTIONNEURS_URL = "https://www.lescollectionneurs.app";

export function Cover({ lang, title }: { lang: Locale; title: string }) {
  const subtitle =
    lang === "fr"
      ? "un livre de cuisine par Chef Andres Buzzio (Les Collectionneurs)"
      : "a cookbook by Chef Andres Buzzio (Les Collectionneurs)";
  const ctaLabel =
    lang === "fr" ? "Reserver une experience" : "Book an experience";

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{ backgroundColor: COVER_BG }}
    >
      <a
        href={COLLECTIONNEURS_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Les Collectionneurs"
        className="relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      >
        <Image
          src="/images/Les Collectionneurs.svg"
          alt="Les Collectionneurs"
          width={420}
          height={120}
          className="w-[220px] md:w-[280px] lg:w-[320px] h-auto mb-7"
          unoptimized
        />
      </a>
      <div className="relative z-10 w-44 md:w-56 lg:w-64 h-px bg-white/70 mb-6" />
      <h1
        className={`${bodoniBook.className} relative z-10 text-2xl md:text-3xl lg:text-4xl font-normal tracking-[0.18em] text-center px-6 uppercase text-white`}
      >
        {title}
      </h1>
      <p className="relative z-10 mt-3 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-neutral-400 text-center px-6">
        {subtitle}
      </p>
      <a
        href={COLLECTIONNEURS_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={
          lang === "fr"
            ? "Reserver une experience avec Les Collectionneurs"
            : "Book an experience with Les Collectionneurs"
        }
        className="relative z-10 mt-5 inline-flex items-center justify-center border border-white bg-white px-5 py-2 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-black transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
