import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

/**
 * REST Webhook endpoint designed for consumption by an external Python Telegram Bot.
 *
 * Supports:
 * - Inbound status queries by reference ID or username:
 *   POST /api/telegram/webhook { action: 'check_status', referenceId: 'TL-2026-4812' }
 * - Slot availability lookup:
 *   POST /api/telegram/webhook { action: 'get_slots' }
 * - Bot command dispatch from Telegram update webhook:
 *   POST /api/telegram/webhook { update_id: 12345, message: { text: '/status TL-2026-4812' } }
 * - Polling unread platform events (application submitted, approved, rejected) to notify users:
 *   GET /api/telegram/webhook?poll=true
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if it's a direct API action from the Python bot
    if (body.action === 'check_status') {
      const { referenceId, telegramUsername } = body;
      if (!referenceId) {
        return NextResponse.json({ error: 'referenceId is required' }, { status: 400 });
      }
      const app = await db.getApplicationByReference(referenceId, telegramUsername);
      if (!app) {
        return NextResponse.json({ error: 'Application not found or unauthorized' }, { status: 404 });
      }
      return NextResponse.json({
        success: true,
        data: {
          referenceId: app.referenceId,
          channelName: app.channelName,
          status: app.status,
          publicStatusNote: app.publicStatusNote,
          rejectionReason: app.status === 'Rejected' ? app.rejectionReason : undefined,
          scheduledDate: app.scheduledDate,
          paymentStatus: app.paymentStatus,
        },
      });
    }

    if (body.action === 'get_slots') {
      const packages = await db.getPackages();
      const slots = packages.map((p) => ({
        id: p.id,
        name: p.name,
        availableSlots: p.availableSlots,
        totalSlots: p.totalSlots,
        price: p.price ? `$${p.price}` : 'Contact for Pricing',
      }));
      return NextResponse.json({ success: true, slots });
    }

    // Standard Telegram Bot Update parser (Webhook mode)
    if (body.message && body.message.text) {
      const text = body.message.text.trim();
      const chatId = body.message.chat?.id;
      const username = body.message.from?.username || '';

      if (text.startsWith('/start')) {
        return NextResponse.json({
          method: 'sendMessage',
          chat_id: chatId,
          text: `👋 Welcome to Trading Legend Promotion Desk Bot!\n\nUse commands:\n/status <REF_ID> - Check your channel application status\n/slots - View available weekly promotion slots\n/apply - Get link to apply for your trading channel\n/support - Contact our official review desk`,
          parse_mode: 'HTML',
        });
      }

      if (text.startsWith('/status')) {
        const parts = text.split(' ');
        const refId = parts[1]?.trim().toUpperCase();
        if (!refId) {
          return NextResponse.json({
            method: 'sendMessage',
            chat_id: chatId,
            text: `⚠️ Please supply your reference ID.\nExample: <code>/status TL-2026-4812</code>`,
            parse_mode: 'HTML',
          });
        }

        const app = await db.getApplicationByReference(refId);
        if (!app) {
          return NextResponse.json({
            method: 'sendMessage',
            chat_id: chatId,
            text: `❌ No application found for reference <code>${refId}</code>.\nPlease verify your Reference ID.`,
            parse_mode: 'HTML',
          });
        }

        return NextResponse.json({
          method: 'sendMessage',
          chat_id: chatId,
          text: `📊 <b>Trading Legend Application Status</b>\n\n<b>Ref ID:</b> <code>${app.referenceId}</code>\n<b>Channel:</b> ${app.channelName}\n<b>Status:</b> <b>${app.status.toUpperCase()}</b>\n\n<b>Details:</b> ${app.publicStatusNote || 'Review in progress.'}${app.scheduledDate ? `\n<b>Scheduled:</b> ${new Date(app.scheduledDate).toLocaleString()}` : ''}`,
          parse_mode: 'HTML',
        });
      }

      if (text.startsWith('/slots')) {
        const pkgs = await db.getPackages();
        const slotText = pkgs
          .map(
            (p) =>
              `• <b>${p.name}</b>: ${p.availableSlots}/${p.totalSlots} slots available (${p.price ? `$${p.price}` : 'Contact for Pricing'})`
          )
          .join('\n');

        return NextResponse.json({
          method: 'sendMessage',
          chat_id: chatId,
          text: `⚡ <b>Current Promotion Slot Availability</b>\n\n${slotText}\n\nTo reserve a placement, submit your channel at our official platform.`,
          parse_mode: 'HTML',
        });
      }

      if (text.startsWith('/apply')) {
        return NextResponse.json({
          method: 'sendMessage',
          chat_id: chatId,
          text: `🚀 Ready to submit your trading community?\n\nApply via our official verified portal:\nhttps://tradinglegend.io/apply`,
          parse_mode: 'HTML',
        });
      }
    }

    return NextResponse.json({ ok: true, received: true });
  } catch (error: unknown) {
    console.error('Telegram webhook error:', error);
    const msg = error instanceof Error ? error.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const poll = searchParams.get('poll');

    if (poll === 'true') {
      const events = await db.getBotEvents(25);
      return NextResponse.json({ success: true, events });
    }

    return NextResponse.json({
      status: 'active',
      service: 'Trading Legend Bot Architecture Endpoint',
      version: '1.0.0',
      supportedCommands: ['/start', '/status <REF_ID>', '/slots', '/apply', '/support'],
      endpoints: {
        checkStatus: 'POST /api/telegram/webhook { action: "check_status", referenceId: "TL-..." }',
        getSlots: 'POST /api/telegram/webhook { action: "get_slots" }',
        eventsPolling: 'GET /api/telegram/webhook?poll=true',
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
