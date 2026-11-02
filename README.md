# TRADING LEGEND – PREMIUM TRADING PROMOTION PLATFORM

Production-ready, responsive, dark-mode fintech promotion platform for **TRADING LEGEND**, built for trading influencers, Telegram channel owners, and trading communities to apply for paid promotional opportunities and manage campaigns.

---

## 1. Brand Identity & Design System

- **Brand Name**: TRADING LEGEND
- **Official Logo**: Incorporates the exact official logo with original proportions intact. Assets generated:
  - `public/logo-original.jpg`: Exact original uploaded file
  - `public/logo-cropped.png`: High-resolution cropped logo
  - `public/logo-dark-mode.png`: High-contrast transparent dark mode logo (identical TL mark with white text)
  - `public/logo-icon.png`: Square emblem mark used across navbar, footer, favicon, and loading screens
  - `public/favicon.ico`: 32x32 brand favicon
- **Brand Colors**:
  - Primary Background: `#111111`
  - Secondary Background: `#191919`
  - Card Background: `#202020`
  - Primary Accent: `#F07800`
  - Secondary Accent: `#FFB000`
  - Main Text: `#FFFFFF`
  - Secondary Text: `#A3A3A3`
  - Borders: `#303030`
  - Success: `#22C55E`
  - Error: `#EF4444`
- **Typography**:
  - Headings: `Sora`
  - Body Text: `Inter`

---

## 2. Core Features & Pages

1. **Homepage (`/`)**:
   - Dynamic top announcement ticker banner.
   - Hero section with exact copy, dual CTAs ("Explore Promotions", "Apply for Promotion"), and abstract fintech trading visual (candlesticks, depth curve, order flow geometry, no fake profits).
   - 4-Pillar Trust Section (Selective Channel Reviews, Quality-Focused Promotions, Transparent Application Process, Dedicated Support).
   - About Section with official mission statement and brand mark showcase.
   - Configurable Promotion Package Cards (Basic, Featured, Premium) with dynamic slot availability and configurable pricing ("Contact for Pricing" fallback).
   - 4-Step "How It Works" Timeline (Horizontal on desktop, vertical on mobile).
   - Channel Requirements & Anti-Scam Policy standards.
   - Direct Communication Desk & Business Enquiry Form.
   - Final CTA section.
   - Comprehensive Footer with mandatory regulatory risk disclaimer.

2. **Promotion Application Page (`/apply`)**:
   - Multi-step validation: Full Name, Telegram Username, Channel Name, Channel Link, Category, Subscriber Count (min 100), Post Views, Engagement Info, Preferred Package, Supporting Screenshots/Links, Compliance Agreement.
   - Duplicate submission protection.
   - Generates unique reference ID: `TL-2026-XXXX`.
   - Displays required notification: *"Your application has been submitted successfully. Our team will review your channel and notify you about the decision."*

3. **Application Tracking Page (`/track`)**:
   - Real-time status lookup using Reference ID and optional Telegram Username for confidentiality.
   - Supports 8 lifecycle states: `Submitted`, `Under Review`, `Approved`, `Rejected`, `Payment Pending`, `Confirmed`, `Scheduled`, `Completed`.
   - Visual progress bar and reviewer finding disclosure.

4. **Dedicated Promotions Page (`/promotions`)**:
   - Interactive tier cards and feature matrix comparison table.

5. **Admin Operations Dashboard (`/admin`)**:
   - Passcode protection (`legend2026` or 1-click demo access).
   - Real-time overview KPIs: Total Applications, Pending, Approved, Rejected, Active, Completed, and Verified Revenue.
   - Searchable and filterable table with category and status dropdowns.
   - Application Review Modal: Inspect channel statistics, approve, reject with custom reason, schedule broadcast date, and save private internal reviewer notes.
   - Promotion Package Management: Edit prices, slot limits, duration, and deliverables.
   - Payment Management: Record payment receipts (crypto hashes, wire references), verify receipts to update revenue.
   - Website Management: Live editing of top banner, official Telegram channels, contact emails, and channel standards.
   - Analytics: Visual disposition bars and category breakdown.
   - Telegram Bot Hub: Interactive webhook query tester and live bot event feed.

6. **Future Telegram Bot Integration**:
   - Webhook endpoint: `POST /api/telegram/webhook`
   - Polling endpoint: `GET /api/telegram/webhook?poll=true`
   - Python client: `telegram_bot/bot.py`

---

## 3. Technology Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Lucide Icons + Google Fonts (`Sora` & `Inter`)
- **Persistence**: Zero-config dual engine:
  - Local JSON storage (`data/store.json`) with sample demo data.
  - Production Supabase PostgreSQL schema (`supabase/schema.sql`).
- **Architecture**: Modular REST API route handlers.

---

## 4. Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 5. Environment Variables & Supabase Deployment

Create a `.env.local` file with the following keys for production Supabase deployment:

```env
# Optional: Supabase configuration (Local JSON store is used by default out-of-the-box)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Admin dashboard passcode
ADMIN_PASSCODE=legend2026

# Optional: Telegram Bot Token
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
```

### Supabase Setup:
1. Open your Supabase project dashboard.
2. Navigate to **SQL Editor**.
3. Paste the contents of `supabase/schema.sql` and click **Run**.
4. Tables, Row Level Security (RLS) policies, and performance indexes are automatically created.

---

## 6. Telegram Bot Quickstart

Run the included Python daemon to verify API connectivity:
```bash
python telegram_bot/bot.py
```
Supported Bot Commands:
- `/status <REF_ID>`: Check real-time application and promotion status.
- `/slots`: View available weekly promotion slots.
- `/apply`: Get link to apply for your trading channel.
- `/support`: Connect with the review desk.
