import Link from 'next/link';
import navigationRoutes from '@/helpers/routes/navigationRoutes';
import Logo from '@/components/shared-atoms/logo/Logo';
import ChangeThemeBtn from '@/components/shared-atoms/changeThemeBtn/ChangeThemeBtn';
import Hamburger from '@/components/shared-structures/header/hamburger/Hamburger';
import NavbarMenu from '@/components/shared-structures/header/navbarMenu/NavbarMenu';
import logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 flex items-center justify-center w-full bg-[var(--header-bg-light)] dark:bg-[var(--header-bg-dark)] z-20">
      <div className="relative flex items-center justify-between w-full h-[var(--header-height)] px-4 lg:max-w-[1600px]">
        <Link href={navigationRoutes[0].route}>
          <div className="flex items-center gap-4">
            <div className="relative w-[50px] h-[60px]">
              <Logo src={logo} alt="Logo image" />
            </div>
            <h1 className="font-permanentMarker text-[var(--gold)] text-lg">
              Męska strefa
            </h1>
          </div>
        </Link>
        <div>
          <ChangeThemeBtn />
        </div>
        <div className="block w-14 h-10 bg-black rounded-lg md:hidden">
          <Hamburger />
        </div>
        <nav className="hidden md:w-[500px] lg:w-[600px] xl:w-[800px] h-[45px] md:block">
          <NavbarMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
