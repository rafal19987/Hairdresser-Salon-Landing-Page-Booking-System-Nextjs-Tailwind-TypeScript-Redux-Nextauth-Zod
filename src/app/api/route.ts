import { NextResponse } from 'next/server';
import { TDataFromApiProps, TReviewsProps } from '@/types/apiResponseTypes';

export async function GET() {
  const API_KEY: string = process.env.API_KEY!;
  const placeID: string = 'ChIJBehxuF__IUcRODcWq63-6Uo';
  const API_URL: string = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&language=pl&key=${API_KEY}`;

  try {
    const res = await fetch(API_URL);
    const data: TDataFromApiProps = await res.json();
    const reviews: TReviewsProps[] = data.result.reviews;
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(error);
  }
}
