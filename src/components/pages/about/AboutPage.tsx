import Image from 'next/image';
import { Permanent_Marker } from 'next/font/google';
import firstImage from '@/assets/about-page-first-image.jpg';
import wiktoriaImage from '@/assets/employee-1-face-image-big.png';
import agnieszkaImage from '@/assets/employee-2-face-image-big.png';
import combIcon from '@/assets/comb-icon.svg';
import salonImage from '@/assets/salon-image.jpg';

const permamentMarkerFont = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 px-7">
      <section className="w-full">
        <h2 className="text-2xl font-bold">Witamy w Męskiej Strefie</h2>
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
        <p className={`${permamentMarkerFont.className} mt-5 text-sm`}>
          Fryzjerstwo to sztuka przekształcania włosów w dzieło sztuki. ~Vidal
          Sassoon{' '}
        </p>
      </section>
      <section className="mt-20">
        <div className="flex">
          <div className="flex flex-col">
            <div className="relative w-[155px] h-[220px] rounded-3xl overflow-hidden">
              <Image src={wiktoriaImage} alt="Wiktoria image" fill />
            </div>
            <span className={`${permamentMarkerFont.className} p-2 text-xl`}>
              Wiktoria
            </span>
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
                className="rounded-3xl"
                src={agnieszkaImage}
                alt="Agnieszka image"
                fill
              />
              <Image
                className="absolute -top-6 -left-6 -z-10"
                src={combIcon}
                alt="comb icon"
              />
            </div>
            <span
              className={`${permamentMarkerFont.className} self-end p-2 text-xl`}
            >
              Agnieszka
            </span>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-xl">Zapraszamy</h3>
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
        <p className="mt-8">
          <span
            className={`${permamentMarkerFont.className} before:content-['"'] after:content-['"']`}
          >
            W fryzjerstwie chodzi o tworzenie piękna, ale takżo o wpływanie na
            ludzkie samopoczucie i pewność siebie
          </span>{' '}
          ~Sam mcknight
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
