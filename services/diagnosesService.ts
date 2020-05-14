import diagnosesData from "../data/diagnosis";
import { DiagnosisData } from "../types";

const getDiagnoses = (): Array<DiagnosisData> => {
  return diagnosesData;
};

export default { getDiagnoses };
