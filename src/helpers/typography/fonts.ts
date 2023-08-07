import { Permanent_Marker, Montserrat } from 'next/font/google';

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['italic', 'normal'],
  variable: '--font-montserrat',
});
