// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface DiagnosisData {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientData {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}

export type PublicPatient = Omit<PatientData, "ssn" | "entries">;
export type PatientDataWithoutSSN = Omit<PatientData, "ssn">;
export type PatientDataWithoutID = Omit<PatientData, "id">;
export enum Gender {
  Male = "male",
  Female = "female",
}
