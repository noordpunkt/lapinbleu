import { notFound } from "next/navigation";
import { ingredients } from "@/data/ingredients";
import { IngredientPage } from "@/components/IngredientPage";
import { PageNavDots } from "@/components/PageNavDots";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations, getIngredientContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  const langs: Locale[] = ["fr", "en"];
  return langs.flatMap((lang) =>
    ingredients.map((i) => ({ lang, slug: i.slug }))
  );
}

export default async function IngredientRoute({ params }: Props) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const index = ingredients.findIndex((i) => i.slug === slug);
  if (index === -1) notFound();
  const ingredient = ingredients[index];
  const t = getTranslations(locale);
  const content = getIngredientContent(ingredient.id, t);
  if (!content) notFound();

  const nextIngredient = ingredients[index + 1];
  const nextSlug = nextIngredient?.slug ?? null;

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-neutral-100 print:bg-white print:py-0">
      <div className="order-1 md:order-2 flex-1 min-w-0 overflow-auto pt-16 pb-4 px-4 md:py-8 md:px-6 flex justify-center">
        <IngredientPage
          ingredient={ingredient}
          content={content}
          lang={locale}
          nextSlug={nextSlug}
          t={t}
        />
      </div>
      <div className="order-2 md:order-1 shrink-0 border-t md:border-t-0 md:border-r border-neutral-200">
        <PageNavDots currentIndex={index + 2} lang={locale} t={t} />
      </div>
      <TopMenu currentLang={locale} currentPath={slug} currentIndex={index + 2} t={t} />
    </div>
  );
}

