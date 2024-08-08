import { Toaster } from 'react-hot-toast';
import { NextAuthProvider } from '@/app/NextAuthProvider';
import { DEFAULT } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(DEFAULT.TITLE, DEFAULT.DESCRIPTION);

export default async function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <main className='flex flex-col items-center grow w-full h-full min-h-screen bg-white text-black text-base lg:text-xl font-lato transition-all duration-300'>
        <Toaster />
        {children}
      </main>
    </NextAuthProvider>
  );
}
