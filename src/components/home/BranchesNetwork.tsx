'use client';

import * as React from 'react';
import Image from 'next/image';
import { BRANCHES, Branch } from '@/data/branches';
import { MapPin, Phone, Clock, QrCode, CheckCircle2, Building, Compass } from 'lucide-react';
import { QrCodeModal } from '@/components/layout/QrCodeModal';

interface BranchesNetworkProps {
  locale: string;
  labels: {
    pill: string;
    heading: string;
    sub: string;
    sportsAvailable: string;
  };
}

export function BranchesNetwork({ locale, labels }: BranchesNetworkProps) {
  const isArabic = locale === 'ar';
  const [selectedBranchIndex, setSelectedBranchIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [resetTimerKey, setResetTimerKey] = React.useState(0);
  const [modalQr, setModalQr] = React.useState<{ isOpen: boolean; title: string; image: string }>({
    isOpen: false,
    title: '',
    image: '',
  });

  // Continuous 5-Second Autoplay Timer for Branches Showcase
  React.useEffect(() => {
    if (isHovered || modalQr.isOpen) return;

    const interval = setInterval(() => {
      setSelectedBranchIndex((prev) => (prev + 1) % BRANCHES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, modalQr.isOpen, resetTimerKey]);

  const selectedBranch = BRANCHES[selectedBranchIndex] || BRANCHES[0];

  const handleSelectBranch = (idx: number) => {
    setSelectedBranchIndex(idx);
    setResetTimerKey((k) => k + 1);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#060a12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold text-mran-red-700 dark:text-mran-red-400 uppercase tracking-widest">
            {labels.pill}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {labels.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {labels.sub}
          </p>
        </div>

        {/* Branch Tabs Selector */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10"
        >
          {BRANCHES.map((branch, idx) => {
            const isSelected = selectedBranchIndex === idx;
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => handleSelectBranch(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-mran-red-700 text-white shadow-md shadow-mran-red-700/25 border border-mran-red-600/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] scale-[1.02]'
                    : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-mran-red-600'}`} />
                <span>{branch.name[locale as 'ar' | 'en']}</span>
                {branch.isHeadquarter && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${isSelected ? 'bg-white/20 text-white' : 'bg-mran-red-100 text-mran-red-700 dark:bg-mran-red-950 dark:text-mran-red-300'}`}>
                    {isArabic ? 'رئيسي' : 'HQ'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Branch Detail Box */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl relative overflow-hidden transition-all duration-500"
        >
          {/* 5-second Autoplay Progress Indicator */}
          <div className="absolute top-0 inset-x-0 h-1 bg-slate-200/40 dark:bg-slate-800/40 z-20 overflow-hidden">
            <div
              key={`${selectedBranchIndex}-${resetTimerKey}`}
              className="h-full bg-gradient-to-r from-mran-red-700 via-rose-600 to-indigo-600 animate-showcase-progress"
              style={{
                animationPlayState: isHovered ? 'paused' : 'running',
              }}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Details Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mran-red-50 dark:bg-mran-red-950/60 text-mran-red-700 dark:text-mran-red-400 border border-mran-red-700/20 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {selectedBranch.name[locale as 'ar' | 'en']}
                  </h3>
                  <span className="text-xs font-semibold text-mran-red-700 dark:text-mran-red-400">
                    {selectedBranch.region[locale as 'ar' | 'en']}
                  </span>
                </div>
              </div>

              {/* Address & Hotline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <MapPin className="w-4 h-4 text-mran-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                      {isArabic ? 'العنوان التفصيلي' : 'Address'}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {selectedBranch.address[locale as 'ar' | 'en']}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <Phone className="w-4 h-4 text-mran-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                      {isArabic ? 'الخط الساخن والحجز' : 'Hotline & Booking'}
                    </span>
                    <a
                      href={`tel:${selectedBranch.phone}`}
                      className="inline-block font-bold text-slate-900 dark:text-slate-100 hover:text-mran-red-700 transition"
                      dir="ltr"
                    >
                      <bdi dir="ltr" className="font-sans tabular-nums">{selectedBranch.phoneFormatted}</bdi>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>{selectedBranch.hours[locale as 'ar' | 'en']}</span>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isArabic ? 'أبرز مميزات هذا الفرع:' : 'Hub Key Advantages:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBranch.features[locale as 'ar' | 'en'].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QR Code Action Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="inline-flex p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-mran-red-700">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {isArabic ? 'رمز الوصول السريع' : 'Official Channel QR'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isArabic ? 'امسح للتواصل المباشر مع هذا الفرع' : 'Scan for immediate inquiries'}
                  </p>
                </div>

                {selectedBranch.qrAsset && (
                  <div className="relative mx-auto w-36 h-36 rounded-xl bg-white p-2 border border-slate-200 dark:border-slate-700 shadow-inner flex items-center justify-center">
                    <Image
                      src={selectedBranch.qrAsset}
                      alt={selectedBranch.name[locale as 'ar' | 'en']}
                      width={130}
                      height={130}
                      className="object-contain"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setModalQr({
                      isOpen: true,
                      title: selectedBranch.name[locale as 'ar' | 'en'],
                      image: selectedBranch.qrAsset || '/brand/qr/facebook_mran.png',
                    })
                  }
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition shadow-sm"
                >
                  {isArabic ? 'تكبير الرمز للمسح' : 'Enlarge QR Code'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QrCodeModal
        isOpen={modalQr.isOpen}
        onClose={() => setModalQr({ isOpen: false, title: '', image: '' })}
        title={modalQr.title}
        imageSrc={modalQr.image}
        locale={locale}
      />
    </section>
  );
}
