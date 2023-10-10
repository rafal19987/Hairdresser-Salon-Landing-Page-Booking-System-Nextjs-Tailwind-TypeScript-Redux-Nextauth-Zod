import { NextRequest, NextResponse } from 'next/server';
import { supabaseClient } from '@/lib/supabaseClient';
import { TApiResponseProps } from '@/types/employeeTypes';
import { PostgrestResponse } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
  if (request.method !== 'GET')
    return NextResponse.json({ message: 'Method not alowed' });

  try {
    const res: PostgrestResponse<TApiResponseProps> = await supabaseClient
      .from('hairdresser-employees')
      .select('*');
    const employees = res.data;
    return NextResponse.json(employees);
  } catch (error) {
    return NextResponse.json({
      message: 'Błąd podczas pobierania pracowników',
      error,
    });
  }
}
