import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import moment from "moment";
import { useImmer } from "use-immer";
import { useState } from "react";

function AddPatientModal({
  patients,
  onNewPatientHandler,
  show,
  onModalChangeHandler,
}) {
  const handleCloseModal = () => onModalChangeHandler(false);
  const [validated, setValidated] = useState(false);
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

  function handleDiscardChanges() {
    updatePatient({
      id: "",
      name: "",
      avatar: "",
      description: "",
      website: "",
    });
    handleCloseModal();
  }

  function handleSaveNewPatient() {
    let newPatient = { ...patientUpdated };
    newPatient.id = patients.length + 1;
    newPatient.createdAt = moment();
    const newPatientList = [...patients, newPatient];
    onNewPatientHandler(newPatientList);
    handleDiscardChanges();
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      handleSaveNewPatient();
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  return (
    <div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Add Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  className="modal-input"
                  type="text"
                  value={patientUpdated.name}
                  onChange={handleNameChange}
                  required
                />
                <Form.Control.Feedback
                  className="validation-message"
                  type="invalid"
                >
                  Please provide a name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Avatar</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  className="modal-input"
                  type="url"
                  value={patientUpdated.avatar}
                  onChange={handleAvatarChange}
                  required
                  pattern="https?://.+"
                />
                <Form.Control.Feedback
                  className="validation-message"
                  type="invalid"
                >
                  Please provide a valid avatar URL.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Website</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  className="modal-input"
                  type="url"
                  value={patientUpdated.website}
                  onChange={handleWebsiteChange}
                  required
                  pattern="https?://.+"
                />
                <Form.Control.Feedback
                  className="validation-message"
                  type="invalid"
                >
                  Please provide a valid website URL.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="modal-label">Description</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  className="modal-input"
                  as="textarea"
                  rows={3}
                  value={patientUpdated.description}
                  onChange={handleDescriptionChange}
                  required
                />
                <Form.Control.Feedback
                  className="validation-message"
                  type="invalid"
                >
                  Please provide a Description.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              className="modal-save-btn border"
              type="submit"
              variant="primary"
            >
              Save
            </Button>
            <Button
              className="modal-close-btn border"
              variant="light"
              onClick={handleDiscardChanges}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddPatientModal;
