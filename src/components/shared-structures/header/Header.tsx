import Logo from '@/components/shared-atoms/logo/Logo';
import ChangeThemeBtn from '@/components/shared-atoms/changeThemeBtn/ChangeThemeBtn';
import Hamburger from '@/components/shared-structures/header/hamburger/Hamburger';
import NavbarMenu from '@/components/shared-structures/header/navbarMenu/NavbarMenu';
import { Permanent_Marker } from 'next/font/google';
import logo from '@/assets/logo.svg';

const permamentMarkerFont = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <header className="relative flex items-center justify-between w-full h-[var(--header-height)] px-4 dark:border-b dark:border-[var(--gold)] bg-[var(--header-bg-light)] dark:bg-[var(--header-bg-dark)]">
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
      <div>
        <ChangeThemeBtn />
      </div>
      <div className="block w-14 h-10 bg-black rounded-lg md:hidden">
        <Hamburger />
      </div>
      <nav className="hidden md:w-[500px] lg:w-[600px] xl:w-[800px] h-[45px] md:block">
        <NavbarMenu />
      </nav>
    </header>
  );
};

export default Header;
