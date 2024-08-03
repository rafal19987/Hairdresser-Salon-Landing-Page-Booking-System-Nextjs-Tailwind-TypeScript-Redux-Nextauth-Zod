import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Link from 'next/link';
import { SignOutButton } from './SignOutButton';

export const SigninButton: React.FC<{ children?: React.ReactNode }> = async ({
  children,
}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex items-center gap-2 justify-end'>
      {session && session.user ? (
        <>
          <p>{`${session.user.name}`}</p>
          <SignOutButton />
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
