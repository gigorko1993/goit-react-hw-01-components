import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';
console.log(s);
const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        {tag ? <p class="tag">@{tag}</p> : <p class="tag">no tag</p>}
        <p class="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.thumb}>
          <span class="label">Followers</span>
          <span className={s.item}>{followers}</span>
        </li>
        <li className={s.thumb}>
          <span class="label">Views</span>
          <span className={s.item}>{views}</span>
        </li>
        <li className={s.thumb}>
          <span class="label">Likes</span>
          <span className={s.item}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
};

export default Profile;
