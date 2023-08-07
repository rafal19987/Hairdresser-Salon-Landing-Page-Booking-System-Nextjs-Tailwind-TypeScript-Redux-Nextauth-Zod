import EmployeeCard from './componenets/EmployeeCard';
import SectionHeadline from '@/components/shared-atoms/typography/SectionHeadline';
import SmallHeadline from '@/components/shared-atoms/typography/SmallHeadline';
import OpeningHours from './componenets/OpeningHours';
import SalonAddress from './componenets/SalonAddress';
import SalonLocationMap from './componenets/SalonLocationMap';
import ContactForm from '@/components/pages/contact/componenets/contactForm/ContactForm';
import employee1 from '@/assets/employee-1-face-image-big.png';
import employee2 from '@/assets/employee-2-face-image-big.png';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center w-full p-6 text-black dark:text-white lg:gap-24 ">
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
    </div>
  );
};

export default ContactPage;
