export type ApplicationStatus =
  | 'Submitted'
  | 'Under Review'
  | 'Approved'
  | 'Rejected'
  | 'Payment Pending'
  | 'Confirmed'
  | 'Scheduled'
  | 'Completed';

export type ChannelCategory =
  | 'Crypto & Web3'
  | 'Forex & Currencies'
  | 'Stock Markets & Indices'
  | 'Commodities & Metals'
  | 'Options & Derivatives'
  | 'Trading Education & Analytics'
  | 'Multi-Asset Trading';

export interface Application {
  id: string;
  referenceId: string;
  fullName: string;
  telegramUsername: string;
  channelName: string;
  channelLink: string;
  channelCategory: ChannelCategory;
  subscriberCount: number;
  avgPostViews: number;
  engagementInfo: string;
  preferredPackage: string;
  additionalInfo?: string;
  screenshotUrl?: string;
  status: ApplicationStatus;
  rejectionReason?: string;
  internalNotes?: string;
  publicStatusNote?: string;
  submittedAt: string;
  updatedAt: string;
  scheduledDate?: string;
  paymentStatus?: 'Pending' | 'Paid' | 'Waived';
  paymentAmount?: number;
  paymentRef?: string;
  isDemo?: boolean;
}

export interface PromotionPackage {
  id: string;
  name: string;
  badge?: string;
  shortDescription: string;
  placement: string;
  duration: string;
  deliverables: string[];
  price: number | null; // null means "Contact for Pricing"
  currency: string;
  availableSlots: number;
  totalSlots: number;
  isActive: boolean;
  highlighted?: boolean;
}

export interface PaymentRecord {
  id: string;
  applicationId: string;
  referenceId: string;
  channelName: string;
  telegramUsername: string;
  amount: number;
  currency: string;
  paymentMethod: 'Crypto (USDT TRC20/ERC20)' | 'Direct Wire' | 'Razorpay' | 'UPI/Manual';
  paymentReference: string;
  status: 'Pending Verification' | 'Verified' | 'Refunded';
  createdAt: string;
  verifiedAt?: string;
  notes?: string;
  isDemo?: boolean;
}

export interface WebsiteSettings {
  heroHeading: string;
  heroSubheading: string;
  announcementText: string;
  announcementActive: boolean;
  officialTelegramUsername: string;
  officialTelegramUrl: string;
  communityTelegramUrl: string;
  supportEmail: string;
  businessInquiryEmail: string;
  channelRequirements: string[];
  trustPillars: {
    title: string;
    description: string;
  }[];
  razorpayEnabled: boolean;
  razorpayKeyId?: string;
}

export interface BotWebhookEvent {
  id: string;
  type: 'application.submitted' | 'application.approved' | 'application.rejected' | 'status.updated' | 'slot.alert';
  data: Record<string, unknown>;
  timestamp: string;
  delivered: boolean;
}
