import React from 'react';
import {
  Home,
  HeartPulse,
  Activity,
  MapPin,
  Ambulance,
  Radio,
  BarChart3,
  BookOpen,
  FileText,
  UserCheck,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { ClinicalUser } from '../types/maternal';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  onOpenTutorial: () => void;
  onOpenTextDossier: () => void;
  currentUser: ClinicalUser | null;
  onOpenLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedRole,
  setSelectedRole,
  onOpenTutorial,
  onOpenTextDossier,
  currentUser,
  onOpenLoginModal
}) => {
  const navTabs = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'cockpit', label: 'Screening Cockpit', icon: HeartPulse },
    { id: 'trajectories', label: 'MAP Trajectory', icon: Activity },
    { id: 'surveillance', label: 'Assam Map', icon: MapPin },
    { id: 'referrals', label: '108 Referral', icon: Ambulance },
    { id: 'advisory', label: 'Advisory Engine', icon: Radio },
    { id: 'command', label: 'State Command', icon: BarChart3 }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* 1. TOP OFFICIAL GOVERNMENT STRIP (Clean Light Design) */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-1 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Department Attribution */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">Government of Assam</span>
            <span className="text-slate-300">•</span>
            <span>Health & Family Welfare Dept & NHM Assam</span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              NESFIC-D-23: Early PIH Detection
            </span>
          </div>

          {/* Right: Quick Links & Gateway Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTutorial}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-emerald-700 transition"
              title="Application tutorial and step-by-step user guide"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tutorial Guide</span>
            </button>

            <span className="text-slate-300">|</span>

            <button
              onClick={onOpenTextDossier}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-cyan-700 transition"
              title="Copy-paste ready 12 proposal fields"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              <span>Copy Text Dossier</span>
            </button>

            <span className="text-slate-300">|</span>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-slate-600 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ABDM Synced</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (Crisp White Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
            title="Return to MatriDrishti Overview"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 flex items-center justify-center shadow-sm shadow-emerald-800/20 group-hover:scale-105 transition">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition">
                  MatriDrishti
                </span>
                <span className="text-sm font-semibold text-emerald-700">
                  মাতৃ-দৃষ্টি
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  PIH Sentinel
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Assam Maternal Hypertensive Intelligence Network
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action / Role Picker */}
          <div className="flex items-center gap-2.5">
            {/* Clean Role Selector */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 shadow-xs hover:border-slate-300 transition">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600 hidden sm:block" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-transparent text-slate-800 border-none focus:outline-none text-xs cursor-pointer font-semibold"
              >
                <option value="ASHA_ANM">Role: Frontline ASHA / ANM</option>
                <option value="MEDICAL_OFFICER">Role: PHC Medical Officer</option>
                <option value="FRU_SPECIALIST">Role: FRU Specialist</option>
                <option value="STATE_LEADERSHIP">Role: NHM State Command</option>
              </select>
            </div>

            {/* Quick Action Button */}
            {activeTab === 'home' ? (
              <button
                onClick={() => setActiveTab('cockpit')}
                className="inline-flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-2 rounded-lg shadow-xs transition"
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Launch Cockpit</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3 py-2 rounded-lg transition"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Overview</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. MOBILE TAB SCROLLER (Clean White Design) */}
      <div className="lg:hidden flex overflow-x-auto gap-1.5 px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs scrollbar-none">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md whitespace-nowrap text-xs font-medium transition ${
                isActive
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 bg-white border border-slate-200 hover:text-slate-900'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
