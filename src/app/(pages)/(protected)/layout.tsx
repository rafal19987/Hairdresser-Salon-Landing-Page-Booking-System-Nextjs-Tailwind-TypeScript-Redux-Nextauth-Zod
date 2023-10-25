import { NextAuthProvider } from '@/app/NextAuthProvider';
import { Toaster } from 'react-hot-toast';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Męski fryzjer | Zarezerwuj wizytę',
  description: 'Strona rezerwacji wizyty dla salonu fryzierskiego',
};

export default async function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <main className='flex flex-col md:flex-row grow w-full h-screen bg-white text-black text-base lg:text-xl font-lato transition-all duration-300'>
        <Toaster />
        {children}
      </main>
    </NextAuthProvider>
  );
}
