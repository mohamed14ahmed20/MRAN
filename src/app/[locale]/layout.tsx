import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cairo, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'مران للإستثمار الرياضي | نبني الإنسان قبل اللاعب'
      : 'MRAN Sports Investment Group | Building the Human Before the Athlete',
    description: isArabic
      ? 'أكاديمية مران الرياضية: برامج تدريب احترافية في كرة القدم، البادل، الكونغ فو، والكاراتيه، والإعداد البدني عبر فروع حلوان ومدينة نصر وبدر وأكتوبر والمستقبل.'
      : 'MRAN Sports Academy: Premier athletic training in Football, Padel, Kung Fu, Karate, and Physical Conditioning across Cairo hubs including Helwan Military Factory Club.',
    keywords: [
      'MRAN',
      'مران',
      'مران للإستثمار الرياضي',
      'أكاديمية مران',
      'نادي المصانع الحربية',
      'بادل مران',
      'أكاديمية كرة قدم',
      'كونغ فو حلوان',
      'كاراتيه مصر',
      'ملاعب بادل القاهرة',
    ],
    icons: {
      icon: '/brand/logo.png',
      apple: '/brand/logo.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isArabic = locale === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  // Navigation labels
  const navLabels = {
    home: (messages as any)?.nav?.home || (isArabic ? 'الرئيسية' : 'Home'),
    about: (messages as any)?.nav?.about || (isArabic ? 'عن مران' : 'About'),
    companies: (messages as any)?.nav?.companies || (isArabic ? 'أكاديمياتنا' : 'Academies'),
    chairman: (messages as any)?.nav?.chairman || (isArabic ? 'القيادة' : 'Leadership'),
    contact: (messages as any)?.nav?.contact || (isArabic ? 'اتصل بنا' : 'Contact Us'),
    phone: (messages as any)?.common?.phone || '01551146629',
    phoneFormatted: (messages as any)?.common?.phoneFormatted || '+20 155 114 6629',
    registerNow: (messages as any)?.common?.registerNow || (isArabic ? 'سجّل الآن' : 'Register Now'),
    companyName: (messages as any)?.common?.companyName || (isArabic ? 'مران للإستثمار الرياضي' : 'MRAN Sports Investment'),
    sportsInvestment: (messages as any)?.common?.sportsInvestment || (isArabic ? 'الاستثمار الرياضي والأكاديميات' : 'Sports Investment & Academies'),
  };

  const footerLabels = {
    companyName: (messages as any)?.common?.companyName || 'مران للإستثمار الرياضي',
    tagline: (messages as any)?.common?.tagline || 'نبني الإنسان قبل اللاعب… ونصنع رياضة بأسلوب احترافي',
    phone: (messages as any)?.common?.phone || '01551146629',
    phoneFormatted: (messages as any)?.common?.phoneFormatted || '+20 155 114 6629',
    email: (messages as any)?.common?.email || 'contact@mransports.com',
    address: (messages as any)?.common?.address || 'القاهرة، جمهورية مصر العربية',
    hours: (messages as any)?.common?.hours || 'السبت إلى الخميس: 9:00 ص – 10:00 م',
    allRightsReserved: (messages as any)?.common?.allRightsReserved || 'جميع الحقوق محفوظة © {year} مران للإستثمار الرياضي.',
    home: (messages as any)?.nav?.home || 'الرئيسية',
    about: (messages as any)?.nav?.about || 'عن مران',
    companies: (messages as any)?.nav?.companies || 'أكاديمياتنا',
    chairman: (messages as any)?.nav?.chairman || 'القيادة',
    contact: (messages as any)?.nav?.contact || 'اتصل بنا',
  };

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${cairo.variable} ${plusJakartaSans.variable}`}
    >
      <body
        className={`min-h-screen flex flex-col font-sans ${
          isArabic ? 'font-arabic' : 'font-sans'
        } antialiased selection:bg-mran-red-700 selection:text-white`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar locale={locale} labels={navLabels} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} labels={footerLabels} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
