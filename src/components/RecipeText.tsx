"use client";

import Link from "next/link";

const RECIPE_LINK = /\[([^\]]+)\]\(([a-z0-9-]+)\)/g;

export function RecipeText({ text, lang }: { text: string; lang: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(RECIPE_LINK)) {
    const [full, label, slug] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    parts.push(
      <Link
        key={index}
        href={`/${lang}/${slug}`}
        className="relative z-10 underline underline-offset-2 decoration-current/40 hover:decoration-current"
        onClick={(e) => e.stopPropagation()}
      >
        {label}
      </Link>
    );

    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}
