import UsePatients from "./UsePatients";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientList from "./PatientList";

function App() {
  const [patients, error] = UsePatients();

  return (
    <div>
      {error !== null && <p>Error fetching patients: {error}</p>}
      <PatientList patients={patients} />
    </div>
  );
}

export default App;
