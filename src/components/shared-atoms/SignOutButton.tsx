'use client';

import { signOut } from 'next-auth/react';
import { Button } from './Button';

export const SignOutButton: React.FC = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className='px-4 py-2 bg-neutral-900 text-white rounded-lg'
    >
      Wyloguj
    </Button>
  );
};
