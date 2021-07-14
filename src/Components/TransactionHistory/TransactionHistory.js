import PropTypes from 'prop-types';
import s from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  'items[avatar]': PropTypes.string,
  'items[name]': PropTypes.string,
  'items[tag]': PropTypes.string,
  'items[location]': PropTypes.string,
  'items[followers]': PropTypes.number,
  'items[likes]': PropTypes.number,
  'items[views]': PropTypes.number,
};

export default TransactionHistory;
