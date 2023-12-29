import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import EditPatientModal from "./EditPatientModal";
import moment from "moment";

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
        <Container>
          <Row>
            <Col xs="auto" className="text-center">
              <Card.Img
                className="card-img-top"
                variant="top"
                src={patient.avatar}
              />
              <Card.Body>
                <Card.Title className="text-center">{patient.name}</Card.Title>
                <div className="text-secondary text-center card-link">
                  <a
                    className="card-link-a"
                    href={patient.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {patient.website}
                  </a>
                </div>
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
            </Col>
            {showMore && (
              <Col xs="8">
                <Container>
                  <Row className="border-bottom card-details">
                    <Col>
                      <Row>
                        <Col>
                          <div className="card-details-title">ID</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="card-details-content">
                            {patient.id}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <div className="card-details-title">Created at</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="card-details-content">
                            {moment(patient.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <div className="card-details-title">Description</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="card-details-content">
                            {patient.description}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Col>
            )}
          </Row>
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
