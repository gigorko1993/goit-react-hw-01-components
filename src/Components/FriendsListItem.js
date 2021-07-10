const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

// User.propTypes = {
//     avatar = PropTypes.string,
//     name = PropTypes.string,
//     tag = PropTypes.string,
//     location = PropTypes.string,
//     followers = PropTypes.number,
//     likes = PropTypes.number,
//     views = PropTypes.number,
// };

export default FriendsListItem;
