'use client';

import { useRouter } from 'next/navigation';
import SERVICES from '@/helpers/constants/services';
import { TServiceProps } from '@/types/serviceTypes';

const BookVisit = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
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
                <td className="text-black">{service.price}</td>

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
      {children}
    </div>
  );
};

export default BookVisit;
