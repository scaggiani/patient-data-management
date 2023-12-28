import UsePatients from "../js/UsePatients";
import PatientList from "./PatientList";

function AppContent() {
  const [patients, error] = UsePatients();

  return (
    <div>
      {error !== null && <p>Error fetching patients: {error}</p>}
      <PatientList patients={patients} />
    </div>
  );
}

export default AppContent;
