import Image from 'next/image';
import Link from 'next/link';
import instagramIcon from '@/assets/instagram-icon.svg';
import facebookIcon from '@/assets/facebook-icon.svg';
import googleIcon from '@/assets/google-icon.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full h-full py-4 px-6 border-t border-[var(--gold)] bg-black">
      <ul className="flex flex-col items-end gap-5 w-full">
        <li className="flex flex-row-reverse gap-3 items-start w-fit">
          <Image
            src={instagramIcon}
            alt="instagram icon"
            width={20}
            height={20}
          />
          <Link className="text-sm" href={'#'}>
            Odwiedź Nas na Instagramie
          </Link>
        </li>
        <li className="flex flex-row-reverse gap-3 w-fit">
          <Image
            src={facebookIcon}
            alt="facebook icon"
            width={20}
            height={20}
          />
          <Link className="text-sm" href={'#'}>
            Polub Nas na Facebooku
          </Link>
        </li>
        <li className="flex flex-row-reverse gap-3 items-start w-fit">
          <Image src={googleIcon} alt="google icon" width={20} height={20} />
          <Link className="text-sm" href={'#'}>
            Wystaw opinię w Google
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
