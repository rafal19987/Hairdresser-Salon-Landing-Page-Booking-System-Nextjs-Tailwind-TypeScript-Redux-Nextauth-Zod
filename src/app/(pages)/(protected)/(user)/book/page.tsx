'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  selectServiceId,
  resetSelectedServiceId,
} from '@/store/features/selectedServiceId/selectedServiceIdSlice';
import { Modal } from '@/components/pages/book-visit/components/modal';
import { type TServicesStore } from '@/store/features/services/servicesSlice';

const BookPage = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services);

  const serviceSelectHandle = (selectedServiceId: TServicesStore['id']) => {
    dispatch(selectServiceId({ selectedServiceId }));
  };

  const closeModalHangle = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(resetSelectedServiceId());
  };

  return (
    <div className='relative flex flex-col grow overflow-x-hidden border'>
      <section className=' overflow-y-auto overflow-x-hidden p-8'>
        <table className='w-full h-full mb-0 cursor-default select-none border-[#B7B7B7]'>
          <thead className='border-b border-[#B7B7B7]'>
            <tr className='uppercase text-gray-400 '>
              <th className='p-4 text-start'>Usługa</th>
              <th className='w-40 text-start'>
                <span>Cena</span>
              </th>
              <th className='text-start w-40'>Umów wizytę</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr
                key={service.id}
                className='h-24 p-4 hover:bg-neutral-200 border-b border-[#B7B7B7] text-[#878787] transition-colors duration-200 '
              >
                <td className='p-4'>{service.title}</td>
                <td className='flex flex-col items-end justify-center w-24 h-full text-black'>
                  <span className='text-black text-xl'>
                    {service.price},00 zł
                  </span>
                  <span className=' text-[#888] text-sm'>
                    {service.serviceTime} min
                  </span>
                </td>
                <td>
                  <button
                    className='w-20 p-2 text-white bg-black rounded-lg hover:bg-neutral-700 transition-colors duration-200'
                    onClick={() => {
                      serviceSelectHandle(service.id);
                    }}
                  >
                    Umów
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Modal />
    </div>
  );
};

export default BookPage;
