'use client';

import { useRouter } from 'next/navigation';
import SERVICES from '@/helpers/constants/services';
import { TServiceProps } from '@/types/serviceTypes';

const BookVisit = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return <div>{children}</div>;
};

export default BookVisit;
