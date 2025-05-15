import { NextResponse } from 'next/server';
import { TREATMENT_PREFERENCES } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(TREATMENT_PREFERENCES);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch treatment preferences' }, { status: 500 });
  }
} 