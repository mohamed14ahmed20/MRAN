'use client';

import * as React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { SUBSIDIARIES, Subsidiary } from '@/data/subsidiaries';
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Flame,
  Zap,
  Building2,
  MoveHorizontal,
  Sparkles
} from 'lucide-react';

interface SubsidiaryShowcaseProps {
  locale: string;
  labels: {
    pill: string;
    heading: string;
    sub: string;
    filterAll: string;
    viewDetails: string;
    specsLabel: string;
    ageGroups: string;
  };
}

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Trophy,
  ShieldCheck,
  Zap,
  Building2,
};

export function SubsidiaryShowcase({ locale, labels }: SubsidiaryShowcaseProps) {
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [resetTimerKey, setResetTimerKey] = React.useState(0);

  // Dragging state
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState(0);
  const startXRef = React.useRef(0);
  const startYRef = React.useRef(0);
  const startTimeRef = React.useRef(0);
  const isPointerDownRef = React.useRef(false);
  const isIntentDeterminedRef = React.useRef(false);
  const dragDistanceRef = React.useRef(0);
  const preventClickRef = React.useRef(false);
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);

  // Continuous 5-Second Autoplay Timer (always runs every 5000ms unless hovered or dragging)
  React.useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SUBSIDIARIES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, resetTimerKey]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, SUBSIDIARIES.length - 1)));
    setResetTimerKey((k) => k + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SUBSIDIARIES.length - 1 : prev - 1));
    setResetTimerKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SUBSIDIARIES.length);
    setResetTimerKey((k) => k + 1);
  };

  // Pointer drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return; // Only main button
    isPointerDownRef.current = true;
    isIntentDeterminedRef.current = false;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    startTimeRef.current = performance.now();
    dragDistanceRef.current = 0;
    preventClickRef.current = false;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if capture not available
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    const deltaY = e.clientY - startYRef.current;

    // Detect intent: horizontal drag vs vertical page scroll
    if (!isIntentDeterminedRef.current) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        // Vertical scrolling - cancel slider drag so user scrolls naturally
        isPointerDownRef.current = false;
        setIsDragging(false);
        setDragOffset(0);
        return;
      }
      if (Math.abs(deltaX) > 8) {
        isIntentDeterminedRef.current = true;
        setIsDragging(true);
      }
    }

    if (isIntentDeterminedRef.current) {
      preventClickRef.current = true;

      // Rubber-banding resistance at ends
      let adjustedDeltaX = deltaX;
      if (currentIndex === 0 && deltaX > 0) {
        adjustedDeltaX = deltaX * 0.3;
      } else if (currentIndex === SUBSIDIARIES.length - 1 && deltaX < 0) {
        adjustedDeltaX = deltaX * 0.3;
      }

      dragDistanceRef.current = adjustedDeltaX;
      setDragOffset(adjustedDeltaX);
    }
  };

  const handlePointerEnd = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    if (isDragging) {
      const duration = performance.now() - startTimeRef.current;
      const deltaX = dragDistanceRef.current;
      const velocity = Math.abs(deltaX) / Math.max(duration, 1);

      // Threshold: dragged > 50px or quick flick (velocity > 0.35 and distance > 20px)
      const isSwipe = Math.abs(deltaX) > 50 || (velocity > 0.35 && Math.abs(deltaX) > 20);

      if (isSwipe) {
        if (deltaX < 0) {
          // Dragged left -> Next slide (with looping)
          setCurrentIndex((prev) => (prev + 1) % SUBSIDIARIES.length);
        } else if (deltaX > 0) {
          // Dragged right -> Previous slide (with looping)
          setCurrentIndex((prev) => (prev === 0 ? SUBSIDIARIES.length - 1 : prev - 1));
        }
        setResetTimerKey((k) => k + 1);
      }

      setIsDragging(false);
      setDragOffset(0);

      // Suppress click for 120ms so releasing drag over CTA links doesn't trigger navigation
      setTimeout(() => {
        preventClickRef.current = false;
      }, 120);
    }
  };

  // Keyboard accessibility navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      isArabic ? handleNext() : handlePrev();
    } else if (e.key === 'ArrowRight') {
      isArabic ? handlePrev() : handleNext();
    }
  };

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#060a12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mran-red-700/20 bg-mran-red-50 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{labels.pill}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {labels.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              {labels.sub}
            </p>
          </div>

          {/* Slider Controls & Counter */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans tabular-nums px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <bdi dir="ltr">{currentIndex + 1} / {SUBSIDIARIES.length}</bdi>
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Slider Viewport */}
        <div
          ref={sliderContainerRef}
          role="region"
          aria-label={labels.heading}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          className={`relative overflow-hidden rounded-2xl select-none border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mran-red-700/40 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ touchAction: 'pan-y' }}
        >
          {/* Autoplay Progress Line Indicator (5 seconds continuous countdown) */}
          <div className="absolute top-0 inset-x-0 h-1 bg-slate-200/40 dark:bg-slate-800/40 z-20 overflow-hidden">
            <div
              key={`${currentIndex}-${resetTimerKey}`}
              className="h-full bg-gradient-to-r from-mran-red-700 via-rose-600 to-indigo-600 animate-showcase-progress"
              style={{
                animationPlayState: isHovered || isDragging ? 'paused' : 'running',
              }}
            />
          </div>

          {/* Smooth Draggable Slider Track (dir="ltr" for consistent transform physics) */}
          <div
            dir="ltr"
            className="flex"
            style={{
              transform: `translate3d(calc(-${currentIndex * 100}% + ${dragOffset}px), 0, 0)`,
              transition: isDragging ? 'none' : 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
              willChange: 'transform',
            }}
          >
            {SUBSIDIARIES.map((sub, idx) => {
              const IconComp = iconMap[sub.iconName] || Trophy;

              return (
                <div
                  key={sub.id}
                  dir={isArabic ? 'rtl' : 'ltr'}
                  className="w-full min-w-full flex-shrink-0"
                >
                  <div className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden transition-all duration-300">
                    {/* Subtle Ambient Background Watermark */}
                    <div className="absolute -bottom-10 end-0 text-slate-900/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
                      <IconComp className="w-80 h-80" strokeWidth={1} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      {/* Left Content */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-mran-red-50 dark:bg-mran-red-950/50 text-mran-red-700 dark:text-mran-red-400 border border-mran-red-700/20">
                            {sub.sector[locale as 'ar' | 'en']}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {sub.badge[locale as 'ar' | 'en']}
                          </span>
                          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] text-slate-400 dark:text-slate-500 bg-slate-100/70 dark:bg-slate-800/50">
                            <MoveHorizontal className="w-3 h-3 animate-pulse" />
                            <span>{isArabic ? 'اسحب للتبديل' : 'Drag to slide'}</span>
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                          {sub.name[locale as 'ar' | 'en']}
                        </h3>

                        <p className="text-base font-semibold text-mran-red-700 dark:text-mran-red-400 italic">
                          &ldquo;{sub.tagline[locale as 'ar' | 'en']}&rdquo;
                        </p>

                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          {sub.description[locale as 'ar' | 'en']}
                        </p>

                        {/* Key Features List */}
                        <div className="space-y-2 pt-1">
                          {sub.features[locale as 'ar' | 'en'].slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-mran-red-700 mt-2 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Link to Dedicated Subsidiary Page */}
                        <div className="pt-4">
                          <Link
                            href={`/companies/${sub.slug}`}
                            onClick={(e) => {
                              if (preventClickRef.current) {
                                e.preventDefault();
                              }
                            }}
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-mran-red-700 to-rose-700 hover:from-mran-red-800 hover:to-rose-800 text-white font-bold text-sm shadow-md hover:shadow-glow transition-all group pointer-events-auto"
                          >
                            <span>{labels.viewDetails}</span>
                            <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Quick Specs Box */}
                      <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 sm:p-8 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] space-y-5">
                          <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mran-red-600 to-rose-700 text-white flex items-center justify-center shadow-md flex-shrink-0">
                              <IconComp className="w-7 h-7" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-mran-red-700 dark:text-mran-red-400 block mb-0.5">
                                {sub.sector[locale as 'ar' | 'en']}
                              </span>
                              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                                {sub.name[locale as 'ar' | 'en']}
                              </span>
                            </div>
                          </div>

                          {/* Technical Specs Snippet */}
                          <div className="space-y-2 text-xs">
                            <p className="font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                              {labels.specsLabel}:
                            </p>
                            {sub.specs[locale as 'ar' | 'en'].slice(0, 4).map((s, sIdx) => (
                              <div key={sIdx} className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400">
                                <span>{s.label}</span>
                                <span className="font-semibold text-slate-900 dark:text-slate-200 text-end ps-2">{s.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 py-6 bg-slate-50/50 dark:bg-[#060a12]/50 border-t border-slate-100 dark:border-slate-800/80">
            {SUBSIDIARIES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-mran-red-700'
                    : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Selector Cards - Draggable & Scrollable on Mobile, Grid on Tablet/Desktop */}
        <div className="mt-8 flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 overflow-x-auto no-scrollbar pb-2 sm:pb-0 touch-pan-x">
          {SUBSIDIARIES.map((item, idx) => {
            const ItemIcon = iconMap[item.iconName] || Trophy;
            const isSelected = currentIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`flex-shrink-0 min-w-[200px] sm:min-w-0 p-3.5 rounded-xl border text-start transition-all duration-200 ${
                  isSelected
                    ? 'border-mran-red-700 bg-white dark:bg-slate-900 shadow-md ring-1 ring-mran-red-700/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                    : 'border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-colors ${
                      isSelected
                        ? 'bg-mran-red-700 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    {item.name[locale as 'ar' | 'en']}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

