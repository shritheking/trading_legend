import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { ChannelCategory } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const referenceId = searchParams.get('referenceId');
    const telegramUsername = searchParams.get('telegramUsername');
    const status = searchParams.get('status') || undefined;
    const search = searchParams.get('search') || undefined;
    const category = searchParams.get('category') || undefined;

    // Public tracking query: requires reference ID
    if (referenceId) {
      const app = await db.getApplicationByReference(referenceId, telegramUsername || undefined);
      if (!app) {
        return NextResponse.json(
          { error: 'Application not found or Telegram username does not match.' },
          { status: 404 }
        );
      }
      // Public safe projection: do not expose internal admin notes or other applicants' data
      const safePublicApp = {
        referenceId: app.referenceId,
        channelName: app.channelName,
        channelCategory: app.channelCategory,
        subscriberCount: app.subscriberCount,
        preferredPackage: app.preferredPackage,
        status: app.status,
        publicStatusNote: app.publicStatusNote,
        rejectionReason: app.status === 'Rejected' ? app.rejectionReason : undefined,
        submittedAt: app.submittedAt,
        updatedAt: app.updatedAt,
        scheduledDate: app.scheduledDate,
        paymentStatus: app.paymentStatus,
      };
      return NextResponse.json({ application: safePublicApp });
    }

    // Admin query: list all
    const applications = await db.getApplications({ status, search, category });
    return NextResponse.json({ applications });
  } catch (error: unknown) {
    console.error('Error fetching applications:', error);
    const msg = error instanceof Error ? error.message : 'Failed to retrieve applications';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      telegramUsername,
      channelName,
      channelLink,
      channelCategory,
      subscriberCount,
      avgPostViews,
      engagementInfo,
      preferredPackage,
      additionalInfo,
      screenshotUrl,
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json({ error: 'Please enter a valid full name (minimum 2 characters).' }, { status: 400 });
    }
    if (!telegramUsername || typeof telegramUsername !== 'string' || telegramUsername.trim().length < 3) {
      return NextResponse.json({ error: 'Please enter a valid Telegram username.' }, { status: 400 });
    }
    if (!channelName || typeof channelName !== 'string' || channelName.trim().length < 2) {
      return NextResponse.json({ error: 'Please enter your Telegram channel name.' }, { status: 400 });
    }
    if (!channelLink || typeof channelLink !== 'string' || !channelLink.includes('t.me/')) {
      return NextResponse.json({ error: 'Please provide a valid Telegram channel link (e.g., https://t.me/yourchannel).' }, { status: 400 });
    }
    if (!channelCategory) {
      return NextResponse.json({ error: 'Please select a channel category.' }, { status: 400 });
    }
    const subs = parseInt(subscriberCount, 10);
    if (isNaN(subs) || subs < 100) {
      return NextResponse.json({ error: 'Channel must have at least 100 subscribers to be eligible for review.' }, { status: 400 });
    }
    const views = parseInt(avgPostViews, 10);
    if (isNaN(views) || views < 10) {
      return NextResponse.json({ error: 'Average post views must be at least 10.' }, { status: 400 });
    }
    if (!engagementInfo || engagementInfo.trim().length < 10) {
      return NextResponse.json({ error: 'Please provide brief engagement information (at least 10 characters).' }, { status: 400 });
    }
    if (!preferredPackage) {
      return NextResponse.json({ error: 'Please select a preferred promotion package.' }, { status: 400 });
    }

    const application = await db.createApplication({
      fullName: fullName.trim(),
      telegramUsername: telegramUsername.trim().replace(/^@/, ''),
      channelName: channelName.trim(),
      channelLink: channelLink.trim(),
      channelCategory: channelCategory as ChannelCategory,
      subscriberCount: subs,
      avgPostViews: views,
      engagementInfo: engagementInfo.trim(),
      preferredPackage,
      additionalInfo: additionalInfo?.trim() || undefined,
      screenshotUrl: screenshotUrl || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been submitted successfully. Our team will review your channel and notify you about the decision.',
        referenceId: application.referenceId,
        application,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error submitting application:', error);
    const msg = error instanceof Error ? error.message : 'Internal server error processing application';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
