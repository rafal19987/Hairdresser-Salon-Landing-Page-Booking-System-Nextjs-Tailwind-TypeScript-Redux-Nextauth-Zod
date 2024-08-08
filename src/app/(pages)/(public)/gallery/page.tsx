import GalleryPage from '@/components/pages/gallery/GalleryPage';
import { GALLERY } from '@/config';
import { generateMetadata } from '@/helpers/functions/generateMetadata';

export const metadata = generateMetadata(GALLERY.TITLE, GALLERY.DESCRIPTION);

const Gallery = () => {
  return <GalleryPage />;
};

export default Gallery;
