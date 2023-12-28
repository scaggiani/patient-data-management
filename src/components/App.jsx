import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import UsePatients from "../js/UsePatients";

function App() {
  const [patients, setPatients, error] = UsePatients();

  return (
    <div>
      <AppHeader patients={patients} onNewPatientHandler={setPatients} />
      <AppContent patients={patients} error={error} />
    </div>
  );
}

export default App;
