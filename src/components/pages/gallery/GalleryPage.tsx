import IMAGES from '@/helpers/constants/images';
import GridContainer from '@/components/shared-atoms/GridContainer';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import * as Typography from '@/components/shared-atoms/typography/Typography';

const GalleryPage = () => {
  return (
    <SectionWrapper>
      <Typography.H1 text="Zdjęcia" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 w-full">
        {IMAGES.map((image) => (
          <ImageContainer
            key={image.id}
            className="h-[400px] w-[500px]"
            rounded="none"
          >
            <ImageItem imageAlt={image.alt} imageSrc={image.src} />
          </ImageContainer>
        ))}
      </div>
      {/* <GridContainer> */}
      {/* </GridContainer> */}
    </SectionWrapper>

    /*  <div className="w-full px-4 py-12">
      <section className="w-full">
        <h2>Zdjecia</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-12 w-full">
          {IMAGES.map((image) => (
            <GalleryItem
              key={image.id}
              imageSrc={image.src}
              imageAlt={image.alt}
            />
          ))}
        </ul>
      </section>
    </div> */
  );
};

export default GalleryPage;
