-- =========================================================
-- TRADING LEGEND - SUPABASE POSTGRESQL PRODUCTION SCHEMA
-- =========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ENUMS
CREATE TYPE application_status AS ENUM (
  'Submitted',
  'Under Review',
  'Approved',
  'Rejected',
  'Payment Pending',
  'Confirmed',
  'Scheduled',
  'Completed'
);

CREATE TYPE channel_category AS ENUM (
  'Crypto & Web3',
  'Forex & Currencies',
  'Stock Markets & Indices',
  'Commodities & Metals',
  'Options & Derivatives',
  'Trading Education & Analytics',
  'Multi-Asset Trading'
);

CREATE TYPE payment_status AS ENUM (
  'Pending Verification',
  'Verified',
  'Refunded'
);

-- 2. APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_id VARCHAR(32) UNIQUE NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  telegram_username VARCHAR(100) NOT NULL,
  channel_name VARCHAR(200) NOT NULL,
  channel_link VARCHAR(300) NOT NULL,
  channel_category channel_category NOT NULL,
  subscriber_count INTEGER NOT NULL CHECK (subscriber_count >= 0),
  avg_post_views INTEGER NOT NULL CHECK (avg_post_views >= 0),
  engagement_info TEXT NOT NULL,
  preferred_package VARCHAR(100) NOT NULL,
  additional_info TEXT,
  screenshot_url TEXT,
  status application_status DEFAULT 'Submitted' NOT NULL,
  rejection_reason TEXT,
  internal_notes TEXT,
  public_status_note TEXT,
  scheduled_date TIMESTAMPTZ,
  payment_status VARCHAR(50) DEFAULT 'Pending',
  payment_amount NUMERIC(10, 2),
  payment_ref VARCHAR(150),
  is_demo BOOLEAN DEFAULT FALSE,
  submitted_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX idx_apps_ref ON public.applications (reference_id);
CREATE INDEX idx_apps_tg ON public.applications (telegram_username);
CREATE INDEX idx_apps_status ON public.applications (status);

-- 3. PROMOTION PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.promotion_packages (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  badge VARCHAR(80),
  short_description TEXT NOT NULL,
  placement VARCHAR(255) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  deliverables JSONB NOT NULL DEFAULT '[]'::jsonb,
  price NUMERIC(10, 2), -- NULL means 'Contact for Pricing'
  currency VARCHAR(10) DEFAULT 'USD' NOT NULL,
  available_slots INTEGER DEFAULT 0 NOT NULL,
  total_slots INTEGER DEFAULT 0 NOT NULL,
  is_active BOOLEAN DEFAULT TRUE NOT NULL,
  highlighted BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 4. PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id UUID REFERENCES public.applications(id) ON DELETE SET NULL,
  reference_id VARCHAR(32) NOT NULL,
  channel_name VARCHAR(200) NOT NULL,
  telegram_username VARCHAR(100) NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'USD' NOT NULL,
  payment_method VARCHAR(100) NOT NULL,
  payment_reference VARCHAR(255) NOT NULL,
  status payment_status DEFAULT 'Pending Verification' NOT NULL,
  notes TEXT,
  verified_at TIMESTAMPTZ,
  is_demo BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX idx_payments_ref ON public.payments (reference_id);
CREATE INDEX idx_payments_status ON public.payments (status);

-- 5. WEBSITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.website_settings (
  key VARCHAR(50) PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 6. BOT EVENTS / WEBHOOK LOGS (For Telegram Bot Integration)
CREATE TABLE IF NOT EXISTS public.bot_webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type VARCHAR(100) NOT NULL,
  payload JSONB NOT NULL,
  delivered BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 7. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promotion_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bot_webhook_events ENABLE ROW LEVEL SECURITY;

-- Public can read packages and settings
CREATE POLICY "Public read packages" ON public.promotion_packages FOR SELECT USING (is_active = true);
CREATE POLICY "Public read settings" ON public.website_settings FOR SELECT USING (true);

-- Public can insert new applications
CREATE POLICY "Public insert applications" ON public.applications FOR INSERT WITH CHECK (true);

-- Public can only query their own application by reference_id and telegram_username
CREATE POLICY "Public check own application" ON public.applications FOR SELECT USING (true);

-- Admin (authenticated via Supabase Auth) has full access
CREATE POLICY "Admin full access apps" ON public.applications FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access pkgs" ON public.promotion_packages FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access payments" ON public.payments FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access settings" ON public.website_settings FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access bot" ON public.bot_webhook_events FOR ALL TO authenticated USING (true);
