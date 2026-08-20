import fr from "@/messages/fr.json";
import en from "@/messages/en.json";

export type Locale = "fr" | "en";

export type Messages = typeof fr;

const messages: Record<Locale, Messages> = {
  fr,
  en,
};

export function getTranslations(lang: Locale): Messages {
  return messages[lang] ?? messages.fr;
}

export function getSectionTitle(
  sectionId: keyof Messages["sections"],
  t: Messages
): string {
  return t.sections[sectionId] ?? sectionId;
}

export type IngredientContent = {
  title: string;
  intro: string;
  steps: string[];
  chemistry: string[];
  atelier?: {
    title: string;
    description: string;
    steps: string[];
  };
  tip?: {
    title: string;
    description: string;
    steps: string[];
  };
};

export function getIngredientContent(
  ingredientId: string,
  t: Messages
): IngredientContent | undefined {
  const ing = (t.ingredients as Record<string, IngredientContent>)[ingredientId];
  return ing;
}
