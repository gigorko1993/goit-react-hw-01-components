import Profile from "../src/Components/Profile";
import Statistics from "../src/Components/Statistics";
import user from "../src/Data/user.json";
import stat from "../src/Data/statistical-data.json";

export default function App() {
  return (
    <div>
      <Profile items={user} />
      <Statistics items={stat} />
    </div>
  );
}
