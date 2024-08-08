'use client';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectServiceId } from '@/store/features/selectedServiceId/selectedServiceIdSlice';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { TServicesStore } from '@/store/features/services/servicesSlice';
import { useSortData } from '@/hooks/useSortData';
import getTodayDate from '@/helpers/functions/getTodayDate';

export const PricesTable = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services);
  const employees = useAppSelector((state) => state.employees);
  const { sortData, sortedData } = useSortData<TServicesStore>(services);
  const todayDate = getTodayDate();

  const handleSelectService = (selectedServiceId: TServicesStore['id']) => {
    dispatch(selectServiceId({ selectedServiceId }));
    router.push(`/book`);
  };

  return (
    <table
      className='w-full h-full cursor-default select-none '
      data-aos='fade-down'
      data-aos-once='true'
    >
      <caption
        className='p-4 text-xl'
        data-aos='fade-down'
        data-aos-once='true'
        data-aos-delay='100'
      >
        Lista dostępnych usług
      </caption>
      <thead className='border-b border-gray-600'>
        <tr className='uppercase text-gray-400 '>
          <th
            className='p-4 text-start'
            data-aos='fade-down'
            data-aos-once='true'
            data-aos-delay='200'
          >
            Usługa
          </th>
          <th className='w-40 text-start'>
            <div
              className='flex items-center gap-2 w-fit h-full group hover:cursor-pointer'
              onClick={() => sortData()}
            >
              <span
                className='group-hover:text-slate-700 transition-colors'
                data-aos='fade-down'
                data-aos-once='true'
                data-aos-delay='200'
              >
                Cena
              </span>
              <div
                data-aos='fade-down'
                data-aos-once='true'
                data-aos-delay='200'
              >
                <BiUpArrow />
                <BiDownArrow />
              </div>
            </div>
          </th>
          <th
            className='text-start w-40'
            data-aos='fade-down'
            data-aos-once='true'
            data-aos-delay='200'
          >
            Dostępne u
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((service: TServicesStore) => (
          <tr
            key={service.id}
            className='h-24 p-4 hover:bg-neutral-800 border-b border-gray-700 text-white transition-colors duration-200 '
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay={`300`}
          >
            <td className='p-4'>{service.title}</td>
            <td className=''>{service.price},00 zł</td>
            <td className='py-4'>
              <ul className='flex flex-col gap-2'>
                {service.executorId.map((performer) => (
                  <li key={performer}>
                    {employees
                      .filter((employee) => employee.id === performer)
                      .map((employee) => employee.name)}
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
  );
};
