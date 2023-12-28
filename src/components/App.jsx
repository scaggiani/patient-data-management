import UseUsers from "./UseUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./UserList";

function App() {
  const [users, error] = UseUsers();

  return (
    <div>
      {error !== null && <p>Error fetching users: {error}</p>}
      <UserList users={users} />
    </div>
  );
}

export default App;
