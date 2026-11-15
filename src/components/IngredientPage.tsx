import Image from "next/image";
import { type Ingredient } from "@/data/ingredients";
import { bodoniBook } from "@/lib/fonts";
import type { IngredientContent, Messages } from "@/lib/i18n";
import { BookPageBody } from "./BookPageBody";
import { IllustrationBeurreNoisette } from "./IllustrationBeurreNoisette";
import { IllustrationBrunoise } from "./IllustrationBrunoise";
import { RecipeText } from "./RecipeText";
import { isDeimosSection } from "@/lib/section-theme";

function Illustration({
  ingredient,
  deimos,
}: {
  ingredient: Ingredient;
  deimos?: boolean;
}) {
  if (ingredient.image) {
    // Black ink on transparent → multiply into section ground (no paper rectangle)
    const blend = deimos ? "sauce-blend-bw" : "";
    return (
      <Image
        src={ingredient.image}
        alt=""
        width={deimos ? 720 : 280}
        height={deimos ? 480 : 180}
        className={`object-contain ${
          deimos
            ? `h-full w-auto max-w-[min(100%,480px)] ${blend}`
            : `h-auto w-full max-w-[200px] sm:max-w-[240px] md:max-w-[360px]`
        }`}
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
  const deimos = isDeimosSection(ingredient.sectionId);

  if (deimos) {
    const hasHeroImage =
      Boolean(ingredient.image) ||
      ingredient.illustration === "beurre-noisette" ||
      ingredient.illustration === "brunoise";
    const figuresAsHero =
      !hasHeroImage &&
      Boolean(ingredient.figures?.length) &&
      Boolean(content.figures?.length);

    const figuresBlock =
      ingredient.figures && ingredient.figures.length > 0 && content.figures ? (
        <div className={figuresAsHero ? "mb-8 md:mb-10" : "mt-2 mb-8"}>
          {content.figuresTitle && (
            <h2
              className={`${bodoniBook.className} text-xl md:text-2xl font-normal tracking-[-0.02em] mb-4`}
              style={{ color: "var(--sauce-ink)" }}
            >
              {content.figuresTitle}
            </h2>
          )}
          <div
            className={
              ingredient.figuresStacked
                ? "flex flex-col gap-8"
                : ingredient.figures.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-3 gap-3 sm:gap-4"
            }
          >
            {ingredient.figures.map((figure, i) => {
              const caption = content.figures?.[i]?.caption ?? "";
              const stacked = Boolean(ingredient.figuresStacked);
              return (
                <figure
                  key={figure.src}
                  className={`flex flex-col items-center ${stacked ? "w-full" : ingredient.figures!.length === 1 ? "w-full max-w-[320px]" : ""}`}
                >
                  <div
                    className={`flex w-full items-center justify-center ${
                      stacked
                        ? "h-[180px] sm:h-[220px] md:h-[320px] max-w-[420px] md:max-w-[720px]"
                        : figuresAsHero
                          ? "h-[120px] sm:h-[150px] md:h-[180px]"
                          : ingredient.figures!.length === 1
                            ? "h-[140px] sm:h-[160px]"
                            : "h-[88px] sm:h-[100px]"
                    }`}
                  >
                    <Image
                      src={figure.src}
                      alt={caption}
                      width={stacked ? 720 : figuresAsHero ? 280 : 160}
                      height={stacked ? 480 : figuresAsHero ? 200 : 120}
                      className="object-contain w-full h-full sauce-blend-bw"
                      unoptimized
                    />
                  </div>
                  {caption ? (
                    <figcaption
                      className={
                        stacked
                          ? "mt-2.5 text-[13px] leading-snug text-center max-w-[420px] md:max-w-[720px]"
                          : figuresAsHero
                            ? "mt-2 text-[11px] sm:text-[12px] leading-snug text-center"
                            : "mt-1.5 text-[10px] leading-snug text-center"
                      }
                      style={{ color: "var(--sauce-muted)" }}
                    >
                      <RecipeText text={caption} lang={lang} />
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </div>
      ) : null;

    const body = (
      <>
        <div className="flex flex-col items-start">
          <p className="mb-3 text-[10px] font-medium tracking-[0.14em] uppercase" style={{ color: "var(--sauce-muted)" }}>
            {sectionTitle}
          </p>
          <h1
            className={`${bodoniBook.className} text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] font-normal tracking-[-0.02em] text-left pb-4 mb-0 w-full`}
            style={{ color: "var(--sauce-ink)" }}
          >
            {content.title}
          </h1>
          <div className="mb-6 h-px w-full" style={{ background: "var(--sauce-ink)", opacity: 0.2 }} />
        </div>

        {hasHeroImage ? (
          <div className="mb-8 flex h-[200px] w-full items-center justify-center sm:h-[240px] md:mb-10 md:h-[280px]">
            <Illustration ingredient={ingredient} deimos />
          </div>
        ) : (
          figuresBlock
        )}

        <p className="text-[15px] sm:text-base leading-relaxed mb-8 max-w-[40rem]" style={{ color: "var(--sauce-ink)" }}>
          <RecipeText text={content.intro} lang={lang} />
        </p>

        <div className="mb-4 h-px w-full" style={{ background: "var(--sauce-ink)", opacity: 0.2 }} />

        <h2
          className={`${bodoniBook.className} text-xl md:text-2xl font-normal tracking-[-0.02em] mt-2 mb-4`}
          style={{ color: "var(--sauce-ink)" }}
        >
          {t.ingredientPage.howTo}
        </h2>
        <ol className="list-none mb-8">
          {content.steps.map((step, i) => (
            <li key={i} className="flex gap-3 mb-3 text-[14px] leading-relaxed" style={{ color: "var(--sauce-ink)" }}>
              <span
                className="flex-shrink-0 w-[22px] h-[22px] rounded-full text-[11px] font-bold flex items-center justify-center"
                style={{ background: "var(--sauce-ink)", color: "var(--sauce-blue)" }}
              >
                {i + 1}
              </span>
              <span>
                <RecipeText text={step} lang={lang} />
              </span>
            </li>
          ))}
        </ol>

        {!figuresAsHero ? figuresBlock : null}

        {content.chemistry.length > 0 && (
          <>
            <div className="mb-4 h-px w-full" style={{ background: "var(--sauce-ink)", opacity: 0.2 }} />
            <h2
              className={`${bodoniBook.className} text-xl md:text-2xl font-normal tracking-[-0.02em] mt-2 mb-4`}
              style={{ color: "var(--sauce-ink)" }}
            >
              {t.ingredientPage.chemistry}
            </h2>
            <ul className="list-none text-[14px] leading-relaxed mb-8" style={{ color: "var(--sauce-muted)" }}>
              {content.chemistry.map((item, i) => (
                <li key={i} className="relative pl-4 mb-2">
                  <span
                    className="absolute left-0 top-2 w-1 h-1 rounded-full"
                    style={{ background: "var(--sauce-ink)" }}
                    aria-hidden
                  />
                  <RecipeText text={item} lang={lang} />
                </li>
              ))}
            </ul>
          </>
        )}

        {content.atelier && (
          <div className="mt-2 mb-8 pt-4" style={{ borderTop: "1px solid rgba(23, 22, 20, 0.2)" }}>
            <h2
              className={`${bodoniBook.className} text-xl md:text-2xl font-normal tracking-[-0.02em] mb-3`}
              style={{ color: "var(--sauce-ink)" }}
            >
              {content.atelier.title}
            </h2>
            <p className="mb-3 text-[14px] leading-relaxed" style={{ color: "var(--sauce-muted)" }}>
              <RecipeText text={content.atelier.description} lang={lang} />
            </p>
            <h3 className="text-[11px] font-bold tracking-widest uppercase mt-4 mb-2.5" style={{ color: "var(--sauce-ink)" }}>
              {t.ingredientPage.atelierStations}
            </h3>
            <ol className="list-none">
              {content.atelier.steps.map((step, i) => (
                <li key={i} className="flex gap-3 mb-2.5 text-[14px]" style={{ color: "var(--sauce-ink)" }}>
                  <span
                    className="flex-shrink-0 w-[22px] h-[22px] rounded-full text-[11px] font-bold flex items-center justify-center"
                    style={{ background: "var(--sauce-ink)", color: "var(--sauce-blue)" }}
                  >
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
          <div className="mt-2 mb-4 pt-4" style={{ borderTop: "1px solid rgba(23, 22, 20, 0.35)" }}>
            <h2
              className={`${bodoniBook.className} text-xl md:text-2xl font-normal tracking-[-0.02em] mb-3`}
              style={{ color: "var(--sauce-ink)" }}
            >
              {content.tip.title}
            </h2>
            <p className="mb-3 text-[14px] leading-relaxed" style={{ color: "var(--sauce-ink)" }}>
              <RecipeText text={content.tip.description} lang={lang} />
            </p>
            <h3 className="text-[11px] font-bold tracking-widest uppercase mt-4 mb-2.5" style={{ color: "var(--sauce-ink)" }}>
              {t.ingredientPage.howToTip}
            </h3>
            <ol className="list-none">
              {content.tip.steps.map((step, i) => (
                <li key={i} className="flex gap-3 mb-2.5 text-[14px]" style={{ color: "var(--sauce-ink)" }}>
                  <span
                    className="flex-shrink-0 w-[22px] h-[22px] rounded-full text-[11px] font-bold flex items-center justify-center"
                    style={{ background: "var(--sauce-ink)", color: "var(--sauce-blue)" }}
                  >
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
        className={`book-page w-full max-w-[148mm] md:max-w-none md:w-3/4 min-h-0 md:min-h-[210mm] mx-auto mb-0 relative print:m-0 print:mb-0 print:w-full print:max-w-[148mm] flex flex-col bg-transparent`}
        style={{ pageBreakAfter: "always" }}
      >
        <div className="flex-1 p-4 sm:p-6 md:p-[15mm] pb-4">
          <BookPageBody lang={lang} nextSlug={nextSlug}>
            {body}
          </BookPageBody>
        </div>
        <div
          className="flex items-center justify-between py-5 px-4 md:px-[15mm] text-[10px] font-medium tracking-wider flex-shrink-0"
          style={{ color: "var(--sauce-muted)" }}
        >
          <span className="truncate">Chef Andres Buzzio</span>
          <span>{ingredient.pageNumber}</span>
        </div>
      </article>
    );
  }

  const body = (
    <>
      <div className="flex h-[150px] sm:h-[170px] md:h-[240px] w-full justify-center items-center mt-4 mb-4 md:mt-6 md:mb-6 bg-white">
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

      {ingredient.figures && ingredient.figures.length > 0 && content.figures && (
        <div className="mt-5">
          {content.figuresTitle && (
            <h2 className="text-[11px] font-bold tracking-widest uppercase mb-2.5 text-neutral-900">
              {content.figuresTitle}
            </h2>
          )}
          <div
            className={
              ingredient.figuresStacked
                ? "flex flex-col gap-6"
                : ingredient.figures.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-3 gap-2 sm:gap-3"
            }
          >
            {ingredient.figures.map((figure, i) => {
              const caption = content.figures?.[i]?.caption ?? "";
              const stacked = Boolean(ingredient.figuresStacked);
              return (
                <figure
                  key={figure.src}
                  className={`flex flex-col items-center ${stacked ? "w-full" : ingredient.figures!.length === 1 ? "w-full max-w-[280px]" : ""}`}
                >
                  <div
                    className={`flex w-full items-center justify-center bg-white ${
                      stacked
                        ? "h-[180px] sm:h-[220px] md:h-[320px] max-w-[420px] md:max-w-[720px]"
                        : ingredient.figures!.length === 1
                          ? "h-[140px] sm:h-[160px]"
                          : "h-[88px] sm:h-[100px]"
                    }`}
                  >
                    <Image
                      src={figure.src}
                      alt={caption}
                      width={stacked ? 720 : 160}
                      height={stacked ? 480 : 120}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                  {caption ? (
                    <figcaption
                      className={
                        stacked
                          ? "mt-2.5 text-[13px] leading-snug text-neutral-700 text-center max-w-[420px] md:max-w-[720px]"
                          : "mt-1.5 text-[10px] leading-snug text-neutral-600 text-center"
                      }
                    >
                      <RecipeText text={caption} lang={lang} />
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </div>
      )}

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
      className="book-page w-full max-w-[148mm] md:max-w-none md:w-3/4 min-h-0 md:min-h-[210mm] mx-auto mb-4 md:mb-5 bg-white relative print:m-0 print:mb-0 print:w-full print:max-w-[148mm] flex flex-col shadow-sm print:shadow-none"
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
