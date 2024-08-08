import { Metadata } from 'next';
import GalleryPage from '@/components/pages/gallery/GalleryPage';
import { GALLERY } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(GALLERY.TITLE, GALLERY.DESCRIPTION);

export const metadata: Metadata = {
  title: 'Galeria | Męski fryzjer',
  description: 'Galeria zdjęć strony internetowej Męskiego Fryzjera',
};

const Gallery = () => {
  return <GalleryPage />;
};

export default Gallery;
