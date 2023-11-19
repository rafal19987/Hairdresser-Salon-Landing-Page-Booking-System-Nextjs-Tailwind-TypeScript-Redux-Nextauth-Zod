import { StaticImageData } from 'next/image';
import ImageItem from '@/components/shared-atoms/ImageItem';

const GalleryItem = ({
  photo,
  imageAlt = '',
}: {
  photo: StaticImageData | string;
  imageAlt?: string;
}) => {
  return (
    <div className='relative w-full h-96 rounded-3xl overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8'>
      <ImageItem imageAlt='imageAlt' photo={photo} />
    </div>
  );
};

export default GalleryItem;
