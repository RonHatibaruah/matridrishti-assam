export type RiskCategory = 'GREEN' | 'AMBER' | 'RED';

export type UrinalysisProtein = 'NIL' | 'TRACE' | '1+' | '2+' | '3+' | '4+';

export type DeviceInputType = 'BLE_AUTOMATED' | 'OPTICAL_OCR' | 'MANUAL';

export type ReferralUrgency = 'ROUTINE' | 'URGENT' | 'EMERGENCY_108';

export type AmbulanceStatus = 'DISPATCHED' | 'EN_ROUTE' | 'ARRIVED_SC' | 'TRANSIT_FRU' | 'COMPLETED';

export interface PregnantMother {
  id: string;
  abhaId: string;
  rchId: string;
  name: string;
  age: number;
  parity: number;
  gravida: number;
  gestationalWeeks: number;
  edd: string; // Expected Date of Delivery
  district: string;
  block: string;
  subCentre: string;
  village: string;
  isTeaGarden: boolean;
  teaEstateName?: string;
  isCharArea: boolean;
  phone: string;
  assignedAsha: string;
  assignedAnm: string;
  baselineMap: number; // Recorded at weeks 10-14
  currentMap: number;
  currentRisk: RiskCategory;
}

export interface MaternalVitalsReading {
  id: string;
  motherId: string;
  timestamp: string;
  gestationalWeeks: number;
  systolic: number;
  diastolic: number;
  map: number;
  pulse: number;
  proteinuria: UrinalysisProtein;
  deviceType: DeviceInputType;
  symptoms: {
    headache: boolean;
    blurredVision: boolean;
    epigastricPain: boolean;
    facialEdema: boolean;
  };
  riskCategory: RiskCategory;
  mapVelocity: number; // mmHg / week
  notes?: string;
}

export interface CDSSRecommendation {
  riskCategory: RiskCategory;
  map: number;
  mapVelocity: number;
  prophylaxisAspirinRecommended: boolean;
  aspirinDosage?: string;
  calciumDosage: string;
  labetalolRecommended: boolean;
  labetalolDosage?: string;
  mgso4Recommended: boolean;
  mgso4Protocol?: string;
  referralPriority: ReferralUrgency;
  followUpIntervalDays: number;
  clinicalActions: string[];
  assameseAdvisory: string;
  englishAdvisory: string;
}

export interface EmergencyReferral {
  id: string;
  motherId: string;
  motherName: string;
  age: number;
  gestationalWeeks: number;
  district: string;
  village: string;
  isTeaGarden: boolean;
  teaEstateName?: string;
  isCharArea: boolean;
  bp: string;
  map: number;
  proteinuria: UrinalysisProtein;
  symptoms: string[];
  urgency: ReferralUrgency;
  fromFacility: string;
  toFacility: string;
  ambulanceStatus: AmbulanceStatus;
  ambulanceId: string;
  driverPhone: string;
  dispatchTime: string;
  estimatedArrivalTimeMin: number;
  fruBedReserved: boolean;
  bloodBankAlerted: boolean;
  mgso4Administered: boolean;
}

export interface DistrictEpidemiology {
  districtId: string;
  districtName: string;
  zone: 'UPPER_ASSAM' | 'LOWER_ASSAM' | 'CENTRAL_ASSAM' | 'BARAK_VALLEY' | 'NORTH_BANK';
  totalScreened: number;
  highRiskCount: number;
  pihPrevalencePct: number;
  teaEstatesCount: number;
  charSubCentresCount: number;
  boatClinicsCount: number;
  fruCount: number;
  lat: number;
  lng: number;
}

export interface ClinicalUser {
  id: string;
  name: string;
  email: string;
  role: 'ASHA' | 'ANM' | 'MEDICAL_OFFICER' | 'STATE_ADMIN';
  facility: string;
  district: string;
  designation: string;
}
