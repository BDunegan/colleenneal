import { NextResponse } from 'next/server';
import { init, send } from '@emailjs/browser';

// Initialize EmailJS with your public key
init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: body.name,
        from_email: body.email,
        phone: body.phone,
        message: body.message,
      }
    );

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
} 