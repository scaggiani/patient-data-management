import { CardGroup } from "react-bootstrap";
import UserItem from "./UserItem";

function UserList({ users }) {
  return (
    <CardGroup>
      {users
        ? users.map((user) => <UserItem user={user} key={user.id} />)
        : "Loading..."}
    </CardGroup>
  );
}

export default UserList;
