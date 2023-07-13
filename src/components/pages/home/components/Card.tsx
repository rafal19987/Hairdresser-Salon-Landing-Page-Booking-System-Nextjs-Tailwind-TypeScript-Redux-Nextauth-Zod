import Image from 'next/image';
import Link from 'next/link';
import locationIcon from '@/assets/location-icon.svg';
import phoneIcon from '@/assets/phone-icon.svg';
import logoIcon from '@/assets/logo.svg';
import manWithGlassesImg from '@/assets/man-with-glasses.png';
import mainWithGlassesImgDesktop from '@/assets/man-with-glasses-big.png';
import homeContent from '@/helpers/content/pages/home/homeContent';
import { Permanent_Marker } from 'next/font/google';

const permamentMarkerFont = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const Card = () => {
  const { primaryAddress, secondaryAddress, phoneNumber } = homeContent;

  return (
    <section className="flex flex-col gap-12 items-center h-full w-full pb-12 bg-black rounded-[40px] shadow-lg  shadow-[var(--gold)] lg:flex-row lg:w-[915px] lg:h-[494px] overflow-hidden">
      <picture className="relative w-[227px] h-[265px] lg:w-[414px] lg:h-full">
        <Image
          src={mainWithGlassesImgDesktop}
          alt="man with glasses"
          fill
        ></Image>
      </picture>
      <ul className="flex flex-col gap-8 h-full w-full p-8">
        <li className="hidden lg:flex self-end items-center gap-6">
          <div className={`${permamentMarkerFont.className} flex flex-col`}>
            <h2 className="text-4xl text-[var(--gold)]">Męska strefa</h2>
            <h3 className="text-xl text-[var(--gold)]">Poczuj się jak król</h3>
          </div>
          <Image src={logoIcon} alt="logo icon on card" />
        </li>
        <li className="flex gap-6 items-center">
          <Image
            src={locationIcon}
            alt="location icon"
            width={25}
            height={20}
          />
          <address className="flex flex-col">
            <p className="text-white lg:text-2xl font-bold">{primaryAddress}</p>
            <p className="text-white lg:text-2xl font-bold">
              {secondaryAddress}
            </p>
          </address>
        </li>

        <li className="flex gap-6 items-center">
          <Image src={phoneIcon} alt="phone icon" width={25} height={26} />
          <span className="flex flex-col">
            <p className="text-white lg:text-2xl font-bold">
              <Link href={`tel:${511511511}`}>{phoneNumber}</Link>
            </p>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Card;
