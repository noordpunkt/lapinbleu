"use client";

import { useRouter } from "next/navigation";

export function BookPageBody({
  lang,
  nextSlug,
  children,
}: {
  lang: string;
  nextSlug?: string | null;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div
      className={nextSlug ? "min-h-full cursor-pointer" : "min-h-full"}
      onClick={(e) => {
        if (!nextSlug) return;
        if ((e.target as HTMLElement).closest("a")) return;
        router.push(`/${lang}/${nextSlug}`);
      }}
    >
      {children}
    </div>
  );
}
