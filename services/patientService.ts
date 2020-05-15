import patientData from "../data/patients";
import {
  PatientData,
  PatientDataWithoutSSN,
  PatientDataWithoutID,
} from "../types";

const getPatients = (): Array<PatientData> => {
  return patientData;
};

const getInfoNoSSN = (): Array<PatientDataWithoutSSN> => {
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
};
