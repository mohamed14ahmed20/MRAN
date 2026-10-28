'use client';

import * as React from 'react';
import { BRANCHES } from '@/data/branches';
import { SUBSIDIARIES } from '@/data/subsidiaries';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  locale: string;
  labels: {
    formTitle: string;
    formSub: string;
    fullName: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    branchLabel: string;
    branchSelect: string;
    sportLabel: string;
    sportSelect: string;
    ageLabel: string;
    ageSelect: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
  };
}

export function ContactForm({ locale, labels }: ContactFormProps) {
  const isArabic = locale === 'ar';

  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    branch: '',
    sport: '',
    ageGroup: '',
    message: '',
  });

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [inquiryId, setInquiryId] = React.useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage(
        isArabic
          ? 'يرجى ملء الاسم ورقم الهاتف على الأقل للمتابعة.'
          : 'Please provide at least your full name and phone number.'
      );
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setInquiryId(data.inquiryId || '');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        branch: '',
        sport: '',
        ageGroup: '',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl relative">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white">
          {labels.formTitle}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          {labels.formSub}
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            {labels.successTitle}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            {labels.successMessage}
          </p>
          {inquiryId && (
            <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold">
              {isArabic ? `رقم الطلب: ${inquiryId}` : `Inquiry Ref: ${inquiryId}`}
            </div>
          )}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shadow-md transition"
            >
              {isArabic ? 'إرسال طلب آخر' : 'Send Another Inquiry'}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {labels.fullName} <span className="text-mran-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder={labels.fullNamePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {labels.phoneLabel} <span className="text-mran-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                dir="ltr"
                value={formData.phone}
                onChange={handleChange}
                placeholder={labels.phonePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition font-sans tabular-nums text-start"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {labels.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={labels.emailPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {labels.branchLabel}
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition"
              >
                <option value="">{labels.branchSelect}</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name[locale as 'ar' | 'en']}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {labels.sportLabel}
              </label>
              <select
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition"
              >
                <option value="">{labels.sportSelect}</option>
                {SUBSIDIARIES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name[locale as 'ar' | 'en']}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {labels.ageLabel}
              </label>
              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition"
              >
                <option value="">{labels.ageSelect}</option>
                <option value="children">{isArabic ? 'أطفال وبراعم (4 - 10 سنوات)' : 'Children (4 - 10 yrs)'}</option>
                <option value="youth">{isArabic ? 'ناشئون وشباب (11 - 18 سنة)' : 'Youth (11 - 18 yrs)'}</option>
                <option value="adults">{isArabic ? 'كبار ومحترفون (18+ سنة)' : 'Adults (18+ yrs)'}</option>
                <option value="family">{isArabic ? 'عائلة ومجموعات' : 'Family & Groups'}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {labels.messageLabel}
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={labels.messagePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-mran-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-mran-red-700 via-rose-600 to-mran-red-800 hover:from-mran-red-800 hover:to-rose-800 disabled:opacity-70 text-white font-bold text-sm border border-mran-red-600/60 shadow-[0_4px_16px_rgba(193,39,45,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 transition"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{labels.submitting}</span>
              </>
            ) : (
              <>
                <span>{labels.submit}</span>
                <Send className="w-4 h-4 rtl:rotate-180" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
