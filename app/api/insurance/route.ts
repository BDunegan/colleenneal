import { NextResponse } from 'next/server';
import { INSURANCE_PROVIDERS } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json(INSURANCE_PROVIDERS);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch insurance providers' }, { status: 500 });
  }
}

// Remove POST endpoint as we're using static data 