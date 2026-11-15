import Link from "next/link";
import { bodoniBook } from "@/lib/fonts";
import { ingredients, sections } from "@/data/ingredients";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations, getIngredientContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { SECTION_GROUND } from "@/lib/section-theme";

type Props = { params: Promise<{ lang: string }> };

export default async function SommairePage({ params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getTranslations(locale);

  const ingredientsBySection = sections.map((section) => ({
    section,
    items: ingredients.filter((i) => i.sectionId === section.id),
  }));

  return (
    <div className="relative min-h-screen bg-black print:bg-white">
      <div className="overflow-auto pt-24 pb-24 px-6 md:pt-28 md:pb-28 md:px-10 print:px-6 print:py-8 flex justify-center">
        <div className="w-full max-w-4xl print:max-w-[148mm]">
          <h1
            className={`${bodoniBook.className} mb-12 text-center font-normal text-[clamp(2.5rem,8vw,4.5rem)] leading-none text-white print:mb-7 print:border-b-2 print:border-black print:pb-2.5 print:text-[26px] print:tracking-[0.18em] print:text-black print:uppercase`}
          >
            {t.sommaire.title}
          </h1>
          <nav className="space-y-12 print:space-y-8" aria-label={t.sommaire.ariaLabel}>
            {ingredientsBySection.map(({ section, items }) => {
              const swatch = SECTION_GROUND[section.id];
              return (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2
                  className={`${bodoniBook.className} mb-5 flex items-center gap-3 font-normal text-[clamp(1.5rem,4vw,2.25rem)] leading-none text-white uppercase print:mb-4 print:font-sans print:text-xl print:font-black print:tracking-tight print:text-black`}
                >
                  {swatch ? (
                    <span
                      className="inline-block h-[0.55em] w-[0.55em] shrink-0 border border-white/35 print:border-black/25"
                      style={{ backgroundColor: swatch }}
                      aria-hidden
                    />
                  ) : null}
                  {t.sections[section.id]}
                </h2>
                <ul className="list-none space-y-3 print:space-y-2">
                  {items.map((ing) => {
                    const content = getIngredientContent(ing.id, t);
                    const title = content?.title ?? ing.id;
                    const formattedPageNumber = `${String(ing.pageNumber).padStart(2, "0")}.`;
                    return (
                      <li key={ing.id}>
                        <Link
                          href={`/${locale}/${ing.slug}`}
                          className={`${bodoniBook.className} flex items-baseline gap-4 font-normal text-[clamp(1.05rem,2.4vw,1.35rem)] leading-snug text-white/75 no-underline transition-opacity hover:text-white print:gap-3 print:font-sans print:text-sm print:text-neutral-900 print:hover:underline`}
                        >
                          <span className="min-w-[2.75rem] tabular-nums text-white/45 print:min-w-[2.5rem] print:font-medium print:text-neutral-900">
                            {formattedPageNumber}
                          </span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {items.length === 0 && (
                  <p className={`${bodoniBook.className} text-sm text-white/40 italic print:text-neutral-400`}>
                    —
                  </p>
                )}
              </section>
              );
            })}
          </nav>
        </div>
      </div>
      <TopMenu
        currentLang={locale}
        currentPath="sommaire"
        currentIndex={2}
        t={t}
        darkBackground
      />
    </div>
  );
}
