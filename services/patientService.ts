import patientData from "../data/patients";
import { PatientData, PatientDataWithoutID, PublicPatient } from "../types";

const getPatients = (): Array<PatientData> => {
  return patientData;
};

const getPatient = (id: string): PatientData | undefined => {
  const patient = patientData.find((patient) => patient.id === id);

  return patient;
};
const getInfoNoSSN = (): Array<PublicPatient> => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
const addPatient = (entry: PatientDataWithoutID): PatientData => {
  const newPatientEntry = {
    id: String(Math.floor(Math.random() * Math.floor(500))),
    ...entry,
  };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getInfoNoSSN,
  addPatient,
  getPatient,
};
