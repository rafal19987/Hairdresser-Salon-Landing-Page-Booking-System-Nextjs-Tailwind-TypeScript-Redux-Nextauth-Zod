import { type Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Męski fryzjer | Zarezerwuj wizytę',
  description: 'Strona rezerwacji wizyty dla salonu fryzierskiego',
};

export default function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col md:flex-row grow w-full h-screen bg-white text-black text-base lg:text-xl font-lato transition-all duration-300'>
      <Toaster />
      {children}
    </main>
  );
}
