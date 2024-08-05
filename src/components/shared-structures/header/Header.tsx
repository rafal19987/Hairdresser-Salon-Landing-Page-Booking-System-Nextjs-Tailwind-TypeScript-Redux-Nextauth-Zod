import Link from 'next/link';
import navigationRoutes from '@/helpers/routes/navigationRoutes';
import Logo from '@/components/shared-atoms/logo/Logo';
import Hamburger from '@/components/shared-structures/header/hamburger/Hamburger';
import NavbarMenu from '@/components/shared-structures/header/navbarMenu/NavbarMenu';
import logo from '@icons/logo.svg';

const Header = () => {
  return (
    <header className='fixed top-0 flex items-center justify-center w-full bg-[var(--header-bg-light)] dark:bg-[var(--header-bg-dark)] z-20'>
      <div className='relative flex items-center justify-between w-full h-[var(--header-height)] '>
        <Link href={navigationRoutes[0].route} className='pl-4'>
          <div className='flex items-center gap-4'>
            <div className='relative w-[50px] h-[60px]'>
              <Logo src={logo} alt='Logo image' />
            </div>
            <span className='font-permanentMarker text-[var(--gold)] text-lg'>
              Męska strefa
            </span>
          </div>
        </Link>
        <div className='block w-14 h-10 bg-black rounded-lg lg:hidden'>
          <Hamburger />
        </div>
        <nav className='hidden lg:block'>
          <NavbarMenu />
        </nav>
        <Link
          className='hidden lg:flex items-center h-full p-4 bg-[var(--gold)] hover:opacity-90 transition-all'
          href='/book'
        >
          <span className='text-black font-bold'>Zarezerwuj wizytę</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
