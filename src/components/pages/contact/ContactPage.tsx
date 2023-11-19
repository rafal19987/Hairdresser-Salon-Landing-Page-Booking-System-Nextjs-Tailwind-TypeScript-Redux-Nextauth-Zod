import ContactForm from '@/components/pages/contact/componenets/contactForm/ContactForm';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import EmployeeContainer from '@/components/shared-atoms/EmployeeContainer';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import googleMapsScreen from '@/assets/google-map-screen.png';
import employee1 from '@/assets/employee-1-face-image-big.png';
import employee2 from '@/assets/employee-2-face-image-big.png';

const ContactPage = () => {
  return (
    <SectionWrapper>
      <ArticleWrapper>
        <Typography.H1 text='Kontakt' />
        <FlexContainer gap='8'>
          <ImageContainer rounded='none'>
            <ImageItem
              imageAlt='google location map'
              photo={googleMapsScreen}
            />
          </ImageContainer>
          <FlexContainer gap='2'>
            <Typography.H2 text='Godziny otwarcia:' align='center' />
            <Typography.H3 text='Pon-PT 8:00 - 18:00' />
            <Typography.H3 text='Sobota 7:00 - 20:00' />
          </FlexContainer>
        </FlexContainer>
      </ArticleWrapper>
      <ArticleWrapper>
        <EmployeeContainer>
          <EmployeeCard
            blockqoute='500 501 502'
            imageAlt='Wiktoria'
            photo={employee1}
            imageCaption='Wiktoria'
          />
          <EmployeeCard
            blockqoute='503 504 505'
            imageAlt='Agnieszka'
            photo={employee2}
            imageCaption='Agnieszka'
          />
        </EmployeeContainer>
      </ArticleWrapper>
      <ArticleWrapper>
        <Typography.H2 text='Wyślij zapytanie' align='center' />
        <div className='mt-12 mb-12 w-full lg:flex lg:justify-center'>
          <ContactForm />
        </div>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default ContactPage;
