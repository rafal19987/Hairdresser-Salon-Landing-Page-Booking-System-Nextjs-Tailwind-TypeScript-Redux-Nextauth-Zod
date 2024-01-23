import Image from 'next/image';
import Link from 'next/link';
import { AuthNavigation } from './AuthNavigation';
import image from '@/assets/about-page-first-image.jpg';
import { Toaster } from 'react-hot-toast';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col w-1/2 h-4/5'>
      <Toaster />
      <div className='flex flex-col items-center justify-between w-full h-fit'>
        <h1 className='text-3xl'>System rezerwacji salonu fryzjerskiego</h1>
        <Link className='self-start' href='/'>
          Powrót do strony głównej
        </Link>
      </div>
      <div className='flex w-full h-full'>
        <div className='relative w-1/2 h-full'>
          <Image
            className='object-cover'
            src={image}
            alt=''
            aria-hidden
            fill
            priority
          />
        </div>
        <div className='flex flex-col w-1/2 h-full '>
          <div className='flex items-center justify-center h-24 w-full px-12'>
            <AuthNavigation />
          </div>
          <div className='h-full px-12 py-4'>{children}</div>
        </div>
      </div>
    </section>
  );
}
