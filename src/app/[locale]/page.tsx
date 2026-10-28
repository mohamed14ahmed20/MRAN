import * as React from 'react';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { TournamentBanner } from '@/components/home/TournamentBanner';
import { AboutSection } from '@/components/home/AboutSection';
import { SubsidiaryShowcase } from '@/components/home/SubsidiaryShowcase';
import { ChairmanPreview } from '@/components/home/ChairmanPreview';
import { BranchesNetwork } from '@/components/home/BranchesNetwork';
import { ContactForm } from '@/components/contact/ContactForm';
import { PhoneCall } from 'lucide-react';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages() as any;

  const heroLabels = {
    badge: messages.hero.badge,
    titlePrefix: messages.hero.titlePrefix,
    titleHighlight: messages.hero.titleHighlight,
    description: messages.hero.description,
    ctaPrimary: messages.hero.ctaPrimary,
    ctaSecondary: messages.hero.ctaSecondary,
    phone: messages.common.phone,
    phoneFormatted: messages.common.phoneFormatted,
  };

  const aboutLabels = {
    pill: messages.about.pill,
    heading: messages.about.heading,
    lead: messages.about.lead,
    visionTitle: messages.about.visionTitle,
    visionDesc: messages.about.visionDesc,
    communityTitle: messages.about.communityTitle,
    communityDesc: messages.about.communityDesc,
    valuesHeading: messages.about.valuesHeading,
    valuesSub: messages.about.valuesSub,
    values: messages.about.values,
    targetPill: messages.about.targetPill,
    targets: messages.about.targets,
  };

  const subsidiaryLabels = {
    pill: messages.subsidiaries.pill,
    heading: messages.subsidiaries.heading,
    sub: messages.subsidiaries.sub,
    filterAll: messages.subsidiaries.filterAll,
    viewDetails: messages.subsidiaries.viewDetails,
    specsLabel: messages.subsidiaries.specsLabel,
    ageGroups: messages.subsidiaries.ageGroups,
  };

  const chairmanLabels = {
    pill: messages.chairman.pill,
    title: messages.chairman.title,
    name: messages.chairman.name,
    role: messages.chairman.role,
    quote: messages.chairman.quote,
    bioLead: messages.chairman.bioLead,
  };

  const branchesLabels = {
    pill: messages.branches.pill,
    heading: messages.branches.heading,
    sub: messages.branches.sub,
    sportsAvailable: messages.branches.sportsAvailable,
  };

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

  const tournamentLabels = {
    liveBadge: messages.tournament?.liveBadge || 'بطولة كروية رسمية | دوري كبار مصر',
    titlePrefix: messages.tournament?.titlePrefix || 'دوري كبار مصر',
    titleHighlight: messages.tournament?.titleHighlight || 'Egypt Masters League (EML)',
    tagline: messages.tournament?.tagline || 'الملاعب لسه مستنياك يا كبير… ميعادنا على ارض ملعب Champions Arena!',
    venueLabel: messages.tournament?.venueLabel || 'الملعب والموقع',
    venueValue: messages.tournament?.venueValue || 'Champions Arena - المنطقة الثامنة، مدينة نصر، القاهرة',
    timeLabel: messages.tournament?.timeLabel || 'توقيت المباريات',
    timeValue: messages.tournament?.timeValue || 'الساعة 7:00 مساءً',
    ageLabel: messages.tournament?.ageLabel || 'الفئة العمرية',
    ageValue: messages.tournament?.ageValue || '30 - 40 سنة (الكبار والمخضرمين)',
    prizeLabel: messages.tournament?.prizeLabel || 'الجوائز المالية',
    prizeValue: messages.tournament?.prizeValue || '100,000 جنيه للبطل وجوائز كبرى للمراكز الأولى',
    ctaFacebook: messages.tournament?.ctaFacebook || 'شاهد إعلان البطولة على فيسبوك',
    ctaRegister: messages.tournament?.ctaRegister || 'سجّل فريقك واستفسر عبر واتساب',
    hotlineNotice: messages.tournament?.hotlineNotice || 'للتسجيل والاستفسار السريع:',
    viewPoster: messages.tournament?.viewPoster || 'تكبير البوستر الرسمي',
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection locale={locale} labels={heroLabels} />

      {/* Special Main Banner: Official EML Football Tournament Ad */}
      <TournamentBanner locale={locale} labels={tournamentLabels} />

      {/* 2. About & Core Values */}
      <AboutSection locale={locale} labels={aboutLabels} />

      {/* 3. Interactive Subsidiaries / Sports Division Showcase */}
      <SubsidiaryShowcase locale={locale} labels={subsidiaryLabels} />

      {/* 4. Chairman Leadership Spotlight */}
      <ChairmanPreview locale={locale} labels={chairmanLabels} />

      {/* 5. Geographic Network & Facilities */}
      <BranchesNetwork locale={locale} labels={branchesLabels} />

      {/* 6. Quick Inquiry & Direct Contact Banner */}
      <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#060a12] border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative & Contact Snippet */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-mran-red-700 dark:text-mran-red-400 uppercase tracking-widest">
                {messages.contact.pill}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {messages.contact.heading}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {messages.contact.sub}
              </p>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mran-red-50 dark:bg-mran-red-950 text-mran-red-700 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{messages.contact.hotlineTitle}</span>
                    <a
                      href={`tel:${messages.common.phone}`}
                      className="inline-block text-lg font-black text-slate-900 dark:text-white hover:text-mran-red-700 transition"
                      dir="ltr"
                    >
                      <bdi dir="ltr" className="font-sans tabular-nums">{messages.common.phoneFormatted}</bdi>
                    </a>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <p>{messages.contact.headquartersAddress}</p>
                  <p className="mt-1">{messages.contact.workingHoursTitle}: {messages.common.hours}</p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm locale={locale} labels={contactFormLabels} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
