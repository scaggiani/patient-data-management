import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { useState } from "react";
import EditPatientModal from "./EditPatientModal";

function PatientCard({ patient }) {
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div key={patient.id}>
      <Card className="bg-body-tertiary">
        <Card.Img className="card-img-top" variant="top" src={patient.avatar} />
        <Card.Body>
          <Card.Title>{patient.name}</Card.Title>
          <Card.Text className="text-secondary">
            <div>ID:{patient.id}</div>
            <div>
              <a href={patient.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
            <button onClick={handleMoreClick}>
              {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{patient.description}</p>}
          </Card.Text>
        </Card.Body>
        <Container>
          <div className="d-flex">
            <Button
              className="edit-patient-btn"
              variant="primary"
              onClick={handleShowModal}
            >
              Edit
            </Button>
          </div>
        </Container>
        <EditPatientModal
          patient={patient}
          show={show}
          onModalChangeHandler={setShow}
        />
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
