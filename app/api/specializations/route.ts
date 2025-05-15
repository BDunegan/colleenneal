import { NextResponse } from 'next/server';
import { SPECIALIZATIONS } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(SPECIALIZATIONS);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch specializations' }, { status: 500 });
  }
} 