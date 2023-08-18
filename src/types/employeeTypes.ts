import { StaticImageData } from 'next/image';

export type TApiResponseProps = {
  error: unknown;
  data: TEmployeeProps[];
  count: unknown;
  status: number;
  statusTest: string;
};

export type TEmployeeProps = {
  id: number;
  name: string;
  number: string;
  quote: string;
  photo: StaticImageData;
};
