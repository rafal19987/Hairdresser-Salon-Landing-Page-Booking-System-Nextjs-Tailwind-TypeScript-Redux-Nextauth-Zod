'use client';

import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

type User = {};

export const Nav = ({ user }: { user: any }) => {
  useEffect(() => console.log(user), [user]);
  return (
    <nav className='flex items-center justify-between h-24 px-8 bg-[#494949]'>
      <Link href='#' className='font-permanentMarker text-[#FFD700] text-xl'>
        Męska strefa
      </Link>
      <button
        className='font-lato text-white text-xl'
        onClick={() => (user ? signOut() : signIn())}
      >
        {user ? 'Wyloguj' : 'Zaloguj'}
      </button>
    </nav>
  );
};
