import { Cover } from "@/components/Cover";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getTranslations(locale);

  return (
    <div className="relative min-h-screen bg-[#081af6] print:bg-white print:min-h-0">
      <div className="min-h-screen flex items-center justify-center">
        <Cover lang={locale} title={t.coverTitle} />
      </div>
      <TopMenu currentLang={locale} currentPath="" currentIndex={0} t={t} darkBackground />
    </div>
  );
}

