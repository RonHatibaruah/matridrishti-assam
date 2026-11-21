import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ASHAScreeningCockpit } from './components/ASHAScreeningCockpit';
import { LongitudinalRiskTracker } from './components/LongitudinalRiskTracker';
import { MaternalSurveillanceMap } from './components/MaternalSurveillanceMap';
import { EmergencyReferralConsole } from './components/EmergencyReferralConsole';
import { MultilingualAdvisoryEngine } from './components/MultilingualAdvisoryEngine';
import { ExecutiveHealthCommand } from './components/ExecutiveHealthCommand';
import { TutorialModal } from './components/TutorialModal';
import { TextDossierModal } from './components/TextDossierModal';
import { ClinicalUser } from './types/maternal';
import { ShieldCheck, HeartPulse, BookOpen, FileText } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cockpit');
  const [selectedRole, setSelectedRole] = useState<string>('ASHA_ANM');
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(false);
  const [isTextDossierOpen, setIsTextDossierOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<ClinicalUser | null>({
    id: 'USER-01',
    name: 'Pratima Gogoi (ANM)',
    email: 'anm.dibrugarh@nhm.assam.gov.in',
    role: 'ANM',
    facility: 'Nahortoli Sub-Centre (Panitola Block)',
    district: 'Dibrugarh',
    designation: 'Auxiliary Nurse Midwife'
  });

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    if (role === 'ASHA_ANM') {
      setActiveTab('cockpit');
    } else if (role === 'MEDICAL_OFFICER') {
      setActiveTab('trajectories');
    } else if (role === 'FRU_SPECIALIST') {
      setActiveTab('referrals');
    } else if (role === 'STATE_LEADERSHIP') {
      setActiveTab('command');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedRole={selectedRole}
        setSelectedRole={handleRoleChange}
        onOpenTutorial={() => setIsTutorialOpen(true)}
        onOpenTextDossier={() => setIsTextDossierOpen(true)}
        currentUser={currentUser}
        onOpenLoginModal={() => setIsTutorialOpen(true)}
      />

      {/* Role Horizon Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Active Operations Enclave:</span>
          <span className="font-bold text-slate-200 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 shadow-sm flex items-center gap-1.5">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
            {selectedRole === 'ASHA_ANM' ? (
              <span>Frontline ASHA / ANM • Sub-Centre Point-of-Care Triage</span>
            ) : selectedRole === 'MEDICAL_OFFICER' ? (
              <span>Primary / Community Health Centre (PHC/CHC) Medical Officer Tele-Triage</span>
            ) : selectedRole === 'FRU_SPECIALIST' ? (
              <span>First Referral Unit (FRU) & Medical College Obstetric ICU Readiness</span>
            ) : (
              <span>National Health Mission (NHM) Assam State Command & Surveillance</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setIsTextDossierOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-medium text-[11px] hover:bg-cyan-900 transition"
          >
            <FileText className="w-3 h-3 text-cyan-400" />
            Copy Proposal Text (7 Fields)
          </button>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ABDM / e-Kavach Gateway Synced
          </span>
        </div>
      </div>

      {/* Main View Port */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        {activeTab === 'cockpit' && (
          <ASHAScreeningCockpit onNavigateToReferrals={() => setActiveTab('referrals')} />
        )}
        {activeTab === 'trajectories' && <LongitudinalRiskTracker />}
        {activeTab === 'surveillance' && <MaternalSurveillanceMap />}
        {activeTab === 'referrals' && <EmergencyReferralConsole />}
        {activeTab === 'advisory' && <MultilingualAdvisoryEngine />}
        {activeTab === 'command' && <ExecutiveHealthCommand />}
      </main>

      {/* Guided Tutorial Modal */}
      <TutorialModal
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
        onOpenTextDossier={() => setIsTextDossierOpen(true)}
      />

      {/* Copy-Paste Text Dossier Modal */}
      <TextDossierModal
        isOpen={isTextDossierOpen}
        onClose={() => setIsTextDossierOpen(false)}
      />

      {/* Footer with Disclaimer & Downloads */}
      <Footer />
    </div>
  );
};
