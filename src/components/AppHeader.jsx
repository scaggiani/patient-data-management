import { Container, Button, Navbar } from "react-bootstrap";
import AddPatientModal from "./AddPatientModal";
import { useState } from "react";

function AppHeader({ patients, onNewPatientHandler }) {
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);

  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt="logo"
            src="/img/logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="navbar-title">Patient Data Manager</span>
        </Navbar.Brand>
        <Button
          className="ms-auto add-patient-btn"
          onClick={handleShowModal}
          title="Add New Patient"
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
        <AddPatientModal
          patients={patients}
          onNewPatientHandler={onNewPatientHandler}
          show={show}
          onModalChangeHandler={setShow}
        />
      </Container>
    </Navbar>
  );
}

export default AppHeader;
