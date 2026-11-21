import React from 'react';
import { HeartPulse, ShieldCheck, FileText, Download, AlertTriangle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto py-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Branding & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-900 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                MatriDrishti <span className="text-emerald-400">মাতৃ-দৃষ্টি</span>
              </span>
              <p className="text-[11px] text-slate-400">
                Assam Maternal Hypertensive Intelligence & Early PIH Detection Sentinel
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Government of Assam • Health & Family Welfare & NHM
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-mono">
              NESFIC-D-23 (Govt Track)
            </span>
          </div>
        </div>

        {/* 3-Column Info & Portal Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px]">
          <div>
            <span className="font-semibold text-slate-200 block mb-2">Project Sponsorship & Governance</span>
            <p className="leading-relaxed text-slate-400">
              Engineered under the North East Seva First Innovation Challenge (NESFIC 2026), executed by the Assam Innovation & Startup Foundation (AISF) and DIIS, Government of Assam.
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-200 block mb-2">Clinical Architecture & Standards</span>
            <p className="leading-relaxed text-slate-400">
              Ayushman Bharat Digital Mission (ABDM M1/M2/M3) compliant, HL7 FHIR R4 schema bindings, offline-first PouchDB edge synchronization, and hosted securely within the sovereign perimeter of the Assam State Data Centre (ASDC).
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-200 block mb-2">Official Dossier Downloads (PDF & TXT)</span>
            <ul className="space-y-1 text-slate-300">
              <li>
                <a
                  href="/downloads/NESFIC_D23_Proposal_Ron_Hatibaruah.pdf"
                  download
                  className="text-cyan-400 hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Proposal Dossier (PDF 3.7MB)</span>
                </a>
              </li>
              <li>
                <a
                  href="/downloads/NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.pdf"
                  download
                  className="text-cyan-400 hover:underline flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Proof of Work Dossier (PDF 3.7MB)</span>
                </a>
              </li>
              <li>
                <a
                  href="/downloads/NESFIC_D23_Proposal_Ron_Hatibaruah.txt"
                  download
                  className="text-emerald-400 hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Proposal Text Version (TXT copy-paste)</span>
                </a>
              </li>
              <li>
                <a
                  href="/downloads/NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt"
                  download
                  className="text-emerald-400 hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Proof of Work Text Version (TXT copy-paste)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Prominent Clinical & Regulatory Disclaimer Box */}
        <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-[11px] space-y-1.5 text-slate-300 shadow-sm">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Clinical & Regulatory Disclaimer</span>
          </div>
          <p className="leading-relaxed text-slate-400">
            <strong>MatriDrishti (মাতৃ-দৃষ্টি)</strong> is an AI-assisted clinical decision-support and early risk-stratification system developed under the North East Seva First Innovation Challenge (NESFIC 2026) for the Department of Health & Family Welfare and National Health Mission (NHM), Government of Assam. The software provides algorithmic risk scoring (Mean Arterial Pressure velocity tracking and multi-factor classification) and protocol recommendations (e.g., Low-Dose Aspirin prophylaxis, oral labetalol titration, and Pritchard Magnesium Sulfate loading) to assist accredited frontline healthcare workers (ASHAs and ANMs) and registered Medical Officers. It does not replace independent clinical evaluation or specialized diagnostic judgment by a licensed obstetrician or physician. Medical emergencies, pharmacotherapy, and 108 ambulance transfers must be confirmed and executed under authorized clinical supervision in compliance with Government of India (GoI) Maternal Health Guidelines and ABDM standards.
          </p>
        </div>

        <div className="pt-2 text-center text-[10px] text-slate-500">
          © 2026 Government of Assam ● National Health Mission (NHM). All Rights Reserved. Applicant: <strong>Ron Hatibaruah</strong>.
        </div>
      </div>
    </footer>
  );
};
