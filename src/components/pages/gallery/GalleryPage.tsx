import IMAGES from '@/helpers/constants/images';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import * as Typography from '@/components/shared-atoms/typography/Typography';

const GalleryPage = () => {
  return (
    <SectionWrapper>
      <Typography.H1 text='Zdjęcia' />
      <div className='flex flex-row flex-wrap items-center justify-center gap-8 w-full'>
        {IMAGES.map((image) => (
          <ImageContainer
            key={image.id}
            className='h-[400px] w-[500px]'
            rounded='none'
          >
            <ImageItem imageAlt={image.alt} photo={image.src} />
          </ImageContainer>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GalleryPage;
