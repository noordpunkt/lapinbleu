import { notFound } from "next/navigation";
import { ingredients } from "@/data/ingredients";
import { IngredientPage } from "@/components/IngredientPage";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations, getIngredientContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getSectionShell } from "@/lib/section-theme";

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
  const shellClass = getSectionShell(ingredient.sectionId) ?? "bg-neutral-100";

  return (
    <div className={`relative min-h-screen print:bg-white print:py-0 ${shellClass}`}>
      <div className="overflow-auto pt-24 pb-24 px-4 md:pt-28 md:pb-28 md:px-6 print:px-4 print:py-8 flex justify-center">
        <IngredientPage
          ingredient={ingredient}
          content={content}
          lang={locale}
          nextSlug={nextSlug}
          t={t}
        />
      </div>
      <TopMenu currentLang={locale} currentPath={slug} currentIndex={index + 3} t={t} />
    </div>
  );
}

