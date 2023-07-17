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
    <section className="relative flex flex-col gap-6 items-center h-full w-full max-w-[500px] bg-black rounded-[30px] shadow-xl shadow-[var(--gray)] dark:shadow-[var(--gold)] lg:flex-row lg:w-[915px] lg:max-w-full lg:h-[494px] overflow-hidden">
      <div className="hidden lg:flex absolute top-8 right-8 items-center justify-end gap-6 w-2/4 z-10">
        <div className={`${permamentMarkerFont.className} flex flex-col`}>
          <h2 className="text-4xl text-[var(--gold)]">Męska strefa</h2>
          <h3 className="text-xl text-[var(--gold)]">Poczuj się jak król</h3>
        </div>
        <Image src={logoIcon} alt="logo icon on card" />
      </div>
      <picture className="relative w-4/5 h-3/5 lg:w-[414px] lg:h-full">
        <Image
          className="object-contain"
          src={mainWithGlassesImgDesktop}
          alt="man with glasses"
          fill
        />
      </picture>
      <ul
        className="flex flex-col gap-6 items-center justify-center w-full py-4 px-6 text-xl
      lg:items-end lg:justify-between lg:grow lg:w-2/5 lg:mr-8"
      >
        <li className="flex gap-6 items-center justify-between w-full max-w-[300px]">
          <p className="text-white lg:text-xl">{phoneNumber}</p>
          <div className=" w-10 h-10 rounded-lg bg-[var(--gray)]">
            <Link
              className="flex items-center justify-center w-full h-full"
              href={`tel:${+48511511511}`}
            >
              <Image src={phoneIcon} alt="phone icon" width={20} height={20} />
            </Link>
          </div>
        </li>
        <li className=" flex gap-6 items-center justify-between w-full max-w-[300px]">
          <address className="flex flex-col">
            <p className="text-white lg:text-xl">{primaryAddress}</p>
            <p className="text-white lg:text-xl">{secondaryAddress}</p>
          </address>
          <div className="w-10 h-10 rounded-lg bg-[var(--gray)]">
            <Link
              className="flex items-center justify-center w-full h-full"
              target="_blank"
              href="https://www.google.com/maps/place/Fryzjer+M%C4%99ski+Emil+Chru%C5%9Bciel/@51.9305532,22.3798562,17z/data=!3m1!4b1!4m6!3m5!1s0x4721ff5fb871e805:0x4ae9feadab163738!8m2!3d51.9305499!4d22.3824311!16s%2Fg%2F11fyzfjj5z?entry=ttu"
            >
              <Image
                src={locationIcon}
                alt="location icon"
                width={15}
                height={20}
              />
            </Link>
          </div>
        </li>
        {/* <li className="flex flex-col gap-2 items-center w-full">
          <h4 className="text-2xl font-bold">Jesteśmy otwarci</h4>
          <p className="text-white lg:text-2xl">Pon-Pt 8:00 - 17:00</p>
          <p className="text-white lg:text-2xl">Sobota 7:00 - 20:00</p>
        </li> */}
      </ul>
    </section>
  );
};

export default Card;
