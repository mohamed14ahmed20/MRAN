'use client';

import * as React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowLeft, ArrowRight, ShieldCheck, Trophy, Users, Award, PhoneCall } from 'lucide-react';

interface HeroSectionProps {
  locale: string;
  labels: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    phone: string;
    phoneFormatted: string;
  };
}

export function HeroSection({ locale, labels }: HeroSectionProps) {
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const [activeSportIndex, setActiveSportIndex] = React.useState(0);

  // 5-Second Automatic Showcase Cycling for Sports Disciplines
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSportIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#060a12] dark:via-[#0b1120] dark:to-[#070b14]">
      {/* Background Glows & Athletic Lines */}
      <div className="absolute top-1/4 -start-20 w-96 h-96 rounded-full bg-mran-red-600/10 dark:bg-mran-red-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -end-20 w-96 h-96 rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Floating Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mran-red-700/20 bg-mran-red-50/80 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-300 text-xs sm:text-sm font-bold shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-mran-red-700 animate-ping" />
              <span>{labels.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {labels.titlePrefix}{' '}
              <span className="block mt-2 bg-gradient-to-r from-mran-red-700 via-rose-600 to-amber-500 bg-clip-text text-transparent">
                {labels.titleHighlight}
              </span>
            </h1>

            {/* Narrative description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {labels.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/companies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-mran-red-700 to-rose-700 hover:from-mran-red-800 hover:to-rose-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-mran-red-700/25 hover:shadow-glow transition-all duration-300 group"
              >
                <span>{labels.ctaPrimary}</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${labels.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base shadow-sm backdrop-blur-sm transition"
              >
                <PhoneCall className="w-4 h-4 text-mran-red-700 flex-shrink-0" />
                <bdi dir="ltr" className="font-sans tabular-nums">{labels.phoneFormatted}</bdi>
              </a>
            </div>

            {/* Accreditations Trust Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{isArabic ? 'شراكة نادي المصانع الحربية' : 'Military Factory Club Alliance'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>{isArabic ? 'اتحادات بادل وكاراتيه معتمدة' : 'Official Federations Certified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-mran-red-500" />
                <span>{isArabic ? 'ملاعب معتمدة دولياً' : 'FIP & FIFA Compliant Venues'}</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Accent */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-mran-red-700/30 via-indigo-600/20 to-amber-500/20 blur-xl opacity-75" />

              <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
                {/* Brand Badge inside Card */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200/90 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-10">
                      <Image
                        src="/brand/logo.png"
                        alt="MRAN Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {isArabic ? 'مران للإستثمار الرياضي' : 'MRAN Sports Investment'}
                      </p>
                      <p className="text-[11px] text-mran-red-700 dark:text-mran-red-400 font-semibold">
                        {isArabic ? 'القاهرة الكبرى والمدن الجديدة' : 'Greater Cairo & New Cities'}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                    {isArabic ? 'متاح التسجيل' : 'Enrolling Now'}
                  </span>
                </div>

                {/* Sports Disciplines Quick Tags */}
                <div className="py-6 space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {isArabic ? 'الرياضات المتاحة بالأكاديمية:' : 'Featured Sports Disciplines:'}
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className={`p-3 rounded-xl border transition-all duration-500 flex items-center gap-2 ${
                      activeSportIndex === 0
                        ? 'border-mran-red-700 bg-mran-red-50/90 dark:bg-mran-red-950/60 shadow-sm ring-1 ring-mran-red-700/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] scale-[1.02]'
                        : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-mran-red-600 animate-pulse flex-shrink-0" />
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {isArabic ? 'كرة القدم (Football)' : 'Football Academy'}
                      </span>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all duration-500 flex items-center gap-2 ${
                      activeSportIndex === 1
                        ? 'border-blue-600 bg-blue-50/90 dark:bg-blue-950/60 shadow-sm ring-1 ring-blue-600/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] scale-[1.02]'
                        : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse flex-shrink-0" />
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {isArabic ? 'بادل (Padel Arena)' : 'Padel Tournaments'}
                      </span>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all duration-500 flex items-center gap-2 ${
                      activeSportIndex === 2
                        ? 'border-amber-600 bg-amber-50/90 dark:bg-amber-950/60 shadow-sm ring-1 ring-amber-600/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] scale-[1.02]'
                        : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse flex-shrink-0" />
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {isArabic ? 'كونغ فو (Kung Fu)' : 'Kung Fu / Wushu'}
                      </span>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all duration-500 flex items-center gap-2 ${
                      activeSportIndex === 3
                        ? 'border-rose-600 bg-rose-50/90 dark:bg-rose-950/60 shadow-sm ring-1 ring-rose-600/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] scale-[1.02]'
                        : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse flex-shrink-0" />
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {isArabic ? 'كاراتيه (Karate Dojo)' : 'Karate & Self-Defense'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Slogan Banner inside card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-mran-navy-900 text-white text-xs text-center border border-slate-800 shadow-md">
                  <p className="font-semibold text-slate-300">
                    &ldquo;{isArabic ? 'نبني الإنسان قبل اللاعب… ونصنع رياضة بأسلوب احترافي' : 'Building the Human Before the Athlete… Crafting Sports with Professionalism'}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
