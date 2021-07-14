import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
import makeRandomRGBColor from '../Statistics/colorRandomizer';

const Statistics = ({ stats, title }) => {
  let statLength = stats.length;
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Title</h2>}

      <ul
        className={s.stats}
        style={{
          gridTemplateColumns: `repeat(${statLength}, 1fr)`,
        }}
      >
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={s.thumb}
              style={{
                backgroundColor: `${makeRandomRGBColor()}`,
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.item}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
