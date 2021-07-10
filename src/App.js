import UserList from "../src/Components/UserList";
import user from "../src/user.json";

export default function App() {
  return (
    <div>
      <UserList items={user} />
    </div>
  );
}
