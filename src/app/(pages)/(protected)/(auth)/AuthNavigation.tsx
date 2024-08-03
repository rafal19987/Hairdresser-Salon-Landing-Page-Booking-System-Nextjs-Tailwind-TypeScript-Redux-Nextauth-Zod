'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AuthNavigation = () => {
  const pathname = usePathname();
  const isLoginPage: boolean = pathname === '/login';
  const shouldBeVisible: boolean =
    pathname.startsWith('/login') || pathname.startsWith('/register');

  if (!shouldBeVisible) return null;

  return (
    <>
      <Link
        className={`w-fit p-4 text-black font-bold transition-colors ${
          isLoginPage && 'bg-[var(--gold)]'
        }`}
        href='/login'
      >
        Logowanie
      </Link>
      <Link
        className={`w-fit p-4 text-black font-bold transition-colors ${
          !isLoginPage && 'bg-[var(--gold)]'
        }`}
        href='/register'
      >
        Rejestracja
      </Link>
    </>
  );
};
