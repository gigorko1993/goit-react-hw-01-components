const StatisticsItem = ({ label, percentage, id }) => {
  return (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
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

export default StatisticsItem;
