import React from 'react';
import {
  BarChart3,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users,
  Activity,
  Ambulance,
  Building,
  HeartPulse,
  Sparkles
} from 'lucide-react';
import { MOCK_DISTRICT_EPIDEMIOLOGY } from '../data/mockAssamMaternalData';

export const ExecutiveHealthCommand: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            State Health Command & NHM Mission Director Sentinel
          </h1>
          <p className="text-xs text-slate-400">
            Directorate of Health & Family Welfare ● Government of Assam — Statewide PIH & Maternal Mortality Reduction Analytics
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-mono">
            Statewide Pilot Target: 45,000+ Pregnancies
          </span>
        </div>
      </div>

      {/* Top Level Strategic Impact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Early PIH Detection</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> +65.4%
            </span>
          </div>
          <div className="text-2xl font-extrabold text-white font-mono">65.4%</div>
          <div className="text-[11px] text-slate-400">
            Identified &lt;20 weeks gestation before acute symptoms appear
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Eclampsia Convulsions</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> -38.2%
            </span>
          </div>
          <div className="text-2xl font-extrabold text-rose-400 font-mono">-38.2%</div>
          <div className="text-[11px] text-slate-400">
            Reduction in obstetric convulsions and ICU emergency admissions
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Aspirin Prophylaxis (&lt;16w)</span>
            <span className="text-teal-400 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> 78.6%
            </span>
          </div>
          <div className="text-2xl font-extrabold text-teal-300 font-mono">78.6%</div>
          <div className="text-[11px] text-slate-400">
            Adherence to daily 75-150mg low-dose aspirin in high-risk cohort
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-1 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>108 Transit & Handoff</span>
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> 24 Mins
            </span>
          </div>
          <div className="text-2xl font-extrabold text-cyan-300 font-mono">24 Mins</div>
          <div className="text-[11px] text-slate-400">
            Average ambulance dispatch latency (compressed from 115 mins)
          </div>
        </div>
      </div>

      {/* Grant Budget & Implementation Milestone Monitor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Budget Allocation Summary (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Grant Budget Allocation (₹40.00 Lakh Deep Tech Ceiling)
            </h2>
            <span className="text-xs font-mono text-emerald-400 font-bold">100% Allocated</span>
          </div>

          <div className="space-y-3">
            {[
              { name: '1. Hardware Telemetry & Screening Kits (800 Cuffs)', amt: '₹11.20 L', share: '28.0%', col: '#0284c7' },
              { name: '2. Edge-AI & ASDC Cloud Software Development', amt: '₹10.40 L', share: '26.0%', col: '#7c3aed' },
              { name: '3. Frontline Training & Master Honoraria (2,500 ASHAs)', amt: '₹6.80 L', share: '17.0%', col: '#059669' },
              { name: '4. Clinical Co-Design & AMCH/GMCH Multi-Site Trial', amt: '₹4.60 L', share: '11.5%', col: '#d97706' },
              { name: '5. Telecommunications, WhatsApp & C-DAC SMS Gateway', amt: '₹4.20 L', share: '10.5%', col: '#06b6d4' },
              { name: '6. CERT-In Cybersecurity Audit & ABDM Badging', amt: '₹2.80 L', share: '7.0%', col: '#dc2626' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-white block">{item.name}</span>
                  <span className="text-[10px] text-slate-400">Share of statutory grant</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-white block">{item.amt}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{item.share}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Co-Design & State Health Integration (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Institutional Linkages & Clinical Governance
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <span className="font-bold text-emerald-400 block">
                Assam Medical College Hospital (AMCH), Dibrugarh
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Lead tertiary academic partner overseeing clinical protocol standardization for Upper Assam tea estate health centers and multi-centric pre-eclampsia trial validation.
              </p>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <span className="font-bold text-cyan-400 block">
                Gauhati Medical College Hospital (GMCH) & FAAMCH Barpeta
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Supervising clinical decision rules for high-risk riverine island char cohorts and training master trainers for the National Health Mission Boat Clinic staff.
              </p>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <span className="font-bold text-teal-400 block">
                GVK EMRI 108 / 102 Mrityunjoy Emergency Fleet
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Direct computer-aided dispatch (CAD) integration ensuring that any red-flagged mother in remote hamlets triggers immediate automated vehicle assignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
