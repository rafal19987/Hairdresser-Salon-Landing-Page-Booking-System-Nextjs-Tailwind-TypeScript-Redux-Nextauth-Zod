import Image from 'next/image';
import Link from 'next/link';
import homePageContent from '@/helpers/content/pages/home/homeContent';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import homeImage from '@/assets/home-image.avif';

const HomePage = () => {
  const { primaryHeader, secondaryHeader } = homePageContent;

  return (
    <SectionWrapper>
      <ArticleWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
          <div className='flex flex-col gap-2'>
            <div
              data-aos='fade-right'
              data-aos-once='true'
              data-aos-delay='100'
            >
              <Typography.H1 align='left' text='U Nas' />
              <Typography.H2 align='left' text='poczujesz się jak król' />
            </div>
            <Link
              className='self-end w-fit mt-12 p-4 bg-[var(--gold)] hover:opacity-90 transition-all'
              href='/book'
              data-aos='zoom-in-up'
              data-aos-once='true'
              data-aos-delay='300'
            >
              <span className='text-black font-bold'>Zarezerwuj wizytę</span>
            </Link>
          </div>
          <div
            className='relative'
            data-aos='zoom-in-left'
            data-aos-once='true'
            data-aos-delay='300'
          >
            <Image
              className='w-[75vw] md:w-[100vw] h-auto'
              src={homeImage}
              alt='Man with sunglasses'
              priority
              aria-hidden
            />
            <span className='absolute bottom-0 text-xs text-neutral-500'>
              Źródło zdjęcia{' '}
              <Link
                className='underline underline-offset-2 hover:text-neutral-400'
                href='https://www.peakpx.com/591658/men-s-black-framed-sunglasses'
                rel='noopener noreferrer'
                target='_blank'
              >
                peakpx
              </Link>
            </span>
          </div>
        </div>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default HomePage;
