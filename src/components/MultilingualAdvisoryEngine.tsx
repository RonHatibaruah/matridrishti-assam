import React, { useState } from 'react';
import {
  Radio,
  Volume2,
  Send,
  MessageSquare,
  CheckCircle2,
  Play,
  Pause,
  Languages,
  Sparkles,
  Phone
} from 'lucide-react';

export const MultilingualAdvisoryEngine: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'as' | 'bn' | 'bodo' | 'en'>('as');
  const [selectedTemplate, setSelectedTemplate] = useState<'ROUTINE' | 'AMBER_PROPHYLAXIS' | 'EMERGENCY_RED'>('AMBER_PROPHYLAXIS');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [broadcastSentToast, setBroadcastSentToast] = useState<string | null>(null);

  const advisoryTemplates = {
    ROUTINE: {
      title: 'Routine Antenatal Care & Calcium Nutrition',
      as: 'নমস্কাৰ। আপোনাৰ মাতৃ-দৃষ্টি পৰীক্ষাত ৰক্তচাপ স্বাভাৱিক পোৱা গৈছে। সুস্থ গৰ্ভধাৰণৰ বাবে প্ৰতিদিনে কেলচিয়াম বড়ি আৰু পুষ্টিকৰ খাদ্য গ্ৰহণ কৰক। অহা মাহত পুনৰ উপ-স্বাস্থ্য কেন্দ্ৰলৈ আহিব।',
      bn: 'নমস্কার। আপনার রক্তচাপ স্বাভাবিক রয়েছে। স্বাস্থ্যকর গর্ভাবস্থার জন্য প্রতিদিন ক্যালসিয়াম ও পুষ্টিকর খাবার গ্রহণ করুন। আগামী মাসে পুনরায় চেকআপে আসুন।',
      bodo: 'खुलुमबाय। नोंथांनि थिथार जाथायनि ब्लड प्रेसारआ मोजां दं। गावनि देहाखौ मोजां लाखिनो सानफ्रोमबो क्यालसियम आरो मोजां आदार जा।',
      en: 'Greetings. Your blood pressure is normal. Continue daily dietary calcium and nutritious intake. Visit your Sub-Centre next month for routine ANC.'
    },
    AMBER_PROPHYLAXIS: {
      title: 'Early PIH Warning & Low-Dose Aspirin Prophylaxis',
      as: 'জরুৰী স্বাস্থ্য বাৰ্তা: আপোনাৰ ৰক্তচাপ সামান্য বৃদ্ধি পাইছে। চিকিৎসকৰ পৰামৰ্শ মতে ৰাতি শুবৰ সময়ত কম মাত্ৰাৰ এছপিৰিন আৰু কেলচিয়াম নিয়মীয়াকৈ খাওক। ১৪ দিনৰ ভিতৰত আশা বাইদেউৰ ওচৰলৈ আহক।',
      bn: 'জরুরি স্বাস্থ্য বার্তা: আপনার রক্তচাপে সামান্য বৃদ্ধি ধরা পড়েছে। চিকিৎসকের পরামর্শ অনুসারে কম মাত্রার অ্যাসপিরিন ও ক্যালসিয়াম গ্রহণ করুন এবং ১৪ দিনের মধ্যে পুনরায় পরীক্ষা করান।',
      bodo: 'गोनांथार खौरां: नोंथांनि ब्लड प्रेसारआ एसेल\' बांदों। डक्टरनि बिथोन बादियै खम मातद्रानि एस्पिरिन आरो क्यालसियम लों आरो १४ साननि गेजेराव फिन नायबिजिरफै।',
      en: 'High-Priority Alert: Elevated arterial pressure detected. Take low-dose aspirin and calcium daily as prescribed, and report to your ASHA worker in 14 days.'
    },
    EMERGENCY_RED: {
      title: 'Emergency Eclampsia Danger Signs & 108 Dispatch',
      as: 'অতি জৰুৰী বিপদ সংকেত: আপোনাৰ ৰক্তচাপ বিপজ্জনক স্তৰত আছে। মূৰৰ বিষ, চকুৰে ধোঁৱা-কোঁৱা দেখা বা পেটৰ বিষ থাকিলে ততাতৈয়াকৈ চিকিৎসালয়লৈ যাওক। আপোনাৰ গাঁৱলৈ ১০৮ এম্বুলেন্স প্ৰেৰণ কৰা হৈছে।',
      bn: 'অতি জরুরি বিপদ সংকেত: আপনার রক্তচাপ বিপজ্জনক পর্যায়ে রয়েছে। তীব্র মাথাব্যথা বা দৃষ্টিহীনতা হলে অবিলম্বে হাসপাতালে যান। ১০৮ অ্যাম্বুলেন্স প্রেরণ করা হয়েছে।',
      bodo: 'जोबोद गोनांथार खौरां: नोंथांनि ब्लड प्रेसारआ खौरां गोनां जाबाय। खर\' सानाय बा मेगन नुयै जाब्ला दासान्दोनो हस्पितालाव थां। ১০৮ एम्बुलेन्स हरनाय जाबाय।',
      en: 'CRITICAL EMERGENCY: Severe high blood pressure detected. Seek immediate care for headache or blurred vision. A 108 ambulance has been dispatched to your location.'
    }
  };

  const handleSendBroadcast = () => {
    setBroadcastSentToast('Bilingual advisory queue dispatched via Meta WhatsApp Cloud API & C-DAC SMS gateway.');
    setTimeout(() => setBroadcastSentToast(null), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Radio className="w-5 h-5 text-emerald-400" />
            Zero-Friction Multilingual Audio & WhatsApp Advisory Dispatcher
          </h1>
          <p className="text-xs text-slate-400">
            Delivering culturally tailored voice notes and text advisories in Assamese (অসমীয়া), Bengali, Bodo, and Hindi directly to rural mothers
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-mono">
            Meta WhatsApp API + C-DAC SMS Gateway
          </span>
        </div>
      </div>

      {broadcastSentToast && (
        <div className="p-3 bg-emerald-950 border border-emerald-600 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{broadcastSentToast}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Template Selection & Language Switcher (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Advisory Template Selection
          </h2>

          <div className="space-y-2.5">
            {[
              { id: 'ROUTINE', title: '🟢 Routine Nutrition & Calcium Prophylaxis', desc: 'Sent to normotensive mothers for continuous care compliance.' },
              { id: 'AMBER_PROPHYLAXIS', title: '🟡 Early PIH Velocity Alert (<16 Weeks)', desc: 'Prompts Low-Dose Aspirin initiation & 14-day Sub-Centre follow-up.' },
              { id: 'EMERGENCY_RED', title: '🔴 Impending Eclampsia Danger Alert', desc: 'Urgent danger signs notification with 108 ambulance dispatch confirmation.' }
            ].map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setSelectedTemplate(tmpl.id as any)}
                className={`w-full p-3.5 rounded-xl border text-left transition ${
                  selectedTemplate === tmpl.id
                    ? 'bg-slate-800 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="font-semibold text-xs text-white">{tmpl.title}</div>
                <div className="text-[11px] text-slate-400 mt-1">{tmpl.desc}</div>
              </button>
            ))}
          </div>

          {/* Language Selector */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">
              Dissemination Language:
            </span>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {[
                { id: 'as', label: 'অসমীয়া (Assamese)' },
                { id: 'bn', label: 'বাংলা (Bengali)' },
                { id: 'bodo', label: 'बर’ (Bodo)' },
                { id: 'en', label: 'English' }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id as any)}
                  className={`py-2 px-2 rounded-lg text-center font-medium transition border ${
                    selectedLanguage === lang.id
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Phone Mockup / Preview (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white">Citizen WhatsApp & IVRS Simulator</span>
            <span className="font-mono text-emerald-400">Mobile View</span>
          </div>

          {/* Smartphone Simulator */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 max-w-md mx-auto space-y-3 shadow-inner">
            {/* Phone Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                MatriDrishti NHM Assam
              </span>
              <span className="font-mono">10:45 AM</span>
            </div>

            {/* Chat Bubble Message */}
            <div className="bg-emerald-950/80 border border-emerald-700/60 rounded-2xl p-3.5 space-y-2">
              <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                Official NHM Maternal Health Advisory
              </div>
              <p className="text-xs text-white leading-relaxed">
                {advisoryTemplates[selectedTemplate][selectedLanguage]}
              </p>
              <div className="text-[9px] text-slate-400 text-right">Delivered via WhatsApp Cloud</div>
            </div>

            {/* Voice Audio Note Player Simulator */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center transition shadow-md"
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <div>
                  <span className="text-xs font-semibold text-white block">
                    Assamese Voice Note (0:42)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {isPlayingAudio ? 'Playing automated dialect audio...' : 'Click to preview audio prompt'}
                  </span>
                </div>
              </div>

              <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`} />
            </div>

            {/* Action Button */}
            <button
              onClick={handleSendBroadcast}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <Send className="w-4 h-4" />
              <span>Broadcast Advisory to Mother & ASHA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
