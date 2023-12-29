import { Container } from "react-bootstrap";
import PatientList from "./PatientList";

function AppContent({ patients, error }) {
  return (
    <Container fluid>
      {error !== null && <p>Error fetching patients: {error}</p>}
      <PatientList patients={patients} />
    </Container>
  );
}

export default AppContent;
