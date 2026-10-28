'use client';

import * as React from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isArabic = currentLocale === 'ar';
  const targetLocale = isArabic ? 'en' : 'ar';
  const targetLabel = isArabic ? 'English' : 'العربية';

  const handleSwitch = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      aria-label={`Switch to ${targetLabel}`}
    >
      <Globe className="w-3.5 h-3.5 text-mran-red-700 dark:text-mran-red-500" />
      <span>{targetLabel}</span>
    </button>
  );
}
