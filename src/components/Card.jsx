import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ suit, value, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      <div>
        {value}
      </div>
      <div>{suit}</div>
      <div>
        {value}
      </div>
    </div>
  );
};

Card.propTypes = {
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;