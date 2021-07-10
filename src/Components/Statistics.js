import StatisticsItem from "../Components/StatisticsItem";

const Profile = ({ items }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <StatisticsItem label={item.label} percentage={item.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Profile;
