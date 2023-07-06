import Link from 'next/link';

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
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
        <li>
          <Link href={'#'}>Strona główna</Link>
        </li>
        <li>
          <Link href={'#'}>O nas</Link>
        </li>
        <li>
          <Link href={'#'}>Cennik</Link>
        </li>
        <li>
          <Link href={'#'}>Godziny otwarcia</Link>
        </li>
        <li>
          <Link href={'#'}>Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
