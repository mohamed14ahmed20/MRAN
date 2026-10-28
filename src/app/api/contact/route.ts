import { NextResponse } from 'next/server';
import { saveInquiry } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, branch, sport, ageGroup, message, locale } = body;

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Full name is required (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return NextResponse.json(
        { error: 'Valid phone or WhatsApp number is required.' },
        { status: 400 }
      );
    }

    const saved = saveInquiry({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? String(email).trim() : '',
      branch: branch ? String(branch) : '',
      sport: sport ? String(sport) : '',
      ageGroup: ageGroup ? String(ageGroup) : '',
      message: message ? String(message).trim() : '',
      locale: locale === 'ar' ? 'ar' : 'en',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry successfully registered',
        inquiryId: saved.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
