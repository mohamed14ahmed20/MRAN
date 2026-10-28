'use client';

import * as React from 'react';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PhoneCall, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  locale: string;
  labels: {
    home: string;
    about: string;
    companies: string;
    chairman: string;
    contact: string;
    phone: string;
    phoneFormatted: string;
    registerNow: string;
    companyName: string;
    sportsInvestment: string;
  };
}

export function Navbar({ locale, labels }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: labels.home },
    { href: '/#about', label: labels.about },
    { href: '/companies', label: labels.companies },
    { href: '/chairman', label: labels.chairman },
    { href: '/contact', label: labels.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href) && href !== '/#about';
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 relative ${
        scrolled
          ? 'glass-nav shadow-md shadow-black/5 dark:shadow-black/25'
          : 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80'
      }`}
    >
      {/* Crisp Architectural Hairline Accent along Bottom Edge */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-mran-red-700/35 dark:via-mran-red-500/35 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-12 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/brand/logo.png"
                alt={labels.companyName}
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {locale === 'ar' ? 'مَـرَان' : 'MRAN'}
              </span>
              <span className="text-[11px] font-semibold text-mran-red-700 dark:text-mran-red-400 tracking-wider">
                {labels.sportsInvestment}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-mran-red-700 dark:text-mran-red-400 bg-mran-red-50/90 dark:bg-mran-red-950/50 border border-mran-red-700/25 dark:border-mran-red-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Tools & Hotline CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle />

            {/* Direct Phone / Contact Hotline */}
            <a
              href={`tel:${labels.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-mran-red-700 via-rose-600 to-mran-red-800 hover:from-mran-red-800 hover:via-rose-700 hover:to-mran-red-900 text-white text-xs font-bold border border-mran-red-600/60 shadow-[0_2px_8px_rgba(193,39,45,0.3),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_4px_16px_rgba(193,39,45,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] active:scale-[0.98] transition-all duration-200 group"
              title={`Call Hotline ${labels.phoneFormatted}`}
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse flex-shrink-0" />
              <bdi dir="ltr" className="font-sans tabular-nums">{labels.phoneFormatted}</bdi>
            </a>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold border transition ${
                isActive(link.href)
                  ? 'text-mran-red-700 dark:text-mran-red-400 bg-mran-red-50 dark:bg-mran-red-950/40 border-mran-red-700/20 dark:border-mran-red-500/20'
                  : 'text-slate-700 dark:text-slate-200 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <a
              href={`tel:${labels.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-mran-red-700 to-rose-700 text-white text-sm font-bold border border-mran-red-600/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
            >
              <PhoneCall className="w-4 h-4 flex-shrink-0" />
              <span className="flex items-center gap-1.5">
                <span>{locale === 'ar' ? 'اتصل بنا:' : 'Hotline:'}</span>
                <bdi dir="ltr" className="font-sans tabular-nums">{labels.phoneFormatted}</bdi>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
