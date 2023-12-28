import { Card, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { useState } from "react";
import { useImmer } from "use-immer";

function PatientCard({ patient }) {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);
  const [patientUpdated, updatePatient] = useImmer({
    name: patient.name,
    avatar: patient.avatar,
    description: patient.description,
    website: patient.website,
  });

  function handleMoreClick() {
    setShowMore(!showMore);
  }

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

  function handleSavePatient() {
    patient.name = patientUpdated.name;
    patient.avatar = patientUpdated.avatar;
    patient.description = patientUpdated.description;
    patient.website = patientUpdated.website;
    handleCloseModal();
  }

  return (
    <div key={patient.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-img-top" variant="top" src={patient.avatar} />
        <Card.Body>
          <Card.Title>{patient.name}</Card.Title>
          <Card.Text>
            Patient id:{patient.id} <br />
            <a href={patient.website} target="_blank" rel="noreferrer">
              Go to Website
            </a>
            <br />
            <button onClick={handleMoreClick}>
              {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{patient.description}</p>}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={handleShowModal}>
          Edit Patient
        </Button>

        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Patient</Modal.Title>
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
            <Button variant="primary" onClick={handleSavePatient}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Card.Footer>
          <small className="text-muted">
            Created:{" "}
            {moment(patient.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default PatientCard;
