import React, { useState } from 'react';
import {
  Bluetooth,
  Camera,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Sparkles,
  Ambulance,
  Pill,
  Volume2,
  Send,
  Calendar,
  Layers,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { MOCK_MOTHERS, computeCDSSRecommendation } from '../data/mockAssamMaternalData';
import { PregnantMother, UrinalysisProtein, DeviceInputType } from '../types/maternal';

interface ASHAScreeningCockpitProps {
  onTriggerReferral?: (mother: PregnantMother, bp: string, map: number, urgency: string) => void;
  onNavigateToReferrals?: () => void;
}

export const ASHAScreeningCockpit: React.FC<ASHAScreeningCockpitProps> = ({
  onTriggerReferral,
  onNavigateToReferrals
}) => {
  const [selectedMotherId, setSelectedMotherId] = useState<string>(MOCK_MOTHERS[0].id);
  const selectedMother = MOCK_MOTHERS.find((m) => m.id === selectedMotherId) || MOCK_MOTHERS[0];

  // Telemetry Inputs
  const [systolic, setSystolic] = useState<number>(128);
  const [diastolic, setDiastolic] = useState<number>(86);
  const [pulse, setPulse] = useState<number>(82);
  const [proteinuria, setProteinuria] = useState<UrinalysisProtein>('TRACE');
  const [deviceType, setDeviceType] = useState<DeviceInputType>('BLE_AUTOMATED');

  // Symptoms
  const [headache, setHeadache] = useState<boolean>(true);
  const [blurredVision, setBlurredVision] = useState<boolean>(false);
  const [epigastricPain, setEpigastricPain] = useState<boolean>(false);
  const [facialEdema, setFacialEdema] = useState<boolean>(true);

  // BLE Simulator State
  const [isBleScanning, setIsBleScanning] = useState<boolean>(false);
  const [isBleConnected, setIsBleConnected] = useState<boolean>(true);
  const [ocrActive, setOcrActive] = useState<boolean>(false);
  const [recordSavedToast, setRecordSavedToast] = useState<string | null>(null);

  // Compute live CDSS
  const cdss = computeCDSSRecommendation(
    systolic,
    diastolic,
    proteinuria,
    selectedMother.gestationalWeeks,
    selectedMother.baselineMap,
    { headache, blurredVision, epigastricPain, facialEdema }
  );

  const simulateBleReading = (preset: 'NORMAL' | 'AMBER' | 'CRITICAL') => {
    setIsBleScanning(true);
    setTimeout(() => {
      setIsBleScanning(false);
      if (preset === 'NORMAL') {
        setSystolic(112);
        setDiastolic(72);
        setPulse(74);
        setProteinuria('NIL');
        setHeadache(false);
        setBlurredVision(false);
        setEpigastricPain(false);
        setFacialEdema(false);
      } else if (preset === 'AMBER') {
        setSystolic(132);
        setDiastolic(88);
        setPulse(84);
        setProteinuria('1+');
        setHeadache(true);
        setBlurredVision(false);
        setEpigastricPain(false);
        setFacialEdema(true);
      } else {
        setSystolic(164);
        setDiastolic(108);
        setPulse(98);
        setProteinuria('3+');
        setHeadache(true);
        setBlurredVision(true);
        setEpigastricPain(true);
        setFacialEdema(true);
      }
    }, 800);
  };

  const handleSaveAssessment = () => {
    setRecordSavedToast('Screening assessment stored in local encrypted cache (PouchDB offline sync queue).');
    setTimeout(() => setRecordSavedToast(null), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Context */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Bluetooth className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  Frontline ASHA / ANM Screening Cockpit
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">
                    Offline Ready
                  </span>
                </h1>
                <p className="text-xs text-slate-400">
                  Sub-Centre / Ayushman Arogya Mandir Point-of-Care Clinical Triage (Ayushman Bharat Digital Mission compliant)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Preset Buttons for Simulation */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Simulate Vitals:</span>
            <button
              onClick={() => simulateBleReading('NORMAL')}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 transition font-medium"
            >
              🟢 Normotensive
            </button>
            <button
              onClick={() => simulateBleReading('AMBER')}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-800/80 hover:bg-amber-900 transition font-medium"
            >
              🟡 Early PIH
            </button>
            <button
              onClick={() => simulateBleReading('CRITICAL')}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-rose-950/80 text-rose-300 border border-rose-800/80 hover:bg-rose-900 transition font-medium"
            >
              🔴 Pre-Eclampsia
            </button>
          </div>
        </div>
      </div>

      {recordSavedToast && (
        <div className="p-3 bg-emerald-950/90 border border-emerald-600 rounded-xl text-xs text-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{recordSavedToast}</span>
        </div>
      )}

      {/* Main Grid: Patient & Screening Inputs (Left) vs CDSS & Emergency Action (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Patient Profile & Hardware Telemetry (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Patient Selector Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Select Expectant Mother (ANC Registry)
              </h2>
              <span className="text-xs font-mono text-slate-400">
                ABHA ID: <span className="text-slate-200">{selectedMother.abhaId}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MOCK_MOTHERS.map((m) => {
                const isSelected = m.id === selectedMotherId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMotherId(m.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-slate-800 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-xs text-white">{m.name}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          m.currentRisk === 'RED'
                            ? 'bg-rose-950 text-rose-300 border border-rose-800'
                            : m.currentRisk === 'AMBER'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}
                      >
                        {m.currentRisk}
                      </span>
                    </div>

                    <div className="mt-1 text-[11px] text-slate-400 flex flex-wrap gap-x-2 gap-y-0.5">
                      <span>Age: {m.age}</span>
                      <span>•</span>
                      <span>{m.gestationalWeeks} wks gestation</span>
                      <span>•</span>
                      <span>{m.district}</span>
                    </div>

                    {m.isTeaGarden && (
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60 w-fit">
                        <span>🍃 {m.teaEstateName || 'Tea Estate'}</span>
                      </div>
                    )}
                    {m.isCharArea && (
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/60 w-fit">
                        <span>🌊 Riverine Char Island</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mother Meta Pill */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-300 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <span className="text-slate-500 block text-[10px]">Gravida / Parity:</span>
                <span className="font-medium text-white">G{selectedMother.gravida}P{selectedMother.parity} ({selectedMother.parity === 0 ? 'Primigravida' : 'Multiparous'})</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Assigned ASHA:</span>
                <span className="font-medium text-white">{selectedMother.assignedAsha}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Baseline MAP (10-14w):</span>
                <span className="font-medium text-cyan-400 font-mono">{selectedMother.baselineMap} mmHg</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Expected Delivery:</span>
                <span className="font-medium text-white">{selectedMother.edd}</span>
              </div>
            </div>
          </div>

          {/* IoT Telemetry Capture Cockpit */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="p-1 rounded bg-teal-500/20 text-teal-400">
                  <Bluetooth className="w-4 h-4" />
                </span>
                Automated Clinical Telemetry (BLE & OCR)
              </h2>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsBleConnected(!isBleConnected)}
                  className={`text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium transition ${
                    isBleConnected
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isBleConnected ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`}></span>
                  {isBleConnected ? 'BLE Cuff Paired (Omron HBP)' : 'Pair Bluetooth Cuff'}
                </button>
              </div>
            </div>

            {/* Vitals Input Dial Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Systolic */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Systolic (SBP)</span>
                  <span className="text-[10px] text-slate-500 font-mono">mmHg</span>
                </div>
                <div className="my-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">{systolic}</span>
                  <span className={`text-[10px] font-bold ${systolic >= 160 ? 'text-rose-400' : systolic >= 140 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {systolic >= 160 ? 'Stage 2 Htn' : systolic >= 140 ? 'Stage 1 Htn' : 'Normal'}
                  </span>
                </div>
                <input
                  type="range"
                  min={80}
                  max={200}
                  value={systolic}
                  onChange={(e) => setSystolic(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              {/* Diastolic */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Diastolic (DBP)</span>
                  <span className="text-[10px] text-slate-500 font-mono">mmHg</span>
                </div>
                <div className="my-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">{diastolic}</span>
                  <span className={`text-[10px] font-bold ${diastolic >= 110 ? 'text-rose-400' : diastolic >= 90 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {diastolic >= 110 ? 'Critical' : diastolic >= 90 ? 'Elevated' : 'Normal'}
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={130}
                  value={diastolic}
                  onChange={(e) => setDiastolic(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              {/* Mean Arterial Pressure (MAP) Display */}
              <div className="p-4 bg-gradient-to-br from-slate-950 to-slate-900 border border-teal-800/60 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-teal-300">
                  <span className="font-semibold">Mean Arterial (MAP)</span>
                  <span className="text-[10px] font-mono text-teal-400">Computed</span>
                </div>
                <div className="my-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-teal-300 font-mono">{cdss.map}</span>
                  <span className="text-[10px] text-slate-400 font-mono">mmHg</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  Formula: <span className="font-mono text-teal-300">(2·DBP + SBP)/3</span>
                </div>
              </div>
            </div>

            {/* Urinalysis Protein & OCR Camera Selector */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-300">
                  Point-of-Care Urine Dipstick Proteinuria:
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Colorimetric Scanner
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {(['NIL', 'TRACE', '1+', '2+', '3+', '4+'] as UrinalysisProtein[]).map((val) => {
                  const isSel = proteinuria === val;
                  const isDanger = val === '2+' || val === '3+' || val === '4+';
                  return (
                    <button
                      key={val}
                      onClick={() => setProteinuria(val)}
                      className={`py-2 rounded-lg text-xs font-bold font-mono transition border ${
                        isSel
                          ? isDanger
                            ? 'bg-rose-950 text-rose-300 border-rose-500 shadow-md ring-1 ring-rose-500'
                            : 'bg-emerald-950 text-emerald-300 border-emerald-500 shadow-md ring-1 ring-emerald-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clinical Danger Signs Checklist */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">
                Maternal Neurological & Impending Eclampsia Danger Signs:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <label className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={headache}
                    onChange={(e) => setHeadache(e.target.checked)}
                    className="accent-rose-500"
                  />
                  <span className="text-slate-300 text-[11px]">Frontal Headache</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={blurredVision}
                    onChange={(e) => setBlurredVision(e.target.checked)}
                    className="accent-rose-500"
                  />
                  <span className="text-slate-300 text-[11px]">Visual Blurring</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={epigastricPain}
                    onChange={(e) => setEpigastricPain(e.target.checked)}
                    className="accent-rose-500"
                  />
                  <span className="text-slate-300 text-[11px]">Epigastric Pain</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={facialEdema}
                    onChange={(e) => setFacialEdema(e.target.checked)}
                    className="accent-rose-500"
                  />
                  <span className="text-slate-300 text-[11px]">Facial / Hand Edema</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI CDSS Recommendation & Emergency Referral Action (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Clinical Decision Support Card */}
          <div
            className={`border rounded-2xl p-5 shadow-lg space-y-4 transition-all ${
              cdss.riskCategory === 'RED'
                ? 'bg-rose-950/40 border-rose-600/80'
                : cdss.riskCategory === 'AMBER'
                ? 'bg-amber-950/40 border-amber-600/80'
                : 'bg-emerald-950/40 border-emerald-600/80'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {cdss.riskCategory === 'RED' ? (
                  <AlertOctagon className="w-6 h-6 text-rose-400 animate-bounce" />
                ) : cdss.riskCategory === 'AMBER' ? (
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                )}
                <div>
                  <h3 className="font-bold text-sm text-white">
                    {cdss.riskCategory === 'RED'
                      ? 'CRITICAL: Severe Pre-Eclampsia / Eclampsia'
                      : cdss.riskCategory === 'AMBER'
                      ? 'MODERATE RISK: Gestational Hypertension'
                      : 'NORMAL: Healthy Maternal Hemodynamics'}
                  </h3>
                  <span className="text-[11px] text-slate-300 font-mono">
                    MAP: {cdss.map} mmHg • Velocity: {cdss.mapVelocity > 0 ? `+${cdss.mapVelocity}` : cdss.mapVelocity} mmHg/wk
                  </span>
                </div>
              </div>

              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${
                  cdss.riskCategory === 'RED'
                    ? 'bg-rose-500 text-white'
                    : cdss.riskCategory === 'AMBER'
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-emerald-500 text-slate-950 font-extrabold'
                }`}
              >
                {cdss.riskCategory} TIER
              </span>
            </div>

            {/* Step-by-step GoI / WHO Clinical Directives */}
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-2.5">
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Automated Clinical Actions (GoI Protocol):
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {cdss.clinicalActions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono font-bold mt-0.5">•</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prophylaxis & Medicine Alerts */}
            {cdss.prophylaxisAspirinRecommended && (
              <div className="p-3 bg-cyan-950/80 border border-cyan-700/80 rounded-xl text-xs text-cyan-200 flex items-start gap-2.5">
                <Pill className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold block">Low-Dose Aspirin Prophylaxis Alert:</span>
                  <span>
                    Gestational age is {selectedMother.gestationalWeeks} weeks (&lt;16 weeks). Initiate Low-Dose Aspirin 75-150 mg OD at bedtime to prevent endothelial vasoconstriction.
                  </span>
                </div>
              </div>
            )}

            {cdss.mgso4Recommended && (
              <div className="p-3 bg-rose-950/90 border border-rose-600 rounded-xl text-xs text-rose-200 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-rose-300">
                  <AlertOctagon className="w-4 h-4 text-rose-400" />
                  Pritchard Magnesium Sulfate (MgSO4) Loading Directive:
                </div>
                <div className="text-[11px] leading-relaxed">
                  • <strong>4g IV:</strong> 20% solution over 5–10 minutes.<br />
                  • <strong>10g deep IM:</strong> 5g into each buttock (50% solution with 1ml 2% lignocaine).<br />
                  • <strong>Antidote Check:</strong> Verify 10% Calcium Gluconate (10ml IV) is ready in the emergency kit.
                </div>
              </div>
            )}

            {/* Bilingual Maternal Audio / Text Advisory */}
            <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Volume2 className="w-3.5 h-3.5" />
                  Assamese Voice & SMS Advisory
                </span>
                <span className="text-[10px] font-mono text-slate-500">Auto-dispatched</span>
              </div>
              <p className="text-xs text-slate-200 italic bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                "{cdss.assameseAdvisory}"
              </p>
            </div>

            {/* Actions: Save Assessment & Trigger 108 Emergency Dispatch */}
            <div className="pt-2 flex flex-col gap-2">
              {cdss.riskCategory === 'RED' ? (
                <button
                  onClick={() => {
                    if (onTriggerReferral) {
                      onTriggerReferral(selectedMother, `${systolic}/${diastolic} mmHg`, cdss.map, 'EMERGENCY_108');
                    }
                    if (onNavigateToReferrals) {
                      onNavigateToReferrals();
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-950/80 transition-all border border-rose-400/40"
                >
                  <Ambulance className="w-4 h-4" />
                  Dispatch 108 Mrityunjoy Ambulance & Reserve FRU Bed
                </button>
              ) : null}

              <button
                onClick={handleSaveAssessment}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                Store In Local Encrypted Registry (Offline PouchDB)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
