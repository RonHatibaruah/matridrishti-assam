import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Filter,
  Layers,
  Activity,
  Ambulance,
  Building2,
  Ship,
  Sparkles,
  Info
} from 'lucide-react';
import { MOCK_DISTRICT_EPIDEMIOLOGY } from '../data/mockAssamMaternalData';
import { DistrictEpidemiology } from '../types/maternal';

export const MaternalSurveillanceMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictEpidemiology>(MOCK_DISTRICT_EPIDEMIOLOGY[0]);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'TEA_GARDEN' | 'CHAR_ISLAND' | 'HIGH_RISK'>('ALL');

  const filteredDistricts = MOCK_DISTRICT_EPIDEMIOLOGY.filter((d) => {
    if (activeFilter === 'TEA_GARDEN') return d.teaEstatesCount > 20;
    if (activeFilter === 'CHAR_ISLAND') return d.charSubCentresCount > 20;
    if (activeFilter === 'HIGH_RISK') return d.pihPrevalencePct >= 14.0;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            Assam Statewide Maternal Epidemiological WebGIS
          </h1>
          <p className="text-xs text-slate-400">
            Real-time geospatial surveillance covering 35 districts, Upper Assam tea garden estates, Brahmaputra riverine chars, and NHM Boat Clinics
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              activeFilter === 'ALL'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Districts (35)
          </button>
          <button
            onClick={() => setActiveFilter('TEA_GARDEN')}
            className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
              activeFilter === 'TEA_GARDEN'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-emerald-300 hover:bg-slate-700'
            }`}
          >
            <span>🍃 Tea Garden Belts</span>
          </button>
          <button
            onClick={() => setActiveFilter('CHAR_ISLAND')}
            className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
              activeFilter === 'CHAR_ISLAND'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-800 text-blue-300 hover:bg-slate-700'
            }`}
          >
            <Ship className="w-3.5 h-3.5" />
            <span>Riverine Chars & Boat Clinics</span>
          </button>
          <button
            onClick={() => setActiveFilter('HIGH_RISK')}
            className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
              activeFilter === 'HIGH_RISK'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-800 text-rose-300 hover:bg-slate-700'
            }`}
          >
            <span>🔴 High PIH Clusters (≥14%)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Assam Map Canvas (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white">Geospatial Distribution of Screening & PIH Density</span>
            <span className="font-mono text-[11px] text-cyan-400">Interactive Geo-Coordinates Hub</span>
          </div>

          {/* Stylized Assam Regional Schematic Map */}
          <div className="relative bg-slate-950 rounded-xl p-5 border border-slate-800 min-h-[380px] flex flex-col justify-between overflow-hidden">
            {/* Brahmaputra River Stylized Flow Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
              <path
                d="M 50,220 Q 220,180 380,140 T 700,90"
                fill="none"
                stroke="#0284c7"
                strokeWidth="18"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredDistricts.map((d) => {
                const isSelected = d.districtId === selectedDistrict.districtId;
                const isHighPrevalence = d.pihPrevalencePct >= 14.0;
                return (
                  <button
                    key={d.districtId}
                    onClick={() => setSelectedDistrict(d)}
                    className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-400 shadow-lg ring-1 ring-cyan-400/50'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-xs text-white block">{d.districtName}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-mono">{d.zone.replace('_', ' ')}</span>
                      </div>
                      <span
                        className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded font-mono ${
                          isHighPrevalence
                            ? 'bg-rose-950 text-rose-300 border border-rose-800'
                            : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}
                      >
                        {d.pihPrevalencePct}% PIH
                      </span>
                    </div>

                    <div className="mt-3 space-y-1 text-[11px] text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Screened:</span>
                        <span className="font-mono font-bold text-white">{d.totalScreened.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">High Risk Cohort:</span>
                        <span className="font-mono font-bold text-rose-400">{d.highRiskCount.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Regional Badges */}
                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px]">
                      {d.teaEstatesCount > 10 && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                          🍃 {d.teaEstatesCount} Tea Estates
                        </span>
                      )}
                      {d.charSubCentresCount > 10 && (
                        <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                          🌊 {d.charSubCentresCount} Chars
                        </span>
                      )}
                      {d.boatClinicsCount > 0 && (
                        <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                          🚢 {d.boatClinicsCount} Boat Clinics
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend */}
            <div className="relative z-10 mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> PIH Prevalence ≥ 14% (Priority Pilot)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Baseline Surveillance
                </span>
              </div>
              <span className="font-mono text-cyan-400">ASDC PostGIS Layer v3.4</span>
            </div>
          </div>
        </div>

        {/* Right Column: Selected District Diagnostic Profile (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block">
                District Health Profile
              </span>
              <h2 className="text-lg font-bold text-white">{selectedDistrict.districtName} District</h2>
              <span className="text-xs text-slate-400">
                Coordinates: {selectedDistrict.lat}° N, {selectedDistrict.lng}° E
              </span>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Total Mothers Screened</span>
                <span className="text-lg font-bold text-white font-mono">{selectedDistrict.totalScreened.toLocaleString()}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px]">High Risk (Red/Amber)</span>
                <span className="text-lg font-bold text-rose-400 font-mono">{selectedDistrict.highRiskCount.toLocaleString()}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px]">PIH Prevalence Rate</span>
                <span className="text-lg font-bold text-amber-400 font-mono">{selectedDistrict.pihPrevalencePct}%</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Active FRU Facilities</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">{selectedDistrict.fruCount} Hospitals</span>
              </div>
            </div>

            {/* Specific Vulnerability Strategy */}
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Targeted Interventions in {selectedDistrict.districtName}:
              </span>
              <ul className="space-y-1.5 text-[11px] text-slate-300">
                {selectedDistrict.teaEstatesCount > 0 && (
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400">•</span>
                    <span><strong>Tea Estates ({selectedDistrict.teaEstatesCount}):</strong> Equipping estate garden dispensaries with BLE cuffs; mandatory ANC screening for female tea pluckers.</span>
                  </li>
                )}
                {selectedDistrict.charSubCentresCount > 0 && (
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <span><strong>Char Islands ({selectedDistrict.charSubCentresCount}):</strong> Pre-loading offline rosters on NHM Boat Clinics; solar-powered cold kits for dipsticks and MgSO4.</span>
                  </li>
                )}
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Referral Pipeline:</strong> Automated dispatch to {selectedDistrict.fruCount} designated First Referral Units with pre-arrival obstetric ICU bed reservation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
