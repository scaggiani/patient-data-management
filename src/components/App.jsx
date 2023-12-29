import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import UsePatients from "../js/UsePatients";
import { Container } from "react-bootstrap";

function App() {
  const [patients, setPatients, error] = UsePatients();

  return (
    <Container fluid>
      <AppHeader patients={patients} onNewPatientHandler={setPatients} />
      <AppContent patients={patients} error={error} />
    </Container>
  );
}

export default App;
