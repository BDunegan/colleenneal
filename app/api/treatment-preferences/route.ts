import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import TreatmentPreference from '@/models/TreatmentPreference';

export async function GET() {
  try {
    await connectDB();
    const preferences = await TreatmentPreference.find({});
    return NextResponse.json(preferences);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch treatment preferences' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    const preference = await TreatmentPreference.create(body);
    return NextResponse.json(preference, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create treatment preference' }, { status: 500 });
  }
} 