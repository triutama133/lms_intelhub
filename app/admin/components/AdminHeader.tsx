import Link from 'next/link';
import { LogoImage } from '../../components/OptimizedImage';
import { SITE_NAME, LOGO_PATH } from '../../../lib/branding';

interface AdminHeaderProps {
  onLogout: () => void;
}

export default function AdminHeader({ onLogout }: AdminHeaderProps) {
  return (
    <header className="w-full bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 shadow-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <LogoImage src={LOGO_PATH} alt={`${SITE_NAME} Logo`} size="md" className="drop-shadow" />
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-teal-100">{SITE_NAME}</p>
            <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <Link href="/student/dashboard" className="mx-1 rounded-full px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10">Student</Link>
          <Link href="/teacher/dashboard" className="mx-1 rounded-full px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10">Teacher</Link>
          <Link href="/admin" className="mx-1 rounded-full bg-white/15 px-3 py-1.5 text-sm font-semibold text-white shadow-inner">Admin</Link>
          <button
            onClick={onLogout}
            className="ml-3 inline-flex items-center rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700"
          >Logout</button>
        </nav>
      </div>
    </header>
  );
}