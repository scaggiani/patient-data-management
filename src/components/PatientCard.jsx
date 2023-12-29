import { Card, Button, Container } from "react-bootstrap";
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
      <Card className="border-0">
        <Card.Img className="card-img-top" variant="top" src={patient.avatar} />
        <Card.Body>
          <Card.Title className="text-center">{patient.name}</Card.Title>
          <Card.Text className="text-secondary">
            <div className="text-center card-link">
              <a
                className="card-link-a"
                href={patient.website}
                target="_blank"
                rel="noreferrer"
              >
                {patient.website}
              </a>
            </div>
            {showMore && <p>{patient.description}</p>}
          </Card.Text>
        </Card.Body>
        <Container className="text-center">
          <Button
            className="card-btn border"
            variant="light"
            onClick={handleShowModal}
          >
            Edit
          </Button>
          <Button
            className="card-btn border"
            variant="light"
            onClick={handleMoreClick}
          >
            {showMore ? "Hide" : "View"} details
          </Button>
        </Container>
        <EditPatientModal
          patient={patient}
          show={show}
          onModalChangeHandler={setShow}
        />
      </Card>
    </div>
  );
}

export default PatientCard;
