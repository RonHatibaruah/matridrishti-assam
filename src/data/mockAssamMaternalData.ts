import {
  PregnantMother,
  MaternalVitalsReading,
  EmergencyReferral,
  DistrictEpidemiology,
  CDSSRecommendation,
  UrinalysisProtein
} from '../types/maternal';

export const MOCK_MOTHERS: PregnantMother[] = [
  {
    id: 'MOT-01',
    abhaId: '91-4502-8819-2011',
    rchId: 'AS-DIB-2026-9041',
    name: 'Maina Karmakar',
    age: 23,
    parity: 0, // Primigravida - high baseline risk
    gravida: 1,
    gestationalWeeks: 15,
    edd: '2027-05-14',
    district: 'Dibrugarh',
    block: 'Panitola',
    subCentre: 'Nahortoli Sub-Centre',
    village: 'Nahortoli Tea Estate Line 4',
    isTeaGarden: true,
    teaEstateName: 'Nahortoli Tea Estate',
    isCharArea: false,
    phone: '+91 94351 28941',
    assignedAsha: 'Rupali Tanti (ASHA)',
    assignedAnm: 'Pratima Gogoi (ANM)',
    baselineMap: 81.3,
    currentMap: 92.0, // High velocity delta (>1.25 mmHg/wk)
    currentRisk: 'AMBER'
  },
  {
    id: 'MOT-02',
    abhaId: '91-3819-0192-4412',
    rchId: 'AS-BAR-2026-1182',
    name: 'Hasina Khatun',
    age: 28,
    parity: 1,
    gravida: 2,
    gestationalWeeks: 29,
    edd: '2027-02-08',
    district: 'Barpeta',
    block: 'Mandia',
    subCentre: 'Baghbar Char Sub-Centre',
    village: 'Alopati Char Island',
    isTeaGarden: false,
    isCharArea: true,
    phone: '+91 88762 90123',
    assignedAsha: 'Anowara Begum (ASHA)',
    assignedAnm: 'Dipali Das (ANM)',
    baselineMap: 83.0,
    currentMap: 104.7, // Severe Pre-Eclampsia
    currentRisk: 'RED'
  },
  {
    id: 'MOT-03',
    abhaId: '91-5501-9233-7744',
    rchId: 'AS-TIN-2026-4402',
    name: 'Sunita Munda',
    age: 21,
    parity: 0,
    gravida: 1,
    gestationalWeeks: 14,
    edd: '2027-05-22',
    district: 'Tinsukia',
    block: 'Guijan',
    subCentre: 'Doomdooma Garden SC',
    village: 'Beesakopie Tea Estate',
    isTeaGarden: true,
    teaEstateName: 'Beesakopie Tea Estate',
    isCharArea: false,
    phone: '+91 98540 88219',
    assignedAsha: 'Purnima Orang (ASHA)',
    assignedAnm: 'Juri Moran (ANM)',
    baselineMap: 80.0,
    currentMap: 88.7,
    currentRisk: 'AMBER'
  },
  {
    id: 'MOT-04',
    abhaId: '91-1209-4478-9002',
    rchId: 'AS-KAM-2026-8821',
    name: 'Priyanka Saikia',
    age: 26,
    parity: 1,
    gravida: 2,
    gestationalWeeks: 22,
    edd: '2027-03-28',
    district: 'Kamrup Metro',
    block: 'Dimoria',
    subCentre: 'Khetri Health Wellness Centre',
    village: 'Khetri Gaon',
    isTeaGarden: false,
    isCharArea: false,
    phone: '+91 70021 55941',
    assignedAsha: 'Minoti Kalita (ASHA)',
    assignedAnm: 'Runu Sarma (ANM)',
    baselineMap: 79.3,
    currentMap: 81.3,
    currentRisk: 'GREEN'
  },
  {
    id: 'MOT-05',
    abhaId: '91-7782-9901-3321',
    rchId: 'AS-DHU-2026-3091',
    name: 'Rokeya Parbin',
    age: 24,
    parity: 0,
    gravida: 1,
    gestationalWeeks: 32,
    edd: '2027-01-18',
    district: 'Dhubri',
    block: 'Bilasipara',
    subCentre: 'Chapar Riverine Unit',
    village: 'Kazikata Char',
    isTeaGarden: false,
    isCharArea: true,
    phone: '+91 80112 44901',
    assignedAsha: 'Ferdousi Ahmed (ASHA)',
    assignedAnm: 'Mousumi Paul (ANM)',
    baselineMap: 82.0,
    currentMap: 101.3,
    currentRisk: 'RED'
  },
  {
    id: 'MOT-06',
    abhaId: '91-6623-1189-4450',
    rchId: 'AS-SON-2026-7712',
    name: 'Pallabi Bora',
    age: 29,
    parity: 2,
    gravida: 3,
    gestationalWeeks: 18,
    edd: '2027-04-20',
    district: 'Sonitpur',
    block: 'Dhekiajuli',
    subCentre: 'Monabarie Garden Clinic',
    village: 'Monabarie Tea Estate Div B',
    isTeaGarden: true,
    teaEstateName: 'Monabarie Tea Estate',
    isCharArea: false,
    phone: '+91 97060 11982',
    assignedAsha: 'Anita Boro (ASHA)',
    assignedAnm: 'Rumi Saikia (ANM)',
    baselineMap: 80.7,
    currentMap: 82.0,
    currentRisk: 'GREEN'
  }
];

export const MOCK_LONGITUDINAL_VITALS: Record<string, MaternalVitalsReading[]> = {
  'MOT-01': [
    {
      id: 'VIT-01-A',
      motherId: 'MOT-01',
      timestamp: '2026-10-15T09:30:00Z',
      gestationalWeeks: 10,
      systolic: 110,
      diastolic: 67,
      map: 81.3,
      pulse: 76,
      proteinuria: 'NIL',
      deviceType: 'BLE_AUTOMATED',
      symptoms: { headache: false, blurredVision: false, epigastricPain: false, facialEdema: false },
      riskCategory: 'GREEN',
      mapVelocity: 0.0
    },
    {
      id: 'VIT-01-B',
      motherId: 'MOT-01',
      timestamp: '2026-11-20T10:15:00Z',
      gestationalWeeks: 15,
      systolic: 126,
      diastolic: 85,
      map: 98.7,
      pulse: 84,
      proteinuria: 'TRACE',
      deviceType: 'BLE_AUTOMATED',
      symptoms: { headache: true, blurredVision: false, epigastricPain: false, facialEdema: true },
      riskCategory: 'AMBER',
      mapVelocity: 3.48, // Rapid rise > 1.25 mmHg/wk
      notes: 'Prompted low-dose aspirin 150mg prophylaxis before 16w window closes.'
    }
  ],
  'MOT-02': [
    {
      id: 'VIT-02-A',
      motherId: 'MOT-02',
      timestamp: '2026-07-12T11:00:00Z',
      gestationalWeeks: 11,
      systolic: 112,
      diastolic: 70,
      map: 84.0,
      pulse: 78,
      proteinuria: 'NIL',
      deviceType: 'BLE_AUTOMATED',
      symptoms: { headache: false, blurredVision: false, epigastricPain: false, facialEdema: false },
      riskCategory: 'GREEN',
      mapVelocity: 0.0
    },
    {
      id: 'VIT-02-B',
      motherId: 'MOT-02',
      timestamp: '2026-09-18T10:30:00Z',
      gestationalWeeks: 20,
      systolic: 130,
      diastolic: 86,
      map: 100.7,
      pulse: 82,
      proteinuria: '1+',
      deviceType: 'OPTICAL_OCR',
      symptoms: { headache: true, blurredVision: false, epigastricPain: false, facialEdema: true },
      riskCategory: 'AMBER',
      mapVelocity: 1.85
    },
    {
      id: 'VIT-02-C',
      motherId: 'MOT-02',
      timestamp: '2026-11-21T08:45:00Z',
      gestationalWeeks: 29,
      systolic: 162,
      diastolic: 108,
      map: 126.0,
      pulse: 98,
      proteinuria: '3+',
      deviceType: 'BLE_AUTOMATED',
      symptoms: { headache: true, blurredVision: true, epigastricPain: true, facialEdema: true },
      riskCategory: 'RED',
      mapVelocity: 2.81,
      notes: 'Impending eclampsia. Pritchard protocol ordered; automated 108 dispatch to FAAMCH Barpeta.'
    }
  ]
};

export const MOCK_REFERRALS: EmergencyReferral[] = [
  {
    id: 'REF-2026-092',
    motherId: 'MOT-02',
    motherName: 'Hasina Khatun',
    age: 28,
    gestationalWeeks: 29,
    district: 'Barpeta',
    village: 'Alopati Char Island',
    isTeaGarden: false,
    isCharArea: true,
    bp: '162/108 mmHg',
    map: 126.0,
    proteinuria: '3+',
    symptoms: ['Severe Frontal Headache', 'Epigastric Pain', 'Visual Scotoma', 'Bilateral Facial Edema'],
    urgency: 'EMERGENCY_108',
    fromFacility: 'Baghbar Char Sub-Centre',
    toFacility: 'Fakhruddin Ali Ahmed Medical College & Hospital (FAAMCH), Barpeta',
    ambulanceStatus: 'TRANSIT_FRU',
    ambulanceId: 'AS-01-EMRI-1082 (ALS Unit)',
    driverPhone: '+91 94350 11082',
    dispatchTime: '2026-11-21 09:15 AM',
    estimatedArrivalTimeMin: 22,
    fruBedReserved: true,
    bloodBankAlerted: true,
    mgso4Administered: true
  },
  {
    id: 'REF-2026-093',
    motherId: 'MOT-05',
    motherName: 'Rokeya Parbin',
    age: 24,
    gestationalWeeks: 32,
    district: 'Dhubri',
    village: 'Kazikata Char',
    isTeaGarden: false,
    isCharArea: true,
    bp: '154/98 mmHg',
    map: 116.7,
    proteinuria: '2+',
    symptoms: ['Persistent Headache', 'Pedal Edema'],
    urgency: 'EMERGENCY_108',
    fromFacility: 'Chapar Riverine Unit',
    toFacility: 'Dhubri Medical College & Hospital (DMCH)',
    ambulanceStatus: 'EN_ROUTE',
    ambulanceId: 'AS-17-EMRI-0491 (BLS Unit)',
    driverPhone: '+91 98640 44910',
    dispatchTime: '2026-11-21 10:05 AM',
    estimatedArrivalTimeMin: 18,
    fruBedReserved: true,
    bloodBankAlerted: false,
    mgso4Administered: true
  }
];

export const MOCK_DISTRICT_EPIDEMIOLOGY: DistrictEpidemiology[] = [
  {
    districtId: 'DIB',
    districtName: 'Dibrugarh',
    zone: 'UPPER_ASSAM',
    totalScreened: 8420,
    highRiskCount: 1290,
    pihPrevalencePct: 15.3,
    teaEstatesCount: 144,
    charSubCentresCount: 12,
    boatClinicsCount: 2,
    fruCount: 5,
    lat: 27.4728,
    lng: 94.9120
  },
  {
    districtId: 'BAR',
    districtName: 'Barpeta',
    zone: 'LOWER_ASSAM',
    totalScreened: 7650,
    highRiskCount: 1140,
    pihPrevalencePct: 14.9,
    teaEstatesCount: 4,
    charSubCentresCount: 68,
    boatClinicsCount: 3,
    fruCount: 4,
    lat: 26.3216,
    lng: 91.0066
  },
  {
    districtId: 'TIN',
    districtName: 'Tinsukia',
    zone: 'UPPER_ASSAM',
    totalScreened: 6180,
    highRiskCount: 980,
    pihPrevalencePct: 15.8,
    teaEstatesCount: 122,
    charSubCentresCount: 8,
    boatClinicsCount: 1,
    fruCount: 3,
    lat: 27.4922,
    lng: 95.3468
  },
  {
    districtId: 'DHU',
    districtName: 'Dhubri',
    zone: 'LOWER_ASSAM',
    totalScreened: 5890,
    highRiskCount: 840,
    pihPrevalencePct: 14.2,
    teaEstatesCount: 2,
    charSubCentresCount: 54,
    boatClinicsCount: 3,
    fruCount: 3,
    lat: 26.0207,
    lng: 89.9742
  },
  {
    districtId: 'SON',
    districtName: 'Sonitpur',
    zone: 'NORTH_BANK',
    totalScreened: 6540,
    highRiskCount: 780,
    pihPrevalencePct: 11.9,
    teaEstatesCount: 64,
    charSubCentresCount: 16,
    boatClinicsCount: 2,
    fruCount: 4,
    lat: 26.6528,
    lng: 92.7926
  },
  {
    districtId: 'KAM',
    districtName: 'Kamrup Metro',
    zone: 'CENTRAL_ASSAM',
    totalScreened: 10600,
    highRiskCount: 1020,
    pihPrevalencePct: 9.6,
    teaEstatesCount: 6,
    charSubCentresCount: 4,
    boatClinicsCount: 1,
    fruCount: 7,
    lat: 26.1445,
    lng: 91.7362
  }
];

/**
 * Real-time Clinical Decision Support System (CDSS) algorithm
 * Based on GoI Guidelines for Management of Hypertensive Disorders in Pregnancy & WHO protocols
 */
export function computeCDSSRecommendation(
  systolic: number,
  diastolic: number,
  proteinuria: UrinalysisProtein,
  gestationalWeeks: number,
  baselineMap: number,
  symptoms: { headache: boolean; blurredVision: boolean; epigastricPain: boolean; facialEdema: boolean; }
): CDSSRecommendation {
  // Mean Arterial Pressure calculation
  const map = Number(((2 * diastolic + systolic) / 3).toFixed(1));
  const mapDelta = baselineMap > 0 ? Number((map - baselineMap).toFixed(1)) : 0;
  const mapVelocity = gestationalWeeks > 12 ? Number((mapDelta / Math.max(1, gestationalWeeks - 12)).toFixed(2)) : 0;

  const hasCriticalSymptoms = symptoms.headache || symptoms.blurredVision || symptoms.epigastricPain;
  const isProteinuriaSevere = proteinuria === '2+' || proteinuria === '3+' || proteinuria === '4+';
  const isSevereHypertension = systolic >= 160 || diastolic >= 110;
  const isModerateHypertension = (systolic >= 140 && systolic < 160) || (diastolic >= 90 && diastolic < 110);
  const isElevatedMAP = map >= 96 || mapVelocity > 1.25;

  let riskCategory: 'GREEN' | 'AMBER' | 'RED' = 'GREEN';
  let referralPriority: 'ROUTINE' | 'URGENT' | 'EMERGENCY_108' = 'ROUTINE';
  let prophylaxisAspirinRecommended = false;
  let labetalolRecommended = false;
  let mgso4Recommended = false;
  let followUpIntervalDays = 28;
  const clinicalActions: string[] = [];

  if (isSevereHypertension || (isModerateHypertension && (isProteinuriaSevere || hasCriticalSymptoms)) || map >= 105) {
    riskCategory = 'RED';
    referralPriority = 'EMERGENCY_108';
    mgso4Recommended = true;
    labetalolRecommended = true;
    followUpIntervalDays = 1;

    clinicalActions.push('CRITICAL: Impending Severe Pre-Eclampsia / Eclampsia flagged.');
    clinicalActions.push('Administer Pritchard MgSO4 loading dose: 4g IV (20% over 5-10 min) + 10g deep IM (5g in each buttock with 1ml 2% lignocaine).');
    clinicalActions.push('Initiate Oral Labetalol 100 mg BD immediately to control BP under Medical Officer tele-supervision.');
    clinicalActions.push('Summon GVK EMRI 108 Mrityunjoy Emergency Ambulance with GPS coordinates.');
    clinicalActions.push('Pre-alert destination FRU / Medical College Obstetric ICU and cross-match blood bank.');
  } else if (isModerateHypertension || (map >= 88 && map < 105) || mapVelocity > 1.25 || proteinuria === '1+') {
    riskCategory = 'AMBER';
    referralPriority = 'URGENT';
    followUpIntervalDays = 14;

    clinicalActions.push('MODERATE RISK: Gestational Hypertension / Early Pre-Eclampsia Trajectory detected.');
    if (gestationalWeeks <= 16) {
      prophylaxisAspirinRecommended = true;
      clinicalActions.push('CRITICAL WINDOW (<16 WEEKS): Initiate Low-Dose Aspirin 75-150 mg OD at bedtime until 36 weeks.');
    } else {
      clinicalActions.push('Gestational age >16w: Initiate close outpatient surveillance; dietary calcium 1.5-2.0 g daily.');
    }
    if (systolic >= 150 || diastolic >= 100) {
      labetalolRecommended = true;
      clinicalActions.push('Consider oral labetalol 100 mg BD under Medical Officer evaluation.');
    }
    clinicalActions.push('Repeat BP and dipstick urinalysis in 14 days; counsel on danger symptoms.');
  } else {
    riskCategory = 'GREEN';
    referralPriority = 'ROUTINE';
    followUpIntervalDays = 28;
    clinicalActions.push('Normal maternal hemodynamics. Physiological BP range maintained.');
    clinicalActions.push('Continue standard Antenatal Care (ANC) visit schedule.');
    clinicalActions.push('Counsel on balanced nutrition, adequate rest, and daily calcium supplementation (1.5 g/day).');
  }

  const assameseAdvisory = riskCategory === 'RED'
    ? 'জরুৰী সতৰ্কতা: আপোনাৰ ৰক্তচাপ আৰু পৰীক্ষাৰ ফলাফল বিপদজনক স্তৰত আছে। ততাতৈয়াকৈ ১০৮ এম্বুলেন্সৰ জৰিয়তে নিকটতম চিকিৎসালয়লৈ যোৱাৰ ব্যৱস্থা কৰা হৈছে।'
    : riskCategory === 'AMBER'
    ? 'সতৰ্কতা: ৰক্তচাপ বৃদ্ধি পাইছে। চিকিৎসকৰ পৰামৰ্শ মতে ঔষধ আৰু কেলচিয়াম নিয়মীয়াকৈ গ্ৰহণ কৰক আৰু ১৪ দিনৰ ভিতৰত পুনৰ পৰীক্ষা কৰাওক।'
    : 'আপোনাৰ ৰক্তচাপ স্বাভাৱিক আছে। নিয়মীয়া আহাৰ, বিশ্ৰাম আৰু মাহেকীয়া পৰীক্ষা অব্যাহত ৰাখক।';

  const englishAdvisory = riskCategory === 'RED'
    ? 'EMERGENCY ALERT: Severe high blood pressure and danger signs detected. Priority 108 ambulance dispatch and hospital bed preparation initiated.'
    : riskCategory === 'AMBER'
    ? 'MODERATE WARNING: Elevated arterial pressure trajectory detected. Low-dose aspirin prophylaxis and 14-day re-evaluation advised.'
    : 'NORMAL: Healthy maternal blood pressure and vitals. Continue regular ANC schedule and nutritional calcium intake.';

  return {
    riskCategory,
    map,
    mapVelocity,
    prophylaxisAspirinRecommended,
    aspirinDosage: prophylaxisAspirinRecommended ? '75–150 mg OD at bedtime' : undefined,
    calciumDosage: '1.5–2.0 g/day in divided doses',
    labetalolRecommended,
    labetalolDosage: labetalolRecommended ? '100 mg BD (titrate up to 400 mg BD if needed)' : undefined,
    mgso4Recommended,
    mgso4Protocol: mgso4Recommended ? 'Pritchard Regimen: 4g IV (20%) + 10g deep IM (50%)' : undefined,
    referralPriority,
    followUpIntervalDays,
    clinicalActions,
    assameseAdvisory,
    englishAdvisory
  };
}
