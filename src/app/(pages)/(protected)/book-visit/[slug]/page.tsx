'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SERVICES from '@/helpers/constants/services';
import { TServiceProps } from '@/types/serviceTypes';
import navigationArrowIcon from '@/assets/navigation-arrow-icon.svg';

const BookSpecificServiePage = ({ params }: { params: { slug: number } }) => {
  const router = useRouter();
  const services: TServiceProps[] = SERVICES;

  return (
    <div className="absolute flex items-center justify-center w-screen h-5/6 mt-10 p-20 bg-gray-500 bg-opacity-80 z-10">
      <div className="relative flex flex-col items-center w-[900px] h-[700px] rounded-3xl bg-white bg-opacity-100">
        {/* Close window and back to prev route button  */}
        <div
          tabIndex={1}
          className="realtive absolute top-6 right-6 w-8 h-8 border-4 border-[#626262] rounded-md box-border hover:cursor-pointer hover:border-black group transition-colors"
          onClick={() => router.push('/book-visit')}
        >
          <span className="absolute top-[10px] left-0 h-1 w-6 bg-[#626262] -rotate-45 group-hover:bg-black transition-colors" />
          <span className="absolute top-[10px] h-1 w-6 bg-[#626262] rotate-45 group-hover:bg-black transition-colors" />
        </div>
        <p className="mt-8 text-xl text-black font-bold">Sierpień 2023</p>
        {/* Section with selecting visit day  */}
        <div className="relative flex  items-center justify-center w-[740px] h-[150px] mt-8">
          {/* Button for navigation to left */}
          <div className="absolute left-0 w-10 h-10 rounded-full overflow-hidden shadow-md">
            <button
              tabIndex={1}
              className="flex items-center justify-center rounded-full w-full h-full "
              onClick={() => console.log('click w lewo')}
            >
              <Image
                src={navigationArrowIcon}
                alt="left arrow for navigation icon"
              />
            </button>
          </div>
          {/* Button for navigation to right */}
          <div className="absolute right-0 w-10 h-10 rounded-full  overflow-hidden shadow-md">
            <button
              tabIndex={4}
              className="flex items-center justify-center rounded-full w-full h-full"
              onClick={() => console.log('click w prawo')}
            >
              <Image
                className="rotate-180"
                src={navigationArrowIcon}
                alt="left arrow for navigation icon"
              />
            </button>
          </div>
          {/* Carousel with days of month  */}
          <div className="w-4/5 h-full">
            <ul className="flex whitespace-nowrap items-center gap-4 w-full h-full overflow-x-auto  flex-shrink-0">
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div
                  tabIndex={2}
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors"
                >
                  <span className="text-xl font-medium">Pon</span>
                  <span className="text-xl font-medium">1</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div
                  tabIndex={3}
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors"
                >
                  <span className="text-xl font-medium">Wt</span>
                  <span className="text-xl font-medium">2</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Śr</span>
                  <span className="text-xl font-medium">3</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Czw</span>
                  <span className="text-xl font-medium">4</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Pt</span>
                  <span className="text-xl font-medium">5</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Sob</span>
                  <span className="text-xl font-medium">6</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Ndz</span>
                  <span className="text-xl font-medium">13</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Pon</span>
                  <span className="text-xl font-medium">14</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Wt</span>
                  <span className="text-xl font-medium">15</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Śr</span>
                  <span className="text-xl font-medium">16</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Czw</span>
                  <span className="text-xl font-medium">17</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Pt</span>
                  <span className="text-xl font-medium">18</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Sob</span>
                  <span className="text-xl font-medium">19</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Ndz</span>
                  <span className="text-xl font-medium">20</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Pon</span>
                  <span className="text-xl font-medium">21</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Wt</span>
                  <span className="text-xl font-medium">22</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Śr</span>
                  <span className="text-xl font-medium">23</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Czw</span>
                  <span className="text-xl font-medium">24</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Pt</span>
                  <span className="text-xl font-medium">25</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Sob</span>
                  <span className="text-xl font-medium">26</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-xl font-medium">Ndz</span>
                  <span className="text-xl font-medium">27</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Carousel with days of month  */}
        </div>

        <div className="relative flex  items-center justify-center w-[740px] h-[60px] mt-8">
          {/* Button for navigation to left */}
          <div className="absolute left-0 w-10 h-10 rounded-full overflow-hidden shadow-md">
            <button
              tabIndex={5}
              className="flex items-center justify-center rounded-full w-full h-full "
              onClick={() => console.log('click w lewo')}
            >
              <Image
                src={navigationArrowIcon}
                alt="left arrow for navigation icon"
              />
            </button>
          </div>
          {/* Button for navigation to right */}
          <div className="absolute right-0 w-10 h-10 rounded-full  overflow-hidden shadow-md">
            <button
              tabIndex={8}
              className="flex items-center justify-center rounded-full w-full h-full"
              onClick={() => console.log('click w prawo')}
            >
              <Image
                className="rotate-180"
                src={navigationArrowIcon}
                alt="left arrow for navigation icon"
              />
            </button>
          </div>
          {/* Carousel with days of month  */}
          <div className="w-4/5 h-full">
            <ul className="flex whitespace-nowrap items-center gap-4 w-full h-full overflow-x-auto  flex-shrink-0">
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div
                  tabIndex={6}
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors"
                >
                  <span className="text-base font-medium">12:00</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div
                  tabIndex={7}
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors"
                >
                  <span className="text-base font-medium">12:30</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-base font-medium">13:00</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-base font-medium">13:30</span>
                </div>
              </li>
              <li className="inline-block w-28 h-full flex-shrink-0">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 hover:cursor-pointer hover:border-[#218cac] transition-colors">
                  <span className="text-base font-medium">14:00</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Carousel with days of month  */}
        </div>

        <hr className="w-full my-4 bg-[#b7b7b7]" />
        <div></div>
        {/* Service Card with name service, price, time, performer and button for change performer */}
        <div className="flex flex-col w-[740px] h-[170px] pt-10 px-8 pb-5 bg-[#E2E2E2] rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="w-[440px] h-full text-xl font-bold">
              {services[params.slug - 1].service}
            </h2>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xl text-black font-bold">
                {services[params.slug - 1].price}
              </span>
              <span className="text-sm text-[#888]">16:15 - 17:00</span>
            </div>
          </div>
          <hr className="w-full h-1 my-3 bg-[#B7B7B7]" />
          <div className="flex items-center justify-between">
            <div>
              <span>{services[params.slug - 1].performer[0]}</span>
            </div>
            <button
              disabled={
                services[params.slug - 1].performer.length === 1 && true
              }
              className="w-20 h-7 bg-white border border-neutral-500 rounded-md text-black hover:border-black
              disabled:hover:cursor-default disabled:bg-[#E2E2E2] d disabled:border-neutral-300 disabled:text-neutral-300"
              onClick={() => console.log('Click')}
            >
              Zmień
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSpecificServiePage;
