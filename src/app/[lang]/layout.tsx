import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const locales: Locale[] = ["fr", "en"];

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  return <>{children}</>;
}
