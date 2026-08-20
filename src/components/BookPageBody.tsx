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
      onClick={() => {
        if (nextSlug) router.push(`/${lang}/${nextSlug}`);
      }}
      onKeyDown={(e) => {
        if (nextSlug && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          router.push(`/${lang}/${nextSlug}`);
        }
      }}
      role={nextSlug ? "link" : undefined}
      tabIndex={nextSlug ? 0 : undefined}
    >
      {children}
    </div>
  );
}
