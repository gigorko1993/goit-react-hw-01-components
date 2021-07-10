const TransactionsItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
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

export default TransactionsItem;
