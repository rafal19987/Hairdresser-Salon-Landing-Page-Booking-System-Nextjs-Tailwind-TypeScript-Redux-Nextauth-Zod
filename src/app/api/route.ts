import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY: string = process.env.API_KEY!;
  const placeID: string = 'ChIJBehxuF__IUcRODcWq63-6Uo';
  const API_URL: string = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&language=pl&key=${API_KEY}`;

  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log('data', data);
    return NextResponse.json(data.result.reviews);
  } catch (error) {
    return NextResponse.json(error);
  }
}
