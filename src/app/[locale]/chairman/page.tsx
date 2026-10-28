import * as React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Quote, ChevronRight, Award, Shield, CheckCircle2, ArrowLeft, ArrowRight, Building2, Users } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  return {
    title: isArabic
      ? 'رئيس مجلس الإدارة والرؤية الاستراتيجية | مران للإستثمار الرياضي'
      : 'Chairman & Executive Leadership | MRAN Sports Investment Group',
    description: isArabic
      ? 'السيرة الذاتية ورؤية رئيس مجلس إدارة مجموعة مران للإستثمار الرياضي في تطوير قطاع الأكاديميات الرياضية بمصر.'
      : 'Executive biography and strategic vision of the Chairman of MRAN Sports Investment Group.',
  };
}

export default async function ChairmanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages() as any;
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const leadershipPillars = [
    {
      title: isArabic ? 'بناء الإنسان والتنمية المتوازنة' : 'Human-Centric Athletic Progression',
      desc: isArabic
        ? 'ترسيخ الانضباط، الأخلاق الرياضية، والاتزان النفسي قبل حصد البطولات والألقاب.'
        : 'Prioritizing ethics, personal discipline, and mental fortitude alongside championship pursuits.',
    },
    {
      title: isArabic ? 'الشراكات الوطنية المستدامة' : 'Strategic Public-Private Partnerships',
      desc: isArabic
        ? 'تكامل فعال مع أندية الدولة العريقة، كشراكتنا التاريخية مع نادي المصانع الحربية بحلوان.'
        : 'High-impact synergy with storied national sports institutions, exemplified by the Helwan Military Factory Club partnership.',
    },
    {
      title: isArabic ? 'التحول الرياضي وفق رؤية مصر 2030' : 'Alignment with Egypt Vision 2030',
      desc: isArabic
        ? 'توسيع رقعة الممارسة الرياضية في المدن الجديدة ونشر أسلوب حياة صحي ومستدام.'
        : 'Expanding modern sports infrastructure in developing cities and fostering healthy, active lifestyles.',
    },
  ];

  const affiliations = [
    isArabic ? 'رئاسة مجلس إدارة مجموعة مران للإستثمار الرياضي' : 'Chairman of the Board, MRAN Sports Investment',
    isArabic ? 'الشريك الاستراتيجي المشغل لمنشآت نادي المصانع الحربية' : 'Turnkey Operating Partner, Helwan Military Factory Club',
    isArabic ? 'عضوية الاتحادات الرياضية الوطنية للأكاديميات المتخصصة' : 'Active Member, National Sports Federations & Youth Development',
    isArabic ? 'مؤسس مبادرة "الرياضة للأسرة والمجتمع"' : 'Founder of the "Family & Community Fitness First" Initiative',
  ];

  return (
    <div className="py-16 lg:py-24 relative bg-slate-50 dark:bg-[#060a12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-mran-red-700 transition">
            {messages.nav.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <span className="text-slate-900 dark:text-white">{messages.nav.chairman}</span>
        </div>

        {/* Executive Hero Banner */}
        <div className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-14 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 end-0 w-96 h-96 bg-mran-red-700/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-mran-red-700/20 bg-mran-red-50 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>{messages.chairman.pill}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {messages.chairman.title}
              </h1>

              <div className="border-s-4 rtl:border-s-0 rtl:border-e-4 border-mran-red-700 pl-6 rtl:pl-0 rtl:pr-6 space-y-2">
                <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 italic leading-relaxed">
                  &ldquo;{messages.chairman.quote}&rdquo;
                </p>
                <span className="text-xs font-semibold text-mran-red-700 dark:text-mran-red-400 block pt-1">
                  — {messages.chairman.name}
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {messages.chairman.bioLead}
              </p>
            </div>

            {/* Right Portrait & Credentials Card */}
            <div className="lg:col-span-4">
              <div className="p-8 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 text-center space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
                {/* Executive Avatar / Portrait */}
                <div className="relative mx-auto w-40 h-40 rounded-full p-1.5 bg-gradient-to-tr from-mran-red-700 via-rose-500 to-indigo-700 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/brand/chairman.jpg"
                      alt={messages.chairman.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white">
                    {messages.chairman.name}
                  </h2>
                  <p className="text-xs font-bold text-mran-red-700 dark:text-mran-red-400 mt-1">
                    {messages.chairman.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2 text-start">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{isArabic ? 'خبرة استثمارية ورياضية رائدة' : 'Pioneering Sports Investment Acumen'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-mran-red-700 flex-shrink-0" />
                    <span>{isArabic ? 'نادي المصانع الحربية بحلوان' : 'Helwan Military Factory Club'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Strategic Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 glass-panel p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-md">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {isArabic ? 'المسيرة المهنية والتوجه المؤسسي' : 'Executive Career & Institutional Orientation'}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>{messages.chairman.bioP1}</p>
              <p>{messages.chairman.bioP2}</p>
              <p>{messages.chairman.bioP3}</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>{messages.chairman.affiliationsTitle}</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                {affiliations.map((aff, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{aff}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-mran-red-700 via-rose-600 to-mran-red-800 text-white border border-mran-red-600/60 space-y-3 shadow-[0_4px_16px_rgba(193,39,45,0.35),inset_0_1px_0_rgba(255,255,255,0.3)]">
              <h4 className="text-base font-black">
                {isArabic ? 'تواصل مع مكتب رئيس مجلس الإدارة' : 'Executive Office Inquiries'}
              </h4>
              <p className="text-xs text-white/90 leading-relaxed">
                {isArabic
                  ? 'للشراكات المؤسسية، رعاية الأندية، والمشاريع الاستثمارية الرياضية الكبرى.'
                  : 'For corporate sponsorships, public-private alliances, and sports capital investments.'}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition shadow-sm"
              >
                <span>{messages.common.getInTouch}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Strategic Leadership Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {messages.chairman.pillarsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipPillars.map((pil, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:border-mran-red-700/50 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-mran-red-50 dark:bg-mran-red-950 text-mran-red-700 border border-mran-red-700/20 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {pil.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
