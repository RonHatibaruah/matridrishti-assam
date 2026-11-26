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
  ArrowRight,
  Download,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Smartphone,
  Cpu,
  Layers,
  Database,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Stethoscope,
  Globe2
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (tabId: string) => void;
  onOpenTutorial: () => void;
  onOpenTextDossier: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onOpenTutorial,
  onOpenTextDossier
}) => {
  return (
    <div className="space-y-16 py-2">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-emerald-50/30 to-slate-50 border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-sm">
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Official Challenge Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>NESFIC 2026 • Government Track (Stream 1)</span>
            <span className="text-emerald-400">•</span>
            <span className="font-mono text-emerald-900 font-bold">NESFIC-D-23</span>
          </div>

          {/* Sponsoring Department Attribution */}
          <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
            Health & Family Welfare Department • National Health Mission (NHM), Government of Assam
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            MatriDrishti <span className="text-emerald-700 font-normal">মাতৃ-দৃষ্টি</span>
            <span className="block text-2xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 bg-clip-text text-transparent mt-2">
              Assam Maternal Hypertensive Intelligence & Early PIH Sentinel
            </span>
          </h1>

          {/* Subtitle / Clinical Scope */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Transforming Assam’s maternal healthcare from reactive crisis containment into a proactive, closed-loop predictive sentinel. Empowers <strong>32,000+ frontline ASHA workers and ANMs</strong> across tea estates and riverine chars with validated IoT blood pressure telemetry, longitudinal Mean Arterial Pressure (MAP) velocity modeling, and instant <strong>108 Mrityunjoy ambulance emergency escalation</strong>.
          </p>

          {/* Primary Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('cockpit')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-700/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <HeartPulse className="w-5 h-5 text-emerald-100 animate-pulse" />
              <span>Launch ASHA Screening Cockpit</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </button>

            <button
              onClick={() => onNavigate('surveillance')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition hover:border-slate-400"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Assam GIS Surveillance Map</span>
            </button>

            <button
              onClick={onOpenTutorial}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
            >
              <BookOpen className="w-4 h-4 text-slate-600" />
              <span>How It Works (Tutorial)</span>
            </button>

            <button
              onClick={onOpenTextDossier}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-semibold text-sm border border-cyan-200 transition"
            >
              <FileText className="w-4 h-4 text-cyan-700" />
              <span>Copy 12-Field Proposal</span>
            </button>
          </div>

          {/* Compliance & Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>CDSCO Class B SaMD Investigational Prototype</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ABDM M1 / M2 / M3 Gateway Synced</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>DPDP Act 2023 & DISHA Compliant</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Assam State Data Centre (ASDC) Ready</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. ASSAM MATERNAL HEALTHCARE CRISIS METRICS */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-700">
            Epidemiological Ground Reality
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            The Urgency of Early PIH Detection in Assam
          </h3>
          <p className="text-sm text-slate-600">
            Hypertensive Disorders of Pregnancy (HDP) remain the single largest preventable driver of maternal deaths in Assam’s hard-to-reach geographies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-rose-200 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">Assam MMR</span>
              <AlertTriangle className="w-5 h-5 text-rose-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">195</div>
            <p className="text-xs text-slate-500">
              Maternal deaths per 100,000 live births (SRS/NFHS), among India’s highest statewide mortality rates.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-amber-200 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Tea Garden Belts</span>
              <Activity className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">&gt;250</div>
            <p className="text-xs text-slate-500">
              MMR per 100,000 in Upper Assam tea estates (Dibrugarh, Tinsukia), exacerbated by chronic anemia.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-indigo-200 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">HDP Mortality Share</span>
              <Stethoscope className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">24.2%</div>
            <p className="text-xs text-slate-500">
              Of all maternal deaths in Assam are directly caused by severe pre-eclampsia and eclamptic seizures.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-emerald-200 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Prophylactic Window</span>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">&lt;16 wks</div>
            <p className="text-xs text-slate-500">
              Critical therapeutic window where low-dose Aspirin reduces pre-eclampsia risk by up to 62%.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR SYSTEMIC GAPS & MATRIDRISHTI INNOVATIONS */}
      <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white space-y-8 shadow-md">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
            Core Technological Differentiation
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            How MatriDrishti Solves the 4 Systemic Bottlenecks
          </h2>
          <p className="text-sm text-slate-400">
            From fragmented paper registers to an intelligent, automated, closed-loop clinical escalation network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              1. IoT Wireless Ingestion Eliminating Terminal Digit Bias
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Problem:</strong> Frontline workers using aging manual sphygmomanometers round off readings (70%+ recorded as 120/80 mmHg), masking early diastolic escalation.<br />
              <strong>MatriDrishti Leap:</strong> Auto-captures systolic, diastolic, and pulse values via Bluetooth Low Energy (BLE GATT) directly from CDSCO-certified digital cuffs. Zero human tampering or rounding error.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              2. Longitudinal Mean Arterial Pressure (MAP) Velocity Engine
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Problem:</strong> Conventional care looks only at static 140/90 mmHg cutoffs, diagnosing pre-eclampsia only after irreversible placental ischemia has occurred.<br />
              <strong>MatriDrishti Leap:</strong> Computes MAP velocity: <code className="text-teal-300 font-mono">Delta MAP = MAP_t - MAP_baseline</code>. Identifies vascular resistance 4–6 weeks before acute onset, triggering early low-dose Aspirin prophylaxis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              3. Offline-First PWA for Brahmaputra Chars & Tea Gardens
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Problem:</strong> National cloud portals (RCH, e-Kavach) fail in Assam’s river island char/chaporis and remote tea gardens due to intermittent 2G cellular coverage.<br />
              <strong>MatriDrishti Leap:</strong> WatermelonDB / SQLite reactive local database runs 100% offline in Assamese (অসমীয়া), Bengali, and Bodo. Cryptographically syncs whenever connectivity is encountered.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
              <Ambulance className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              4. Closed-Loop 108 Emergency Dispatch & FRU Bed Pre-Reservation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Problem:</strong> Broken referral chains result in fatal transit delays when eclamptic convulsions occur in rural hamlets.<br />
              <strong>MatriDrishti Leap:</strong> Flags Red-risk patients with automated dispatch payloads to GVK EMRI 108 Mrityunjoy with GPS coordinates, alerting AMCH/GMCH emergency teams to prepare MgSO4 and ICU beds before patient arrival.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 4-STAGE MATERNAL CARE CONTINUUM */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-700">
            Clinical Workflow
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            The 4-Stage Maternal Care Continuum
          </h3>
          <p className="text-sm text-slate-600">
            Seamless operational flow connecting frontline home visits to tertiary medical college obstetric ICUs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 relative">
            <span className="text-xs font-bold text-slate-400 font-mono">STAGE 01</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Point-of-Care Triage</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              ASHA/ANM pairs BLE cuff on smartphone; auto-ingests exact BP. Dipstick colorimetry grades urine protein (1+ to 4+).
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 relative">
            <span className="text-xs font-bold text-slate-400 font-mono">STAGE 02</span>
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Edge AI Stratification</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              On-device XGBoost computes MAP velocity, flagging Green (Normal), Amber (Moderate), or Red (Severe Pre-Eclampsia).
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 relative">
            <span className="text-xs font-bold text-slate-400 font-mono">STAGE 03</span>
            <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Clinical CDSS Action</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Prompts low-dose Aspirin (75–150 mg OD) before 16 weeks. Guides Pritchard MgSO4 loading doses for impending seizures.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 relative">
            <span className="text-xs font-bold text-slate-400 font-mono">STAGE 04</span>
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 text-sm">108 Emergency Dispatch</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automated GPS webhook to 108 Mrityunjoy; pre-reserves obstetric ICU bed at nearest FRU (e.g. AMCH Dibrugarh).
            </p>
          </div>
        </div>
      </section>

      {/* 5. OPERATIONAL ENCLAVES / MODULE SHOWCASE */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-700">
            Interactive Working Enclaves
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore MatriDrishti Operational Modules
          </h3>
          <p className="text-sm text-slate-600">
            Click any module below to launch the live working prototype enclaves tailored for specific clinical roles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Module 1 */}
          <div
            onClick={() => onNavigate('cockpit')}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Frontline ASHA
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">
              Point-of-Care Screening Cockpit
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bluetooth digital cuff auto-sync, optical urine protein strip grading, and instant offline clinical risk triage.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <span>Launch Screening Cockpit</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 2 */}
          <div
            onClick={() => onNavigate('trajectories')}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-teal-300 transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                Medical Officer
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition">
              Longitudinal MAP Risk Trajectories
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hemodynamic velocity graphs, gestational progression tracking, and SHAP explainability for attending doctors.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
              <span>View Hemodynamic Curves</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 3 */}
          <div
            onClick={() => onNavigate('surveillance')}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-cyan-300 transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-cyan-700 font-semibold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                Epidemiology
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition">
              Assam Geospatial Maternal Map
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              District-by-district high-risk heatmaps across 35 Assam districts, highlighting tea estate and char sandbar clusters.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-cyan-700">
              <span>Open Geospatial Map</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 4 */}
          <div
            onClick={() => onNavigate('referrals')}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-rose-300 transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition">
                <Ambulance className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                108 Emergency
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-rose-700 transition">
              108 Emergency Referral Hub
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Priority ambulance dispatch, GPS live transit routing, and FRU obstetric ICU bed pre-reservation queue.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-rose-700">
              <span>View Emergency Console</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 5 */}
          <div
            onClick={() => onNavigate('advisory')}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                Bilingual IVR
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition">
              Multilingual Audio Advisory Engine
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hyper-local voice advisories in Assamese, Bengali, and Bodo informing expectant mothers of critical danger signs.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-indigo-700">
              <span>Listen to Voice Alerts</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Module 6 */}
          <div
            onClick={() => onNavigate('command')}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-violet-300 transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-violet-700 font-semibold bg-violet-50 px-2 py-0.5 rounded border border-violet-200">
                NHM Dispur
              </span>
            </div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-violet-700 transition">
              NHM State Command & Analytics
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Executive health leadership dashboard, clinical compliance audits, ASHA honoraria tracking, and MMR indicators.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-violet-700">
              <span>View Executive Command</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL ARCHITECTURE INFOGRAPHIC SHOWCASE */}
      <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700">
            16:9 Widescreen Technological Frameworks
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Enterprise System Architecture & Clinical Blueprints
          </h2>
          <p className="text-sm text-slate-600">
            Engineered specifically for the National Health Mission (NHM), Assam, adhering to ABDM, FHIR R4, and ASDC standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-white">
            <img
              src="/diagrams/diagram_2_system_architecture.jpg"
              alt="MatriDrishti Dual-Engine Edge-Cloud Architecture"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-white border-t border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm">
                Dual-Engine Edge-Cloud Architecture (PWA + ASDC + ABDM)
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Offline WatermelonDB/SQLite edge client paired with sovereign Kubernetes microservices at Assam State Data Centre.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-white">
            <img
              src="/diagrams/diagram_1_before_after_workflow.jpg"
              alt="Before vs After Care Paradigm Shift in Assam"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-white border-t border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm">
                Clinical Workflow Paradigm: Conventional vs. MatriDrishti Sentinel
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Shifting from uncoordinated, paper-based crisis response to continuous IoT biometric early detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OFFICIAL SUBMISSION DOSSIER & DOWNLOAD CENTER */}
      <section className="rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 shadow-lg space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
            NESFIC 2026 Submission Repository
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Official Proposal Documents & Codebase
          </h2>
          <p className="text-sm text-slate-300">
            Download the print-ready executive PDFs, copy-paste plain text files, or inspect the open-source GitHub repository.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <a
            href="/downloads/NESFIC_D23_Proposal_Ron_Hatibaruah.pdf"
            download
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 rounded-2xl p-5 space-y-3 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Official Proposal PDF</h4>
              <p className="text-xs text-slate-400 mt-1">
                Full 12-field executive proposal with 7 widescreen blueprints and budget justification.
              </p>
            </div>
            <div className="pt-3 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF (3.7 MB)</span>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="/downloads/NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.pdf"
            download
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-teal-500 rounded-2xl p-5 space-y-3 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Technical Proof of Work</h4>
              <p className="text-xs text-slate-400 mt-1">
                18-page engineering dossier: MAP math, BLE GATT specs, CDSS decision trees, and FHIR bindings.
              </p>
            </div>
            <div className="pt-3 flex items-center gap-1.5 text-xs text-teal-400 font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Download PoW (3.7 MB)</span>
            </div>
          </a>

          {/* Card 3 */}
          <button
            onClick={onOpenTextDossier}
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-2xl p-5 space-y-3 transition text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Copy-Paste Plain Text</h4>
              <p className="text-xs text-slate-400 mt-1">
                Direct textarea-compliant text with zero markup characters (&lt; or &gt;) ready for portal submission.
              </p>
            </div>
            <div className="pt-3 flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open 1-Click Copy Modal</span>
            </div>
          </button>

          {/* Card 4 */}
          <a
            href="https://github.com/RonHatibaruah/matridrishti-assam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-2xl p-5 space-y-3 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">GitHub Repository</h4>
              <p className="text-xs text-slate-400 mt-1">
                Complete open-source production codebase, Vite React frontend, and Python PDF generators.
              </p>
            </div>
            <div className="pt-3 flex items-center gap-1.5 text-xs text-indigo-400 font-semibold">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
            </div>
          </a>
        </div>
      </section>

      {/* 8. STATUTORY CLINICAL DISCLAIMER */}
      <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6 text-xs text-amber-900 space-y-2 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wider text-[11px]">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          <span>Statutory Clinical Decision Support & Regulatory Disclaimer</span>
        </div>
        <p className="leading-relaxed">
          <strong>MatriDrishti (মাতৃ-দৃষ্টি)</strong> is an investigational Clinical Decision Support System (CDSS) prototype developed under the <strong>NESFIC-D-23 challenge framework</strong> for the Department of Health & Family Welfare and National Health Mission (NHM), Government of Assam. It functions as an adjunct screening triage and early-warning tool and does <strong>NOT replace licensed clinical diagnosis, registered medical practitioner judgment, or emergency obstetric intervention</strong>. In accordance with CDSCO Class B Software as a Medical Device (SaMD) standards and NDHM/ABDM guidelines, all clinical decisions and pharmacological interventions must be validated by a licensed physician or authorized Auxiliary Nurse Midwife (ANM).
        </p>
      </section>
    </div>
  );
};
