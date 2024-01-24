import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Link from 'next/link';
import { Button } from './Button';

export const SigninButton: React.FC<{ children?: React.ReactNode }> = async ({
  children,
}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex items-center gap-2'>
      {session && session.user ? (
        <>
          <p>{`${session.user.name}`}</p>
          <Link href='/api/auth/signout'>Wyloguj</Link>
        </>
      ) : (
        <>
          <Link href='/login'>Zaloguj</Link>

          <Link href='/register'>Zarejestruj</Link>
        </>
      )}
    </div>
  );
};
