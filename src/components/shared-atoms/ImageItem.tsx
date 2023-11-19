'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export type TImageItemProps = {
  photo: StaticImageData | string;
  imageAlt: string;
};

const ImageItem = ({ photo, imageAlt }: TImageItemProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      alt={imageAlt}
      src={photo}
      fill
      className={`object-cover transition-all duration-500
      ${
        isLoading
          ? 'scale-105 blur-lg grayscale animate-pulse'
          : 'scale-100 blud-0 grayscale-0'
      }
  `}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default ImageItem;
