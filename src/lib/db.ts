import fs from 'fs';
import path from 'path';
import {
  Application,
  PromotionPackage,
  PaymentRecord,
  WebsiteSettings,
  BotWebhookEvent,
} from './types';

interface DatabaseSchema {
  applications: Application[];
  packages: PromotionPackage[];
  payments: PaymentRecord[];
  settings: WebsiteSettings;
  botEvents: BotWebhookEvent[];
}

const SEED_FILE_PATH = path.join(process.cwd(), 'data', 'store.json');
const DB_FILE_PATH = process.env.VERCEL
  ? path.join('/tmp', 'trading_legend_store.json')
  : SEED_FILE_PATH;

const INITIAL_PACKAGES: PromotionPackage[] = [
  {
    id: 'pkg-basic',
    name: 'Basic Promotion',
    badge: 'Standard Reach',
    shortDescription: 'Ideal for established niche trading channels looking for steady, targeted organic reach.',
    placement: 'Official Telegram Channel & Community Feed',
    duration: '24-Hour Pinned Spotlight',
    deliverables: [
      '1x Dedicated custom promotional post',
      '24-Hour pinned post placement',
      'Direct channel referral link with tracked metrics',
      'Pre-publish content compliance review',
      'Basic engagement report summary',
    ],
    price: null, // "Contact for Pricing"
    currency: 'USD',
    availableSlots: 4,
    totalSlots: 10,
    isActive: true,
    highlighted: false,
  },
  {
    id: 'pkg-featured',
    name: 'Featured Promotion',
    badge: 'Most Popular',
    shortDescription: 'High-visibility placement across our primary network channels with prioritized scheduling.',
    placement: 'Main Broadcast Channel + Community Spotlight',
    duration: '48-Hour Pinned + 2x Highlights',
    deliverables: [
      '2x Dedicated prime-time promotional posts',
      '48-Hour pinned placement at top of feed',
      'Exclusive weekend community feature bulletin',
      'Custom graphic/creative review & optimization',
      'Detailed post-campaign performance metrics',
      'Priority channel review queue',
    ],
    price: 499, // Configurable in admin
    currency: 'USD',
    availableSlots: 2,
    totalSlots: 6,
    isActive: true,
    highlighted: true,
  },
  {
    id: 'pkg-premium',
    name: 'Premium Promotion',
    badge: 'Elite Partner Tier',
    shortDescription: 'Comprehensive multi-day campaign with prominent cross-channel exposure for leading communities.',
    placement: 'Full Network Broadcast, Discord & Telegram Network',
    duration: '7-Day Strategic Campaign',
    deliverables: [
      '4x Primetime bespoke promotional posts over 7 days',
      'Permanent post retention (no deletion after pin expiry)',
      'Featured partner badge on Trading Legend directory',
      'Custom interactive poll / AMA introduction format',
      'Dedicated campaign manager & real-time monitoring',
      'Comprehensive analytics & subscriber conversion analysis',
    ],
    price: 1199, // Configurable in admin
    currency: 'USD',
    availableSlots: 1,
    totalSlots: 3,
    isActive: true,
    highlighted: false,
  },
];

const INITIAL_SETTINGS: WebsiteSettings = {
  heroHeading: 'YOUR TRADING COMMUNITY.\nYOUR NEXT GROWTH OPPORTUNITY.',
  heroSubheading:
    'Connect your trading community with promotional opportunities designed to help quality trading channels reach a wider audience.',
  announcementText: '🔥 Q4 Promotion Slots Now Open – Manual channel quality reviews underway.',
  announcementActive: true,
  officialTelegramUsername: 'TradingLegend_Official',
  officialTelegramUrl: 'https://t.me/TradingLegend_Official',
  communityTelegramUrl: 'https://t.me/TradingLegend_Community',
  supportEmail: 'desk@tradinglegend.io',
  businessInquiryEmail: 'partnerships@tradinglegend.io',
  channelRequirements: [
    'Channels must be directly relevant to trading, market analysis, or financial education.',
    'Every application undergoes rigorous manual verification by our compliance team.',
    'Channels displaying unrealistic profit claims (e.g. 1000% daily returns) are strictly rejected.',
    'Scam-related schemes, pump-and-dump groups, or unverified copy-trading schemes are prohibited.',
    'Application submission does not guarantee approval or placement acceptance.',
    'Promotion scheduling strictly depends on weekly network slot availability to prevent feed fatigue.',
  ],
  trustPillars: [
    {
      title: 'Selective Channel Reviews',
      description: 'We manually examine each channel’s post history, analytical rigor, and community feedback before approval.',
    },
    {
      title: 'Quality-Focused Promotions',
      description: 'We prioritize genuine educational substance and long-term value over spam and sensationalized claims.',
    },
    {
      title: 'Transparent Application Process',
      description: 'Clear evaluation criteria, real-time status tracking with unique reference IDs, and direct feedback.',
    },
    {
      title: 'Dedicated Support',
      description: 'Personal campaign coordination via verified Telegram channels to guarantee punctual execution.',
    },
  ],
  razorpayEnabled: false,
  razorpayKeyId: 'rzp_test_placeholder_key',
};

const INITIAL_DEMO_APPLICATIONS: Application[] = [
  {
    id: 'app-demo-1',
    referenceId: 'TL-2026-4812',
    fullName: 'Alexander Vance',
    telegramUsername: 'vance_fx',
    channelName: 'Vance Macro FX & Commodities',
    channelLink: 'https://t.me/vance_macro_fx',
    channelCategory: 'Forex & Currencies',
    subscriberCount: 24500,
    avgPostViews: 8200,
    engagementInfo: 'Consistent 33% view rate with active discussion group of 1,800 verified traders.',
    preferredPackage: 'Featured Promotion',
    additionalInfo: 'Focus on institutional order flow, COT reports, and central bank monetary policy breakdowns.',
    status: 'Scheduled',
    publicStatusNote: 'Application approved! Promotion campaign scheduled for broadcast.',
    internalNotes: 'Audited post history. Educational content is top-tier. Clean track record.',
    submittedAt: '2026-10-28T10:15:00Z',
    updatedAt: '2026-10-29T14:20:00Z',
    scheduledDate: '2026-11-05T18:00:00Z',
    paymentStatus: 'Paid',
    paymentAmount: 499,
    paymentRef: 'TXN-USDT-99410382',
    isDemo: true,
  },
  {
    id: 'app-demo-2',
    referenceId: 'TL-2026-7209',
    fullName: 'Elena Rostova',
    telegramUsername: 'elena_crypto_charts',
    channelName: 'Alpha Deriv Insights',
    channelLink: 'https://t.me/alpha_deriv_insights',
    channelCategory: 'Crypto & Web3',
    subscriberCount: 41200,
    avgPostViews: 14500,
    engagementInfo: 'Daily on-chain analytics, volume profiles, and spot delta analysis.',
    preferredPackage: 'Premium Promotion',
    additionalInfo: 'Requesting custom Q&A session alongside the promotional broadcast.',
    status: 'Approved',
    publicStatusNote: 'Channel successfully approved by review committee. Payment confirmation pending.',
    internalNotes: 'Strong community engagement and zero scam promotions in past 12 months.',
    submittedAt: '2026-10-30T08:45:00Z',
    updatedAt: '2026-11-01T11:00:00Z',
    paymentStatus: 'Pending',
    paymentAmount: 1199,
    isDemo: true,
  },
  {
    id: 'app-demo-3',
    referenceId: 'TL-2026-9051',
    fullName: 'Marcus Sterling',
    telegramUsername: 'marcus_indices',
    channelName: 'Apex Index Trading Desk',
    channelLink: 'https://t.me/apex_index_desk',
    channelCategory: 'Stock Markets & Indices',
    subscriberCount: 16800,
    avgPostViews: 5400,
    engagementInfo: 'Live morning pre-market briefs covering ES, NQ, and DAX futures.',
    preferredPackage: 'Basic Promotion',
    additionalInfo: 'Applying for November slot to coincide with quarterly earnings week.',
    status: 'Under Review',
    publicStatusNote: 'Your channel is currently under analytical inspection by our review desk.',
    internalNotes: 'Currently verifying follower retention and average view-to-sub ratio.',
    submittedAt: '2026-11-01T16:30:00Z',
    updatedAt: '2026-11-02T09:15:00Z',
    isDemo: true,
  },
  {
    id: 'app-demo-4',
    referenceId: 'TL-2026-3184',
    fullName: 'David K.',
    telegramUsername: 'easy_pip_millionaire',
    channelName: '1000x Signals VIP',
    channelLink: 'https://t.me/easy_pip_signals',
    channelCategory: 'Forex & Currencies',
    subscriberCount: 89000,
    avgPostViews: 1200,
    engagementInfo: 'Automated signal bot.',
    preferredPackage: 'Featured Promotion',
    status: 'Rejected',
    rejectionReason: 'Violates quality policy: channel claims guaranteed 99% win-rates and uses unverified bot activity.',
    publicStatusNote: 'Application declined: Content violates our transparent risk & quality requirements.',
    internalNotes: 'Heavy bot inflation. Suspicious subscriber spike, unrealistic profit guarantees.',
    submittedAt: '2026-10-25T14:10:00Z',
    updatedAt: '2026-10-26T09:00:00Z',
    isDemo: true,
  },
];

const INITIAL_DEMO_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay-demo-1',
    applicationId: 'app-demo-1',
    referenceId: 'TL-2026-4812',
    channelName: 'Vance Macro FX & Commodities',
    telegramUsername: 'vance_fx',
    amount: 499,
    currency: 'USD',
    paymentMethod: 'Crypto (USDT TRC20/ERC20)',
    paymentReference: '0x8f3c71a8e8b9347d4e5f1a2b3c4d5e6f7a8b9c0d',
    status: 'Verified',
    createdAt: '2026-10-29T15:30:00Z',
    verifiedAt: '2026-10-29T16:00:00Z',
    notes: 'USDT on TRON verified on explorer. Match verified.',
    isDemo: true,
  },
];

function readDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DB_FILE_PATH)) {
      // If deployed on Vercel, clone the committed seed store to /tmp
      if (fs.existsSync(SEED_FILE_PATH) && DB_FILE_PATH !== SEED_FILE_PATH) {
        try {
          const rawSeed = fs.readFileSync(SEED_FILE_PATH, 'utf-8');
          const seedData = JSON.parse(rawSeed);
          fs.mkdirSync(path.dirname(DB_FILE_PATH), { recursive: true });
          fs.writeFileSync(DB_FILE_PATH, JSON.stringify(seedData, null, 2), 'utf-8');
          return seedData;
        } catch (copyErr) {
          console.warn('Could not copy seed store, using fallback:', copyErr);
        }
      }

      const initialData: DatabaseSchema = {
        applications: INITIAL_DEMO_APPLICATIONS,
        packages: INITIAL_PACKAGES,
        payments: INITIAL_DEMO_PAYMENTS,
        settings: INITIAL_SETTINGS,
        botEvents: [],
      };
      fs.mkdirSync(path.dirname(DB_FILE_PATH), { recursive: true });
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }

    const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db store:', err);
    return {
      applications: INITIAL_DEMO_APPLICATIONS,
      packages: INITIAL_PACKAGES,
      payments: INITIAL_DEMO_PAYMENTS,
      settings: INITIAL_SETTINGS,
      botEvents: [],
    };
  }
}

function writeDb(data: DatabaseSchema): void {
  try {
    fs.mkdirSync(path.dirname(DB_FILE_PATH), { recursive: true });
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing db store:', err);
  }
}

export const db = {
  // Applications
  async getApplications(filter?: { status?: string; search?: string; category?: string }): Promise<Application[]> {
    const data = readDb();
    let results = [...data.applications];

    if (filter?.status && filter.status !== 'All') {
      results = results.filter((app) => app.status === filter.status);
    }
    if (filter?.category && filter.category !== 'All') {
      results = results.filter((app) => app.channelCategory === filter.category);
    }
    if (filter?.search) {
      const s = filter.search.toLowerCase();
      results = results.filter(
        (app) =>
          app.channelName.toLowerCase().includes(s) ||
          app.telegramUsername.toLowerCase().includes(s) ||
          app.referenceId.toLowerCase().includes(s) ||
          app.fullName.toLowerCase().includes(s)
      );
    }

    // Sort descending by submittedAt
    return results.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  },

  async getApplicationById(id: string): Promise<Application | null> {
    const data = readDb();
    return data.applications.find((app) => app.id === id) || null;
  },

  async getApplicationByReference(referenceId: string, telegramUsername?: string): Promise<Application | null> {
    const data = readDb();
    const cleanRef = referenceId.trim().toUpperCase();
    const app = data.applications.find((a) => a.referenceId.toUpperCase() === cleanRef);
    if (!app) return null;

    if (telegramUsername) {
      const cleanUser = telegramUsername.trim().replace(/^@/, '').toLowerCase();
      const storedUser = app.telegramUsername.trim().replace(/^@/, '').toLowerCase();
      if (cleanUser !== storedUser) {
        return null; // Confidentiality check
      }
    }
    return app;
  },

  async createApplication(input: Omit<Application, 'id' | 'referenceId' | 'status' | 'submittedAt' | 'updatedAt'>): Promise<Application> {
    const data = readDb();
    
    // Check duplicate telegram username or channel link within last 24h
    const now = new Date();
    const duplicate = data.applications.find(
      (a) =>
        (a.telegramUsername.toLowerCase() === input.telegramUsername.toLowerCase() ||
         a.channelLink.toLowerCase() === input.channelLink.toLowerCase()) &&
        ['Submitted', 'Under Review'].includes(a.status)
    );

    if (duplicate) {
      throw new Error('An active application for this channel or Telegram username is already under review.');
    }

    // Generate unique reference ID: TL-2026-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `TL-${now.getFullYear()}-${randomDigits}`;

    const newApp: Application = {
      ...input,
      id: `app-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      referenceId,
      status: 'Submitted',
      publicStatusNote: 'Your application has been received and queued for manual channel review.',
      submittedAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    data.applications.unshift(newApp);

    // Also trigger bot webhook event
    data.botEvents.push({
      id: `evt-${Date.now()}`,
      type: 'application.submitted',
      data: {
        referenceId: newApp.referenceId,
        channelName: newApp.channelName,
        telegramUsername: newApp.telegramUsername,
        preferredPackage: newApp.preferredPackage,
        subscriberCount: newApp.subscriberCount,
      },
      timestamp: now.toISOString(),
      delivered: false,
    });

    writeDb(data);
    return newApp;
  },

  async updateApplication(id: string, updates: Partial<Application>): Promise<Application | null> {
    const data = readDb();
    const index = data.applications.findIndex((a) => a.id === id);
    if (index === -1) return null;

    const previousStatus = data.applications[index].status;
    const updatedApp: Application = {
      ...data.applications[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    data.applications[index] = updatedApp;

    // If status changed, record webhook event for bot
    if (updates.status && updates.status !== previousStatus) {
      data.botEvents.push({
        id: `evt-${Date.now()}`,
        type: updates.status === 'Approved' ? 'application.approved' : updates.status === 'Rejected' ? 'application.rejected' : 'status.updated',
        data: {
          referenceId: updatedApp.referenceId,
          channelName: updatedApp.channelName,
          telegramUsername: updatedApp.telegramUsername,
          previousStatus,
          newStatus: updates.status,
          rejectionReason: updatedApp.rejectionReason,
          publicStatusNote: updatedApp.publicStatusNote,
        },
        timestamp: new Date().toISOString(),
        delivered: false,
      });
    }

    writeDb(data);
    return updatedApp;
  },

  // Packages
  async getPackages(): Promise<PromotionPackage[]> {
    const data = readDb();
    return data.packages;
  },

  async updatePackage(id: string, updates: Partial<PromotionPackage>): Promise<PromotionPackage | null> {
    const data = readDb();
    const index = data.packages.findIndex((p) => p.id === id);
    if (index === -1) return null;

    data.packages[index] = {
      ...data.packages[index],
      ...updates,
    };
    writeDb(data);
    return data.packages[index];
  },

  async createPackage(pkg: Omit<PromotionPackage, 'id'>): Promise<PromotionPackage> {
    const data = readDb();
    const newPkg: PromotionPackage = {
      ...pkg,
      id: `pkg-${Date.now()}`,
    };
    data.packages.push(newPkg);
    writeDb(data);
    return newPkg;
  },

  // Payments
  async getPayments(): Promise<PaymentRecord[]> {
    const data = readDb();
    return data.payments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async createPayment(input: Omit<PaymentRecord, 'id' | 'createdAt'>): Promise<PaymentRecord> {
    const data = readDb();
    const newPay: PaymentRecord = {
      ...input,
      id: `pay-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    data.payments.unshift(newPay);

    // If matching application exists, update its payment info
    const appIndex = data.applications.findIndex((a) => a.id === input.applicationId || a.referenceId === input.referenceId);
    if (appIndex !== -1) {
      data.applications[appIndex].paymentStatus = input.status === 'Verified' ? 'Paid' : 'Pending';
      data.applications[appIndex].paymentAmount = input.amount;
      data.applications[appIndex].paymentRef = input.paymentReference;
      data.applications[appIndex].updatedAt = new Date().toISOString();
    }

    writeDb(data);
    return newPay;
  },

  async updatePayment(id: string, updates: Partial<PaymentRecord>): Promise<PaymentRecord | null> {
    const data = readDb();
    const index = data.payments.findIndex((p) => p.id === id);
    if (index === -1) return null;

    data.payments[index] = {
      ...data.payments[index],
      ...updates,
      verifiedAt: updates.status === 'Verified' ? new Date().toISOString() : data.payments[index].verifiedAt,
    };

    // If verified, update corresponding application
    if (updates.status === 'Verified') {
      const appIndex = data.applications.findIndex((a) => a.id === data.payments[index].applicationId || a.referenceId === data.payments[index].referenceId);
      if (appIndex !== -1) {
        data.applications[appIndex].paymentStatus = 'Paid';
        if (data.applications[appIndex].status === 'Payment Pending') {
          data.applications[appIndex].status = 'Confirmed';
        }
        data.applications[appIndex].updatedAt = new Date().toISOString();
      }
    }

    writeDb(data);
    return data.payments[index];
  },

  // Settings
  async getSettings(): Promise<WebsiteSettings> {
    const data = readDb();
    return data.settings;
  },

  async updateSettings(updates: Partial<WebsiteSettings>): Promise<WebsiteSettings> {
    const data = readDb();
    data.settings = {
      ...data.settings,
      ...updates,
    };
    writeDb(data);
    return data.settings;
  },

  // Analytics
  async getAnalytics() {
    const data = readDb();
    const totalApplications = data.applications.length;
    const pendingApplications = data.applications.filter((a) => ['Submitted', 'Under Review'].includes(a.status)).length;
    const approvedApplications = data.applications.filter((a) => a.status === 'Approved').length;
    const rejectedApplications = data.applications.filter((a) => a.status === 'Rejected').length;
    const activePromotions = data.applications.filter((a) => ['Confirmed', 'Scheduled'].includes(a.status)).length;
    const completedPromotions = data.applications.filter((a) => a.status === 'Completed').length;

    // Verified revenue based strictly on recorded verified payments
    const verifiedPayments = data.payments.filter((p) => p.status === 'Verified');
    const totalRevenue = verifiedPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

    // Category distribution
    const categoryCounts: Record<string, number> = {};
    data.applications.forEach((app) => {
      categoryCounts[app.channelCategory] = (categoryCounts[app.channelCategory] || 0) + 1;
    });

    return {
      totalApplications,
      pendingApplications,
      approvedApplications,
      rejectedApplications,
      activePromotions,
      completedPromotions,
      totalRevenue,
      categoryCounts,
      verifiedPaymentCount: verifiedPayments.length,
    };
  },

  // Telegram Bot integration
  async getBotEvents(limit = 50): Promise<BotWebhookEvent[]> {
    const data = readDb();
    return data.botEvents.slice(-limit).reverse();
  },

  async markBotEventDelivered(id: string): Promise<void> {
    const data = readDb();
    const evt = data.botEvents.find((e) => e.id === id);
    if (evt) {
      evt.delivered = true;
      writeDb(data);
    }
  },
};
