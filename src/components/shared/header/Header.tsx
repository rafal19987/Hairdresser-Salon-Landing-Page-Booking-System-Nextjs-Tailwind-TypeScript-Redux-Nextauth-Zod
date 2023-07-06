import Logo from '@/components/shared/logo/Logo';
import Hamburger from '@/components/shared/header/hamburger/Hamburger';
import NavbarMenu from '@/components/shared/header/navbarMenu/NavbarMenu';
import { Permanent_Marker } from 'next/font/google';
import logo from '@/assets/logo.svg';

const permamentMarkerFont = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <header className="relative flex items-center justify-between w-full p-4 bg-[var(--header-bg-light)] dark:bg-[var(--header-bg-dark)]">
      <div className="flex items-center gap-4">
        <div className="relative w-[50px] h-[60px]">
          <Logo src={logo} alt="Logo image" />
        </div>
        <h1
          className={`${permamentMarkerFont.className} text-[var(--gold)] text-lg`}
        >
          Męska strefa
        </h1>
      </div>
      <div className="block w-14 h-10 bg-black rounded-lg md:hidden">
        <Hamburger />
      </div>
      <div className="hidden md:w-[500px] lg:w-[600px] xl:w-[800px] h-[45px] md:block">
        <NavbarMenu />
      </div>
    </header>
  );
};

export default Header;