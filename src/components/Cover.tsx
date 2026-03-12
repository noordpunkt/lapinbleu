import Link from "next/link";
import Image from "next/image";
import { bodoniBook } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

const COVER_BG = "#000000";

export function Cover({ lang, title }: { lang: Locale; title: string }) {
  return (
    <Link
      href={`/${lang}/sommaire`}
      className="block min-h-screen w-full flex flex-col items-center justify-center cursor-pointer relative"
      style={{ backgroundColor: COVER_BG }}
    >
      <Image
        src="/images/LapinBlanc.svg"
        alt=""
        width={120}
        height={120}
        className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-6"
        unoptimized
      />
      <h1
        className={`${bodoniBook.className} relative z-10 text-3xl md:text-4xl lg:text-5xl font-normal tracking-[0.18em] text-center px-6 uppercase text-white`}
      >
        {title}
      </h1>
    </Link>
  );
}
