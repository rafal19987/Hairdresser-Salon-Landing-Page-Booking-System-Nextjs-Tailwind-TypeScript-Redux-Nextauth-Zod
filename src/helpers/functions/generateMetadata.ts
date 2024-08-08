import { Metadata } from 'next';

export function generateMetadata(TITLE: string, DESCRIPTION: string): Metadata {
  return {
    metadataBase: new URL(process.env.HOST_URL!),
    title: TITLE,
    description: DESCRIPTION,
    creator: 'Rafał Izdebski',
    keywords: ['System rezerwacji', 'Strona internetowa', 'Salon fryzjerski'],
    openGraph: {
      type: 'website',
      title: TITLE,
      description: DESCRIPTION,
      locale: 'pl_PL',
      url: new URL(process.env.HOST_URL!),
      images: '/opengraph-image.png',
    },
  };
}
