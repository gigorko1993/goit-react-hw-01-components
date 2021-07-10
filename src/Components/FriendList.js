const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
