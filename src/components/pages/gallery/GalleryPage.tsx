import GalleryItem from './GalleryItem';
import IMAGES from '@/helpers/constants/images';

const GalleryPage = () => {
  return (
    <div className="w-full px-4 py-12">
      <section className="w-full">
        <h2>Zdjecia</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-12 w-full">
          {IMAGES.map((image) => (
            <GalleryItem
              key={image.id}
              imageSrc={image.src}
              imageAlt={image.alt}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GalleryPage;
