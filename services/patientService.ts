import patientData from "../data/patients";

import { PatientData, PatientDataWithoutSSN } from "../types";

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

export default {
  getPatients,
  getInfoNoSSN,
};
