'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Trophy,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  MessageCircle,
  Phone,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';

interface TournamentBannerProps {
  locale: string;
  labels: {
    liveBadge: string;
    titlePrefix: string;
    titleHighlight: string;
    tagline: string;
    venueLabel: string;
    venueValue: string;
    timeLabel: string;
    timeValue: string;
    ageLabel: string;
    ageValue: string;
    prizeLabel: string;
    prizeValue: string;
    ctaFacebook: string;
    ctaRegister: string;
    hotlineNotice: string;
    viewPoster: string;
  };
}

export function TournamentBanner({ locale, labels }: TournamentBannerProps) {
  const isArabic = locale === 'ar';
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const facebookUrl = 'https://www.facebook.com/share/r/18s4yGcQ4a/';
  const whatsappUrl =
    'https://wa.me/201551146629?text=' +
    encodeURIComponent(
      isArabic
        ? 'مرحباً، أود الاستفسار والتسجيل في دوري كبار مصر (EML) عبر أكاديمية مران.'
        : 'Hello, I would like to inquire and register a team for the Egypt Masters League (EML).'
    );

  return (
    <section
      id="tournament-ad-banner"
      aria-label="Tournament Promotional Banner"
      className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-b from-slate-100/90 via-amber-50/20 to-slate-100/90 dark:from-[#070b14] dark:via-[#090e1c] dark:to-[#070b14] text-slate-900 dark:text-white border-y border-amber-300/60 dark:border-amber-500/20 transition-colors duration-300"
    >
      {/* Dynamic Background Glows with Gold & Brand Crimson */}
      <div className="absolute -top-24 start-1/4 w-96 h-96 rounded-full bg-amber-500/15 dark:bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 end-1/4 w-96 h-96 rounded-full bg-mran-red-700/10 dark:bg-mran-red-700/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card Frame */}
        <div className="rounded-3xl border border-amber-300/70 dark:border-amber-500/30 bg-gradient-to-br from-white via-amber-50/35 to-rose-50/25 dark:from-[#0c1322] dark:via-[#0f172a] dark:to-[#090d18] shadow-xl shadow-amber-900/5 dark:shadow-2xl dark:shadow-amber-950/30 overflow-hidden backdrop-blur-sm transition-colors duration-300">
          {/* Top Announcement Bar */}
          <div className="px-6 py-3 bg-gradient-to-r from-amber-500/10 via-mran-red-700/10 to-amber-500/10 dark:from-amber-500/15 dark:via-mran-red-700/20 dark:to-amber-500/15 border-b border-amber-300/60 dark:border-amber-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600 dark:bg-amber-400" />
              </span>
              <span>{labels.liveBadge}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isArabic ? 'جوائز نقدية كبرى' : 'Grand Cash Prizes'}
                </span>
              </span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
              <span className="hidden sm:inline text-slate-600 dark:text-slate-300">
                {isArabic ? 'تنظيم احترافي بملاعب معتمدة' : 'Official Professional Tournament'}
              </span>
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: League Copy, Logo, Highlights & CTA */}
              <div className="lg:col-span-7 space-y-6">
                {/* Official EML Header Logo */}
                <div className="inline-flex p-2.5 sm:p-3 rounded-2xl bg-slate-950 border border-amber-500/30 shadow-md shadow-black/10 dark:shadow-black/40">
                  <div className="relative w-44 sm:w-56 h-14 sm:h-16">
                    <Image
                      src="/tournament/eml-logo.jpg"
                      alt="Egypt Masters League EML Logo"
                      fill
                      sizes="(max-width: 640px) 176px, 224px"
                      className="object-contain object-start filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]"
                      priority
                    />
                  </div>
                </div>

                {/* Main Ad Headline */}
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-500 dark:from-amber-200 dark:via-amber-400 dark:to-amber-100">
                      {labels.titlePrefix}
                    </span>{' '}
                    <span className="text-slate-700 dark:text-slate-200 font-bold block sm:inline">
                      ({labels.titleHighlight})
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {labels.tagline}
                  </p>
                </div>

                {/* 4 Feature Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {/* Venue */}
                  <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-sm transition-colors flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                        {labels.venueLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug block">
                        {labels.venueValue}
                      </span>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-sm transition-colors flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                        {labels.timeLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug block">
                        {labels.timeValue}
                      </span>
                    </div>
                  </div>

                  {/* Age Group */}
                  <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-sm transition-colors flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                        {labels.ageLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug block">
                        {labels.ageValue}
                      </span>
                    </div>
                  </div>

                  {/* Prizes */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100/40 to-white dark:from-amber-500/10 dark:via-slate-900/80 dark:to-slate-900/80 border border-amber-300 dark:border-amber-500/30 hover:border-amber-500/60 shadow-sm transition-colors flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 block uppercase tracking-wider">
                        {labels.prizeLabel}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 leading-snug block">
                        {labels.prizeValue}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs and Direct Contacts */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Primary CTA: Watch on Facebook */}
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>{labels.ctaFacebook}</span>
                      <ExternalLink className="w-4 h-4 opacity-75" />
                    </a>

                    {/* Secondary CTA: WhatsApp Hotline */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{labels.ctaRegister}</span>
                    </a>
                  </div>

                  {/* Hotlines Snippet */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {labels.hotlineNotice}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:01551146629"
                        className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold hover:underline"
                        dir="ltr"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span className="tabular-nums">01551146629</span>
                      </a>
                      <span className="text-slate-300 dark:text-slate-600">|</span>
                      <a
                        href="tel:01126723380"
                        className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold hover:underline"
                        dir="ltr"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span className="tabular-nums">01126723380</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Actual Tournament Poster Media Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-sm sm:max-w-md">
                  {/* Glowing Rim */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-mran-red-600/30 to-amber-500/30 blur-lg opacity-40 dark:opacity-60 group-hover:opacity-80 dark:group-hover:opacity-100 transition duration-500" />

                  {/* Poster Image Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 dark:bg-black border-2 border-amber-400/50 dark:border-amber-500/40 shadow-xl dark:shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                    <div className="relative aspect-square w-full">
                      <Image
                        src="/tournament/eml-poster.jpg"
                        alt="دوري كبار مصر - Egypt Masters League Poster"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover object-center"
                        priority
                      />
                    </div>

                    {/* Hover Overlay with Expand Action */}
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 text-center focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      aria-label={labels.viewPoster}
                    >
                      <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md">
                        {labels.viewPoster}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Poster Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.viewPoster}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 dark:bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-500/40 rounded-2xl p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -end-4 w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center justify-center shadow-xl transition-transform hover:scale-110 z-10 focus:outline-none"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Poster High Res View */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 dark:bg-black">
              <Image
                src="/tournament/eml-poster.jpg"
                alt="دوري كبار مصر - Egypt Masters League Poster"
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-contain"
              />
            </div>

            {/* Modal Bottom Bar with Direct Links */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-slate-700 dark:text-slate-300">
                <span className="font-bold text-amber-600 dark:text-amber-400">EML:</span> Champions
                Arena - مدينة نصر، القاهرة
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold inline-flex items-center gap-1.5 transition"
                >
                  <span>Facebook Reel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold inline-flex items-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
