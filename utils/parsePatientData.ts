/* eslint-disable @typescript-eslint/no-explicit-any */
import { PatientDataWithoutID, Gender } from "../types";

//parse name
const isString = (text: any): text is string => {
  return typeof text === "string";
};
const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error(`Incorrect or missing name: ${name}`);
  }
  return name;
};
//parse date of birth
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
const parseDateOfBirth = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect date format ${date}`);
  }
  return date;
};

//parse gender
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};
const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect gender format, ${gender}`);
  }
  return gender;
};
//parse occupation
const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error(`Incorrect or missing occupation: ${occupation}`);
  }
  return occupation;
};
const parseSSN = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error(`Incorrect or missing SSN, ${ssn}`);
  }
  return ssn;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parsePatientData = (object: any): PatientDataWithoutID => {
  const newPatientData: PatientDataWithoutID = {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    gender: parseGender(object.gender),
    ssn: parseSSN(object.ssn),
    occupation: parseOccupation(object.occupation),
  };
  return newPatientData;
};
export default parsePatientData;
