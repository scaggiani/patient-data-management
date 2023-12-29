import { Button, Modal, Form } from "react-bootstrap";
import { useImmer } from "use-immer";
import moment from "moment";

function AddPatientModal({
  patients,
  onNewPatientHandler,
  show,
  onModalChangeHandler,
}) {
  const handleCloseModal = () => onModalChangeHandler(false);

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
    handleCloseModal();
  }

  return (
    <div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient</Modal.Title>
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
          <Button variant="primary" onClick={handleSaveNewPatient}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddPatientModal;
