import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { SUBSIDIARIES, Subsidiary } from '@/data/subsidiaries';
import { BRANCHES } from '@/data/branches';
import { Link } from '@/i18n/routing';
import { ContactForm } from '@/components/contact/ContactForm';
import {
  Trophy,
  Flame,
  ShieldCheck,
  Zap,
  Building2,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const locales = ['ar', 'en'];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const sub of SUBSIDIARIES) {
      params.push({ locale, slug: sub.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const sub = SUBSIDIARIES.find((s) => s.slug === slug);
  if (!sub) return {};

  const isArabic = locale === 'ar';
  return {
    title: `${sub.name[isArabic ? 'ar' : 'en']} | ${isArabic ? 'مران للإستثمار الرياضي' : 'MRAN Sports'}`,
    description: sub.description[isArabic ? 'ar' : 'en'],
  };
}

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Trophy,
  ShieldCheck,
  Zap,
  Building2,
};

export default async function SubsidiaryDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const sub = SUBSIDIARIES.find((s) => s.slug === slug);

  if (!sub) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages() as any;
  const isArabic = locale === 'ar';
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const IconComp = iconMap[sub.iconName] || Trophy;

  // Filter branches offering this sport/subsidiary
  const availableBranches = BRANCHES.filter((b) => sub.branches.includes(b.id));

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

  return (
    <div className="py-12 lg:py-20 bg-slate-50 dark:bg-[#060a12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-mran-red-700 transition">
            {messages.nav.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <Link href="/companies" className="hover:text-mran-red-700 transition">
            {messages.nav.companies}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          <span className="text-slate-900 dark:text-white font-bold">{sub.name[locale as 'ar' | 'en']}</span>
        </div>

        {/* Hero Header Card */}
        <div className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 end-0 w-80 h-80 bg-mran-red-700/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-mran-red-50 dark:bg-mran-red-950 text-mran-red-700 dark:text-mran-red-300 border border-mran-red-700/20">
                  {sub.sector[locale as 'ar' | 'en']}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {sub.badge[locale as 'ar' | 'en']}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                {sub.name[locale as 'ar' | 'en']}
              </h1>

              <p className="text-base sm:text-lg font-bold text-mran-red-700 dark:text-mran-red-400 italic">
                &ldquo;{sub.tagline[locale as 'ar' | 'en']}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {sub.description[locale as 'ar' | 'en']}
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-mran-red-700 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-mran-red-700/25 border border-mran-red-600/50">
                <IconComp className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Overview & Specs vs Procurement Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Detailed Operational Overview */}
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {isArabic ? 'نظرة عامة والمنهجية الفنية' : 'Operational Framework & Methodology'}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {sub.fullOverview[locale as 'ar' | 'en']}
              </p>
            </div>

            {/* Competitive Advantages & Capabilities */}
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isArabic ? 'المزايا التنافسية والقدرات التدريبية' : 'Competitive Advantages & Core Capabilities'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sub.features[locale as 'ar' | 'en'].map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs & Official Accreditations Grid */}
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {messages.subsidiaries.specsLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sub.specs[locale as 'ar' | 'en'].map((sp, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    <span className="text-xs text-slate-400 block font-semibold mb-1">
                      {sp.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {sp.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Groups & Schedules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-3">
                <div className="flex items-center gap-2 text-mran-red-700 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>{messages.subsidiaries.ageGroups}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {sub.ageGroups[locale as 'ar' | 'en'].map((ag, i) => (
                    <li key={i}>• {ag}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-3">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{messages.subsidiaries.trainingSystem}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sub.schedule[locale as 'ar' | 'en']}
                </p>
              </div>
            </div>

            {/* Available Branches for this Discipline */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {isArabic ? 'الفروع والمواقع التي تقدم هذا البرنامج:' : 'Branches Offering this Program:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableBranches.map((br) => (
                  <div
                    key={br.id}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] space-y-2 hover:border-mran-red-700/50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {br.name[locale as 'ar' | 'en']}
                      </span>
                      {br.isHeadquarter && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-mran-red-100 text-mran-red-700 font-bold">
                          {isArabic ? 'رئيسي' : 'HQ'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {br.address[locale as 'ar' | 'en']}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800/80">
                      <a
                        href={`tel:${br.phone}`}
                        className="inline-block font-bold text-mran-red-700 hover:underline"
                        dir="ltr"
                      >
                        <bdi dir="ltr" className="font-sans tabular-nums">{br.phoneFormatted}</bdi>
                      </a>
                      <span className="text-slate-400 text-[11px]">{br.hours[locale as 'ar' | 'en']}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Procurement / Registration Widget (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Direct Procurement & Registration Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-mran-red-400 uppercase tracking-wider block mb-1">
                    {isArabic ? 'التسجيل والاستفسار المباشر' : 'Direct Registration & Inquiries'}
                  </span>
                  <h3 className="text-xl font-black">
                    {sub.name[locale as 'ar' | 'en']}
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <a
                    href={`tel:${messages.common.phone}`}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-mran-red-700 to-rose-700 hover:from-mran-red-800 hover:to-rose-800 text-white font-bold shadow-lg transition"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <bdi dir="ltr" className="font-sans tabular-nums">{messages.common.phoneFormatted}</bdi>
                  </a>

                  <a
                    href={`https://wa.me/201551146629?text=${encodeURIComponent(
                      isArabic
                        ? `مرحباً، أود الاستفسار عن التسجيل في ${sub.name.ar}`
                        : `Hello, I would like to inquire about enrolling in ${sub.name.en}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition"
                  >
                    <span>{isArabic ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp Chat'}</span>
                  </a>

                  <a
                    href={`mailto:${messages.common.email}?subject=${encodeURIComponent(
                      `Inquiry: ${sub.name.en}`
                    )}`}
                    className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
                  >
                    <span>{messages.common.email}</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 text-slate-300">
                  <p className="font-semibold text-white">
                    {isArabic ? 'مزايا التسجيل مع مران:' : 'Enrollment Perks:'}
                  </p>
                  <p>✓ {isArabic ? 'حصة تدريبية استكشافية مجانية' : 'Free exploratory evaluation session'}</p>
                  <p>✓ {isArabic ? 'زي تدريبي رسمي متكامل' : 'Official branded athletic kit'}</p>
                  <p>✓ {isArabic ? 'تقرير تقييم بدني دوري' : 'Periodic biometric progress review'}</p>
                </div>
              </div>

              {/* Inquiry Form Card */}
              <ContactForm locale={locale} labels={contactFormLabels} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
