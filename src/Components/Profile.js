import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" class="avatar" />
        <p class="name">{name}</p>
        {tag ? <p class="tag">@{tag}</p> : <p class="tag">no tag</p>}
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
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
