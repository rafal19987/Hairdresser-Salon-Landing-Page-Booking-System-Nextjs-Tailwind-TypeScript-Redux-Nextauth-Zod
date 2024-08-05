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
      <Typography.H1 text='Witamy w Męskiej Strefie' />
      <ArticleWrapper className='lg:grid lg:grid-cols-2 lg:gap-x-12'>
        <div>
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

        <FlexContainer>
          <Image
            src={firstImage}
            alt='hands with hairdressers utils'
            placeholder='blur'
            priority
            width={0}
            height={0}
            sizes='100vw'
            aria-hidden
          />
          <Typography.Blockquote
            text='Fryzjerstwo to sztuka przekształcania włosów w dzieło sztuki.~Vidal
          Sassoon'
          />
        </FlexContainer>
      </ArticleWrapper>

      <ArticleWrapper>
        <Typography.H2 text='Nasze specjalistki' />
        <EmployeeContainer>
          {employees?.map((employee) => (
            <div key={employee.id}>
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
