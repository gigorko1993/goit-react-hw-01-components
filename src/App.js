import Profile from "../src/Components/Profile";
import Statistics from "../src/Components/Statistics";
import FriendList from "../src/Components/FriendList";
import user from "../src/Data/user.json";
import stat from "../src/Data/statistical-data.json";
import friends from "../src/Data/friends.json";

export default function App() {
  return (
    <div>
      <Profile items={user} />
      <Statistics items={stat} />
      <FriendList items={friends} />
    </div>
  );
}
