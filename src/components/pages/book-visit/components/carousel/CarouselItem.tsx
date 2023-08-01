'use client';

import { useState } from 'react';

const CarouselItem = ({
  dayNumber,
  dayInWords,
  isToday,
  isPast,
}: {
  dayNumber: string;
  dayInWords: string;
  isToday?: boolean;
  isPast?: boolean;
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectDay = () => {
    setIsSelected((s) => !s);
  };

  return (
    <li className="inline-block w-28 h-full flex-shrink-0" onClick={selectDay}>
      <div
        tabIndex={3}
        className={`flex flex-col items-center justify-center w-full h-full rounded-lg border border-neutral-100 transition-colors
        ${
          isPast &&
          'border-neutral-300 text-neutral-300 hover:cursor-not-allowed hover:border-neutral-300'
        }
        ${
          isSelected
            ? 'selected'
            : 'hover:cursor-pointer hover:border-[#218cac]'
        }`}
      >
        <span className="text-md font-medium uppercase">{dayInWords}</span>
        <span className="text-lg font-medium">{dayNumber}</span>
      </div>
    </li>
  );
};

export default CarouselItem;
