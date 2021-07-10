import FriendsListItem from "../Components/FriendsListItem";

const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <FriendsListItem
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
