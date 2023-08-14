import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  if (request.method !== 'POST')
    return NextResponse.json({ message: 'Method not alowed' });

  try {
    const { name, phoneNumber, message } = await request.json();
    console.log(name, phoneNumber, message);
    await supabaseClient.from('hairdresser').insert({
      name: 'Maciej',
      phoneNumber: '500500500',
      message: 'Siema Eniu jak się masz',
    });
    return NextResponse.json({
      name,
      phoneNumber,
      message,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Wiadomość nie została wysłana' });
  }
}
