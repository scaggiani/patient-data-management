import { Card } from "react-bootstrap";
import moment from "moment";

function UserItem({ user }) {
  return (
    <div key={user.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-img-top" variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>
            {user.id}. {user.name}
          </Card.Title>
          <Card.Text>
            <a href={user.website} target="_blank" rel="noreferrer">
              Go to Website
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Created: {moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default UserItem;
