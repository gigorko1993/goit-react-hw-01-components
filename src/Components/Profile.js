import ProfileItem from "../Components/ProfileItem";

const Profile = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ProfileItem
              name={item.name}
              tag={item.tag}
              location={item.location}
              avatar={item.avatar}
              followers={item.stats.followers}
              views={item.stats.views}
              likes={item.stats.likes}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default Profile;
