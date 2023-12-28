import { CardGroup } from "react-bootstrap";
import PatientCard from "./PatientCard";

function PatientList({ patients }) {
  return (
    <div>
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
