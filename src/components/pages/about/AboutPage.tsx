'use client';

import { useAppSelector } from '@/store/hooks';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import EmployeeContainer from '@/components/shared-atoms/EmployeeContainer';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import firstImage from '@/assets/about-page-first-image.avif';
import Image from 'next/image';

const AboutPage = () => {
  const employees = useAppSelector((state) => state.employees);

  return (
    <SectionWrapper>
      <div data-aos='fade-down' data-aos-once='true'>
        <Typography.H1 text='Witamy w Męskiej Strefie' />
      </div>
      <ArticleWrapper className='lg:grid lg:grid-cols-2 lg:gap-x-12'>
        <div data-aos='fade-right' data-aos-once='true' data-aos-delay='100'>
          <Typography.P
            text='Nowoczesnym salonie fryzjerskim stworzonym specjalnie dla mężczyzn,
          gdzie pasja do męskiego fryzjerstwa spotyka się z najwyższą jakością
          usług.'
          />
          <Typography.P
            text='Nasz salon jest prowadzony przez dwie utalentowane fryzjerki -
          Agnieszkę i Wiktorię, które
        posiadają wieloletnie doświadczenie w świecie mody i stylizacji
        męskich włosów.'
          />
        </div>

        <Image
          data-aos='fade-left'
          data-aos-once='true'
          data-aos-delay='100'
          src={firstImage}
          alt='hands with hairdressers utils'
          placeholder='blur'
          priority
          width={0}
          height={0}
          sizes='100vw'
          aria-hidden
        />
      </ArticleWrapper>

      <ArticleWrapper>
        <div data-aos='fade-down' data-aos-once='true' data-aos-delay='200'>
          <Typography.H2 text='Nasze specjalistki' />
        </div>
        <EmployeeContainer>
          {employees?.map((employee) => (
            <div
              key={employee.id}
              data-aos='fade-left'
              data-aos-once='true'
              data-aos-delay='100'
            >
              <EmployeeCard
                imageAlt=''
                photo={employee.photo}
                imageCaption={employee.name}
                blockqoute={employee.quote}
              />
            </div>
          ))}
        </EmployeeContainer>
      </ArticleWrapper>

      <Typography.H2 text='Zapraszamy' />
    </SectionWrapper>
  );
};

export default AboutPage;
