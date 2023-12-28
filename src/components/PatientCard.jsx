import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { useState } from "react";

function PatientCard({ patient }) {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div key={patient.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-img-top" variant="top" src={patient.avatar} />
        <Card.Body>
          <Card.Title>
            {patient.id}. {patient.name}
          </Card.Title>
          <Card.Text>
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
