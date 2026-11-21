import React, { useState } from 'react';
import {
  Ambulance,
  PhoneCall,
  Clock,
  MapPin,
  CheckCircle2,
  AlertOctagon,
  Building2,
  HeartPulse,
  Navigation,
  FileCheck,
  ShieldAlert
} from 'lucide-react';
import { MOCK_REFERRALS } from '../data/mockAssamMaternalData';
import { EmergencyReferral, AmbulanceStatus } from '../types/maternal';

export const EmergencyReferralConsole: React.FC = () => {
  const [referrals, setReferrals] = useState<EmergencyReferral[]>(MOCK_REFERRALS);
  const [selectedReferralId, setSelectedReferralId] = useState<string>(MOCK_REFERRALS[0].id);

  const selectedReferral = referrals.find((r) => r.id === selectedReferralId) || referrals[0];

  const advanceAmbulanceStatus = (id: string) => {
    setReferrals((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const nextStatus: Record<AmbulanceStatus, AmbulanceStatus> = {
          DISPATCHED: 'EN_ROUTE',
          EN_ROUTE: 'ARRIVED_SC',
          ARRIVED_SC: 'TRANSIT_FRU',
          TRANSIT_FRU: 'COMPLETED',
          COMPLETED: 'COMPLETED'
        };
        const updated = nextStatus[r.ambulanceStatus];
        const newEta = updated === 'COMPLETED' ? 0 : Math.max(0, r.estimatedArrivalTimeMin - 8);
        return { ...r, ambulanceStatus: updated, estimatedArrivalTimeMin: newEta };
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Ambulance className="w-5 h-5 text-rose-400 animate-pulse" />
            108 Mrityunjoy Emergency Obstetric Referral & Critical Care Hub
          </h1>
          <p className="text-xs text-slate-400">
            Closed-loop emergency dispatch linking frontline ASHA triage with GVK EMRI 108/102 ambulance networks and FRU obstetric ICU beds
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-800 text-rose-300 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
            2 Active Emergency Referrals
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Active Referral List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Active Obstetric Critical Escalation Queue
            </h2>

            <div className="space-y-3">
              {referrals.map((r) => {
                const isSelected = r.id === selectedReferralId;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedReferralId(r.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-slate-800 border-rose-500 shadow-md ring-1 ring-rose-500/50'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-xs text-white block">{r.motherName} ({r.age}y)</span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {r.id} • Week {r.gestationalWeeks}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded font-mono ${
                          r.ambulanceStatus === 'COMPLETED'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-rose-950 text-rose-300 border border-rose-800 animate-pulse'
                        }`}
                      >
                        {r.ambulanceStatus.replace('_', ' ')}
                      </span>
                    </div>

                    <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px]">Triage BP:</span>
                        <span className="font-mono font-bold text-rose-400">{r.bp} (MAP {r.map})</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">ETA to Destination:</span>
                        <span className="font-mono font-bold text-amber-300">
                          {r.ambulanceStatus === 'COMPLETED' ? 'Admitted' : `${r.estimatedArrivalTimeMin} Mins`}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 flex justify-between">
                      <span>From: {r.fromFacility}</span>
                      <span className="text-cyan-400 font-medium">To: {r.toFacility.split('(')[0]}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Dispatch & Hospital Handshake Card (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                  Emergency Referral Dossier
                </span>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{selectedReferral.motherName}</span>
                  <span className="text-xs font-mono text-slate-400">({selectedReferral.id})</span>
                </h2>
                <span className="text-xs text-slate-400">
                  Origin: {selectedReferral.village}, {selectedReferral.district} ({selectedReferral.isCharArea ? 'Riverine Char Island' : 'Tea Garden Estate'})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => advanceAmbulanceStatus(selectedReferral.id)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Simulate Next Transit Step</span>
                </button>
              </div>
            </div>

            {/* Ambulance Dispatch & Tracking Card */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Ambulance className="w-4 h-4 text-cyan-400" />
                  108 Ambulance Unit Telemetry:
                </span>
                <span className="font-mono text-cyan-400">{selectedReferral.ambulanceId}</span>
              </div>

              {/* Progress Milestones */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                {[
                  { key: 'DISPATCHED', label: '1. Dispatched' },
                  { key: 'EN_ROUTE', label: '2. En Route' },
                  { key: 'ARRIVED_SC', label: '3. At Sub-Centre' },
                  { key: 'TRANSIT_FRU', label: '4. Transit to FRU' }
                ].map((step, idx) => {
                  const isCurrent = selectedReferral.ambulanceStatus === step.key;
                  const isPassed =
                    (step.key === 'DISPATCHED') ||
                    (step.key === 'EN_ROUTE' && selectedReferral.ambulanceStatus !== 'DISPATCHED') ||
                    (step.key === 'ARRIVED_SC' && (selectedReferral.ambulanceStatus === 'TRANSIT_FRU' || selectedReferral.ambulanceStatus === 'COMPLETED')) ||
                    (step.key === 'TRANSIT_FRU' && selectedReferral.ambulanceStatus === 'COMPLETED');

                  return (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg border font-medium ${
                        isCurrent
                          ? 'bg-rose-950 text-rose-300 border-rose-600 animate-pulse'
                          : isPassed
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          : 'bg-slate-900 text-slate-500 border-slate-800'
                      }`}
                    >
                      {step.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Critical Care Checklist & FRU Handshake */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Pre-Referral Stabilization Checklist */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-white block">Pre-Referral Clinical Checklist:</span>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Pritchard MgSO4 4g IV + 10g deep IM given</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Oral Labetalol 100 mg administered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Patellar reflex present & confirmed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>10% Calcium Gluconate antidote ready</span>
                  </li>
                </ul>
              </div>

              {/* Destination Hospital Status */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-white block">Receiving FRU Hospital:</span>
                <div className="text-[11px] text-slate-300 space-y-1.5">
                  <div className="font-semibold text-cyan-400">{selectedReferral.toFacility}</div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Obstetric ICU Bed Reserved</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Blood Bank Alerted for Cross-Match</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Neonatal SNCU Warmer Pre-Heated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
