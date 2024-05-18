import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import hearts from '../assets/hearts.png'
import spades from '../assets/spades.png'
import diamonds from '../assets/diamonds.png'

const icons = { spades, hearts, diamonds }

const Card = ({ suit, value, onClick }) => {
  return (
    <button className='card' onClick={onClick}>
      <div className='top-corner'>
        <div className='center'>
          <div className={suit == 'spades' ? `black-suit` : `red-suit`}>{value}</div>
          <img className='corner-image' src={icons[suit]}></img>
        </div>
      </div >
      <img className='center-image' src={icons[suit]}></img>
      <div className='bottom-corner'>
        <div className='center'>
          <div className={suit == 'spades' ? `black-suit` : `red-suit`}>{value}</div>
          <img className='corner-image' src={icons[suit]}></img>
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