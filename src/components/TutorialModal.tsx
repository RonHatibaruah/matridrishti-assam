import React from 'react';
import {
  X,
  HeartPulse,
  Activity,
  Bluetooth,
  Ambulance,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BookOpen,
  FileText,
  Download,
  ArrowRight
} from 'lucide-react';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTextDossier?: () => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose, onOpenTextDossier }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                MatriDrishti (মাতৃ-দৃষ্টি) • Platform Tutorial & Guide
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-mono">
                  NESFIC-D-23
                </span>
              </h2>
              <span className="text-xs text-slate-400">
                What the application is, why it was built for Assam, and step-by-step instructions on how to use it
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: What the Application Is */}
        <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
          <h3 className="font-bold text-emerald-400 flex items-center gap-2 text-sm uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            1. What MatriDrishti Is
          </h3>
          <p className="text-xs leading-relaxed text-slate-300">
            <strong>MatriDrishti (মাতৃ-দৃষ্টি)</strong> is an enterprise, offline-first digital health and clinical intelligence platform built specifically for the <strong>Health & Family Welfare Department, Government of Assam</strong>, and the <strong>National Health Mission (NHM), Assam</strong>, under <strong>NESFIC-D-23</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 pt-1">
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <strong className="text-white block mb-1">Assam Maternal Mortality Context:</strong>
              Assam records an MMR of ~195 per 100k live births, rising to &gt;250 in isolated tea garden estates (*cha-bagan*) and riverine island chars. Hypertensive Disorders of Pregnancy (HDP / PIH / pre-eclampsia) cause over 24% of maternal deaths.
            </div>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
              <strong className="text-white block mb-1">Clinical Breakthrough:</strong>
              Shifts the care paradigm from reactive emergency room containment (treating active seizures at medical colleges) to proactive hemodynamic monitoring starting at 12–16 weeks gestation.
            </div>
          </div>
        </div>

        {/* Section 2: How to Use It - Step-by-Step Operator Guide */}
        <div className="space-y-4">
          <h3 className="font-bold text-cyan-400 flex items-center gap-2 text-sm uppercase tracking-wider px-1">
            <Sparkles className="w-4 h-4" />
            2. How to Use the Application (Step-by-Step Workflow)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* Step 1 */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Select or Register Expectant Mother</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                In the <strong>Screening Cockpit</strong>, choose an expectant mother from the ANC registry. Review her gestational age, parity, and whether she lives in a Tea Garden (Nahortoli, Beesakopie) or a Riverine Char Island (Alopati, Baghbar).
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px]">2</span>
                <span>Capture BLE BP Telemetry & MAP</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Press <strong>'Pair Bluetooth Cuff'</strong> or slide the BP dials. The system automatically captures exact systolic and diastolic values (eliminating terminal digit bias) and computes Mean Arterial Pressure:
                <br /><code className="text-teal-300 font-mono text-[10px]">MAP = (2·DBP + SBP) / 3</code>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">3</span>
                <span>Urinalysis & Neurological Danger Checklist</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Tap the dipstick proteinuria result (Nil, Trace, 1+, 2+, 3+, 4+) and toggle any reported danger signs: severe frontal headache, visual blurring/scotoma, epigastric agony, or facial edema.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px]">4</span>
                <span>Review GoI Clinical Decision Support (CDSS)</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                The AI engine stratifies the patient into Green, Amber, or Red. For &lt;16-week mothers with rising velocity, follow the prompt to initiate <strong>Low-Dose Aspirin (75–150 mg OD)</strong> to prevent pre-eclampsia.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">5</span>
                <span>Trigger 108 Emergency Ambulance Dispatch</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                If the patient is red-flagged for severe pre-eclampsia, tap the dispatch button. This routes the nearest 108 Mrityunjoy ambulance with GPS hamlet coordinates, prompts the Pritchard MgSO4 loading dose, and pre-reserves an FRU obstetric ICU bed.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">6</span>
                <span>Surveillance, Trajectories & Audio Advisories</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Use the top navigation to view the <strong>Longitudinal MAP Curve</strong>, inspect the <strong>Assam 35-District Geospatial Map</strong> (with Tea Estate & Boat Clinic layers), or preview bilingual Assamese/Bengali voice notes in the <strong>Advisory Dispatcher</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Official Dossier Access */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="font-bold text-white text-xs block">Need to Copy Text for Assam Startup Portal?</span>
            <span className="text-[11px] text-slate-400">
              Access clean, field-by-field copy-paste blocks complying with the 500-word limit.
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenTextDossier && (
              <button
                onClick={() => {
                  onClose();
                  onOpenTextDossier();
                }}
                className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Copy-Paste Modal</span>
              </button>
            )}
            <a
              href="/downloads/NESFIC_D23_Proposal_Ron_Hatibaruah.txt"
              download
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </a>
          </div>
        </div>

        {/* Footer Close Button */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition"
          >
            Understood • Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
