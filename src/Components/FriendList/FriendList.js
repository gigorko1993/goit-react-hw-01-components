import PropTypes from 'prop-types';

import FriendsListItem from '../FriendList/FriendsListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend, i) => {
        return (
          <FriendsListItem
            key={i}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
