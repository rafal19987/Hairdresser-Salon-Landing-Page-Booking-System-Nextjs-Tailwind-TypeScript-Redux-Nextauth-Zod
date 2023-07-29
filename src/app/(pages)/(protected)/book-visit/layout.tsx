'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SERVICES from '@/helpers/constants/services';
import { TServiceProps } from '@/types/serviceTypes';
import Logo from '@/components/shared-atoms/logo/Logo';
import logoSvg from '@/assets/logo.svg';
import { permanentMarker } from '@/helpers/typography/fonts';
import wiktoriaFaceImage from '@/assets/employee-1-face-image-big.png';
import agnieszkaFameImage from '@/assets/employee-2-face-image-big.png';
import rightArrowIcon from '@/assets/right-arrow.svg';
import smartphoneIcon from '@/assets/smartphone-icon.svg';
import instagramIcon from '@/assets/instagram-icon-booking-page.svg';
import facebookIcon from '@/assets/facebook-icon-booking-page.svg';
import websiteIcon from '@/assets/website-icon-booking-page.svg';

export default function ProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const router = useRouter();

  const toggleShowSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  return (
    <main className="flex h-screen bg-white overflow-hidden">
      <section className="relative w-full py-10 px-0 lg:p-14">
        {children}
        <div className="border border-[#B7B7B7] h-full overflow-hidden">
          <div className="w-full h-full p-4 overflow-y-scroll">
            <div>
              <table className="w-full h-full mb-0 cursor-default select-none border-[#B7B7B7">
                <thead className="border-b border-[#B7B7B7]">
                  <tr className="uppercase text-gray-400 ">
                    <th className="p-4 text-start">Usługa</th>
                    <th className="w-40 text-start">
                      <span>Cena</span>
                    </th>
                    <th className="text-start w-40">Dostępne u</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((service: TServiceProps) => (
                    <tr
                      key={service.id}
                      className="h-24 p-4 hover:bg-neutral-200 border-b border-[#B7B7B7] text-[#878787] transition-colors duration-200 "
                    >
                      <td className="p-4">{service.service}</td>
                      <td className="flex flex-col items-end justify-center w-24 h-full text-black">
                        <span className="text-black text-xl">
                          {service.price}
                        </span>
                        <span className=" text-[#888] text-sm">
                          {service.serviceTime}
                        </span>
                      </td>
                      <td>
                        <button
                          className="w-20 p-2 text-white bg-black rounded-lg hover:bg-neutral-700 transition-colors duration-200"
                          onClick={() => {
                            router.push(`book-visit/${service.id}`);
                          }}
                        >
                          Umów
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${
          isSectionOpen ? 'translate-x-0' : 'translate-x-full'
        } hidden xl:flex flex-col xl:min-w-[400px] 2xl:min-w-[500px] h-screen border transition-transform duration-200`}
      >
        <div className="relative flex items-center justify-end gap-3 w-full h-[80px] bg-black">
          <button
            className={`${
              isSectionOpen
                ? 'xl:translate-x-0 2xl:translate-x-0 rotate-0'
                : 'xl:-translate-x-10 2xl:-translate-x-20 rotate-180'
            } absolute xl:top-2 xl:left-2 2xl:top-4 2xl:left-8 transition-transform duration-100`}
            onClick={toggleShowSection}
          >
            <Image
              alt="split panel icon"
              src={rightArrowIcon}
              width={26}
              height={23}
            />
          </button>
          <h1
            className={`${permanentMarker.className} text-base xl:text-lg text-[var(--gold)]`}
          >
            Salon fryzjerski męska strefa
          </h1>
          <div className="relative mr-8 w-[44px] h-[54px]">
            <Logo src={logoSvg} alt="logo svg" />
          </div>
        </div>
        <div className="flex flex-col grow w-full px-8 bg-[#FAFAFA]">
          <div className="mt-4">
            <h2 className="text-[#878787]">Pracownicy</h2>
            <hr className=" my-4 bg-[#b7b7b7]" />
            <div className="flex justify-evenly w-full h-full">
              <div className="flex flex-col items-center gap-3 w-20 h-full">
                <div className="relative flex flex-col gap-2 w-20 h-20">
                  <Image
                    className="rounded-full object-cover"
                    src={wiktoriaFaceImage}
                    alt="Wiktoria profile image"
                    fill
                  />
                </div>
                <span>Wiktoria</span>
              </div>
              <div className="flex flex-col items-center gap-3 w-20 h-full">
                <div className="relative flex flex-col gap-2 w-20 h-20">
                  <Image
                    className="rounded-full object-cover"
                    src={agnieszkaFameImage}
                    alt="Agnieszka profile image"
                    fill
                  />
                </div>
                <span>Agnieszka</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-[#878787]">Kontakt i godziny otwarcia</h2>
            <hr className="my-4 bg-[#b7b7b7]" />
            <div className="flex flex-col gap-6 w-full h-full">
              <div className="flex items-end justify-between">
                <Image
                  className="self-center"
                  src={smartphoneIcon}
                  alt="smartphone icon"
                />
                <span>500 501 502</span>
                <span>Wiktoria</span>
                <button className="w-[70px] h-[26px] bg-white border border-[#aaaaaa] rounded-md text-sm hover:border-neutral-800 transition-colors">
                  Zadzwoń
                </button>
              </div>
              <div className="flex items-center justify-between">
                <Image src={smartphoneIcon} alt="smartphone icon" />
                <span className="self-end">500 501 502</span>
                <span className="self-end">Wiktoria</span>
                <button className="w-[70px] h-[26px] bg-white border border-[#aaaaaa] rounded-md text-sm hover:border-neutral-800 transition-colors">
                  Zadzwoń
                </button>
              </div>
              <hr className="my-4 bg-[#b7b7b7]" />
              <ul className="flex flex-col gap-2 w-full h-full">
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Poniedziałek</h3>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Wtorek</h3>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Środa</h3>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Czwartek</h3>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Piatek</h3>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Sobota</h3>
                  <span>7:00 - 20:00</span>
                </li>
                <li className="flex items-center justify-between w-full">
                  <h3 className="text-[#878787]">Niedziela</h3>
                  <span className="text-[#878787]">Zamknięte</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-[#878787]">Media społecznościowe</h2>
            <hr className="my-4 bg-[#b7b7b7]" />
            <div className="w-full">
              <ul className="flex justify-evenly w-full">
                <li>
                  <Link
                    className="flex flex-col items-center justify-center gap-2 w-20 p-1 bg-white rounded-md text-sm hover:border-neutral-800 group transition-colors"
                    href={'#'}
                  >
                    <Image
                      src={facebookIcon}
                      alt="facebook icon"
                      width={33}
                      height={33}
                    />
                    <span className="text-center text-[#B7B7B7] group-hover:text-neutral-800 transition-colors">
                      Facebook
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col items-center justify-center gap-2 w-20 p-1 bg-white rounded-md text-sm hover:border-neutral-800 group transition-colors"
                    href={'#'}
                  >
                    <Image
                      className="fill-blue-500"
                      src={instagramIcon}
                      alt="instagram icon"
                      width={33}
                      height={33}
                    />
                    <span className="text-center text-[#B7B7B7] group-hover:text-neutral-800 transition-colors">
                      Instagram
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex flex-col items-center justify-center gap-2 w-20 p-1 bg-white rounded-md text-sm hover:border-neutral-800 group transition-colors"
                    href={'#'}
                  >
                    <Image
                      src={websiteIcon}
                      alt="website icon"
                      width={33}
                      height={33}
                    />
                    <span className="text-center text-[#B7B7B7] group-hover:text-neutral-800 transition-colors">
                      Strona
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
