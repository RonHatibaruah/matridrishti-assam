import React from 'react';
import {
  HeartPulse,
  Activity,
  MapPin,
  Ambulance,
  Radio,
  BarChart3,
  BookOpen,
  FileText,
  ShieldCheck,
  UserCheck
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
    { id: 'cockpit', label: 'Screening Cockpit', icon: HeartPulse, badge: 'Live BLE' },
    { id: 'trajectories', label: 'MAP Trajectories', icon: Activity, badge: 'AI Model' },
    { id: 'surveillance', label: 'Assam Geospatial Map', icon: MapPin, badge: '35 Dists' },
    { id: 'referrals', label: '108 Referral Hub', icon: Ambulance, badge: 'Emergency' },
    { id: 'advisory', label: 'Audio & Advisory', icon: Radio, badge: 'Bilingual' },
    { id: 'command', label: 'NHM State Command', icon: BarChart3, badge: 'Leadership' }
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-md">
      {/* Top Government Strip */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 px-4 py-1.5 border-b border-emerald-900/40 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-400">Government of Assam</span>
            <span className="text-slate-500">•</span>
            <span>Health & Family Welfare Department & National Health Mission (NHM)</span>
            <span className="text-slate-500">•</span>
            <span className="bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded text-[11px] font-mono border border-emerald-700/50">
              NESFIC-D-23: Early Detection of PIH
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prominent Tutorial Link */}
            <button
              onClick={onOpenTutorial}
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors bg-emerald-900/60 hover:bg-emerald-800 px-2.5 py-1 rounded-md border border-emerald-700 font-medium text-[11px]"
              title="What the application is and how to use it"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tutorial: What It Is & How to Use</span>
            </button>

            {/* Copy-Paste Text Dossier Link */}
            <button
              onClick={onOpenTextDossier}
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors bg-cyan-950/70 hover:bg-cyan-900 px-2.5 py-1 rounded-md border border-cyan-800 font-medium text-[11px]"
              title="Copy-paste ready plain text versions of the proposal"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Copy Text Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('cockpit')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 flex items-center justify-center shadow-lg shadow-emerald-950/50 border border-emerald-400/30">
              <HeartPulse className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">
                  MatriDrishti <span className="text-emerald-400 font-normal">মাতৃ-দৃষ্টি</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  PIH Sentinel
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Assam Maternal Hypertensive Intelligence & Early Pre-Eclampsia Network
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
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-700/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action / Role Picker */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-lg p-1 text-xs">
              <UserCheck className="w-3.5 h-3.5 text-slate-400 ml-1.5 hidden sm:block" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-transparent text-slate-200 border-none focus:outline-none text-xs pr-2 cursor-pointer font-medium"
              >
                <option value="ASHA_ANM" className="bg-slate-900 text-slate-100">
                  Frontline ASHA / ANM
                </option>
                <option value="MEDICAL_OFFICER" className="bg-slate-900 text-slate-100">
                  PHC/CHC Medical Officer
                </option>
                <option value="FRU_SPECIALIST" className="bg-slate-900 text-slate-100">
                  FRU Obstetric Specialist
                </option>
                <option value="STATE_LEADERSHIP" className="bg-slate-900 text-slate-100">
                  NHM State Command (Dispur)
                </option>
              </select>
            </div>

            {/* Quick Tutorial Button on right */}
            <button
              onClick={onOpenTutorial}
              className="hidden md:flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition font-medium"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tutorial</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Tab Strip */}
      <div className="lg:hidden flex overflow-x-auto gap-1 px-4 py-2 bg-slate-950 border-t border-slate-800 text-xs scrollbar-none">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap ${
                isActive ? 'bg-emerald-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
