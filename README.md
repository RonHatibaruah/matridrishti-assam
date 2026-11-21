# MatriDrishti • মাতৃ-দৃষ্টি (Assam Maternal Health & PIH Early Sentinel)
### AI-Assisted Early Detection, Longitudinal Hemodynamic Tracking & Emergency Clinical Decision Support for Pregnancy-Induced Hypertension (PIH)
**Department of Health & Family Welfare ● National Health Mission (NHM), Government of Assam**

[![Live Demo](https://img.shields.io/badge/Live_Prototype-matridrishti--assam.pages.dev-059669?style=for-the-badge&logo=cloudflarepages)](https://matridrishti-assam.pages.dev/)
[![Government of Assam](https://img.shields.io/badge/Government_of_Assam-Health_%26_Family_Welfare-065f46?style=for-the-badge)](https://hfw.assam.gov.in/)
[![Challenge ID](https://img.shields.io/badge/NESFIC_2026-Stream_1_--_NESFIC--D--23-0284c7?style=for-the-badge)](https://startup.assam.gov.in/nesfic26/problem-statements/nesfic-d-23)
[![National Health Mission](https://img.shields.io/badge/Challenge_Owners-NHM_Assam-0f766e?style=for-the-badge)](https://nhm.assam.gov.in/)
[![React 18](https://img.shields.io/badge/Frontend-React_18_%7C_TypeScript_%7C_Tailwind-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![ABDM Compliant](https://img.shields.io/badge/Standards-ABDM_%7C_FHIR_R4_%7C_DPDP_2023-7c3aed?style=for-the-badge)](https://abdm.gov.in/)

> 🌐 **Live Working Prototype:** **[https://matridrishti-assam.pages.dev/](https://matridrishti-assam.pages.dev/)**  
> Explore the Frontline ASHA/ANM Point-of-Care Screening Cockpit, Longitudinal Mean Arterial Pressure ($MAP$) Velocity Tracker, Assam Statewide 35-District Epidemiological WebGIS, 108 Mrityunjoy Emergency Obstetric Referral Hub, and Bilingual Voice / WhatsApp Advisory Disseminator.
>
> ⚡ **Demo Clinical Access:** `anm.dibrugarh@nhm.assam.gov.in` / `dispur2026`  
> 💻 **GitHub Repository:** [https://github.com/RonHatibaruah/matridrishti-assam](https://github.com/RonHatibaruah/matridrishti-assam)

---

## 🏛️ Executive Clinical Summary

**MatriDrishti (মাতৃ-দৃষ্টি)** is an enterprise, offline-first digital health and clinical intelligence platform engineered specifically for the **Department of Health & Family Welfare, Government of Assam**, and the **National Health Mission (NHM), Assam**, under **NESFIC-D-23 (Stream 1 — Government Department Track)**.

Assam suffers from one of India's highest Maternal Mortality Ratios (MMR ~195 per 100,000 live births), with rates historically exceeding 250 in isolated tea garden estates (*cha-bagan* in Upper Assam) and flood-prone riverine island settlements (*char/chapori* along the Brahmaputra). Hypertensive Disorders of Pregnancy (HDP)—encompassing Pregnancy-Induced Hypertension (PIH), pre-eclampsia, and eclampsia—constitute over **24% of all maternal deaths and near-miss morbidities** across the state.

### Critical Systemic Gaps Addressed
1. **Uncalibrated Sphygmomanometers & Digit Bias:** Replaces manual rounding (e.g. recording 120/80 despite true readings of 138/88 mmHg) with Bluetooth Low Energy (BLE) certified digital monitors and edge computer-vision OCR.
2. **Failure to Detect Early Hemodynamic Trajectories:** Replaces static single-visit thresholds ($\ge 140/90\text{ mmHg}$) with longitudinal Mean Arterial Pressure ($MAP$) velocity tracking:
   $$MAP = DBP + \frac{1}{3}(SBP - DBP) = \frac{2 \cdot DBP + SBP}{3}$$
   Detecting early endothelial vasoconstriction between gestational weeks 12 and 16 when physiological mid-trimester pressure drop fails to occur.
3. **Missed Prophylaxis Window (<16 Gestational Weeks):** Enables frontline workers to initiate **Low-Dose Aspirin (75–150 mg daily)** and dietary calcium (1.5g/day) within the critical early gestational window, preventing up to 62% of severe pre-eclampsia cases.
4. **Closed-Loop Emergency Referral & 108 Dispatch:** Connects frontline red-flag alerts with GVK EMRI 108 Mrityunjoy ambulance dispatch, step-by-step Pritchard Magnesium Sulfate ($\text{MgSO}_4$) pre-referral loading directives, and First Referral Unit (FRU) obstetric ICU bed reservations.

---

## 📸 Architectural Visualizations & Evidentiary Diagrams

### 1. Clinical Paradigm Shift: Reactive Crisis Intervention to Proactive AI Sentinel
![Paradigm Shift](assets/proposal_images/diagram_1_before_after_workflow.jpg)

### 2. Enterprise System Architecture & Telemetry Pipeline (Frontline BLE to ASDC Cloud)
![System Architecture](assets/proposal_images/diagram_2_system_architecture.jpg)

### 3. AI Hypertensive Risk Stratification & Longitudinal MAP Trajectory Model
![AI Risk Model](assets/proposal_images/diagram_3_ai_risk_model.jpg)

### 4. Statewide Epidemiological Surveillance & Vulnerability Heatmap (Tea Belts & Chars)
![Epidemiology Map](assets/proposal_images/diagram_4_assam_epidemiology_map.jpg)

### 5. Frontline ASHA/ANM Mobile App UX & Clinical Decision Support System (CDSS)
![Frontline UX](assets/proposal_images/diagram_5_asha_mobile_ux.jpg)

### 6. Closed-Loop Emergency Referral & 108 Mrityunjoy Ambulance Logistics Workflow
![Emergency Referral](assets/proposal_images/diagram_6_referral_escalation.jpg)

### 7. Phased 12-Month Implementation Roadmap & Milestone Budget Breakdown (₹40.00 Lakh)
![Roadmap and Budget](assets/proposal_images/diagram_7_enterprise_system_architecture.jpg)

---

## 💻 Tech Stack & Infrastructure

- **Frontline Edge & Mobile Cockpit:** React Native, TypeScript, WatermelonDB (reactive SQLite core), Tailwind CSS, Lucide Icons, Vite
- **IoT & Hardware Telemetry:** Bluetooth Low Energy (BLE) GATT profile (IEEE 11073-10407 health informatics standard), MobileNetV3 Edge Computer Vision OCR
- **WebGIS Spatial Engine:** Leaflet 1.9.4, PostGIS 3.4, CartoDB spatial vector tiles
- **AI & Predictive Core:** Python 3.11, XGBoost, Scikit-learn, PyTorch Lightning, SHAP explainable AI
- **Time-Series & Clinical Data Store:** TimescaleDB (longitudinal vitals vault), PostgreSQL 16 (ABDM registry), Redis 7.2
- **Interoperability & Dissemination:** Ayushman Bharat Digital Mission (ABDM M1/M2/M3), HL7 FHIR R4 resources, Meta WhatsApp Cloud API, C-DAC Bulk SMS Gateway
- **Target Government Environment:** Assam State Data Centre (ASDC), Kubernetes (K8s), DPDP Act 2023 & DISHA compliance enclave

---

## 📑 Official NESFIC-D-23 Submission Files

| File Name | Format | Description |
|---|---|---|
| **[NESFIC_D23_Proposal_Ron_Hatibaruah.pdf](NESFIC_D23_Proposal_Ron_Hatibaruah.pdf)** | PDF (3.0 MB) | Official 7-field proposal dossier complying with the 500-word limit per section. |
| **[NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.pdf](NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.pdf)** | PDF (3.0 MB) | Technical evidence dossier with mathematical formulations, BLE telemetry, and clinical protocols. |
| **[NESFIC_D23_Proposal_Ron_Hatibaruah.txt](NESFIC_D23_Proposal_Ron_Hatibaruah.txt)** | Plain Text | Clean copy-paste blocks for direct pasting into the Assam Startup application portal textareas. |
| **[NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt](NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt)** | Plain Text | Clean plain-text copy of the Proof of Work dossier. |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm
- Python 3.10+ (for PDF and diagram generation scripts)

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/RonHatibaruah/matridrishti-assam.git
cd matridrishti-assam

# Install frontend dependencies
npm install

# Start local development server
npm run dev
```

### Build & Deploy to Cloudflare Pages
```bash
# Compile TypeScript and bundle with Vite
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

### Re-Generating Diagrams and Official Submission PDFs
```bash
# Generate high-resolution 16:9 widescreen diagrams
python3 generate_widescreen_diagrams.py

# Generate textarea-compliant plain text files
python3 generate_text_versions.py

# Compile official ReportLab submission PDFs
python3 generate_pdfs.py
```

---

## 👥 Governance & Authorship

- **Applicant / Principal Innovator:** Ron Hatibaruah
- **Executing Department:** Department of Health & Family Welfare, Government of Assam
- **Program Management:** National Health Mission (NHM), Assam
- **Innovation Challenge:** North East Seva First Innovation Challenge (NESFIC 2026), Assam Innovation & Startup Foundation (AISF)
