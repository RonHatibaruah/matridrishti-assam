import React, { useState } from 'react';
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  AlertOctagon,
  Calendar,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { MOCK_MOTHERS, MOCK_LONGITUDINAL_VITALS } from '../data/mockAssamMaternalData';
import { PregnantMother } from '../types/maternal';

export const LongitudinalRiskTracker: React.FC = () => {
  const [selectedMotherId, setSelectedMotherId] = useState<string>(MOCK_MOTHERS[0].id);
  const selectedMother = MOCK_MOTHERS.find((m) => m.id === selectedMotherId) || MOCK_MOTHERS[0];
  const vitalsHistory = MOCK_LONGITUDINAL_VITALS[selectedMother.id] || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-400" />
            Longitudinal Hemodynamic Trajectory & MAP Velocity Engine
          </h1>
          <p className="text-xs text-slate-400">
            Tracking Mean Arterial Pressure (MAP = (2·DBP + SBP)/3) progression across gestational trimesters to detect vascular resistance before overt symptoms
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-teal-950/80 border border-teal-800 text-teal-300 font-mono">
            ΔMAP &gt; 1.25 mmHg/wk = High Risk Trigger
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Patient Cohort List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Maternal Cohort Risk Worklist
            </h2>

            <div className="space-y-2">
              {MOCK_MOTHERS.map((mother) => {
                const isSelected = mother.id === selectedMotherId;
                const mapDelta = Number((mother.currentMap - mother.baselineMap).toFixed(1));
                return (
                  <button
                    key={mother.id}
                    onClick={() => setSelectedMotherId(mother.id)}
                    className={`w-full p-3 rounded-xl border text-left transition ${
                      isSelected
                        ? 'bg-slate-800 border-teal-500 shadow-sm ring-1 ring-teal-500/50'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-semibold text-white">{mother.name}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          mother.currentRisk === 'RED'
                            ? 'bg-rose-950 text-rose-300 border border-rose-800'
                            : mother.currentRisk === 'AMBER'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}
                      >
                        {mother.currentRisk}
                      </span>
                    </div>

                    <div className="mt-1 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Week {mother.gestationalWeeks} • {mother.district}</span>
                      <span className={`font-mono font-bold ${mapDelta > 10 ? 'text-rose-400' : mapDelta > 5 ? 'text-amber-400' : 'text-emerald-400'}`}>
                        ΔMAP: {mapDelta > 0 ? `+${mapDelta}` : mapDelta} mmHg
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mathematical Rationale Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2.5 text-xs text-slate-300">
            <span className="font-bold text-teal-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Clinical Physiology Note:
            </span>
            <p className="text-[11px] leading-relaxed text-slate-400">
              In normal pregnancy, systemic vascular resistance falls, creating a <strong>physiological mid-trimester dip in MAP</strong> (weeks 16–22).
            </p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Women destined for pre-eclampsia fail to experience this dip; their MAP continues to rise early, providing an actionable therapeutic window for <strong>Low-Dose Aspirin</strong> before week 16.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Trajectory Chart & Visit Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {/* Trajectory Canvas / Visualizer */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Longitudinal Hemodynamic Curve:</span>
                  <span className="text-teal-400">{selectedMother.name}</span>
                </h2>
                <span className="text-xs text-slate-400">
                  {selectedMother.village}, {selectedMother.district} • Baseline MAP: {selectedMother.baselineMap} mmHg • Current: {selectedMother.currentMap} mmHg
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2.5 h-1 rounded bg-emerald-400 inline-block"></span> Normal Band
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="w-2.5 h-1 rounded bg-rose-400 inline-block"></span> Danger (MAP ≥ 96)
                </span>
              </div>
            </div>

            {/* Custom SVG Longitudinal Trajectory Plot */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
              <svg viewBox="0 0 700 280" className="w-full h-64 min-w-[500px]">
                {/* Background Grid Lines */}
                {[70, 85, 96, 110, 125].map((val, idx) => {
                  const y = 250 - ((val - 60) / (130 - 60)) * 220;
                  return (
                    <g key={idx}>
                      <line x1="50" y1={y} x2="680" y2={y} stroke="#1e293b" strokeDasharray="3 3" />
                      <text x="42" y={y + 4} fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* X Axis Weeks */}
                {[10, 14, 18, 22, 26, 30, 34, 38].map((wk, idx) => {
                  const x = 50 + ((wk - 10) / (38 - 10)) * 630;
                  return (
                    <g key={idx}>
                      <line x1={x} y1="20" x2={x} y2="250" stroke="#1e293b" strokeDasharray="2 2" />
                      <text x={x} y="268" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">
                        Wk {wk}
                      </text>
                    </g>
                  );
                })}

                {/* Shaded Aspirin Window (12 to 16 weeks) */}
                <rect x={50 + (2 / 28) * 630} y="20" width={(4 / 28) * 630} height="230" fill="#0284c7" opacity="0.12" />
                <text x={50 + (4 / 28) * 630} y="35" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="bold">
                  Aspirin Prophylaxis Window (&lt;16w)
                </text>

                {/* Danger Threshold Line (MAP = 96 mmHg) */}
                <line x1="50" y1={250 - ((96 - 60) / 70) * 220} x2="680" y2={250 - ((96 - 60) / 70) * 220} stroke="#dc2626" strokeDasharray="4 2" strokeWidth="1.5" />
                <text x="670" y={250 - ((96 - 60) / 70) * 220 - 5} fill="#f87171" fontSize="9" textAnchor="end" fontWeight="bold">
                  Severe Pre-Eclampsia Floor (MAP ≥ 96 mmHg)
                </text>

                {/* Healthy Population Average Curve (Normal Dip) */}
                <path
                  d="M 50,181 Q 200,200 320,187 T 680,165"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2.5"
                  opacity="0.7"
                />

                {/* Patient Trajectory Points & Line */}
                {selectedMother.currentRisk === 'RED' ? (
                  <>
                    <path
                      d="M 72,175 Q 275,122 477,42"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="3.5"
                    />
                    <circle cx="72" cy="175" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="275" cy="122" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="477" cy="42" r="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                  </>
                ) : selectedMother.currentRisk === 'AMBER' ? (
                  <>
                    <path
                      d="M 50,184 Q 162,156 220,140"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="184" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="162" cy="156" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  </>
                ) : (
                  <>
                    <path
                      d="M 50,188 Q 200,203 320,192"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="188" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                    <circle cx="320" cy="192" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                  </>
                )}
              </svg>
            </div>
          </div>

          {/* Visit Log Table for Selected Mother */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Antenatal Care (ANC) Telemetry History
            </h3>

            {vitalsHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                      <th className="py-2 px-3">Date & Time</th>
                      <th className="py-2 px-3">Gestational Wk</th>
                      <th className="py-2 px-3">Blood Pressure</th>
                      <th className="py-2 px-3">Mean Arterial (MAP)</th>
                      <th className="py-2 px-3">Proteinuria</th>
                      <th className="py-2 px-3">Risk Tier</th>
                      <th className="py-2 px-3">Clinical Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {vitalsHistory.map((v) => (
                      <tr key={v.id} className="hover:bg-slate-800/40 font-mono">
                        <td className="py-2.5 px-3 text-slate-300">
                          {new Date(v.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>
                        <td className="py-2.5 px-3 text-white font-bold">{v.gestationalWeeks}w</td>
                        <td className="py-2.5 px-3 text-slate-200">{v.systolic}/{v.diastolic} mmHg</td>
                        <td className="py-2.5 px-3 text-teal-300 font-bold">{v.map} mmHg</td>
                        <td className="py-2.5 px-3 text-slate-300">{v.proteinuria}</td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              v.riskCategory === 'RED'
                                ? 'bg-rose-950 text-rose-300 border border-rose-800'
                                : v.riskCategory === 'AMBER'
                                ? 'bg-amber-950 text-amber-300 border border-amber-800'
                                : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            }`}
                          >
                            {v.riskCategory}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-400 font-sans text-[11px]">
                          {v.notes || 'Routine follow-up recorded.'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic py-2">
                Baseline reading captured at booking. Subsequent ANC records will stream via BLE sync.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
