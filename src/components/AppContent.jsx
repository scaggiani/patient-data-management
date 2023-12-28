import PatientList from "./PatientList";

function AppContent({ patients, error }) {
  return (
    <div>
      {error !== null && <p>Error fetching patients: {error}</p>}
      <PatientList patients={patients} />
    </div>
  );
}

export default AppContent;
