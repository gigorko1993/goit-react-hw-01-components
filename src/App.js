import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import user from '../src/Data/user.json';
import stat from '../src/Data/statistical-data.json';
import friends from '../src/Data/friends.json';
import transactions from '../src/Data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={stat} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
