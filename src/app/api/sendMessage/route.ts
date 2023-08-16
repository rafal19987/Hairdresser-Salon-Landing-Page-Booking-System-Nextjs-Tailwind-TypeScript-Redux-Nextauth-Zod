import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  if (request.method !== 'POST')
    return NextResponse.json({ message: 'Method not alowed' });

  try {
    const { name, phoneNumber, message } = await request.json();
    await supabaseClient.from('hairdresser-messages').insert({
      name,
      phoneNumber,
      message,
    });
    return NextResponse.json({
      message: 'Wiadomość została wysłana',
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Wiadomość nie została wysłana',
      error,
    });
  }
}
