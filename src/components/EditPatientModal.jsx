import { Modal, Form, Button } from "react-bootstrap";
import { useImmer } from "use-immer";

function EditPatientModal({ patient, show, onModalChangeHandler }) {
  const handleCloseModal = () => onModalChangeHandler(false);
  const [patientUpdated, updatePatient] = useImmer({
    name: patient.name,
    avatar: patient.avatar,
    description: patient.description,
    website: patient.website,
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
      name: patient.name,
      avatar: patient.avatar,
      description: patient.description,
      website: patient.website,
    });
    handleCloseModal();
  }

  function handleSavePatient() {
    patient.name = patientUpdated.name;
    patient.avatar = patientUpdated.avatar;
    patient.description = patientUpdated.description;
    patient.website = patientUpdated.website;
    handleCloseModal();
  }
  return (
    <div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={patientUpdated.name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Avatar</Form.Label>
              <Form.Control
                type="text"
                value={patientUpdated.avatar}
                onChange={handleAvatarChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Button variant="secondary" onClick={handleDiscardChanges}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSavePatient}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPatientModal;
