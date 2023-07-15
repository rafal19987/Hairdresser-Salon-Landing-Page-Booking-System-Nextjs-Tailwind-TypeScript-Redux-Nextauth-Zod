'use client';

import { useState } from 'react';
import MobileMenu from './mobileMenu/MobileMenu';

const Hamburger = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const clickHandler = () => {
    setIsMobileMenuOpen((prev) => (prev ? false : true));
  };

  return (
    <>
      <button
        className="flex flex-col items-center justify-evenly w-full h-full bg-[var(--hamburger-bg)] rounded-lg overflow-hidden"
        onClick={clickHandler}
      >
        <span
          className={`w-3/5 h-1 bg-[var(--gold)] rounded-lg  transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-135 translate-y-3' : 'rotate-0'
          }`}
        />
        <span
          className={`w-3/5 h-1 bg-[var(--gold)] rounded-lg  transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : 'opacity-1'
          }`}
        />
        <span
          className={`w-3/5 h-1 bg-[var(--gold)] rounded-lg  transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-135 -translate-y-[10px]' : 'rotate-0'
          }`}
        />
      </button>
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Hamburger;
