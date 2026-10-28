'use client';

import * as React from 'react';
import Image from 'next/image';
import { X, ExternalLink, QrCode } from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  externalUrl?: string;
  locale: string;
}

export function QrCodeModal({
  isOpen,
  onClose,
  title,
  imageSrc,
  externalUrl,
  locale,
}: QrCodeModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isArabic = locale === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-sm rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 end-4 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex p-3 rounded-full bg-mran-red-50 dark:bg-mran-red-950/50 text-mran-red-700 mb-3">
            <QrCode className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
            {isArabic
              ? 'وجّه كاميرا هاتفك إلى الرمز لمتابعة القناة الرسمية'
              : 'Scan the QR code with your phone camera to follow our channel'}
          </p>

          <div className="relative mx-auto w-56 h-56 rounded-xl bg-white p-3 border border-slate-200 dark:border-slate-700 shadow-inner flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={title}
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-mran-red-700 hover:bg-mran-red-800 text-white font-medium text-xs shadow-md transition"
              >
                <span>{isArabic ? 'الانتقال إلى الرابط مباشرة' : 'Visit Link Directly'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition"
            >
              {isArabic ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
