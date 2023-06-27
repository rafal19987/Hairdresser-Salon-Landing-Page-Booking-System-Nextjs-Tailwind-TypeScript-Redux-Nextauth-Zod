'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-between w-full h-full text-white md:text-lg xl:text-xl">
      <li className="relative">
        <Link
          className={`relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0   after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300 ${
            pathname === '/'
              ? 'after:w-full text-[var(--gold)]'
              : 'after:w-0 text-white'
          }`}
          href="#"
        >
          Strona główna
        </Link>
      </li>
      <li>
        <Link
          className="relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0 after:w-0 after:hover:w-full after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300"
          href="#"
        >
          O nas
        </Link>
      </li>
      <li>
        <Link
          className="relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0 after:w-0 after:hover:w-full after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300"
          href="#"
        >
          Cennik
        </Link>
      </li>
      <li>
        <Link
          className="relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0 after:w-0 after:hover:w-full after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300"
          href="#"
        >
          Galeria
        </Link>
      </li>
      <li>
        <Link
          className="relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0 after:w-0 after:hover:w-full after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300"
          href="#"
        >
          Opinie
        </Link>
      </li>
      <li>
        <Link
          className="relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0 after:w-0 after:hover:w-full after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300"
          href="#"
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMenu;
