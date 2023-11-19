import { StaticImageData } from 'next/image';
import ImageContainer from './ImageContainer';
import ImageItem from './ImageItem';
import { TImageItemProps } from './ImageItem';
import * as Typography from '@/components/shared-atoms/typography/Typography';

type TEmployeeCardProps = {
  photo: StaticImageData | string;
  imageAlt: string;
  imageCaption: string;
  blockqoute: string;
};

const EmployeeCard = ({
  photo,
  imageAlt,
  imageCaption,
  blockqoute,
}: TEmployeeCardProps) => {
  return (
    <div className='flex flex-col gap-2 md:w-[400px] md:gap-4'>
      <ImageContainer
        rounded='2xl'
        mt={4}
        className='md:flex md:w-[400px] md:h-[450px] md:items-center'
      >
        <ImageItem photo={photo} imageAlt={imageAlt} />
      </ImageContainer>
      <Typography.ImageCaption text={imageCaption} />
      <Typography.Blockquote text={blockqoute} />
    </div>
  );
};

export default EmployeeCard;
