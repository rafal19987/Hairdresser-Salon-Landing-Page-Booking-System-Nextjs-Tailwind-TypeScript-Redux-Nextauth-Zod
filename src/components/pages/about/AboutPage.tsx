'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import EmployeeContainer from '@/components/shared-atoms/EmployeeContainer';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import firstImage from '@/assets/about-page-first-image.jpg';
import salonImage from '@/assets/salon-image.jpg';
import combIcon from '@/assets/comb-icon.svg';
import { TEmployeeProps } from '@/types/employeeTypes';

const AboutPage = () => {
  const employees = useAppSelector((state) => state.employees);

  return (
    <SectionWrapper>
      <ArticleWrapper>
        <Typography.H1 text='Witamy w Męskiej Strefie' />
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
        <FlexContainer>
          <ImageContainer rounded='none' mt={4} width='full'>
            <ImageItem photo={firstImage} imageAlt='Salon image' />
          </ImageContainer>
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

      <ArticleWrapper>
        <Typography.H2 text='Zapraszamy' />
        <Typography.P text='Do odwiedzenia naszego salonu i doświadczenia niepowtarzalnej atmosfery miejsca, w którym innowacyjność i kreatywność spotykają się z profesjonalizmem i pasją do fryzjerstwa męskiego' />
        <FlexContainer>
          <ImageContainer rounded='none' mt={4}>
            <ImageItem photo={salonImage} imageAlt='Salon image' />
          </ImageContainer>
          <Typography.Blockquote text='W fryzjerstwie chodzi o tworzenie piękna, ale takżo o wpływanie na ludzkie samopoczucie i pewność siebie. ~Sam mcknight' />
        </FlexContainer>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default AboutPage;
