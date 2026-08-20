import Image from "next/image";
import { type Ingredient } from "@/data/ingredients";
import { bodoniBook } from "@/lib/fonts";
import type { IngredientContent, Messages } from "@/lib/i18n";
import { BookPageBody } from "./BookPageBody";
import { IllustrationBeurreNoisette } from "./IllustrationBeurreNoisette";
import { IllustrationBrunoise } from "./IllustrationBrunoise";
import { RecipeText } from "./RecipeText";

function Illustration({ ingredient }: { ingredient: Ingredient }) {
  if (ingredient.image) {
    const imageClass =
      ingredient.id === "beurre"
        ? "object-contain w-full max-w-[160px] sm:max-w-[190px] md:max-w-[220px] h-auto"
        : "object-contain w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto";
    return (
      <Image
        src={ingredient.image}
        alt=""
        width={280}
        height={180}
        className={imageClass}
        unoptimized
      />
    );
  }
  if (ingredient.illustration === "beurre-noisette") return <IllustrationBeurreNoisette />;
  if (ingredient.illustration === "brunoise") return <IllustrationBrunoise />;
  return null;
}

export function IngredientPage({
  ingredient,
  content,
  lang,
  nextSlug,
  t,
}: {
  ingredient: Ingredient;
  content: IngredientContent;
  lang: string;
  nextSlug?: string | null;
  t: Messages;
}) {
  const sectionTitle = t.sections[ingredient.sectionId] ?? ingredient.sectionId;
  const body = (
    <>
      <div className="flex h-[150px] sm:h-[170px] md:h-[190px] w-full justify-center items-center mt-4 mb-4 md:mt-6 md:mb-6 bg-white">
        <Illustration ingredient={ingredient} />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[10px] font-medium tracking-widest uppercase text-neutral-500 mb-1">
          {sectionTitle}
        </p>
        <h1 className={`${bodoniBook.className} text-xl sm:text-2xl md:text-[28px] font-normal tracking-[0.18em] text-center border-b-2 border-black pb-2.5 mb-4 md:mb-6 w-full max-w-max uppercase`}>
          {content.title}
        </h1>
      </div>

      <p className="text-xs sm:text-sm text-neutral-600 mb-4 md:mb-6 max-w-full">
        <RecipeText text={content.intro} lang={lang} />
      </p>

      <h2 className="text-[11px] font-bold tracking-widest uppercase mt-5 mb-2.5 text-neutral-900">
        {t.ingredientPage.howTo}
      </h2>
      <ol className="list-none">
        {content.steps.map((step, i) => (
          <li key={i} className="flex gap-3 mb-2.5 text-[13px]">
            <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-neutral-900 text-white text-[11px] font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span>
              <RecipeText text={step} lang={lang} />
            </span>
          </li>
        ))}
      </ol>

      {content.chemistry.length > 0 && (
        <>
          <h2 className="text-[11px] font-bold tracking-widest uppercase mt-5 mb-2.5 text-neutral-900">
            {t.ingredientPage.chemistry}
          </h2>
          <ul className="list-none text-[13px] text-neutral-600">
            {content.chemistry.map((item, i) => (
          <li key={i} className="relative pl-4 mb-1.5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-neutral-900">
            <RecipeText text={item} lang={lang} />
          </li>
            ))}
          </ul>
        </>
      )}

      {content.atelier && (
        <div className="mt-5 p-4 border border-neutral-400 text-[13px] bg-neutral-50">
          <h2 className="text-[11px] font-bold tracking-widest uppercase mb-2.5 text-neutral-900 mt-0">
            {content.atelier.title}
          </h2>
          <p className="mb-2.5 text-neutral-700">
            <RecipeText text={content.atelier.description} lang={lang} />
          </p>
          <h3 className="text-[11px] font-bold tracking-widest uppercase mt-3 mb-2.5 text-neutral-900">
            {t.ingredientPage.atelierStations}
          </h3>
          <ol className="list-none">
            {content.atelier.steps.map((step, i) => (
              <li key={i} className="flex gap-3 mb-2.5">
                <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-neutral-700 text-white text-[11px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>
              <RecipeText text={step} lang={lang} />
            </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {content.tip && (
        <div className="mt-5 p-4 border border-neutral-900 text-[13px]">
          <h2 className="text-[11px] font-bold tracking-widest uppercase mb-2.5 text-neutral-900 mt-0">
            {content.tip.title}
          </h2>
          <p className="mb-2.5">
            <RecipeText text={content.tip.description} lang={lang} />
          </p>
          <h3 className="text-[11px] font-bold tracking-widest uppercase mt-3 mb-2.5 text-neutral-900">
            {t.ingredientPage.howToTip}
          </h3>
          <ol className="list-none">
            {content.tip.steps.map((step, i) => (
              <li key={i} className="flex gap-3 mb-2.5">
                <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-neutral-900 text-white text-[11px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>
              <RecipeText text={step} lang={lang} />
            </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );

  return (
    <article
      className="book-page w-full max-w-[148mm] min-h-0 md:min-h-[210mm] mx-auto mb-4 md:mb-5 bg-white relative print:m-0 print:mb-0 flex flex-col shadow-sm print:shadow-none"
      style={{ pageBreakAfter: "always" }}
    >
      <div className="flex-1 p-4 sm:p-6 md:p-[15mm] pb-4">
        <BookPageBody lang={lang} nextSlug={nextSlug}>
          {body}
        </BookPageBody>
      </div>
      <div className="flex items-center justify-between py-5 px-4 md:px-[15mm] text-[10px] font-medium tracking-wider text-neutral-600 flex-shrink-0">
        <span className="truncate">Chef Andres Buzzio</span>
        <span>{ingredient.pageNumber}</span>
      </div>
    </article>
  );
}
