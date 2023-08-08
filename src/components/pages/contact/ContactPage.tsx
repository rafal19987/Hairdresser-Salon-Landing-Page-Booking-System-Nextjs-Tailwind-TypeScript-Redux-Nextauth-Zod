// import EmployeeCard from './componenets/EmployeeCard';
import SectionHeadline from '@/components/shared-atoms/typography/SectionHeadline';
import SmallHeadline from '@/components/shared-atoms/typography/SmallHeadline';
import OpeningHours from './componenets/OpeningHours';
import SalonAddress from './componenets/SalonAddress';
import SalonLocationMap from './componenets/SalonLocationMap';
import ContactForm from '@/components/pages/contact/componenets/contactForm/ContactForm';
import employee1 from '@/assets/employee-1-face-image-big.png';
import employee2 from '@/assets/employee-2-face-image-big.png';

import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import EmployeeContainer from '@/components/shared-atoms/EmployeeContainer';
import googleMapsScreen from '@/assets/google-map-screen.png';
import * as Typography from '@/components/shared-atoms/typography/Typography';

const ContactPage = () => {
  return (
    <SectionWrapper>
      <ArticleWrapper>
        <Typography.H1 text="Kontakt" />
        <FlexContainer gap="8">
          <ImageContainer rounded="none">
            <ImageItem
              imageAlt="google location map"
              imageSrc={googleMapsScreen}
            />
          </ImageContainer>
          <FlexContainer gap="2">
            <Typography.H2 text="Godziny otwarcia:" align="center" />
            <Typography.H3 text="Pon-PT 8:00 - 18:00" />
            <Typography.H3 text="Sobota 7:00 - 20:00" />
          </FlexContainer>
        </FlexContainer>
      </ArticleWrapper>
      <ArticleWrapper>
        <EmployeeContainer>
          <EmployeeCard
            blockqoute="500 501 502"
            imageAlt="Wiktoria"
            imageSrc={employee1}
            imageCaption="Wiktoria"
          />
          <EmployeeCard
            blockqoute="503 504 505"
            imageAlt="Agnieszka"
            imageSrc={employee2}
            imageCaption="Agnieszka"
          />
        </EmployeeContainer>
      </ArticleWrapper>
      <ArticleWrapper>
        <Typography.H2 text="Wyślij zapytanie" align="center" />
        <div className="mt-12 mb-12 w-full lg:flex lg:justify-center">
          <ContactForm />
        </div>
      </ArticleWrapper>
    </SectionWrapper>

    /*  <div className="flex flex-col items-center w-full p-6 text-black dark:text-white lg:gap-24 ">
      <SectionHeadline headline="Znajdziesz Nas tutaj">
        <div className="flex flex-col items-center gap-6 w-full mt-12 lg:flex-row lg:justify-between">
          <div className="h-full">
            <SalonLocationMap />
            <SalonAddress />
          </div>
          <div className="flex flex-col gap-4 lg:self-start h-full lg:gap-6 lg:items-center lg:justify-center lg:w-[400px] lg:h-[400px]">
            <SmallHeadline text="Godziny otwarcia:" />
            <OpeningHours />
          </div>
        </div>
      </SectionHeadline>
      <SectionHeadline headline="Umów się na wizytę do Naszych specjalistek">
        <div className="flex flex-col gap-8 mt-12 lg:flex-row">
          <EmployeeCard
            name="Wiktoria"
            phoneNumber="500 501 502"
            avatar={employee1}
          />
          <EmployeeCard
            name="Agnieszka"
            phoneNumber="503 504 505"
            avatar={employee2}
            ReverseCard={true}
          />
        </div>
      </SectionHeadline>
      <SectionHeadline headline="Wyślij zapytanie">
        <div className="mt-12 mb-12 w-full lg:flex lg:justify-center">
          <ContactForm />
        </div>
      </SectionHeadline>
    </div> */
  );
};

export default ContactPage;
