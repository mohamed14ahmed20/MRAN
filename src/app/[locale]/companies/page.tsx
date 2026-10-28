import * as React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { SUBSIDIARIES } from '@/data/subsidiaries';
import { Link } from '@/i18n/routing';
import { Trophy, Flame, ShieldCheck, Zap, Building2, ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  return {
    title: isArabic
      ? 'الأكاديميات والقطاعات الرياضية | مران للإستثمار الرياضي'
      : 'Academies & Sports Divisions | MRAN Sports Investment',
    description: isArabic
      ? 'استعرض أكاديميات مران التخصصية في كرة القدم، البادل، الفنون القتالية، والإعداد البدني وإدارة المنشآت الرياضية.'
      : 'Explore MRAN specialized athletic academies in Football, Padel, Martial Arts, Conditioning, and Facilities Management.',
  };
}

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Trophy,
  ShieldCheck,
  Zap,
  Building2,
};

export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages() as any;
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <div className="py-16 lg:py-24 relative bg-slate-50 dark:bg-[#060a12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-mran-red-700 transition">
            {messages.nav.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <span className="text-slate-900 dark:text-white">{messages.nav.companies}</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-mran-red-700/20 bg-mran-red-50 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>{messages.subsidiaries.pill}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {messages.subsidiaries.heading}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {messages.subsidiaries.sub}
          </p>
        </div>

        {/* Subsidiaries List */}
        <div className="space-y-8">
          {SUBSIDIARIES.map((sub, idx) => {
            const IconComp = iconMap[sub.iconName] || Trophy;
            return (
              <div
                key={sub.id}
                className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 hover:border-mran-red-700/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Information */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-mran-red-50 dark:bg-mran-red-950 text-mran-red-700 dark:text-mran-red-300 border border-mran-red-700/20">
                        {sub.sector[locale as 'ar' | 'en']}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {sub.badge[locale as 'ar' | 'en']}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {sub.name[locale as 'ar' | 'en']}
                    </h2>

                    <p className="text-sm sm:text-base font-semibold text-mran-red-700 dark:text-mran-red-400 italic">
                      &ldquo;{sub.tagline[locale as 'ar' | 'en']}&rdquo;
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sub.description[locale as 'ar' | 'en']}
                    </p>

                    {/* Features Snippet */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {sub.features[locale as 'ar' | 'en'].slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/companies/${sub.slug}`}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-mran-red-700 to-rose-700 hover:from-mran-red-800 hover:to-rose-800 text-white font-bold text-sm shadow-md transition group"
                      >
                        <span>{messages.subsidiaries.viewDetails}</span>
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        <span>{messages.common.requestConsultation}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Specs Box */}
                  <div className="lg:col-span-4">
                    <div className="p-6 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] space-y-4">
                      <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mran-red-700 to-rose-700 text-white flex items-center justify-center shadow-md flex-shrink-0">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-mran-red-700 dark:text-mran-red-400 block mb-0.5">
                            {messages.subsidiaries.specsLabel}
                          </span>
                          <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                            {sub.name[locale as 'ar' | 'en']}
                          </span>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="space-y-2 text-xs text-start">
                        {sub.specs[locale as 'ar' | 'en'].slice(0, 4).map((sp, i) => (
                          <div key={i} className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400">
                            <span>{sp.label}:</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-200 text-end ps-2">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
