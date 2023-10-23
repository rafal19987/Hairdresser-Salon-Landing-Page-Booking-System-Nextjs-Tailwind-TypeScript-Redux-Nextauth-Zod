'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { selectServiceId } from '@/store/features/selectedServiceId/selectedServiceIdSlice';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import SERVICES from '@/helpers/constants/services';
import { TServiceProps } from '@/types/serviceTypes';
import getTodayDate from '@/helpers/functions/getTodayDate';
import { TServicesStore } from '@/store/features/services/servicesSlice';

type sorted = {
  sortedBy: 'idle' | 'ascending' | 'descending';
};

const PricesPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const initialState = SERVICES;
  const [data, setData] = useState(initialState);
  const [sortedBy, setSortedBy] = useState<sorted>({ sortedBy: 'idle' });
  const todayDate = getTodayDate();

  const handleSort = () => {
    const sortedData = [...data];

    if (sortedBy.sortedBy === 'idle' || sortedBy.sortedBy === 'ascending') {
      sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortedBy({ sortedBy: 'descending' });
      return setData(sortedData);
    }

    if (sortedBy.sortedBy === 'descending') {
      sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortedBy({ sortedBy: 'ascending' });
      return setData(sortedData);
    }
  };

  const handleSelectService = (selectedServiceId: TServicesStore['id']) => {
    dispatch(selectServiceId({ selectedServiceId }));
    router.push(`/book`);
  };

  return (
    <div className='w-full h-full p-4'>
      <div>
        <table className='w-full h-full cursor-default select-none'>
          <caption className='p-4 text-xl'>Lista dostępnych usług</caption>
          <thead className='border-b border-gray-600'>
            <tr className='uppercase text-gray-400 '>
              <th className='p-4 text-start'>Usługa</th>
              <th className='w-40 text-start'>
                <div
                  className='flex items-center gap-2 w-fit h-full group hover:cursor-pointer'
                  onClick={handleSort}
                >
                  <span className='group-hover:text-slate-700 transition-colors'>
                    Cena
                  </span>
                  <div>
                    <BiUpArrow
                      className={`${
                        sortedBy.sortedBy === 'ascending' &&
                        'text-[var(--gold)]'
                      } transition-colors`}
                    />
                    <BiDownArrow
                      className={`${
                        sortedBy.sortedBy === 'descending' &&
                        'text-[var(--gold)]'
                      } transition-colors`}
                    />
                  </div>
                </div>
              </th>
              <th className='text-start w-40'>Dostępne u</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((service: TServiceProps) => (
              <tr
                key={service.id}
                className='h-24 p-4 hover:bg-neutral-800 border-b border-gray-700 text-white transition-colors duration-200 '
              >
                <td className='p-4'>{service.service}</td>
                <td className=''>{service.price}</td>
                <td className='py-4'>
                  <ul className='flex flex-col gap-2'>
                    {service.performer.map((performer) => (
                      // eslint-disable-next-line
                      <li className='w-fit'>
                        <span>{performer}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button
                    className='h-12 px-2 text-[var(--gold)] hover:text-yellow-100 hover:cursor-pointer'
                    onClick={() => handleSelectService(service.id)}
                  >
                    Umów się
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='py-2 px-5 text-center' colSpan={4}>
                <span>Cennik aktualny na dzień {todayDate}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PricesPage;
