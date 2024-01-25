import { Toaster } from 'react-hot-toast';
import { NextAuthProvider } from '@/app/NextAuthProvider';

export default async function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <main className='flex flex-col items-center justify-center md:flex-row grow w-full h-screen bg-white text-black text-base lg:text-xl font-lato transition-all duration-300'>
        <Toaster />
        {children}
      </main>
    </NextAuthProvider>
  );
}
