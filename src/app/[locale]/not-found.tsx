import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-5">
        <div className="text-6xl font-black text-mran-red-700">404</div>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">
          الصفحة غير موجودة | Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          عذراً، الصفحة التي تبحث عنها غير متوفرة أو ربما تم تغيير مسارها.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex px-6 py-3 rounded-xl bg-mran-red-700 hover:bg-mran-red-800 text-white font-bold text-xs shadow-md transition"
          >
            العودة إلى الصفحة الرئيسية | Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
