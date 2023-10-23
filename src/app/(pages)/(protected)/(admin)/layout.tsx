import { type Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Męski fryzjer | Administrator',
  description: 'Strona administratora dla salonu fryzierskiego',
};

export default function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col grow w-full bg-slate-500 text-black text-base lg:text-xl font-lato transition-all duration-300'>
      {children}
    </div>
  );
}
