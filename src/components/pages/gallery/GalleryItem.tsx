import Image, { StaticImageData } from 'next/image';

const GalleryItem = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc: StaticImageData;
  imageAlt: string;
}) => {
  return (
    <li className="relative w-full h-fit rounded-3xl">
      <Image
        className="border border-gray-600 rounded-3xl object-contain"
        src={imageSrc}
        alt={imageAlt}
        priority={true}
        placeholder="blur"
      />
    </li>
  );
};

export default GalleryItem;
