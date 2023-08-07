import SectionWrapper from '@/components/shared-atoms/SectionWrapper';
import ArticleWrapper from '@/components/shared-atoms/ArticleWrapper';
import ImageContainer from '@/components/shared-atoms/ImageContainer';
import firstImage from '@/assets/about-page-first-image.jpg';
import * as Typography from '@/components/shared-atoms/typography/Typography';
import wiktoriaImage from '@/assets/employee-1-face-image-big.png';
import ImageItem from '@/components/shared-atoms/ImageItem';
import agnieszkaImage from '@/assets/employee-2-face-image-big.png';
import combIcon from '@/assets/comb-icon.svg';
import salonImage from '@/assets/salon-image.jpg';
import EmployeeCard from '@/components/shared-atoms/EmployeeCard';

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
        <ImageContainer rounded="none" mt={4} width="full">
          <ImageItem imageSrc={firstImage} imageAlt="Salon image" />
        </ImageContainer>
        <Typography.Blockquote
          text="Fryzjerstwo to sztuka przekształcania włosów w dzieło sztuki.~Vidal
          Sassoon"
        />
      </ArticleWrapper>

      <ArticleWrapper>
        <Typography.H2 text="Nasze specjalistki" />
        <div className="grid w-full gap-6 md:grid-cols-2 md:gap-4 md:grid md:justify-items-center  md:py-8 md:rounded-3xl md:mt-12 md:bg-gray-600/25  ">
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
        </div>
      </ArticleWrapper>

      <ArticleWrapper>
        <Typography.H2 text="Zapraszamy" />
        <Typography.P text="Do odwiedzenia naszego salonu i doświadczenia niepowtarzalnej atmosfery miejsca, w którym innowacyjność i kreatywność spotykają się z profesjonalizmem i pasją do fryzjerstwa męskiego" />
        <ImageContainer rounded="none" mt={4}>
          <ImageItem imageSrc={salonImage} imageAlt="Salon image" />
        </ImageContainer>
        <Typography.Blockquote text="W fryzjerstwie chodzi o tworzenie piękna, ale takżo o wpływanie na ludzkie samopoczucie i pewność siebie. ~Sam mcknight" />
      </ArticleWrapper>
    </SectionWrapper>
    /*  <div className="flex flex-col items-center w-full py-10 px-7">
      <SectionHeadline headline="Witamy w Męskiej Strefie">
        <p className="mt-4 text-base">
          nowoczesnym salonie fryzjerskim stworzonym specjalnie dla mężczyzn,
          gdzie pasja do męskiego fryzjerstwa spotyka się z najwyższą jakością
          usług.
        </p>
        <p className="mt-3 text-base">
          Nasz salon jest prowadzony przez dwie utalentowane fryzjerki -{' '}
          <strong> Agnieszkę</strong> i <strong>Wiktorię</strong>, które
          posiadają wieloletnie doświadczenie w świecie mody i stylizacji
          męskich włosów.
        </p>
        <div className="relative w-full h-[273px] mt-8 rounded-3xl overflow-hidden">
          <Image src={firstImage} alt="fingers" fill />
        </div>
        <TypographyBlockquote
          text="Fryzjerstwo to sztuka przekształcania włosów w dzieło sztuki. ~Vidal
          Sassoon"
        />
      </SectionHeadline>

      <section className="mt-20">
        <div className="flex">
          <div className="flex flex-col">
            <div className="relative w-[155px] h-[220px] rounded-3xl overflow-hidden">
              <Image src={wiktoriaImage} alt="Wiktoria image" fill />
            </div>
            <span className="p-2 text-xl font-permanentMarker">Wiktoria</span>
          </div>
          <p className="ml-6 text-base ">
            Nieustannie podążamy za najnowszymi trendami i technikami
            fryzjerskimi, aby zapewnić Ci najwyższy poziom obsługi
          </p>
        </div>
        <div className="flex mt-[50px]">
          <p className="mr-8">
            W <span>Męskiej Strefie</span> stawiamy na indywidualizm i precyzję,
            dbając o każdy detal, by Twoja fryzura była wyjątkowa i dopasowana
            do Twoje stylu.
          </p>
          <div className="flex flex-col mt-14">
            <div className="relative w-[155px] h-[220px] rounded-3xl">
              <Image
                className="rounded-3xl z-10"
                src={agnieszkaImage}
                alt="Agnieszka image"
                fill
              />
              <Image
                className="absolute -top-6 -left-6 "
                src={combIcon}
                alt="comb icon"
              />
            </div>
            <span className="self-end p-2 text-xl font-permanentMarker">
              Agnieszka
            </span>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <TypographyH2 text="Zapraszamy" />
        <p className="mt-4">
          do odwiedzenia naszego salonu i doświadczenia niepowtarzalnej
          atmosfery miejsca, w którym innowacyjność i kreatywność spotykają się
          z profesjonalizmem i pasją do fryzjerstwa męskiego
        </p>
        <div className="relative w-full h-[324px] mt-8 rounded-3xl ">
          <Image
            className="rounded-3xl"
            src={salonImage}
            alt="salon image"
            fill
          />
        </div>
        <TypographyBlockquote
          text="W fryzjerstwie chodzi o tworzenie piękna, ale takżo o wpływanie na
            ludzkie samopoczucie i pewność siebie. ~Sam mcknight"
        />
      </SectionWrapper>
    </div> */
  );
};

export default AboutPage;
