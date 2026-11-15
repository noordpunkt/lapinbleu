import type { SectionId } from "@/data/ingredients";

/** Page ground colors for Deimos-styled chapters (Pantone-style menu swatches). */
export const SECTION_GROUND: Partial<Record<SectionId, string>> = {
  "corps-gras-liquides": "#f0b0ae",
  bases: "#a4ced0",
  coupes: "#c1b6df",
  techniques: "#c1b6df",
  entrees: "#efeeeb",
  "plats-principaux": "#adc3e4",
  desserts: "#f0b0ae",
};

export const SECTION_SHELL: Partial<Record<SectionId, string>> = {
  "corps-gras-liquides": "fats-shell",
  bases: "sauce-shell",
  coupes: "piano-shell",
  techniques: "piano-shell",
  entrees: "entrees-shell",
  "plats-principaux": "plats-shell",
  desserts: "desserts-shell",
};

export function getSectionShell(sectionId: SectionId): string | null {
  return SECTION_SHELL[sectionId] ?? null;
}

export function isDeimosSection(sectionId: SectionId): boolean {
  return sectionId in SECTION_SHELL;
}
