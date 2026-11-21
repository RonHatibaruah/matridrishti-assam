import React, { useState } from 'react';
import { X, Copy, Check, FileText, Download, Sparkles } from 'lucide-react';
import { PROPOSAL_12_FIELDS, ProposalFieldItem } from '../data/proposal12Fields';

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

  const handleCopyAll = () => {
    const fullText = PROPOSAL_12_FIELDS.map((f) => {
      const headerTitle = f.num === 13 ? '03: SUPPORTING MATERIAL' : `FIELD ${f.num}: ${f.title.toUpperCase()}`;
      return `================================================================================\nCOPY-PASTE BLOCK: ${headerTitle} [Limit: ${f.limit}]\nActual Word Count: ${f.wordCount} words\n================================================================================\n\n${f.content}\n\n`;
    }).join('\n');

    handleCopy('copy_all', fullText);
  };

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
                Official Submission Text Dossiers (12 Fields • Copy-Paste Ready)
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                  NESFIC-D-23
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Textarea-compliant plain text versions strictly formatted for direct pasting into the Assam Startup application portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 text-xs bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition"
            >
              {copiedKey === 'copy_all' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>All Fields Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Full 12-Field Dossier</span>
                </>
              )}
            </button>
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
            Proposal Form (12 Fields • Max 500 Words Each)
          </button>
          <a
            href="/downloads/NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.txt"
            download
            className="px-3 py-1.5 rounded-lg font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Proof of Work (TXT)</span>
          </a>
          <a
            href="/downloads/NESFIC_D23_Proof_of_Work_Ron_Hatibaruah.pdf"
            download
            className="px-3 py-1.5 rounded-lg font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition flex items-center gap-1.5 ml-auto"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PoW PDF (3.7 MB)</span>
          </a>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-xs text-slate-300 flex-1">
          {activeDossier === 'PROPOSAL' && (
            <div className="space-y-5">
              {PROPOSAL_12_FIELDS.map((field) => {
                const isCopied = copiedKey === `field_${field.num}`;
                const isSupporting = field.num === 13;
                return (
                  <div key={field.num} className="bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                      <div>
                        <span className="font-bold text-white text-sm">
                          {isSupporting ? '03: Supporting Material' : `Field ${field.num}: ${field.title}`}
                        </span>
                        <span className="text-[11px] text-cyan-400 ml-2 font-mono">
                          [Limit: {field.limit}]
                        </span>
                        <span className="text-[11px] text-emerald-400 ml-2 font-mono bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                          {field.wordCount} words
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
                            <span>{isSupporting ? 'Copy Supporting' : `Copy Field ${field.num}`}</span>
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
