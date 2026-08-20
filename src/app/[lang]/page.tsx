import { Cover } from "@/components/Cover";
import { PageNavDots } from "@/components/PageNavDots";
import { TopMenu } from "@/components/TopMenu";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = getTranslations(locale);

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-black print:bg-white print:min-h-0">
      <div className="order-1 md:order-2 flex-1 min-w-0 flex items-center justify-center">
        <Cover lang={locale} title={t.coverTitle} />
      </div>
      <div className="order-2 md:order-1">
        <PageNavDots currentIndex={0} lang={locale} t={t} />
      </div>
      <TopMenu currentLang={locale} currentPath="" currentIndex={0} t={t} darkBackground />
    </div>
  );
}

