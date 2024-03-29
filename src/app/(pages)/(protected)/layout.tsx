import { Toaster } from 'react-hot-toast';
import { NextAuthProvider } from '@/app/NextAuthProvider';

export default async function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <main className='flex flex-col md:items-start md:justify-center md:flex-row grow w-full max-h-full min-h-screen bg-white text-black text-base lg:text-xl font-lato transition-all duration-300 border-2 border-purple-500'>
        <Toaster />
        {children}
      </main>
    </NextAuthProvider>
  );
}
