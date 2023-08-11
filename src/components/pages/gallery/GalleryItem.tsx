import { StaticImageData } from 'next/image';
import ImageItem from '@/components/shared-atoms/ImageItem';

const GalleryItem = ({
  imageSrc,
  imageAlt = '',
}: {
  imageSrc: StaticImageData;
  imageAlt?: string;
}) => {
  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
      <ImageItem imageAlt="imageAlt" imageSrc={imageSrc} />
    </div>
  );
};

export default GalleryItem;
