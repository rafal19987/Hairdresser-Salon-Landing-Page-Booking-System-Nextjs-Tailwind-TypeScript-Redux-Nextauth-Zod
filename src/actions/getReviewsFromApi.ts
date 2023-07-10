'use server';

import { TDataFromApiProps } from '@/types/apiResponseTypes';

export async function getReviewsFromApi() {
  const API_KEY: string = process.env.API_KEY!;
  const placeID: string = 'ChIJBehxuF__IUcRODcWq63-6Uo';
  const API_URL: string = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&language=pl&key=${API_KEY}`;

  try {
    const res = await fetch(API_URL, { cache: 'force-cache' });
    const data: TDataFromApiProps = await res.json();
    const reviews = data.result.reviews;
    return reviews;
  } catch (error) {
    console.log('Something went wrong with fetching reviews from API:', error);
    return [];
  }
}
