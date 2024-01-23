'use client';

import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetSelectedServiceId } from '@/store/features/selectedServiceId/selectedServiceIdSlice';
import { addReservation } from '@/store/features/reservations/reservationsSlice';
import { type TServicesStore } from '@/store/features/services/servicesSlice';
import Image from 'next/image';
import CarouselItem from '../carousel/CarouselItem';
import toast from 'react-hot-toast';
import { uuid } from 'uuidv4';

type TDateTimeFormatOptions = {
  weekday: 'short' | 'long' | 'narrow' | undefined;
  day: 'numeric' | '2-digit' | undefined;
  month: 'long' | 'numeric' | '2-digit' | undefined;
  year: 'numeric' | '2-digit' | undefined;
};

export const Modal = () => {
  const selectedServiceId = useAppSelector(
    (state) => state.selectedServiceId.selectedServiceId,
  );
  const [selectedExecutorId, setSelectedExecutorId] = useState<
    null | TServicesStore['id']
  >(null);
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedHour, setSelectedHour] = useState<string>('');
  const service = useAppSelector((state) => state.services).find(
    (service) => service.id === selectedServiceId,
  );
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees);
  const reservations = useAppSelector((state) => state.reservations);

  if (!selectedServiceId || !service) return null;

  const openSalonHours: string[] = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];
  const today = new Date();
  const datesArray: string[] = [];

  const options: TDateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  for (let i = 0; i < 24; i++) {
    const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const formattedDate = new Intl.DateTimeFormat('pl-PL', options).format(
      date,
    );
    datesArray.push(formattedDate);
  }

  const handleReservation = () => {
    if (!selectedDay || !selectedHour || !selectedExecutorId)
      return toast.error('select all fields');

    dispatch(
      addReservation({
        id: uuid(),
        createdAt: new Date(),
        executorId: selectedExecutorId!,
        serviceId: selectedServiceId,
        reservationDate: {
          hour: selectedHour,
          day: selectedDay,
        },
        isConfirmed: false,
      }),
    );
    toast.success('Reservation created');
    setSelectedDay('');
    setSelectedHour('');
  };

  const closeModalHandle = () => {
    dispatch(resetSelectedServiceId);
  };

  const reservedHours = openSalonHours.filter(
    (hour) =>
      !reservations.some(
        (r) =>
          r.executorId === selectedExecutorId &&
          r.reservationDate?.day == selectedDay &&
          r.reservationDate?.hour === hour,
      ),
  );
  return (
    <section className='fixed w-full h-full'>
      <div className='flex items-center justify-center w-full h-full bg-black bg-opacity-20 backdrop-blur-sm'>
        <div className='relative flex flex-col gap-5 w-full max-w-3xl h-3/4 px-8 py-20 bg-white'>
          <CloseButton />
          <ul className='flex whitespace-nowrap items-center gap-4 w-full h-44 overflow-x-auto  flex-shrink-0 no-scrollbar border-x-2 border-gray-600/10'>
            {datesArray.map((day: string) => {
              const splitDate = day.split(' ');
              const dayInWords = splitDate[0].slice(0, -1);
              const dayNumber = splitDate[1];

              return (
                <CarouselItem
                  key={day}
                  dayNumber={dayNumber}
                  dayInWords={dayInWords}
                  day={day}
                  setSelectedDay={setSelectedDay}
                  selectedDay={selectedDay}
                  // isToday={
                  //   day ===
                  //   new Intl.DateTimeFormat('pl-PL', options).format(new Date())
                  // }
                />
              );
            })}
          </ul>
          <ul className='flex whitespace-nowrap items-center gap-4 w-full h-24 border-x-2 border-gray-600/10 overflow-x-auto  flex-shrink-0 no-scrollbar'>
            {!reservedHours.length && (
              <span className='w-full text-center text-base font-medium text-white'>
                Brak dostępnych terminów na ten dzień
              </span>
            )}
            {reservedHours.map((openHour) => (
              <li
                key={openHour}
                className={`${
                  selectedHour === openHour && 'text-white bg-[#218cac]'
                } inline-block w-28 h-full flex-shrink-0 border  hover:cursor-pointer`}
                onClick={() => setSelectedHour(openHour)}
              >
                <div
                  tabIndex={6}
                  className='flex flex-col items-center justify-center w-full h-full'
                >
                  <span className='text-base font-medium'>{openHour}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex flex-col p-4 bg-neutral-300 rounded-lg'>
            <div className='flex justify-between'>
              <h4 className='font-bold'>{service.title}</h4>
              <div className='flex flex-col'>
                <span>{service.price},00 zł</span>
                <span>{selectedHour}</span>
              </div>
            </div>
            <hr />
            <div className='flex justify-between'>
              <div className='flex flex-col gap-2'>
                <h5>Wybierz fryzjera:</h5>
                <ul className='flex gap-4'>
                  {service.executorId.map((executorId) => (
                    <li key={executorId}>
                      <span
                        className={`${
                          selectedExecutorId === executorId
                            ? 'font-bold'
                            : 'font-normal'
                        } hover:cursor-pointer`}
                        onClick={() => setSelectedExecutorId(executorId)}
                      >
                        {
                          employees.find(
                            (employee) => employee.id === executorId,
                          )?.name
                        }
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            className='self-end border'
            onClick={() => handleReservation()}
          >
            Create reservation
          </button>
        </div>
      </div>
    </section>
  );
};

const CloseButton = () => {
  const dispatch = useAppDispatch();
  const closeModalHandle = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(resetSelectedServiceId());
  };

  return (
    <div
      tabIndex={1}
      className='realtive absolute top-6 right-6 w-8 h-8 border-4 border-[#626262] rounded-md box-border hover:cursor-pointer hover:border-black group transition-colors'
      onClick={(e) => closeModalHandle(e)}
    >
      <span className='absolute top-[10px] left-0 h-1 w-6 bg-[#626262] -rotate-45 group-hover:bg-black transition-colors' />
      <span className='absolute top-[10px] h-1 w-6 bg-[#626262] rotate-45 group-hover:bg-black transition-colors' />
    </div>
  );
};
