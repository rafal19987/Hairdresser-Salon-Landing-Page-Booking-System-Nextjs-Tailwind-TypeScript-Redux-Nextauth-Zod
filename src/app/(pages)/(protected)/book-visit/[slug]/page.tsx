import SERVICES from '@/helpers/constants/services';
import { TServiceProps } from '@/types/serviceTypes';

const page = ({ params }: { params: { slug: number } }) => {
  const services: TServiceProps[] = SERVICES;

  return (
    <div className="absolute flex items-center justify-center w-full h-5/6 mt-10 p-20 bg-gray-500 bg-opacity-80 z-10">
      <div className="w-full h-full rounded-3xl bg-white bg-opacity-100">
        {services[params.slug - 1].service}
      </div>
    </div>
  );
};

export default page;
