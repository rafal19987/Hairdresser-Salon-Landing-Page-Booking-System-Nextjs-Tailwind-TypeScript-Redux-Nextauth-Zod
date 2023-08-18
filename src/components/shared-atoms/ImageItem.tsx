'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export type TImageItemProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
};

const ImageItem = ({ imageSrc, imageAlt }: TImageItemProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      alt={imageAlt}
      src={imageSrc}
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
