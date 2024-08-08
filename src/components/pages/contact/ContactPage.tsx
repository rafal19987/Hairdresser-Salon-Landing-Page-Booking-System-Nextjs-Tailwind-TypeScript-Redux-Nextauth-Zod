import ContactForm from '@/components/pages/contact/componenets/contactForm/ContactForm';
import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import EmployeeContainer from '@/components/shared-atoms/EmployeeContainer';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import employee1 from '@/assets/employee-1-face-image-big.avif';
import employee2 from '@/assets/employee-2-face-image-big.avif';

const ContactPage = () => {
  return (
    <SectionWrapper>
      <div data-aos='fade-down' data-aos-once='true'>
        <Typography.H1 text='Kontakt' />
      </div>
      <ArticleWrapper>
        <FlexContainer gap='8'>
          <FlexContainer gap='2'>
            <div data-aos='fade-down' data-aos-once='true' data-aos-delay='100'>
              <Typography.H2 text='Godziny otwarcia:' align='center' />
              <Typography.H3 text='Pon-PT 8:00 - 18:00' />
              <Typography.H3 text='Sobota 7:00 - 20:00' />
            </div>
          </FlexContainer>
        </FlexContainer>
      </ArticleWrapper>
      <ArticleWrapper>
        <EmployeeContainer>
          <div data-aos='fade-right' data-aos-once='true' data-aos-delay='100'>
            <EmployeeCard
              blockqoute='500 501 502'
              imageAlt='Wiktoria'
              photo={employee1}
              imageCaption='Wiktoria'
            />
          </div>
          <div data-aos='fade-left' data-aos-once='true' data-aos-delay='100'>
            <EmployeeCard
              blockqoute='503 504 505'
              imageAlt='Agnieszka'
              photo={employee2}
              imageCaption='Agnieszka'
            />
          </div>
        </EmployeeContainer>
      </ArticleWrapper>
      <ArticleWrapper>
        <div data-aos='fade-down' data-aos-once='true' data-aos-delay='100'>
          <Typography.H2 text='Wyślij zapytanie' align='center' />
        </div>
        <div className='mt-12 mb-12 w-full lg:flex lg:justify-center'>
          <ContactForm />
        </div>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default ContactPage;
