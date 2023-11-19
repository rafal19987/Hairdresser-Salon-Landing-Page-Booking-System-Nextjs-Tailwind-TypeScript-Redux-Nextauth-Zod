import Image, { StaticImageData } from 'next/image';

const EmployeeCard = ({
  name,
  phoneNumber,
  avatar,
  ReverseCard,
}: {
  name: string;
  phoneNumber: string;
  avatar: StaticImageData;
  ReverseCard?: boolean;
}) => {
  const variantReverse = ReverseCard;

  return (
    <div
      className={`${
        ReverseCard && 'flex-row-reverse'
      } flex gap-4 w-full lg:flex-col lg:gap-8`}
    >
      <div
        className={`relative w-[187px] h-[235px] min-[500px]:w-[250px] min-[500px]:h-[280px]   md:w-[400px] md:h-[450px] ${
          ReverseCard && 'self-end'
        }`}
      >
        <Image
          className={`${
            ReverseCard && 'shadow-cardShadowReverse'
          } rounded-lg shadow-cardShadow`}
          src={avatar}
          alt={`${name} avatar image`}
          fill
        />
      </div>
      <div
        className={`${
          ReverseCard && 'items-end justify-end '
        } flex flex-col gap-2 lg:flex-row lg:gap-8`}
      >
        <span className='lg:text-2xl'>{name}</span>
        <span className='lg:text-2xl'>{phoneNumber}</span>
      </div>
    </div>
  );
};

export default EmployeeCard;
