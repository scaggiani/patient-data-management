import { CardGroup } from "react-bootstrap";
import PatientCard from "./PatientCard";
import LoadingStatus from "./LoadingStatus";

function PatientList({ patients }) {
  return (
    <div>
      <CardGroup className="justify-content-center">
        {patients ? (
          patients.map((patient) => (
            <PatientCard patient={patient} key={patient.id} />
          ))
        ) : (
          <LoadingStatus />
        )}
      </CardGroup>
    </div>
  );
}

export default PatientList;
