import { Metadata } from 'next';
import GalleryPage from '@/components/pages/gallery/GalleryPage';

export const metadata: Metadata = {
  title: 'Galeria | Męski fryzjer',
  description: 'Galeria zdjęć strony internetowej Męskiego Fryzjera',
};

const Gallery = () => {
  return <GalleryPage />;
};

export default Gallery;
