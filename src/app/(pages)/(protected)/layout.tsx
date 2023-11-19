'use client';

import { useSession } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { Nav } from './Nav';

export default async function BookVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <>
      <Nav user={user} />
      <main className='flex flex-col md:flex-row grow w-full h-screen bg-white text-black text-base lg:text-xl font-lato transition-all duration-300'>
        <Toaster />
        {children}
      </main>
    </>
  );
}
