export interface Procedure {
  id: string;
  name: string;
  type: 'invasive' | 'non-invasive';
  materials: string[];
  steps: string[];
  biosecurity: string[];
}

export interface Drug {
  id: string;
  name: string;
  group: string; // Grupo farmacológico
  mechanism: string; // Mecanismo de acción
  dosage: string; // Dosis (Ped/Adulta)
  route: string; // Vía de administración
  contraindications: string[]; // Precauciones / No deben tomar
}

export interface Pathology {
  id: string;
  name: string;
  system: string;
  definition: string;
  affectedTarget: string; // Célula u órgano afectado
  symptoms: string[];
  nursingCare: string[];
}

export interface LabValue {
  name: string;
  normalRange: string;
  unit: string;
}

export interface AssessmentScale {
  id: string;
  name: string;
  description: string;
}

export interface DictionaryEntry {
  term: string;
  definition: string;
  abbreviation?: string;
  category: 'Anatomía' | 'Procedimientos' | 'Abreviaturas' | 'Fisiología' | 'General';
}

export interface ClinicalCase {
  id: string;
  title: string;
  category: 'pharmacology' | 'pathology';
  patient: string;
  vitals: {
    fc: string;
    fr: string;
    pa: string;
    temp: string;
    sat: string;
  };
  scenario: string;
  treatment?: string; // For pharmacology cases
  diagnosis?: string; // For pathology cases
  options?: string[]; // For pathology multiple choice
  correctAnswer?: string; // For pathology correct answer
  care: string[];
}
