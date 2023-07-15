import Link from 'next/link';
import navigationRoutes from '@/helpers/routes/navigationRoutes';
import { TNavigationRoutesProps } from '@/types/navigationRoutesTypes';

const MobileMenu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  return (
    <div
      className={`absolute top-full left-0 w-screen  bg-black text-white z-10 overflow-hidden transition-all duration-200 ${
        isOpen ? 'h-[calc(100vh-92px)]' : 'h-0'
      }`}
    >
      <ul
        className={`flex flex-col items-center justify-evenly w-full text-2xl transition-all duration-500 ${
          isOpen ? 'h-full opacity-1' : 'h-0 opacity-0'
        }`}
      >
        {navigationRoutes.map((route: TNavigationRoutesProps) => (
          <li key={route.routeName}>
            <Link onClick={() => closeMenu} href={route.route}>
              {route.routeName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
