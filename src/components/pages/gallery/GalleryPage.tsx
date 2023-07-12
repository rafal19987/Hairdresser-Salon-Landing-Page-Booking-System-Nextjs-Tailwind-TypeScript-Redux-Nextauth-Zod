import Image from 'next/image';
import image1 from '@/assets/gallery/1.jpg';
import image2 from '@/assets/gallery/2.jpg';
import image3 from '@/assets/gallery/3.jpg';
import image4 from '@/assets/gallery/4.jpg';
import image5 from '@/assets/gallery/5.jpg';
import image6 from '@/assets/gallery/6.jpg';
import image7 from '@/assets/gallery/7.jpg';
import image8 from '@/assets/gallery/8.jpg';
import image9 from '@/assets/gallery/9.jpg';
import image10 from '@/assets/gallery/10.jpg';
import image11 from '@/assets/gallery/11.jpg';
import image12 from '@/assets/gallery/12.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const GalleryPage = () => {
  return (
    <div className="w-full py-12 px-8">
      <section className="w-full">
        <ul className="flex flex-col gap-8 w-full">
          {images.map((image, idx) => (
            <li className="relative w-full h-96 rounded-3xl" key={idx + 1}>
              <Image
                className="rounded-3xl"
                src={image}
                alt={`image${idx + 1}`}
                fill
                priority={true}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GalleryPage;
