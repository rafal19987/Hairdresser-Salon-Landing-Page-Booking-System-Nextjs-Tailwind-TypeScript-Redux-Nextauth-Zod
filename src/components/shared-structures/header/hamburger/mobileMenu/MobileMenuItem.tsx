'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TNavigationRoutesProps } from '@/types/navigationRoutesTypes';

const MobileMenuItem = ({
  route,
  closeMenu,
}: {
  route: TNavigationRoutesProps;
  closeMenu: () => void;
}) => {
  const pathname = usePathname();

  return (
    <li key={route.routeName}>
      <Link
        className={`${pathname === route.route && 'text-[var(--gold)]'}`}
        onClick={closeMenu}
        href={route.route}
      >
        {route.routeName}
      </Link>
    </li>
  );
};

export default MobileMenuItem;
