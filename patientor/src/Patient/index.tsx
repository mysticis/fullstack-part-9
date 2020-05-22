import React from "react";
import { useStateValue } from "../state/state";
//import { Patient } from "../types";
import { Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
const PatientDetails: React.FC = () => {
  const [{ patients }] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const patient = patients[id];
  console.log(patient);
  console.log(patients);
  return (
    <div>
      <h2>
        {patient.name}{" "}
        {patient.gender === "male" ? (
          <Icon name="male" />
        ) : (
          <Icon name="female" />
        )}
      </h2>
      <p>DOB: {patient.dateOfBirth}</p>
      <p>SSN:{patient.ssn}</p>
      <p>Occupation: {patient.occupation}</p>
    </div>
  );
};

export default PatientDetails;
