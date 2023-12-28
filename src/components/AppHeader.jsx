import { Container, Row, Col, Button } from "react-bootstrap";
import AddPatientModal from "./AddPatientModal";
import { useState } from "react";

function AppHeader({ patients, onNewPatientHandler }) {
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <h1 className="title">Patients</h1>
          </Col>
          <Col>
            <Button
              variant="primary"
              className="add-patient"
              onClick={handleShowModal}
            >
              +
            </Button>
            <AddPatientModal
              patients={patients}
              onNewPatientHandler={onNewPatientHandler}
              show={show}
              onModalChangeHandler={setShow}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppHeader;
