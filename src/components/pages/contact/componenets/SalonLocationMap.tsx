import Image from 'next/image';
import googleMapsScreen from '@/assets/google-map-screen.png';

const SalonLocationMap = () => {
  return (
    <div className="relative w-full h-[300px] md:w-[500px] lg:w-[400px] lg:h-[400px]">
      <Image
        src={googleMapsScreen}
        alt="google maps screen how to reach haidresser"
        fill
      />
    </div>
  );
};

export default SalonLocationMap;
