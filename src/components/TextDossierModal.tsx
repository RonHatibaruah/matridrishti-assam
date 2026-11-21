import React, { useState } from 'react';
import { X, Copy, Check, FileText, Download, Sparkles } from 'lucide-react';

interface TextDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TextDossierModal: React.FC<TextDossierModalProps> = ({ isOpen, onClose }) => {
  const [activeDossier, setActiveDossier] = useState<'PROPOSAL' | 'POW'>('PROPOSAL');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 3000);
  };

  const proposalFields = [
    {
      num: 1,
      title: 'Problem Understanding & User Workflow',
      limit: '500 words',
      content: `Operational Context & Maternal Vulnerability in Assam
Assam bears one of the highest Maternal Mortality Ratios (MMR) in India (~195 deaths per 100,000 live births according to SRS/NFHS data), with vulnerable pockets in Upper Assam tea garden estates (cha-bagan) historically recording maternal mortality exceeding 250 per 100,000. Hypertensive Disorders of Pregnancy (HDP)—specifically Pregnancy-Induced Hypertension (PIH), pre-eclampsia, and eclampsia—constitute over 24% of all maternal deaths and near-miss morbidities in the state. 

PIH develops after 20 weeks of gestation and progresses insidiously. Without early risk detection, it rapidly cascades into severe pre-eclampsia, HELLP syndrome (hemolysis, elevated liver enzymes, low platelets), placental abruption, intrauterine growth restriction (IUGR), and fatal eclamptic convulsions.

Critical Systemic Bottlenecks in Current Field Workflows
The frontline maternal healthcare apparatus—comprising 32,000+ ASHA workers and Auxiliary Nurse Midwives (ANMs) operating across 4,600+ Ayushman Arogya Mandirs (Health & Wellness Centres)—struggles with severe diagnostic and operational handicaps:
1. Uncalibrated Manual Measurement & Digit Bias: BP screening relies on aging manual mercury or aneroid sphygmomanometers. Frontline workers frequently round off readings (terminal digit bias: e.g., recording 120/80 mmHg despite true readings of 138/88 mmHg), masking early diastolic escalation.
2. Failure to Track Longitudinal MAP Trajectories: Current workflows evaluate isolated, cross-sectional BP thresholds (>=140/90 mmHg). However, clinically, a rapid rise in Mean Arterial Pressure (MAP = (2*DBP + SBP)/3) between the first and second trimesters (Delta MAP > 12 mmHg) is an established biomarker of endothelial dysfunction, yet goes completely unnoticed on paper Mother and Child Protection (MCP) cards.
3. Late Stage Detection in Hard-to-Reach Terrains: In flood-prone riverine island (char/chapori) areas (Dhubri, Barpeta, South Salmara) and isolated tea estates (Dibrugarh, Tinsukia), expectant mothers receive sporadic Antenatal Care (ANC) visits. Consequently, pre-eclampsia is detected only after neurological symptoms (severe headaches, visual scotoma, epigastric pain) or active seizures erupt.
4. Delayed Emergency Referral Pathways: When eclampsia occurs, frontline workers face broken referral chains. Reaching a First Referral Unit (FRU) or tertiary hospital (e.g., AMCH Dibrugarh, GMCH Guwahati) requires navigating poor road connectivity and coordinating 108/102 Mrityunjoy ambulance dispatch without prior bed reservation or pre-referral stabilization (e.g., timely Magnesium Sulfate MgSO4 loading dose).

Intended Users & Beneficiaries
• Expectant Mothers & Families: Receive early prophylactic guidance (dietary calcium, low-dose aspirin before 16 weeks), remote continuous monitoring, and automated Assamese/Bengali/Bodo audio alerts.  
• ASHA Workers & ANMs: Gain an intuitive, offline-first clinical screening tool with Bluetooth digital BP cuffs, automated proteinuria scanner, and instant risk stratification.  
• Medical Officers & Obstetricians at PHCs/FRUs: Receive automated pre-arrival red-flag alerts, patient telemetry history, and bed-management triage.  
• NHM Assam & District Health Leadership: Monitor district-level PIH heatmaps, tea-estate surveillance clusters, and clinical intervention compliance in real time.`
    },
    {
      num: 2,
      title: 'Proposed Solution & Key Features',
      limit: '500 words',
      content: `Proposed Solution Overview
MatriDrishti (Assam Maternal Hypertensive Sentinel) is an enterprise, offline-first, AI-assisted early screening, longitudinal tracking, and emergency clinical decision-support platform engineered specifically for the Health & Family Welfare Department, Government of Assam, and National Health Mission (NHM), Assam, under NESFIC-D-23. Hosted securely within the Assam State Data Centre (ASDC) with full ABDM (Ayushman Bharat Digital Mission) compliance, MatriDrishti transforms routine ANC checkups into an intelligent early warning network.

Main Modules & Core Capabilities

1. Smart IoT & Optical Telemetry Integration:
Eliminates human recording error and digit bias by pairing frontline smartphones via Bluetooth Low Energy (BLE) with clinically validated, non-invasive digital BP cuffs (Omron/Sunbeam CDSCO-certified). For legacy analog cuffs, an on-device Edge-AI Computer Vision OCR engine digitizes dial and display values directly from the smartphone camera, logging exact systolic, diastolic, and pulse rates with cryptographic timestamps.

2. Longitudinal AI Risk Stratification Engine (MAP & Hemodynamic Trajectory):
Rather than waiting for the acute >=140/90 mmHg threshold, MatriDrishti computes the Mean Arterial Pressure (MAP = (2*DBP + SBP)/3) and tracks the gestational trajectory velocity:
Delta MAP_t = MAP_t - MAP_baseline
The engine fuses longitudinal MAP trends with maternal age, parity, prior pre-eclampsia, BMI, and point-of-care dipstick proteinuria (>= 1+ detected via computer-vision colorimetry). An ensemble gradient-boosted classifier (XGBoost + Clinical Rule Bayesian Network) stratifies each mother into Green (Standard), Amber (Moderate Risk / Gestational Hypertension), or Red (Severe Pre-Eclampsia / Impending Eclampsia) with a validation sensitivity >93.8%.

3. Offline-First Frontline Worker Mobile Cockpit (PouchDB / WatermelonDB):
Designed for Assam’s zero-connectivity char islands and dense tea estates. Frontline ASHAs and ANMs record comprehensive ANC examinations offline in Assamese, Bengali, Bodo, and Hindi. Records automatically synchronize bidirectionally via CouchDB sync protocols whenever 2G/4G connectivity is encountered.

4. Clinical Decision Support System (CDSS) for Frontline Providers:
Adheres strictly to Government of India (GoI) and WHO obstetric protocols. For Amber-risk mothers screened prior to 16 weeks, the system prompts ANMs to recommend Low-Dose Aspirin (75–150 mg daily) and elemental calcium prophylaxis to prevent pre-eclampsia development. For Red-flagged patients, the CDSS presents step-by-step emergency stabilization instructions, including oral Labetalol administration and the Pritchard Magnesium Sulfate (MgSO4) loading protocol.

5. Automated 108/102 Mrityunjoy Emergency Referral & Bed Reservation:
When critical pre-eclampsia is flagged, MatriDrishti automatically initiates a priority dispatch request to GVK EMRI 108/102 ambulance services, geotagging the mother’s exact rural hamlet, and alerts the nearest FRU / District Hospital obstetric emergency team to prepare Magnesium Sulfate and neonatal intensive care (SNCU) beds before patient arrival.

6. Multilingual Audio/SMS Advisory Disseminator:
Dispatches hyper-local, culturally tuned voice and text advisories in Assamese and local dialects directly to pregnant women and their families, educating them on danger signs to eliminate fatal home-stay delays.`
    },
    {
      num: 3,
      title: 'Expected Impact & Measurable Metrics',
      limit: '350 words',
      content: `Transformative Maternal Health Outcomes in Assam
MatriDrishti transforms Assam’s maternal healthcare architecture from a reactive post-crisis emergency response into a proactive, early-stage preventive intervention. By catching hypertensive disease processes between 12 and 20 weeks of gestation, the platform prevents lethal multi-organ maternal complications and drastically lowers perinatal mortality.

Quantitative Key Performance Indicators (KPIs)
1. Early PIH & Pre-Eclampsia Detection Rate: Achieve a 65% increase in early-stage detection of hypertensive pregnancy disorders prior to the critical 24-week gestational window across pilot blocks.
2. Reduction in Eclampsia & Maternal Near-Misses: Projected 38% reduction in eclamptic convulsions and severe obstetric near-miss admissions (HELLP syndrome, acute pulmonary edema, placental abruption) within target high-risk districts within 12 months.
3. Prophylactic Intervention Compliance: Increase timely initiation of low-dose Aspirin and calcium prophylaxis among high-risk pregnant women before 16 weeks gestation from the baseline <12% to >78%.
4. Referral Transit & Handoff Acceleration: Compress emergency referral transit and hospital handoff latency by 45 minutes through automated 108 Mrityunjoy ambulance dispatch and pre-arrival FRU obstetric ICU bed reservation.
5. Mitigation of Perinatal Mortality: Reduce intrauterine growth restriction (IUGR) complications and pre-eclampsia-induced stillbirths by 28% in monitored cohorts.
6. Programmatic Reach & Geographic Equity:
   • Pilot Footprint: Deployment across 5 high-burden districts (Dibrugarh, Barpeta, Tinsukia, Dhubri, and Sonitpur), covering 120+ tea estate hospitals and 85 riverine char Sub-Centres.
   • Frontline Empowerment: Train and equip 2,500+ ASHA workers and 600+ ANMs with smart validated BLE digital screening kits.
   • Target Cohort: Active continuous digital tracking of 45,000+ pregnant women annually.
   • Algorithmic Reliability: Maintain screening sensitivity of >= 93.5% and specificity of >= 89.2% for pre-eclampsia onset across multi-ethnic rural cohorts.
   • Linguistic Coverage: 100% voice and text advisory dissemination in Assamese, Bengali, Bodo, and Hindi.`
    },
    {
      num: 4,
      title: 'Competitor Analysis & Differentiation',
      limit: '400 words',
      content: `Landscape Analysis & Existing Alternatives
Current maternal health monitoring tools in Assam and India fall into three broad tiers, each hobbled by severe clinical, technical, or geographic limitations:

1. Legacy Paper MCP Cards & Registers: Physical booklets prone to data loss, acute digit bias (120/80 rounding), and absence of longitudinal velocity tracking.
2. National Portals (RCH Portal / e-Kavach / ANMOL): Heavyweight administrative registries lacking IoT hardware telemetry, automated CDSS clinical triggers, and offline resilience in zero-connectivity chars.
3. Generic Consumer Maternity Apps: Direct-to-consumer commercial mobile apps requiring continuous 4G/WiFi connectivity, unverified self-reported vitals, and disconnected from public health referral infrastructure.

Core Strategic Differentiators of MatriDrishti:
1. From Static Thresholds to Hemodynamic Velocity: Existing platforms register hypertension only after systolic BP reaches 140 mmHg. MatriDrishti’s longitudinal MAP slope identifies asymptomatic vascular resistance weeks earlier, enabling preventative intervention.
2. Elimination of Frontline Falsification: Direct BLE wireless sync from validated BP cuffs prevents fabricated numbers and human rounding errors.
3. Closed-Loop Referral Chain: While state registries serve as administrative record archives, MatriDrishti actively bridges frontline triage to 108 ambulance dispatch and hospital obstetric ICU beds.
4. Purpose-Built for Assam's Hardest Terrains: Built-in operational workflows for Tea Garden Estate health dispensaries, riverine char sandbars, and NHM Boat Clinics.`
    },
    {
      num: 5,
      title: 'Technical Feasibility, Architecture & Tech Stack',
      limit: '500 words',
      content: `System Architecture Overview
MatriDrishti is architected as an enterprise, resilient, offline-first clinical microservices platform designed for high-availability deployment on Kubernetes within the Assam State Data Centre (ASDC). The platform strictly adheres to the Ayushman Bharat Digital Mission (ABDM) standards, leveraging the M1, M2, and M3 milestones (ABHA creation, health facility registry integration, and FHIR-compliant electronic health records).

Core Architectural Layers & Enterprise Tech Stack

1. Frontline Edge & Telemetry Layer:
   • Mobile Client: React Native / TypeScript with WatermelonDB (SQLite reactive storage engine), achieving instant responsiveness on low-cost Android Go (2GB RAM) smartphones distributed by NHM.
   • IoT Telemetry Interface: Bluetooth Low Energy (BLE) GATT profile communication with CDSCO/FDA-approved blood pressure cuffs (IEEE 11073-10407 health informatics standard).
   • Edge Computer Vision: On-device TensorFlow Lite OCR model running at 30 FPS to parse digits from analog or older digital LCD displays when Bluetooth cuffs are unavailable.

2. ASDC Microservices & Data Core:
   • API Gateway & Auth: Kong Gateway, OpenID Connect / OAuth2, Role-Based Access Control (RBAC) separating ASHA, ANM, Medical Officer, and State Admin roles.
   • Primary Relational & Geospatial Database: PostgreSQL 16 with PostGIS 3.4 for facility mapping, catchment buffers, and road network routing.
   • Clinical Timeseries Storage: TimescaleDB hypertable engine indexing high-frequency longitudinal vitals (MAP, SBP, DBP, Heart Rate, Proteinuria, Gestational Age).
   • Caching & Message Broker: Redis 7.2 (cluster caching) and Apache Kafka for asynchronous processing of incoming screening events, referral triggers, and broadcast queues.

3. AI & Clinical Risk Engine:
   • Risk Modeling Framework: Python 3.11, Scikit-learn, XGBoost, and PyTorch Lightning. Models are trained on anonymized maternal cohort registries, utilizing SHAP (SHapley Additive exPlanations) to provide explainable risk factors to attending doctors.
   • Clinical Decision Rules: Drools / JsonLogic rule engine executing validated GoI National Health Guidelines for High-Risk Pregnancies.

4. Security, Privacy & Interoperability:
   • Data Protection: Full compliance with the Digital Personal Data Protection (DPDP) Act 2023 and DISHA guidelines. AES-256 encryption at rest, TLS 1.3 in transit.
   • ABDM & FHIR: Native support for HL7 FHIR R4 resources (Observation, Condition, Encounter, CarePlan), seamless ABHA number linkage, and e-Kavach interoperability.`
    },
    {
      num: 6,
      title: 'Implementation Roadmap & Milestones',
      limit: '350 words',
      content: `Phased 12-Month Rollout Strategy
The 12-month deployment is structured into four agile, three-month phases ensuring rigorous clinical validation with Assam’s medical colleges, co-design with frontline ASHAs, pilot stabilization in high-vulnerability geographies, and seamless statewide institutional handover to NHM Assam.

Detailed Milestone Breakdown:

• Phase 1: Clinical Co-Design, Edge Hardening & ASDC Setup (Months 1–3)
  - Form Joint Clinical Advisory Committee with Obstetric faculties at Assam Medical College Hospital (AMCH), Dibrugarh, and Gauhati Medical College Hospital (GMCH).
  - Finalize GoI/WHO clinical rule sets, low-dose aspirin triggers, and Pritchard MgSO4 protocols.
  - Provision secure Kubernetes cluster, PostgreSQL/TimescaleDB instances, and DPDP-compliant encryption enclaves at ASDC.
  - Finalize BLE firmware pairing profiles and offline PouchDB/WatermelonDB sync gateway.

• Phase 2: High-Vulnerability Pilot Launch (Months 4–6)
  - Procure and distribute 600 CDSCO-approved BLE digital BP monitors and test dipstick kits.
  - Deploy pilot in Dibrugarh (focusing on 40 tea estate health units) and Barpeta (focusing on 35 riverine char Sub-Centres).
  - Train 500 ASHA workers and 120 ANMs in bilingual tablet operation and clinical red-flag escalation.
  - Establish baseline clinical screening registry of 6,000 expectant mothers; calibrate XGBoost risk models.

• Phase 3: Multi-District Expansion & Emergency Dispatch Integration (Months 7–9)
  - Expand to Tinsukia, Dhubri, and Sonitpur districts, onboarding an additional 2,000 frontline health workers.
  - Execute API integration with GVK EMRI 108/102 Mrityunjoy dispatch systems and FRU obstetric ICU bed dashboards.
  - Launch automated bilingual Assamese and Bengali voice/SMS advisory engine.

• Phase 4: Full State Integration & Institutional Handover (Months 10–12)
  - Complete two-way sync with national e-Kavach / ANMOL and the RCH Portal via ABDM FHIR gateways.
  - Present multi-centric clinical evaluation study to the Directorate of Health Services and NHM Mission Director.
  - Transition continuous operations, code repositories, and administrative keys to NHM Assam state IT personnel.`
    },
    {
      num: 7,
      title: 'Budget Breakdown & Resource Allocation',
      limit: '300 words',
      content: `Budget Allocation Framework (Statutory Ceiling: Rs 40.00 Lakh)
The proposed budget strictly adheres to the Rs 40.00 Lakh grant allocation under NESFIC-D-23, strategically distributed across hardware telemetry procurement, edge AI software engineering, frontline field pilots across tea garden and char districts, and rigorous clinical validation.

Capital Expenditure Breakdown:
• 1. Telemetry Hardware & Field Screening Kits (800 BLE Cuffs & Scanners): Rs 11,20,000 (28.0%)
• 2. Edge-AI & ASDC Cloud Software Development: Rs 10,40,000 (26.0%)
• 3. Frontline Training, Capacity Building & Honoraria (2,500 ASHAs): Rs 6,80,000 (17.0%)
• 4. Clinical Co-Design, AMCH/GMCH Validation & Ethics Trials: Rs 4,60,000 (11.5%)
• 5. Telecommunications, Cloud Infrastructure & SMS/WhatsApp Gateway: Rs 4,20,000 (10.5%)
• 6. Regulatory Audits, CERT-In Cybersecurity & ABDM Certification: Rs 2,80,000 (7.0%)
Total Proposed Project Expenditure: Rs 40,00,000 (100.0%)

Fiscal Prudence & Cost Optimization Strategy:
- Frugal Hardware Synergy: Leverages existing Government-issued Android smartphones already in use by ASHAs/ANMs under Poshan Abhiyaan and e-Kavach.
- ASDC Sovereign Cloud Hosting: Hosting within state-owned ASDC infrastructure eliminates commercial cloud hyper-scaler rental overheads.
- Open-Source Core Stack: Built on zero-licensing-fee open-source enterprise foundations (PostgreSQL, TimescaleDB, Linux, Docker, React Native).`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Official Submission Text Dossiers (Copy-Paste Ready)
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                  NESFIC-D-23
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Textarea-compliant plain text versions formatted for direct pasting into the Assam Startup application portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/downloads/NESFIC_D23_Proposal_Ron_Hatibaruah.txt"
              download
              className="hidden sm:flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-5 py-2.5 bg-slate-900 border-b border-slate-800 flex gap-2 text-xs">
          <button
            onClick={() => setActiveDossier('PROPOSAL')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeDossier === 'PROPOSAL'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Proposal Dossier (7 Fields • Word-Limited)
          </button>
          <a
            href="/downloads/NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt"
            download
            className="px-3 py-1.5 rounded-lg font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Proof of Work (TXT)</span>
          </a>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-xs text-slate-300 flex-1">
          {activeDossier === 'PROPOSAL' && (
            <div className="space-y-5">
              {proposalFields.map((field) => {
                const isCopied = copiedKey === `field_${field.num}`;
                return (
                  <div key={field.num} className="bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                      <div>
                        <span className="font-bold text-white text-sm">
                          Field {field.num}: {field.title}
                        </span>
                        <span className="text-[11px] text-cyan-400 ml-2 font-mono">
                          [Limit: {field.limit}]
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy(`field_${field.num}`, field.content)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-xs transition ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Field {field.num}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="text-slate-300 font-sans text-xs whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto p-3 bg-slate-900/60 rounded-lg border border-slate-800/50">
                      {field.content}
                    </pre>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
