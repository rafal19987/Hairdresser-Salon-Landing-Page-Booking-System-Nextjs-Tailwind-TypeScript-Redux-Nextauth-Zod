import IMAGES from '@/helpers/constants/images';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import Image from 'next/image';

const GalleryPage = () => {
  return (
    <SectionWrapper>
      <Typography.H1 text='Galeria' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {IMAGES.map((image) => (
          <Image
            className='h-full bg-neutral-900'
            alt={image.alt}
            src={image.src}
            placeholder='blur'
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GalleryPage;
