'use client';

import * as React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Quote, ArrowLeft, ArrowRight, Award, Shield } from 'lucide-react';

interface ChairmanPreviewProps {
  locale: string;
  labels: {
    pill: string;
    title: string;
    name: string;
    role: string;
    quote: string;
    bioLead: string;
  };
}

export function ChairmanPreview({ locale, labels }: ChairmanPreviewProps) {
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 lg:py-28 relative bg-white dark:bg-[#070b14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 end-0 w-96 h-96 bg-mran-red-700/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Quote & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mran-red-700/20 bg-mran-red-50 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>{labels.pill}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {labels.title}
              </h2>

              <div className="relative pl-0 sm:pl-6 rtl:sm:pl-0 rtl:sm:pr-6 border-s-0 sm:border-s-4 rtl:sm:border-s-0 rtl:sm:border-e-4 border-mran-red-700 space-y-3">
                <Quote className="w-8 h-8 text-mran-red-700/30 mb-2 rotate-180" />
                <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 font-semibold leading-relaxed italic">
                  &ldquo;{labels.quote}&rdquo;
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {labels.bioLead}
              </p>

              {/* Action Link to Full Chairman Page */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/chairman"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm shadow-md transition-all group"
                >
                  <span>{isArabic ? 'السيرة الذاتية والرؤية الكاملة' : 'Read Full Executive Biography'}</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>

                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>{isArabic ? 'شراكات معتمدة ومبادرات وطنية' : 'Accredited National Initiatives'}</span>
                </div>
              </div>
            </div>

            {/* Executive Badge & Portrait Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
                {/* Executive Avatar / Portrait */}
                <div className="relative mx-auto w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-mran-red-700 via-rose-500 to-indigo-700 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/brand/chairman.jpg"
                      alt={labels.name}
                      fill
                      sizes="144px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {labels.name}
                  </h3>
                  <p className="text-xs font-semibold text-mran-red-700 dark:text-mran-red-400 mt-0.5">
                    {labels.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <p>{isArabic ? 'رئيس مجلس إدارة مران للإستثمار' : 'Chairman, MRAN Sports'}</p>
                  <p>{isArabic ? 'شريك استراتيجي لنادي المصانع الحربية' : 'Military Factory Club Partner'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
