import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AuthNavigation } from './AuthNavigation';
import image from '@/assets/about-page-first-image.avif';
import { Toaster } from 'react-hot-toast';
import { getServerSession } from 'next-auth';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  console.log(session);

  if (session?.user) return redirect('/book');

  return (
    <section className='flex flex-col grow items-center justify-center w-full h-full max-w-screen-md lg:max-w-screen-lg'>
      <Toaster />
      <div className='flex flex-col items-center md:justify-between gap-8 h-full p-4 md:p-0 w-full md:h-fit'>
        <h1 className='text-3xl text-center'>System rezerwacji Męska Strefa</h1>
        <Link className='self-start hover:underline' href='/'>
          Powrót do strony głównej
        </Link>
      </div>
      <div className='flex flex-col w-full h-full xl:flex-row'>
        <div className='relative flex grow w-full h-52 xl:h-auto border'>
          <Image
            className='object-cover'
            src={image}
            alt=''
            aria-hidden
            fill
            priority
          />
        </div>
        <div className='flex flex-col w-full h-full max-w-md mx-auto'>
          <div className='flex items-center justify-center h-24 w-full px-12'>
            <AuthNavigation />
          </div>
          <div className='h-full p-4'>{children}</div>
        </div>
      </div>
    </section>
  );
}
