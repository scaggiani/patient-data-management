import { Card } from "react-bootstrap";
import moment from "moment";

function PatientCard({ patient }) {
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
