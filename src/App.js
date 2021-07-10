import Profile from "../src/Components/Profile";
import Statistics from "../src/Components/Statistics";
import FriendList from "../src/Components/FriendList";
import TransactionHistory from "../src/Components/TransactionHistory";
import user from "../src/Data/user.json";
import stat from "../src/Data/statistical-data.json";
import friends from "../src/Data/friends.json";
import transactions from "../src/Data/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
