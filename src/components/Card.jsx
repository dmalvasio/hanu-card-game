import React from 'react';
import PropTypes from 'prop-types';

import hearts from '../assets/hearts.png'
import spades from '../assets/spades.png'
import diamonds from '../assets/diamonds.png'
import './Card.css';

const icons = { spades, hearts, diamonds }

const Card = ({ suit, value, onClick }) => {
  return (
    <button className='card' onClick={onClick}>
      <div className='top-corner'>
        <div className='center'>
          <div className={suit == 'spades' ? `black-suit` : `red-suit`}>{value}</div>
          <img className='corner-image' src={icons[suit]} alt={suit} />
        </div>
      </div >
      <img className='center-image' src={icons[suit]} alt={suit} />
      <div className='bottom-corner'>
        <div className='center'>
          <div className={suit == 'spades' ? `black-suit` : `red-suit`}>{value}</div>
          <img className='corner-image' src={icons[suit]} alt={suit} />
        </div>
      </div>
    </button>
  );
};

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;