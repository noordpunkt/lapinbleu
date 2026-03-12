import Link from "next/link";
import { bodoniBook } from "@/lib/fonts";
import { ingredients, sections } from "@/data/ingredients";
import { PageNavDots } from "@/components/PageNavDots";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations, getIngredientContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

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
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-100 print:bg-white">
      <div className="order-1 md:order-2 flex-1 min-w-0 overflow-auto py-8 px-6 md:px-10 flex justify-center">
        <div className="w-full max-w-[148mm]">
          <h1
            className={`${bodoniBook.className} text-xl sm:text-2xl md:text-[26px] font-normal tracking-[0.18em] text-center border-b-2 border-black pb-2.5 mb-7 uppercase`}
          >
            {t.sommaire.title}
          </h1>
          <nav className="space-y-8" aria-label={t.sommaire.ariaLabel}>
            {ingredientsBySection.map(({ section, items }) => (
              <section key={section.id}>
                <h2 className="text-[11px] font-bold tracking-widest uppercase text-neutral-600 mb-3">
                  {t.sections[section.id]}
                </h2>
                <ul className="list-none space-y-2">
                  {items.map((ing) => {
                    const content = getIngredientContent(ing.id, t);
                    const title = content?.title ?? ing.id;
                    return (
                      <li key={ing.id}>
                        <Link
                          href={`/${locale}/${ing.slug}`}
                          className="text-sm text-neutral-900 hover:text-neutral-600 hover:underline underline-offset-2"
                        >
                          {title}
                          <span className="text-neutral-400 font-medium ml-2">
                            {ing.pageNumber}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {items.length === 0 && (
                  <p className="text-xs text-neutral-400 italic">—</p>
                )}
              </section>
            ))}
          </nav>
        </div>
      </div>
      <div className="order-2 md:order-1 shrink-0 border-t md:border-t-0 md:border-r border-neutral-200">
        <PageNavDots currentIndex={1} lang={locale} t={t} />
      </div>
      <TopMenu currentLang={locale} currentPath="sommaire" printLabel={t.toolbar.print} />
    </div>
  );
}

