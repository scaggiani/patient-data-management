import { CardGroup } from "react-bootstrap";
import PatientCard from "./PatientCard";

function PatientList({ patients }) {
  return (
    <div>
      <h1>Patients</h1>
      <CardGroup>
        {patients
          ? patients.map((patient) => (
              <PatientCard patient={patient} key={patient.id} />
            ))
          : "Loading..."}
      </CardGroup>
    </div>
  );
}

export default PatientList;
