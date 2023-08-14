'use client';

import useImageLoader from '@/hooks/useImageLoader';

import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';

export type TImageItemProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
};

const ImageItem = ({ imageSrc, imageAlt }: TImageItemProps) => {
  const { isLoading, startLoading, stopLoading } = useImageLoader();

  useEffect(() => {
    startLoading();
  }, [startLoading]);

  return (
    <Image
      alt={imageAlt}
      src={imageSrc}
      fill
      className={`object-cover transition-all duration-500
    ${
      isLoading
        ? 'scale-105 blur-md grayscale animate-pulse'
        : 'scale-100 blud-0 grayscale-0 '
    }
  `}
      onLoadingComplete={() => stopLoading()}
    />
  );
};

export default ImageItem;
