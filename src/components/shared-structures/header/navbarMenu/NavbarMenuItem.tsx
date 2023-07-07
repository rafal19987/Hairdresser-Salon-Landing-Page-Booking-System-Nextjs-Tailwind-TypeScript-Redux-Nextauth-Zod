'use client';

import Link from 'next/link';
import { TNavigationRoutesProps } from '@/types/navigationRoutesTypes';

const NavbarMenuItem = ({ route, routeName }: TNavigationRoutesProps) => {
  return (
    <li className="">
      <Link
        className={`relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0   after:content-[''] after:h-1 after:w-0 after:hover:w-full after:bg-[var(--gold)] after:transition-all transition-all duration-300
           
          `}
        href={route}
      >
        {routeName}
      </Link>
    </li>
  );
};

export default NavbarMenuItem;
