import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Specialization from '@/models/Specialization';

export async function GET() {
  try {
    await connectDB();
    const specializations = await Specialization.find({});
    return NextResponse.json(specializations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch specializations' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    const specialization = await Specialization.create(body);
    return NextResponse.json(specialization, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create specialization' }, { status: 500 });
  }
} 