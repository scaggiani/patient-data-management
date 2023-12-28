import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useImmer } from "use-immer";

function AppHeader({ patients, onNewPatientHandler }) {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);
  const [patientUpdated, updatePatient] = useImmer({
    id: "",
    name: "",
    avatar: "",
    description: "",
    website: "",
  });

  function handleNameChange(e) {
    updatePatient((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleAvatarChange(e) {
    updatePatient((draft) => {
      draft.avatar = e.target.value;
    });
  }

  function handleDescriptionChange(e) {
    updatePatient((draft) => {
      draft.description = e.target.value;
    });
  }

  function handleWebsiteChange(e) {
    updatePatient((draft) => {
      draft.website = e.target.value;
    });
  }

  function handleSaveNewPatient() {
    let newPatient = { ...patientUpdated };
    newPatient.id = patients.length + 1;
    const newPatientList = [...patients, newPatient];
    onNewPatientHandler(newPatientList);
    handleCloseModal();
  }

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
            <Modal show={show} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add Patient</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientUpdated.name}
                      onChange={handleNameChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientUpdated.avatar}
                      onChange={handleAvatarChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientUpdated.website}
                      onChange={handleWebsiteChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={patientUpdated.description}
                      onChange={handleDescriptionChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSaveNewPatient}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppHeader;
