import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import ImageItem from '@/components/shared-atoms/ImageItem';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';
import FlexContainer from '@/components/shared-atoms/FlexContainer';
import EmployeeContainer from '@/components/shared-atoms/EmployeeContainer';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import firstImage from '@/assets/about-page-first-image.jpg';
import agnieszkaImage from '@/assets/employee-2-face-image-big.png';
import wiktoriaImage from '@/assets/employee-1-face-image-big.png';
import salonImage from '@/assets/salon-image.jpg';
import combIcon from '@/assets/comb-icon.svg';

const AboutPage = () => {
  return (
    <SectionWrapper>
      <ArticleWrapper>
        <Typography.H1 text="Witamy w Męskiej Strefie" />
        <Typography.P
          text="Nowoczesnym salonie fryzjerskim stworzonym specjalnie dla mężczyzn,
          gdzie pasja do męskiego fryzjerstwa spotyka się z najwyższą jakością
          usług."
        />
        <Typography.P
          text="Nasz salon jest prowadzony przez dwie utalentowane fryzjerki -
         Agnieszkę i Wiktorię, które
        posiadają wieloletnie doświadczenie w świecie mody i stylizacji
        męskich włosów."
        />
        <FlexContainer>
          <ImageContainer rounded="none" mt={4} width="full">
            <ImageItem imageSrc={firstImage} imageAlt="Salon image" />
          </ImageContainer>
          <Typography.Blockquote
            text="Fryzjerstwo to sztuka przekształcania włosów w dzieło sztuki.~Vidal
          Sassoon"
          />
        </FlexContainer>
      </ArticleWrapper>

      <ArticleWrapper>
        <Typography.H2 text="Nasze specjalistki" />
        <EmployeeContainer>
          <EmployeeCard
            imageAlt="Wiktoria image"
            imageSrc={wiktoriaImage}
            imageCaption="Wiktoria"
            blockqoute="W Męskiej Strefie stawiamy na indywidualizm i precyzję, dbając o każdy detal, by Twoja fryzura była wyjątkowa i dopasowana do Twoje stylu."
          />
          <EmployeeCard
            imageAlt="Agnieszka image"
            imageSrc={agnieszkaImage}
            imageCaption="Agnieszka"
            blockqoute="Nieustannie podążamy za najnowszymi trendami i technikami
            fryzjerskimi, aby zapewnić Ci najwyższy poziom obsługi"
          />
        </EmployeeContainer>
      </ArticleWrapper>

      <ArticleWrapper>
        <Typography.H2 text="Zapraszamy" />
        <Typography.P text="Do odwiedzenia naszego salonu i doświadczenia niepowtarzalnej atmosfery miejsca, w którym innowacyjność i kreatywność spotykają się z profesjonalizmem i pasją do fryzjerstwa męskiego" />
        <FlexContainer>
          <ImageContainer rounded="none" mt={4}>
            <ImageItem imageSrc={salonImage} imageAlt="Salon image" />
          </ImageContainer>
          <Typography.Blockquote text="W fryzjerstwie chodzi o tworzenie piękna, ale takżo o wpływanie na ludzkie samopoczucie i pewność siebie. ~Sam mcknight" />
        </FlexContainer>
      </ArticleWrapper>
    </SectionWrapper>
  );
};

export default AboutPage;
