'use client';

import * as React from 'react';
import { Award, Sparkles, Sliders, UserCheck, Flame, Users2, HeartHandshake, Compass } from 'lucide-react';

interface AboutSectionProps {
  locale: string;
  labels: {
    pill: string;
    heading: string;
    lead: string;
    visionTitle: string;
    visionDesc: string;
    communityTitle: string;
    communityDesc: string;
    valuesHeading: string;
    valuesSub: string;
    values: { title: string; desc: string }[];
    targetPill: string;
    targets: { name: string; desc: string }[];
  };
}

export function AboutSection({ locale, labels }: AboutSectionProps) {
  const isArabic = locale === 'ar';

  const valueIcons = [Award, Sparkles, Sliders, UserCheck, Flame, Users2];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-white dark:bg-[#070b14] overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 -start-32 w-80 h-80 rounded-full bg-mran-red-700/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-mran-red-700/20 bg-mran-red-50 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{labels.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {labels.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {labels.lead}
          </p>
        </div>

        {/* Dual Pillar Cards: Vision & Community Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-mran-red-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-mran-red-50 dark:bg-mran-red-950/60 text-mran-red-700 dark:text-mran-red-400 border border-mran-red-700/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {labels.visionTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {labels.visionDesc}
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group hover:border-indigo-600/50 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-600/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {labels.communityTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {labels.communityDesc}
            </p>
          </div>
        </div>

        {/* 6 Institutional Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {labels.valuesHeading}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              {labels.valuesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labels.values.map((v, idx) => {
              const IconComp = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-mran-red-700/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 text-mran-red-700 dark:text-mran-red-400 flex items-center justify-center mb-4 group-hover:bg-mran-red-700 group-hover:text-white group-hover:border-mran-red-700 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Target Demographics */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-mran-red-700 dark:text-mran-red-400 uppercase tracking-widest">
              {labels.targetPill}
            </span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {isArabic ? 'برامج مخصصة تلائم جميع المراحل العمرية' : 'Tailored Programs for Every Stage of Life'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {labels.targets.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-start space-y-3 relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-mran-red-700/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-mran-red-700/10 text-mran-red-700 font-bold text-sm flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
