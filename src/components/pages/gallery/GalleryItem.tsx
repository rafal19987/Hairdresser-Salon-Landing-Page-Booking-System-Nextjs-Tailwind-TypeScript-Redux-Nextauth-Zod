'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

const GalleryItem = ({
  imageSrc,
  imageAlt = '',
}: {
  imageSrc: StaticImageData;
  imageAlt?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <li className="relative w-full h-96 rounded-3xl overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt={imageAlt}
        src={imageSrc}
        fill
        className={` object-fill transition-all duration-1000
        ${
          isLoading
            ? 'scale-105 blur-lg grayscale animate-pulse'
            : 'scale-100 blud-0 grayscale-0'
        }
      `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </li>
  );
};

export default GalleryItem;
