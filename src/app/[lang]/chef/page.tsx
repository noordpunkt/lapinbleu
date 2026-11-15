import { apercu, bodoniBook } from "@/lib/fonts";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function ChefPage({ params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getTranslations(locale);

  return (
    <div className="relative min-h-screen bg-[#081af6] print:bg-[#081af6]">
      <div className="overflow-auto pt-24 pb-24 px-4 md:pt-28 md:pb-28 md:px-6 print:px-4 print:py-8 flex justify-center">
        <article className="w-full max-w-4xl mx-auto text-white flex flex-col min-h-0 md:min-h-[210mm] print:max-w-[148mm]">
          <div className="flex-1 pb-4">
            <h1
              className={`${bodoniBook.className} mb-12 text-center font-normal text-[clamp(2.5rem,8vw,4.5rem)] leading-none text-white print:mb-7 print:border-b-2 print:border-white print:pb-2.5 print:text-[26px] print:tracking-[0.18em] print:uppercase`}
            >
              {t.chef.heading}
            </h1>
            <div className="space-y-5 max-w-[42em] mx-auto">
              {t.chef.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`${apercu.className} font-normal text-sm sm:text-base leading-relaxed text-white`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div
            className={`${apercu.className} flex items-center justify-between py-5 text-xs font-normal tracking-wider text-white/60 flex-shrink-0`}
          >
            <span className="truncate">Chef Andres Buzzio</span>
            <span>{t.nav.chef}</span>
          </div>
        </article>
      </div>
      <TopMenu currentLang={locale} currentPath="chef" currentIndex={1} t={t} darkBackground />
    </div>
  );
}
