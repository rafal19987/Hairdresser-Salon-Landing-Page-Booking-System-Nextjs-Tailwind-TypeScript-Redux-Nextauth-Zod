import { Permanent_Marker, Montserrat, Lato } from 'next/font/google';

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

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-lato',
});
