import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { ContactForm } from '@/components/contact/ContactForm';
import { BRANCHES } from '@/data/branches';
import { Link } from '@/i18n/routing';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquare,
  QrCode,
  Building,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  return {
    title: isArabic
      ? 'اتصل بنا والخط الساخن | مران للإستثمار الرياضي'
      : 'Contact Us & Direct Hotline | MRAN Sports Investment',
    description: isArabic
      ? 'تواصل مع إدارة مران للإستثمار الرياضي وفروعنا في حلوان ومدينة نصر وبدر وأكتوبر والمستقبل على الخط الساخن 01551146629.'
      : 'Connect with MRAN Sports Investment headquarters and branches across Cairo on hotline +20 155 114 6629.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages() as any;
  const isArabic = locale === 'ar';

  const contactFormLabels = {
    formTitle: messages.contact.formTitle,
    formSub: messages.contact.formSub,
    fullName: messages.contact.fullName,
    fullNamePlaceholder: messages.contact.fullNamePlaceholder,
    phoneLabel: messages.contact.phoneLabel,
    phonePlaceholder: messages.contact.phonePlaceholder,
    emailLabel: messages.contact.emailLabel,
    emailPlaceholder: messages.contact.emailPlaceholder,
    branchLabel: messages.contact.branchLabel,
    branchSelect: messages.contact.branchSelect,
    sportLabel: messages.contact.sportLabel,
    sportSelect: messages.contact.sportSelect,
    ageLabel: messages.contact.ageLabel,
    ageSelect: messages.contact.ageSelect,
    messageLabel: messages.contact.messageLabel,
    messagePlaceholder: messages.contact.messagePlaceholder,
    submit: messages.contact.submit,
    submitting: messages.contact.submitting,
    successTitle: messages.contact.successTitle,
    successMessage: messages.contact.successMessage,
  };

  const qrBadges = [
    {
      title: isArabic ? 'صفحة مران الرسمية (فيسبوك)' : 'MRAN Official Facebook',
      src: '/brand/qr/facebook_mran.png',
      tag: 'Facebook',
    },
    {
      title: isArabic ? 'مران بادل (انستجرام)' : 'MRAN Padel Instagram',
      src: '/brand/qr/instagram_padel.png',
      tag: 'Instagram',
    },
    {
      title: isArabic ? 'نادي المصانع الحربية حلوان' : 'Helwan Military Factory Club',
      src: '/brand/qr/facebook_helwan.png',
      tag: 'Helwan Club',
    },
    {
      title: isArabic ? 'مران بادل (فيسبوك)' : 'MRAN Padel Facebook',
      src: '/brand/qr/facebook_padel.png',
      tag: 'Padel Arena',
    },
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
          <span className="text-slate-900 dark:text-white">{messages.nav.contact}</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-mran-red-700/20 bg-mran-red-50 dark:bg-mran-red-950/40 text-mran-red-700 dark:text-mran-red-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{messages.contact.pill}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {messages.contact.heading}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {messages.contact.sub}
          </p>
        </div>

        {/* Top Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Headquarters */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 hover:border-mran-red-700/50 hover:shadow-lg transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-mran-red-50 dark:bg-mran-red-950 text-mran-red-700 border border-mran-red-700/20 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {messages.contact.headquartersTitle}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {messages.contact.headquartersAddress}
            </p>
          </div>

          {/* Card 2: Hotline */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 hover:border-mran-red-700/50 hover:shadow-lg transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-mran-red-50 dark:bg-mran-red-950 text-mran-red-700 border border-mran-red-700/20 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {messages.contact.hotlineTitle}
            </h3>
            <a
              href={`tel:${messages.common.phone}`}
              className="inline-block text-lg font-black text-mran-red-700 hover:underline"
              dir="ltr"
            >
              <bdi dir="ltr" className="font-sans tabular-nums">{messages.common.phoneFormatted}</bdi>
            </a>
            <p className="text-[11px] text-slate-400">
              {isArabic ? 'اتصال مباشر أو رسائل واتساب' : 'Direct Call or WhatsApp'}
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 hover:border-indigo-600/50 hover:shadow-lg transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 border border-indigo-600/20 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {messages.contact.emailTitle}
            </h3>
            <a
              href={`mailto:${messages.common.email}`}
              className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-mran-red-700 transition block truncate"
            >
              {messages.common.email}
            </a>
            <p className="text-[11px] text-slate-400">
              {isArabic ? 'رد رسمي خلال 24 ساعة' : 'Official 24hr response'}
            </p>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 hover:border-amber-600/50 hover:shadow-lg transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 border border-amber-600/20 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {messages.contact.workingHoursTitle}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {messages.common.hours}
            </p>
          </div>
        </div>

        {/* Main Grid: Form + Branch Network */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm locale={locale} labels={contactFormLabels} />
          </div>

          {/* Branch Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
              {isArabic ? 'دليل الفروع ومواقع التدريب:' : 'Branch Network & Hubs:'}
            </h3>

            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-2 hover:border-mran-red-700/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {branch.name[locale as 'ar' | 'en']}
                  </span>
                  {branch.isHeadquarter && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-mran-red-100 dark:bg-mran-red-950 text-mran-red-700 dark:text-mran-red-400 font-bold">
                      {isArabic ? 'المقر' : 'HQ'}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {branch.address[locale as 'ar' | 'en']}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-block font-bold text-mran-red-700 hover:underline"
                    dir="ltr"
                  >
                    <bdi dir="ltr" className="font-sans tabular-nums">{branch.phoneFormatted}</bdi>
                  </a>
                  <span className="text-slate-400 text-[11px]">
                    {branch.hours[locale as 'ar' | 'en']}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Channels Scannable QR Codes Gallery */}
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-mran-red-700 dark:text-mran-red-400 uppercase tracking-widest">
              <QrCode className="w-4 h-4" />
              <span>{messages.contact.socialQrTitle}</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              {messages.contact.scanToFollow}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {qrBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3 shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <div className="relative mx-auto w-36 h-36 rounded-xl bg-white p-2 border border-slate-200 dark:border-slate-700 shadow-inner flex items-center justify-center">
                  <Image
                    src={badge.src}
                    alt={badge.title}
                    width={130}
                    height={130}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                    {badge.tag}
                  </span>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-2">
                    {badge.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
