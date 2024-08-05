import Image from 'next/image';
import Link from 'next/link';
import locationIcon from '@icons/location-icon.svg';
import phoneIcon from '@icons/phone-icon.svg';
import mainWithGlassesImgDesktop from '@/assets/man-with-glasses-big.png';
import homeContent from '@/helpers/content/pages/home/homeContent';
import ImageContainer from '@/components/shared-atoms/ImageContainer';

const Card = () => {
  const { primaryAddress, secondaryAddress, phoneNumber } = homeContent;

  return (
    <section className='relative flex flex-col gap-6 items-center h-full w-full max-w-[500px]  lg:flex-row lg:w-[915px] lg:max-w-full lg:h-[494px] overflow-hidden'>
      <ImageContainer>
        <Image
          className='object-contain'
          src={mainWithGlassesImgDesktop}
          alt='man with glasses'
          fill
        />
      </ImageContainer>

      <ul
        className='flex flex-col gap-6 items-center justify-center w-full py-4 px-6 text-xl
      lg:items-end lg:justify-between lg:grow lg:w-2/5 lg:mr-8'
      >
        <li className='flex gap-6 items-center justify-between w-full max-w-[300px]'>
          <p className='text-white lg:text-xl'>{phoneNumber}</p>
          <div className=' w-10 h-10 rounded-lg bg-[var(--gray)]'>
            <Link
              className='flex items-center justify-center w-full h-full'
              href={`tel:${+48511511511}`}
            >
              <Image src={phoneIcon} alt='phone icon' width={20} height={20} />
            </Link>
          </div>
        </li>
        <li className=' flex gap-6 items-center justify-between w-full max-w-[300px]'>
          <address className='flex flex-col'>
            <p className='text-white lg:text-xl'>{primaryAddress}</p>
            <p className='text-white lg:text-xl'>{secondaryAddress}</p>
          </address>
          <div className='w-10 h-10 rounded-lg bg-[var(--gray)]'>
            <Link
              className='flex items-center justify-center w-full h-full'
              target='_blank'
              href='https://www.google.com/maps/place/Fryzjer+M%C4%99ski+Emil+Chru%C5%9Bciel/@51.9305532,22.3798562,17z/data=!3m1!4b1!4m6!3m5!1s0x4721ff5fb871e805:0x4ae9feadab163738!8m2!3d51.9305499!4d22.3824311!16s%2Fg%2F11fyzfjj5z?entry=ttu'
            >
              <Image
                src={locationIcon}
                alt='location icon'
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
