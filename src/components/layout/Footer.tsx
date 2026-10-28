'use client';

import * as React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { QrCodeModal } from './QrCodeModal';
import { Phone, Mail, MapPin, Clock, QrCode, ArrowUp, ChevronRight } from 'lucide-react';

interface FooterProps {
  locale: string;
  labels: {
    companyName: string;
    tagline: string;
    phone: string;
    phoneFormatted: string;
    email: string;
    address: string;
    hours: string;
    allRightsReserved: string;
    home: string;
    about: string;
    companies: string;
    chairman: string;
    contact: string;
  };
}

export function Footer({ locale, labels }: FooterProps) {
  const isArabic = locale === 'ar';
  const currentYear = new Date().getFullYear();

  const [activeQr, setActiveQr] = React.useState<{
    isOpen: boolean;
    title: string;
    imageSrc: string;
  }>({
    isOpen: false,
    title: '',
    imageSrc: '',
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const qrChannels = [
    {
      title: isArabic ? 'صفحة مران الرسمية (فيسبوك)' : 'MRAN Official Facebook',
      image: '/brand/qr/facebook_mran.png',
      badge: 'Facebook',
    },
    {
      title: isArabic ? 'مران بادل (انستجرام)' : 'MRAN Padel Instagram',
      image: '/brand/qr/instagram_padel.png',
      badge: 'Instagram',
    },
    {
      title: isArabic ? 'نادي المصانع الحربية حلوان (فيسبوك)' : 'Helwan Military Factory Club',
      image: '/brand/qr/facebook_helwan.png',
      badge: 'Helwan Club',
    },
  ];

  return (
    <>
      <footer className="relative bg-slate-900 dark:bg-black text-slate-300 border-t border-slate-800 pt-16 pb-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-mran-red-700/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
            {/* Column 1: Brand & Narrative */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-14 h-12 flex-shrink-0">
                  <Image
                    src="/brand/logo.png"
                    alt={labels.companyName}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {labels.companyName}
                  </h3>
                  <p className="text-xs text-mran-red-400 font-medium">
                    MRAN SPORTS INVESTMENT
                  </p>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;{labels.tagline}&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isArabic
                  ? 'منظومة استثمارية وتدريبية متقدمة في جمهورية مصر العربية تهدف إلى اكتشاف المواهب الرياضية وبناء الشخصية المتوازنة وفق معايير عالمية.'
                  : 'An integrated sports investment and academy ecosystem in Egypt dedicated to nurturing youth talent and holistic character development.'}
              </p>

              {/* Scannable Social QR Quick Pills */}
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  {isArabic ? 'امسح لمتابعة قنواتنا الرسمية:' : 'Scan for Official Channels:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {qrChannels.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setActiveQr({
                          isOpen: true,
                          title: c.title,
                          imageSrc: c.image,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all group"
                    >
                      <QrCode className="w-3.5 h-3.5 text-mran-red-400 group-hover:scale-110 transition-transform" />
                      <span>{c.badge}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-mran-red-700 rounded-sm" />
                <span>{isArabic ? 'روابط الوصول السريع' : 'Quick Navigation'}</span>
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition flex items-center gap-1 text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-mran-red-500" />
                    <span>{labels.home}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-white transition flex items-center gap-1 text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-mran-red-500" />
                    <span>{labels.about}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies"
                    className="hover:text-white transition flex items-center gap-1 text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-mran-red-500" />
                    <span>{labels.companies}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chairman"
                    className="hover:text-white transition flex items-center gap-1 text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-mran-red-500" />
                    <span>{labels.chairman}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition flex items-center gap-1 text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-mran-red-500" />
                    <span>{labels.contact}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Specialized Sectors */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-mran-red-700 rounded-sm" />
                <span>{isArabic ? 'القطاعات والأكاديميات' : 'Core Disciplines'}</span>
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link
                    href="/companies/football"
                    className="hover:text-white transition block"
                  >
                    {isArabic ? '• أكاديمية كرة القدم للناشئين' : '• Junior Football Academy'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/padel"
                    className="hover:text-white transition block"
                  >
                    {isArabic ? '• أندية وبطولات مران بادل' : '• MRAN Padel Club & Courts'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/martial-arts"
                    className="hover:text-white transition block"
                  >
                    {isArabic ? '• أكاديمية كونغ فو وكاراتيه' : '• Kung Fu & Karate Academy'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/fitness"
                    className="hover:text-white transition block"
                  >
                    {isArabic ? '• مركز الإعداد البدني واللياقة' : '• Athletic Conditioning & Gym'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies/facilities-management"
                    className="hover:text-white transition block"
                  >
                    {isArabic ? '• تشغيل نادي المصانع الحربية' : '• Military Factory Club Ops'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Direct Contact & Headquarters */}
            <div className="space-y-3.5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-mran-red-700 rounded-sm" />
                <span>{isArabic ? 'المقر والتواصل المباشر' : 'Official Contact'}</span>
              </h4>
              <div className="flex items-start gap-3 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-mran-red-500 flex-shrink-0 mt-0.5" />
                <span>{labels.address}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-mran-red-500 flex-shrink-0" />
                <a
                  href={`tel:${labels.phone}`}
                  className="inline-block font-bold hover:text-white transition"
                  dir="ltr"
                >
                  <bdi dir="ltr" className="font-sans tabular-nums">{labels.phoneFormatted}</bdi>
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-mran-red-500 flex-shrink-0" />
                <a
                  href={`mailto:${labels.email}`}
                  className="hover:text-white transition"
                >
                  {labels.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-mran-red-500 flex-shrink-0 mt-0.5" />
                <span>{labels.hours}</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>{labels.allRightsReserved.replace('{year}', String(currentYear))}</p>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">
                {isArabic ? 'حلوان • مدينة نصر • بدر • أكتوبر • المستقبل' : 'Helwan • Nasr City • Badr • October • Mostakbal'}
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition shadow-sm"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Code Viewer Modal */}
      <QrCodeModal
        isOpen={activeQr.isOpen}
        onClose={() => setActiveQr({ isOpen: false, title: '', imageSrc: '' })}
        title={activeQr.title}
        imageSrc={activeQr.imageSrc}
        locale={locale}
      />
    </>
  );
}
