import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const payments = await db.getPayments();
    return NextResponse.json({ payments });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { applicationId, referenceId, channelName, telegramUsername, amount, paymentMethod, paymentReference, notes } = body;

    if (!referenceId || !amount || !paymentReference) {
      return NextResponse.json({ error: 'Missing required payment details' }, { status: 400 });
    }

    const newPayment = await db.createPayment({
      applicationId: applicationId || '',
      referenceId,
      channelName: channelName || 'Channel Promotion',
      telegramUsername: telegramUsername || '',
      amount: Number(amount),
      currency: 'USD',
      paymentMethod: paymentMethod || 'Crypto (USDT TRC20/ERC20)',
      paymentReference,
      status: 'Pending Verification',
      notes,
    });

    return NextResponse.json({ success: true, payment: newPayment }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
