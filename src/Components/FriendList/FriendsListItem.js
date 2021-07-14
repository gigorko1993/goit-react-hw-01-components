import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css';
import React from 'react';
import image from '../FriendList/logo192.png';

const FriendsListItem = ({ avatar = image, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
};

export default FriendsListItem;
