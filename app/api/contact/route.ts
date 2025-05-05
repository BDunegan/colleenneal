import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    const message = await ContactMessage.create(body);
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
} 