import Card from './components/Card';
import Image from 'next/image';
import homePageContent from '@/helpers/content/pages/home/homeContent';
import mainWithGlassesImgDesktop from '@/assets/man-with-glasses-big.png';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import homeImage from '@/assets/home-image.jpg';

const HomePage = () => {
  const { primaryHeader, secondaryHeader } = homePageContent;

  return (
    <SectionWrapper>
      <ArticleWrapper>
        <div className='flex flex-col flex-grow justify-between w-full md:flex-row'>
          <div className='flex flex-col gap-2'>
            <Typography.H1 text='W Męskiej strefie' />
            <Typography.H2 text='poczujesz się jak król' align='center' />
          </div>
          <div className='relative mt-6 md:w-2/4'>
            <Image className='object-contain' src={homeImage} alt='' />
          </div>
        </div>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default HomePage;
