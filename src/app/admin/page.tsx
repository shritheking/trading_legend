'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import {
  Shield,
  Layers,
  FileText,
  DollarSign,
  Settings,
  BarChart3,
  Bot,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Calendar,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Plus,
  ExternalLink,
  Lock,
  LogOut,
  Send,
  Edit,
  Trash2,
} from 'lucide-react';
import {
  Application,
  PromotionPackage,
  PaymentRecord,
  WebsiteSettings,
  ApplicationStatus,
} from '@/lib/types';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [activeTab, setActiveTab] = useState<
    'overview' | 'applications' | 'packages' | 'payments' | 'website' | 'analytics' | 'bot'
  >('overview');

  // Data states
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [packages, setPackages] = useState<PromotionPackage[]>([]);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);
  const [analytics, setAnalytics] = useState<any>(null);

  // Filter & Search states
  const [appSearch, setAppSearch] = useState('');
  const [appStatusFilter, setAppStatusFilter] = useState('All');
  const [appCategoryFilter, setAppCategoryFilter] = useState('All');

  // Modal / Detail states
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('');
  const [internalNoteDraft, setInternalNoteDraft] = useState('');

  // Package edit state
  const [editingPkg, setEditingPkg] = useState<PromotionPackage | null>(null);

  // New Payment state
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [newPayment, setNewPayment] = useState({
    referenceId: '',
    channelName: '',
    amount: '',
    paymentReference: '',
    paymentMethod: 'Crypto (USDT TRC20/ERC20)' as any,
  });

  // Bot test state
  const [botTestRef, setBotTestRef] = useState('TL-2026-4812');
  const [botTestResult, setBotTestResult] = useState<any>(null);
  const [botTesting, setBotTesting] = useState(false);

  // Auto-authenticate on demo mount for convenience or let user enter password
  useEffect(() => {
    // Check local session
    const saved = sessionStorage.getItem('tl_admin_auth');
    if (saved === 'true') {
      setIsAuthenticated(true);
      fetchAllData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === 'legend2026' || adminPass.toLowerCase() === 'admin' || adminPass === '') {
      setIsAuthenticated(true);
      sessionStorage.setItem('tl_admin_auth', 'true');
      fetchAllData();
    } else {
      alert('Invalid admin credentials. (Hint: Use "legend2026" or click Quick Demo Access)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('tl_admin_auth');
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [appsRes, pkgsRes, paysRes, setsRes, anaRes] = await Promise.all([
        fetch('/api/applications'),
        fetch('/api/packages'),
        fetch('/api/payments'),
        fetch('/api/settings'),
        fetch('/api/analytics'),
      ]);

      const [appsData, pkgsData, paysData, setsData, anaData] = await Promise.all([
        appsRes.json(),
        pkgsRes.json(),
        paysRes.json(),
        setsRes.json(),
        anaRes.json(),
      ]);

      if (appsData.applications) setApplications(appsData.applications);
      if (pkgsData.packages) setPackages(pkgsData.packages);
      if (paysData.payments) setPayments(paysData.payments);
      if (setsData.settings) setSettings(setsData.settings);
      if (anaData.analytics) setAnalytics(anaData.analytics);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Application Actions
  const updateAppStatus = async (
    id: string,
    updates: Partial<Application>
  ) => {
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      if (data.application) {
        setApplications((prev) =>
          prev.map((a) => (a.id === id ? data.application : a))
        );
        if (selectedApp && selectedApp.id === id) {
          setSelectedApp(data.application);
        }
        // Refresh analytics
        const anaRes = await fetch('/api/analytics');
        const anaData = await anaRes.json();
        if (anaData.analytics) setAnalytics(anaData.analytics);
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleApprove = (app: Application) => {
    updateAppStatus(app.id, {
      status: 'Approved',
      publicStatusNote:
        'Application approved by review committee. Promotion reservation slot confirmed.',
    });
  };

  const handleRejectConfirm = () => {
    if (!selectedApp) return;
    updateAppStatus(selectedApp.id, {
      status: 'Rejected',
      rejectionReason:
        rejectionReason || 'Violates quality and transparency standards.',
      publicStatusNote:
        'Application declined: Content violates our quality or transparent risk requirements.',
    });
    setRejectModalOpen(false);
    setRejectionReason('');
  };

  const handleScheduleConfirm = () => {
    if (!selectedApp || !scheduleDate) return;
    updateAppStatus(selectedApp.id, {
      status: 'Scheduled',
      scheduledDate: new Date(scheduleDate).toISOString(),
      publicStatusNote: `Promotion officially scheduled for broadcast on ${new Date(scheduleDate).toLocaleDateString()}.`,
    });
    setScheduleModalOpen(false);
    setScheduleDate('');
  };

  const handleSaveInternalNote = () => {
    if (!selectedApp) return;
    updateAppStatus(selectedApp.id, {
      internalNotes: internalNoteDraft,
    });
    alert('Internal reviewer note saved.');
  };

  // Package Save
  const handleSavePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPkg) return;

    try {
      const res = await fetch('/api/packages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingPkg),
      });
      const data = await res.json();
      if (data.package) {
        setPackages((prev) =>
          prev.map((p) => (p.id === editingPkg.id ? data.package : p))
        );
        setEditingPkg(null);
        alert('Package successfully updated.');
      }
    } catch (err) {
      console.error('Error saving package:', err);
    }
  };

  // Verify Payment
  const handleVerifyPayment = async (payId: string) => {
    try {
      const res = await fetch(`/api/payments/${payId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Verified' }),
      });
      const data = await res.json();
      if (data.payment) {
        setPayments((prev) =>
          prev.map((p) => (p.id === payId ? data.payment : p))
        );
        fetchAllData(); // reload apps & revenue
      }
    } catch (err) {
      console.error('Error verifying payment:', err);
    }
  };

  // Create Payment
  const handleCreatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPayment),
      });
      const data = await res.json();
      if (data.payment) {
        setPayments((prev) => [data.payment, ...prev]);
        setPaymentModalOpen(false);
        setNewPayment({
          referenceId: '',
          channelName: '',
          amount: '',
          paymentReference: '',
          paymentMethod: 'Crypto (USDT TRC20/ERC20)',
        });
        fetchAllData();
      }
    } catch (err) {
      console.error('Error creating payment:', err);
    }
  };

  // Save Website Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;

    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
        alert('Website settings updated live.');
      }
    } catch (err) {
      console.error('Error updating settings:', err);
    }
  };

  // Test Bot Webhook
  const handleRunBotTest = async () => {
    setBotTesting(true);
    setBotTestResult(null);
    try {
      const res = await fetch('/api/telegram/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'check_status',
          referenceId: botTestRef,
        }),
      });
      const data = await res.json();
      setBotTestResult(data);
    } catch (err: any) {
      setBotTestResult({ error: err.message });
    } finally {
      setBotTesting(false);
    }
  };

  // Filtered applications
  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      !appSearch ||
      app.channelName.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.referenceId.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.telegramUsername.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.fullName.toLowerCase().includes(appSearch.toLowerCase());

    const matchesStatus =
      appStatusFilter === 'All' || app.status === appStatusFilter;

    const matchesCategory =
      appCategoryFilter === 'All' || app.channelCategory === appCategoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl text-center">
          <div className="mb-6 flex justify-center">
            <BrandLogo variant="navbar" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] border border-[#303030] text-xs font-mono text-[#F07800] mb-4">
            <Lock className="w-3.5 h-3.5 text-[#F07800]" />
            RESTRICTED ADMIN ACCESS
          </div>

          <h1 className="text-xl font-heading font-bold text-white mb-2">
            Trading Legend Operations Desk
          </h1>
          <p className="text-xs text-[#A3A3A3] mb-6">
            Enter authorized management passcode to access application review, promotion schedules, and payment verification.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              placeholder="Admin passcode (e.g. legend2026)"
              className="w-full px-4 py-3 rounded-xl fintech-input text-sm text-center"
            />

            <button
              type="submit"
              className="w-full gradient-btn-primary py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg"
            >
              Sign In to Admin Portal
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#262626]">
            <button
              onClick={() => {
                setAdminPass('legend2026');
                setIsAuthenticated(true);
                sessionStorage.setItem('tl_admin_auth', 'true');
                fetchAllData();
              }}
              className="text-xs text-[#FFB000] hover:underline font-mono"
            >
              Quick Demo Access &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 bg-[#161616] border-b border-[#2b2b2b] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BrandLogo variant="navbar" href="/" />
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#F07800]/15 text-[#FFB000] text-[11px] font-mono border border-[#F07800]/30 font-semibold">
            MANAGEMENT CONTROL
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchAllData}
            className="p-2 rounded-xl bg-[#202020] hover:bg-[#282828] border border-[#303030] text-[#A3A3A3] hover:text-white transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#202020] hover:bg-[#282828] border border-[#303030] text-xs text-[#A3A3A3] hover:text-white transition-colors"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#202020] hover:bg-[#282828] border border-[#303030] text-xs text-[#EF4444] hover:bg-[#EF4444]/10 transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Admin Navigation Tabs */}
      <div className="bg-[#141414] border-b border-[#262626] px-4 sm:px-8 overflow-x-auto">
        <div className="flex items-center gap-1 sm:gap-2 py-2 min-w-max">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'applications', label: `Applications (${applications.length})`, icon: FileText },
            { id: 'packages', label: 'Promotion Packages', icon: Layers },
            { id: 'payments', label: `Payments (${payments.length})`, icon: DollarSign },
            { id: 'website', label: 'Website Management', icon: Settings },
            { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
            { id: 'bot', label: 'Telegram Bot Hub', icon: Bot },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#222222] text-[#FFB000] border border-[#F07800]/40'
                    : 'text-[#A3A3A3] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Admin Tab Content */}
      <main className="flex-grow p-4 sm:p-8 max-w-7xl mx-auto w-full">
        {/* ================= TAB 1: OVERVIEW ================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="rounded-2xl bg-[#191919] border border-[#303030] p-5 shadow-lg">
                <div className="text-xs font-mono uppercase text-[#A3A3A3] mb-1">Total Applications</div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  {analytics?.totalApplications ?? applications.length}
                </div>
                <div className="text-[11px] font-mono text-[#777777] mt-1.5">
                  All recorded submissions
                </div>
              </div>

              <div className="rounded-2xl bg-[#191919] border border-[#303030] p-5 shadow-lg">
                <div className="text-xs font-mono uppercase text-[#FFB000] mb-1">Pending Review</div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#FFB000]">
                  {analytics?.pendingApplications ?? 0}
                </div>
                <div className="text-[11px] font-mono text-[#A3A3A3] mt-1.5">
                  Awaiting manual audit
                </div>
              </div>

              <div className="rounded-2xl bg-[#191919] border border-[#303030] p-5 shadow-lg">
                <div className="text-xs font-mono uppercase text-[#22C55E] mb-1">Approved & Active</div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#22C55E]">
                  {(analytics?.approvedApplications ?? 0) + (analytics?.activePromotions ?? 0)}
                </div>
                <div className="text-[11px] font-mono text-[#A3A3A3] mt-1.5">
                  Qualified network channels
                </div>
              </div>

              <div className="rounded-2xl bg-[#191919] border border-[#303030] p-5 shadow-lg">
                <div className="text-xs font-mono uppercase text-[#F07800] mb-1">Verified Revenue</div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  ${(analytics?.totalRevenue ?? 0).toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-[#22C55E] mt-1.5">
                  {analytics?.verifiedPaymentCount ?? 0} verified receipts
                </div>
              </div>
            </div>

            {/* Quick Action Queue */}
            <div className="rounded-3xl bg-[#191919] border border-[#303030] p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFB000]" />
                  Priority Application Queue (Pending Review)
                </h2>
                <button
                  onClick={() => {
                    setActiveTab('applications');
                    setAppStatusFilter('Under Review');
                  }}
                  className="text-xs font-mono text-[#F07800] hover:underline"
                >
                  View All &rarr;
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#2b2b2b] text-[#777777]">
                      <th className="py-3 px-3">REF ID</th>
                      <th className="py-3 px-3">CHANNEL NAME</th>
                      <th className="py-3 px-3">CATEGORY</th>
                      <th className="py-3 px-3">SUBS / VIEWS</th>
                      <th className="py-3 px-3">TIER</th>
                      <th className="py-3 px-3">STATUS</th>
                      <th className="py-3 px-3 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#242424]">
                    {applications.slice(0, 5).map((app) => (
                      <tr key={app.id} className="hover:bg-[#202020] transition-colors">
                        <td className="py-3 px-3 font-bold text-white">{app.referenceId}</td>
                        <td className="py-3 px-3 font-sans text-sm text-white">
                          <div>{app.channelName}</div>
                          <span className="text-xs text-[#777777]">@{app.telegramUsername}</span>
                        </td>
                        <td className="py-3 px-3 text-[#A3A3A3]">{app.channelCategory}</td>
                        <td className="py-3 px-3 text-white">
                          {app.subscriberCount.toLocaleString()} / {app.avgPostViews.toLocaleString()}
                        </td>
                        <td className="py-3 px-3 text-[#FFB000]">{app.preferredPackage}</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-[#202020] border border-[#333333]">
                            {app.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => {
                              setSelectedApp(app);
                              setInternalNoteDraft(app.internalNotes || '');
                            }}
                            className="px-2.5 py-1 rounded-lg bg-[#252525] hover:bg-[#303030] text-white border border-[#383838]"
                          >
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: APPLICATION MANAGEMENT ================= */}
        {activeTab === 'applications' && (
          <div className="space-y-6 animate-in fade-in">
            {/* Search and Filters Bar */}
            <div className="p-4 rounded-2xl bg-[#191919] border border-[#303030] flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  placeholder="Search by ref, channel, or username..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl fintech-input text-xs"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#777777]">Status:</span>
                  <select
                    value={appStatusFilter}
                    onChange={(e) => setAppStatusFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl fintech-input text-xs bg-[#191919]"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Submitted">Submitted</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Approved">Approved</option>
                    <option value="Payment Pending">Payment Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#777777]">Category:</span>
                  <select
                    value={appCategoryFilter}
                    onChange={(e) => setAppCategoryFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl fintech-input text-xs bg-[#191919]"
                  >
                    <option value="All">All Categories</option>
                    <option value="Crypto & Web3">Crypto & Web3</option>
                    <option value="Forex & Currencies">Forex & Currencies</option>
                    <option value="Stock Markets & Indices">Stock Markets & Indices</option>
                    <option value="Commodities & Metals">Commodities & Metals</option>
                    <option value="Options & Derivatives">Options & Derivatives</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Applications Table */}
            <div className="rounded-3xl bg-[#191919] border border-[#303030] overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#2b2b2b] bg-[#141414] text-[#777777]">
                      <th className="py-3.5 px-4">REF ID</th>
                      <th className="py-3.5 px-4">CHANNEL DETAILS</th>
                      <th className="py-3.5 px-4">CATEGORY</th>
                      <th className="py-3.5 px-4">SUBSCRIBERS</th>
                      <th className="py-3.5 px-4">VIEWS</th>
                      <th className="py-3.5 px-4">PACKAGE</th>
                      <th className="py-3.5 px-4">STATUS</th>
                      <th className="py-3.5 px-4 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#242424]">
                    {filteredApps.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-[#777777]">
                          No applications found matching query.
                        </td>
                      </tr>
                    ) : (
                      filteredApps.map((app) => (
                        <tr key={app.id} className="hover:bg-[#202020] transition-colors">
                          <td className="py-3.5 px-4 font-bold text-white">
                            {app.referenceId}
                            {app.isDemo && (
                              <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] bg-[#333333] text-[#A3A3A3]">
                                DEMO
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 font-sans text-sm text-white">
                            <div className="font-semibold">{app.channelName}</div>
                            <div className="text-xs text-[#777777] flex items-center gap-2">
                              <span>@{app.telegramUsername}</span>
                              <a
                                href={app.channelLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#F07800] hover:underline inline-flex items-center gap-0.5"
                              >
                                link <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-[#A3A3A3]">{app.channelCategory}</td>
                          <td className="py-3.5 px-4 text-white font-semibold">
                            {app.subscriberCount.toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-white">
                            {app.avgPostViews.toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-[#FFB000]">{app.preferredPackage}</td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border ${
                                app.status === 'Approved' || app.status === 'Confirmed'
                                  ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]'
                                  : app.status === 'Rejected'
                                  ? 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]'
                                  : app.status === 'Scheduled'
                                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                                  : 'bg-[#252525] border-[#383838] text-white'
                              }`}
                            >
                              {app.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              onClick={() => {
                                setSelectedApp(app);
                                setInternalNoteDraft(app.internalNotes || '');
                              }}
                              className="px-3 py-1.5 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-white border border-[#383838] font-medium"
                            >
                              Inspect & Audit
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: PROMOTION MANAGEMENT ================= */}
        {activeTab === 'packages' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-heading font-bold text-white">Promotion Package Tiers</h2>
                <p className="text-xs text-[#A3A3A3]">Manage prices, duration, and weekly slot caps.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-3xl bg-[#191919] border border-[#303030] p-6 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase text-[#777777]">{pkg.badge}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30">
                        {pkg.isActive ? 'ACTIVE' : 'INACTIVE'}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white mb-1">{pkg.name}</h3>
                    <p className="text-xs text-[#A3A3A3] mb-4">{pkg.shortDescription}</p>

                    <div className="p-4 rounded-xl bg-[#141414] border border-[#2b2b2b] mb-4">
                      <div className="text-[11px] font-mono text-[#777777]">Price</div>
                      <div className="text-2xl font-heading font-extrabold text-white">
                        {pkg.price ? `$${pkg.price}` : 'Contact for Pricing'}
                      </div>
                      <div className="mt-2 text-xs font-mono text-[#FFB000]">
                        Available Slots: {pkg.availableSlots} / {pkg.totalSlots}
                      </div>
                    </div>

                    <div className="text-xs text-[#A3A3A3] space-y-1 mb-4">
                      <div>
                        <span className="text-white font-medium">Duration:</span> {pkg.duration}
                      </div>
                      <div>
                        <span className="text-white font-medium">Placement:</span> {pkg.placement}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setEditingPkg({ ...pkg })}
                    className="w-full py-2.5 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-white border border-[#383838] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Edit className="w-3.5 h-3.5 text-[#F07800]" />
                    <span>Edit Package Details</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: PAYMENT MANAGEMENT ================= */}
        {activeTab === 'payments' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-heading font-bold text-white">Recorded Payments & Verification</h2>
                <p className="text-xs text-[#A3A3A3]">
                  Verify on-chain hashes, bank wire confirmations, or manage Razorpay gateway settings.
                </p>
              </div>

              <button
                onClick={() => setPaymentModalOpen(true)}
                className="gradient-btn-primary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Record New Payment</span>
              </button>
            </div>

            {/* Payments Table */}
            <div className="rounded-3xl bg-[#191919] border border-[#303030] overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#2b2b2b] bg-[#141414] text-[#777777]">
                      <th className="py-3.5 px-4">REF ID</th>
                      <th className="py-3.5 px-4">CHANNEL</th>
                      <th className="py-3.5 px-4">AMOUNT</th>
                      <th className="py-3.5 px-4">METHOD</th>
                      <th className="py-3.5 px-4">PAYMENT HASH / REF</th>
                      <th className="py-3.5 px-4">STATUS</th>
                      <th className="py-3.5 px-4 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#242424]">
                    {payments.map((p) => (
                      <tr key={p.id} className="hover:bg-[#202020] transition-colors">
                        <td className="py-3.5 px-4 font-bold text-white">{p.referenceId}</td>
                        <td className="py-3.5 px-4 font-sans text-sm text-white">{p.channelName}</td>
                        <td className="py-3.5 px-4 font-heading font-bold text-base text-white">
                          ${p.amount} {p.currency}
                        </td>
                        <td className="py-3.5 px-4 text-[#A3A3A3]">{p.paymentMethod}</td>
                        <td className="py-3.5 px-4 text-[#FFB000] max-w-xs truncate">
                          {p.paymentReference}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border ${
                              p.status === 'Verified'
                                ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]'
                                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            }`}
                          >
                            {p.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          {p.status !== 'Verified' ? (
                            <button
                              onClick={() => handleVerifyPayment(p.id)}
                              className="px-3 py-1 rounded-lg bg-[#22C55E]/20 hover:bg-[#22C55E]/30 text-[#22C55E] border border-[#22C55E]/40 font-semibold"
                            >
                              Verify Receipt
                            </button>
                          ) : (
                            <span className="text-xs text-[#22C55E] flex items-center justify-end gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Confirmed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 5: WEBSITE MANAGEMENT ================= */}
        {activeTab === 'website' && settings && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
            <div>
              <h2 className="text-xl font-heading font-bold text-white">Website & Contact Management</h2>
              <p className="text-xs text-[#A3A3A3]">
                Edit live announcement bar, official Telegram endpoints, and channel requirements.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="rounded-3xl bg-[#191919] border border-[#303030] p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                  Top Announcement Ticker Banner
                </label>
                <input
                  type="text"
                  value={settings.announcementText}
                  onChange={(e) => setSettings({ ...settings, announcementText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl fintech-input text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                    Official Telegram Review Desk
                  </label>
                  <input
                    type="text"
                    value={settings.officialTelegramUrl}
                    onChange={(e) => setSettings({ ...settings, officialTelegramUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl fintech-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                    Community Telegram Channel
                  </label>
                  <input
                    type="text"
                    value={settings.communityTelegramUrl}
                    onChange={(e) => setSettings({ ...settings, communityTelegramUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl fintech-input text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                    Operations Support Email
                  </label>
                  <input
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl fintech-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                    Partnership Inquiries Email
                  </label>
                  <input
                    type="email"
                    value={settings.businessInquiryEmail}
                    onChange={(e) => setSettings({ ...settings, businessInquiryEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl fintech-input text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <button
                  type="submit"
                  className="gradient-btn-primary px-6 py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg"
                >
                  Save Settings & Update Live Platform
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ================= TAB 6: ANALYTICS ================= */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-xl font-heading font-bold text-white">Performance Analytics & Auditing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Approval Rate Card */}
              <div className="p-6 rounded-3xl bg-[#191919] border border-[#303030] shadow-xl">
                <h3 className="text-sm font-heading font-bold text-white mb-4">
                  Application Review Disposition
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#22C55E]">Approved</span>
                      <span>{analytics?.approvedApplications ?? 0}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#202020] overflow-hidden">
                      <div
                        className="h-full bg-[#22C55E]"
                        style={{
                          width: `${Math.min(
                            100,
                            ((analytics?.approvedApplications || 1) / (analytics?.totalApplications || 1)) * 100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#FFB000]">Under Review</span>
                      <span>{analytics?.pendingApplications ?? 0}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#202020] overflow-hidden">
                      <div
                        className="h-full bg-[#FFB000]"
                        style={{
                          width: `${Math.min(
                            100,
                            ((analytics?.pendingApplications || 1) / (analytics?.totalApplications || 1)) * 100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#EF4444]">Rejected</span>
                      <span>{analytics?.rejectedApplications ?? 0}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#202020] overflow-hidden">
                      <div
                        className="h-full bg-[#EF4444]"
                        style={{
                          width: `${Math.min(
                            100,
                            ((analytics?.rejectedApplications || 1) / (analytics?.totalApplications || 1)) * 100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="p-6 rounded-3xl bg-[#191919] border border-[#303030] shadow-xl">
                <h3 className="text-sm font-heading font-bold text-white mb-4">
                  Submissions by Financial Sector
                </h3>
                <div className="space-y-2 text-xs font-mono">
                  {analytics?.categoryCounts &&
                    Object.entries(analytics.categoryCounts).map(([cat, count]: any) => (
                      <div
                        key={cat}
                        className="flex items-center justify-between p-2 rounded-xl bg-[#202020] border border-[#2b2b2b]"
                      >
                        <span className="text-[#A3A3A3]">{cat}</span>
                        <span className="text-white font-bold">{count} channels</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 7: BOT HUB ================= */}
        {activeTab === 'bot' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#FFB000]" />
                  Telegram Bot Integration Engine
                </h2>
                <p className="text-xs text-[#A3A3A3]">
                  REST webhook ready for Python Telegram bot daemon. Test queries in real-time.
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-mono">
                ONLINE
              </span>
            </div>

            {/* Test Console */}
            <div className="p-6 rounded-3xl bg-[#191919] border border-[#303030] space-y-4 shadow-xl">
              <h3 className="text-sm font-heading font-bold text-white">Simulate External Bot Query</h3>
              <p className="text-xs text-[#A3A3A3]">
                Emulates what the external Python Telegram bot receives when a user runs <code>/status &lt;REF_ID&gt;</code>.
              </p>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={botTestRef}
                  onChange={(e) => setBotTestRef(e.target.value)}
                  placeholder="Enter Ref ID e.g. TL-2026-4812"
                  className="flex-grow px-4 py-2.5 rounded-xl fintech-input text-xs font-mono"
                />
                <button
                  onClick={handleRunBotTest}
                  disabled={botTesting}
                  className="gradient-btn-primary px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap"
                >
                  {botTesting ? 'Querying...' : 'Dispatch Test'}
                </button>
              </div>

              {botTestResult && (
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#2b2b2b]">
                  <div className="text-[10px] font-mono text-[#777777] mb-1">REST Response:</div>
                  <pre className="text-xs font-mono text-[#22C55E] overflow-x-auto whitespace-pre-wrap">
                    {JSON.stringify(botTestResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-[#141414] border border-[#2b2b2b] text-xs font-mono text-[#A3A3A3] space-y-2">
              <div className="text-white font-bold">Bot Integration Endpoints:</div>
              <div>• Webhook Inbound: <code>POST /api/telegram/webhook</code></div>
              <div>• Event Polling: <code>GET /api/telegram/webhook?poll=true</code></div>
              <div>• Python Script: <code>python telegram_bot/bot.py</code></div>
            </div>
          </div>
        )}
      </main>

      {/* ================= INSPECT APPLICATION MODAL ================= */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#191919] border border-[#303030] p-6 sm:p-8 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[#2b2b2b] mb-4">
              <div>
                <div className="text-xs font-mono text-[#F07800]">{selectedApp.referenceId}</div>
                <h3 className="text-xl font-heading font-bold text-white">{selectedApp.channelName}</h3>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-2 rounded-xl bg-[#222222] text-[#A3A3A3] hover:text-white"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#777777] block">OWNER NAME</span>
                  <span className="text-white text-sm font-sans font-medium">{selectedApp.fullName}</span>
                </div>
                <div>
                  <span className="text-[#777777] block">TELEGRAM USERNAME</span>
                  <a
                    href={`https://t.me/${selectedApp.telegramUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFB000] text-sm hover:underline"
                  >
                    @{selectedApp.telegramUsername} &rarr;
                  </a>
                </div>
                <div>
                  <span className="text-[#777777] block">CHANNEL URL</span>
                  <a
                    href={selectedApp.channelLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#F07800] text-sm hover:underline"
                  >
                    {selectedApp.channelLink} &rarr;
                  </a>
                </div>
                <div>
                  <span className="text-[#777777] block">CATEGORY & TIER</span>
                  <span className="text-white text-sm font-sans font-medium">
                    {selectedApp.channelCategory} ({selectedApp.preferredPackage})
                  </span>
                </div>
                <div>
                  <span className="text-[#777777] block">AUDITED METRICS</span>
                  <span className="text-white font-bold text-sm">
                    {selectedApp.subscriberCount.toLocaleString()} subs • {selectedApp.avgPostViews.toLocaleString()} avg views
                  </span>
                </div>
                <div>
                  <span className="text-[#777777] block">CURRENT STATUS</span>
                  <span className="text-[#22C55E] font-bold text-sm">{selectedApp.status}</span>
                </div>
              </div>

              {/* Engagement Info */}
              <div className="p-3.5 rounded-xl bg-[#141414] border border-[#2b2b2b]">
                <div className="text-[#777777] mb-1 font-bold">APPLICANT ENGAGEMENT SUMMARY:</div>
                <p className="text-white font-sans text-xs leading-relaxed">{selectedApp.engagementInfo}</p>
              </div>

              {selectedApp.additionalInfo && (
                <div className="p-3.5 rounded-xl bg-[#141414] border border-[#2b2b2b]">
                  <div className="text-[#777777] mb-1 font-bold">ADDITIONAL NOTES:</div>
                  <p className="text-white font-sans text-xs leading-relaxed">{selectedApp.additionalInfo}</p>
                </div>
              )}

              {/* Internal Reviewer Notes */}
              <div>
                <label className="text-[#777777] block mb-1 font-bold">INTERNAL REVIEWER NOTES (PRIVATE):</label>
                <div className="flex gap-2">
                  <textarea
                    rows={2}
                    value={internalNoteDraft}
                    onChange={(e) => setInternalNoteDraft(e.target.value)}
                    placeholder="Add compliance notes, verification findings, or follower quality metrics..."
                    className="w-full px-3 py-2 rounded-xl fintech-input text-xs resize-none"
                  />
                  <button
                    onClick={handleSaveInternalNote}
                    className="px-3 py-2 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-white border border-[#383838] whitespace-nowrap"
                  >
                    Save Note
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#2b2b2b] flex flex-wrap gap-2.5 justify-end">
                <button
                  onClick={() => setRejectModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#EF4444]/20 hover:bg-[#EF4444]/30 text-[#EF4444] border border-[#EF4444]/40 font-bold"
                >
                  Reject with Reason
                </button>

                <button
                  onClick={() => setScheduleModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 font-bold"
                >
                  Schedule Broadcast
                </button>

                <button
                  onClick={() => handleApprove(selectedApp)}
                  className="gradient-btn-primary px-5 py-2 rounded-xl font-bold shadow-lg"
                >
                  Approve Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= REJECT MODAL ================= */}
      {rejectModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl">
            <h3 className="text-lg font-heading font-bold text-white mb-2">
              Reject Application ({selectedApp.referenceId})
            </h3>
            <p className="text-xs text-[#A3A3A3] mb-4">
              Provide a constructive policy reason. This will be shown to the applicant in the tracking portal.
            </p>

            <textarea
              rows={3}
              required
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="e.g. Channel displays unverified profit claims or suspicious bot-driven follower spikes."
              className="w-full px-3 py-2 rounded-xl fintech-input text-xs resize-none mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setRejectModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#222222] text-[#A3A3A3] text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleRejectConfirm}
                className="px-4 py-2 rounded-xl bg-[#EF4444] hover:bg-[#dc2626] text-white font-bold text-xs"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCHEDULE MODAL ================= */}
      {scheduleModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl">
            <h3 className="text-lg font-heading font-bold text-white mb-2">
              Schedule Broadcast ({selectedApp.referenceId})
            </h3>
            <p className="text-xs text-[#A3A3A3] mb-4">
              Select date and time for channel promotional broadcast.
            </p>

            <input
              type="datetime-local"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              className="w-full px-3 py-2 rounded-xl fintech-input text-xs mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setScheduleModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#222222] text-[#A3A3A3] text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleScheduleConfirm}
                className="gradient-btn-primary px-4 py-2 rounded-xl font-bold text-xs"
              >
                Lock Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT PACKAGE MODAL ================= */}
      {editingPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="w-full max-w-lg p-6 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl">
            <h3 className="text-lg font-heading font-bold text-white mb-4">
              Edit Package: {editingPkg.name}
            </h3>

            <form onSubmit={handleSavePackage} className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-[#A3A3A3] block mb-1">PRICE (USD, LEAVE EMPTY FOR CONTACT FOR PRICING)</label>
                <input
                  type="number"
                  value={editingPkg.price ?? ''}
                  onChange={(e) =>
                    setEditingPkg({
                      ...editingPkg,
                      price: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                  placeholder="e.g. 499 (or empty for Contact for Pricing)"
                  className="w-full px-3 py-2 rounded-xl fintech-input text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[#A3A3A3] block mb-1">AVAILABLE SLOTS</label>
                  <input
                    type="number"
                    value={editingPkg.availableSlots}
                    onChange={(e) =>
                      setEditingPkg({ ...editingPkg, availableSlots: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-xl fintech-input text-sm"
                  />
                </div>
                <div>
                  <label className="text-[#A3A3A3] block mb-1">TOTAL SLOTS</label>
                  <input
                    type="number"
                    value={editingPkg.totalSlots}
                    onChange={(e) =>
                      setEditingPkg({ ...editingPkg, totalSlots: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-xl fintech-input text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#A3A3A3] block mb-1">DURATION</label>
                <input
                  type="text"
                  value={editingPkg.duration}
                  onChange={(e) => setEditingPkg({ ...editingPkg, duration: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl fintech-input text-sm font-sans"
                />
              </div>

              <div>
                <label className="text-[#A3A3A3] block mb-1">PLACEMENT</label>
                <input
                  type="text"
                  value={editingPkg.placement}
                  onChange={(e) => setEditingPkg({ ...editingPkg, placement: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl fintech-input text-sm font-sans"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingPkg(null)}
                  className="px-4 py-2 rounded-xl bg-[#222222] text-[#A3A3A3]"
                >
                  Cancel
                </button>
                <button type="submit" className="gradient-btn-primary px-5 py-2 rounded-xl font-bold">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= RECORD PAYMENT MODAL ================= */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#191919] border border-[#303030] shadow-2xl">
            <h3 className="text-lg font-heading font-bold text-white mb-4">
              Record Verified Payment Receipt
            </h3>

            <form onSubmit={handleCreatePayment} className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-[#A3A3A3] block mb-1">REFERENCE ID *</label>
                <input
                  type="text"
                  required
                  value={newPayment.referenceId}
                  onChange={(e) => setNewPayment({ ...newPayment, referenceId: e.target.value })}
                  placeholder="e.g. TL-2026-4812"
                  className="w-full px-3 py-2 rounded-xl fintech-input text-sm font-mono"
                />
              </div>

              <div>
                <label className="text-[#A3A3A3] block mb-1">CHANNEL NAME</label>
                <input
                  type="text"
                  value={newPayment.channelName}
                  onChange={(e) => setNewPayment({ ...newPayment, channelName: e.target.value })}
                  placeholder="Channel Name"
                  className="w-full px-3 py-2 rounded-xl fintech-input text-sm font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[#A3A3A3] block mb-1">AMOUNT (USD) *</label>
                  <input
                    type="number"
                    required
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                    placeholder="499"
                    className="w-full px-3 py-2 rounded-xl fintech-input text-sm"
                  />
                </div>
                <div>
                  <label className="text-[#A3A3A3] block mb-1">METHOD</label>
                  <select
                    value={newPayment.paymentMethod}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, paymentMethod: e.target.value as any })
                    }
                    className="w-full px-3 py-2 rounded-xl fintech-input text-xs bg-[#191919]"
                  >
                    <option>Crypto (USDT TRC20/ERC20)</option>
                    <option>Direct Wire</option>
                    <option>Razorpay</option>
                    <option>UPI/Manual</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[#A3A3A3] block mb-1">TRANSACTION HASH / REF *</label>
                <input
                  type="text"
                  required
                  value={newPayment.paymentReference}
                  onChange={(e) => setNewPayment({ ...newPayment, paymentReference: e.target.value })}
                  placeholder="TXID or Bank Wire Reference"
                  className="w-full px-3 py-2 rounded-xl fintech-input text-sm font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#222222] text-[#A3A3A3]"
                >
                  Cancel
                </button>
                <button type="submit" className="gradient-btn-primary px-5 py-2 rounded-xl font-bold">
                  Record Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
