'use client';

import { useState } from 'react';
import IMAGES from '@/helpers/constants/images';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import Image from 'next/image';
import Link from 'next/link';

const GalleryPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SectionWrapper>
      <Typography.H1 text='Galeria' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {IMAGES.map((image, idx) => (
          <Image
            key={idx}
            className={`h-full bg-neutral-900 transition-all duration-500 ${
              isLoading
                ? 'scale-105 blur-sm grayscale animate-pulse'
                : 'scale-100 blur-0 grayscale-0'
            }`}
            alt={image.alt}
            src={image.src}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100%' }}
            aria-hidden
            onLoadingComplete={() => setIsLoading(false)}
          />
        ))}
      </div>
      <span className='text-neutral-500'>
        Zdjęcia pobrane z portalu{' '}
        <Link
          className='underline underline-offset-2 hover:text-neutral-400'
          href='https://unsplash.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          unsplash
        </Link>
      </span>
    </SectionWrapper>
  );
};

export default GalleryPage;
