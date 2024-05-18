import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'

import Deck from './Deck';
import resetImg from '../assets/reset-arrow.png'
import './Game.css';

const initialDeck = [
  { suit: 'hearts', value: 'A' }, { suit: 'hearts', value: '3' }, { suit: 'hearts', value: '4' }, { suit: 'hearts', value: '2' },
  { suit: 'spades', value: '2' }, { suit: 'spades', value: 'A' }, { suit: 'spades', value: '3' }, { suit: 'spades', value: '4' },
  { suit: 'diamonds', value: '3' }, { suit: 'diamonds', value: '4' }, { suit: 'diamonds', value: '2' }, { suit: 'diamonds', value: 'A' }
];

const shuffleDeck = (deck) => deck.sort(() => Math.random() - 0.5);

const getRandomValue = () => {
  const values = ['A', '2', '3', '4'];
  const randomNumber = Math.floor(Math.random() * values.length)
  return values[randomNumber]
}

const Game = () => {
  const [randomValue, setRandomValue] = useState('');
  const [winningMessage, setWinningMessage] = useState('');
  const [isWin, setIsWin] = useState(false);
  const [leftDeck, setLeftDeck] = useState(shuffleDeck([...initialDeck]));
  const [middleDeck, setMiddleDeck] = useState([]);
  const [rightDeck, setRightDeck] = useState([]);

  useEffect(() => {
    handleResetGame();
  }, []);

  useEffect(() => {
    handleWinningGame();
  }, [leftDeck, middleDeck, rightDeck])

  const handleMoveCard = (deckFrom, setDeckFrom, deckTo, setDeckTo) => {
    if (deckFrom.length === 0) return;
    const card = deckFrom[0];
    setDeckFrom(deckFrom.slice(1));
    setDeckTo([card, ...deckTo]);
  };

  const handleResetGame = () => {
    setRandomValue(getRandomValue());
    setWinningMessage('');
    setIsWin(false);
    setLeftDeck(shuffleDeck([...initialDeck]));
    setMiddleDeck([]);
    setRightDeck([]);
  };

  const handleWinningGame = () => {
    if (
      leftDeck.length > 0 &&
      middleDeck.length > 0 &&
      rightDeck.length > 0 &&
      leftDeck[0].value === randomValue &&
      middleDeck[0].value === randomValue &&
      rightDeck[0].value === randomValue
    ) {
      setWinningMessage('¡¡¡ FELICIDADES, HAS GANADO !!!')
      setIsWin(true);
    }
  }

  return (
    <>
      <div className='container'>
        {winningMessage &&
          <div className='win-message'>
            {winningMessage}
          </div>}
        <div>
          <div className='actions-container'>
            <div className='value-container'>
              Valor a ordenar: <span className='random-value'>{randomValue}</span>
            </div>
            <button onClick={handleResetGame} className='reset-button'>
              <div className='button-container'>
                <img className='reset-image' src={resetImg} />
                REINICIAR
              </div>
            </button>
          </div>
          <div className='deck-container'>
            <Deck cards={leftDeck} onCardClick={() => handleMoveCard(leftDeck, setLeftDeck, middleDeck, setMiddleDeck)} />
            <Deck cards={middleDeck} onCardClick={() => handleMoveCard(middleDeck, setMiddleDeck, rightDeck, setRightDeck)} />
            <Deck cards={rightDeck} onCardClick={() => handleMoveCard(rightDeck, setRightDeck, leftDeck, setLeftDeck)} />
          </div>
        </div>
      </div>
      {isWin && <Confetti />}
    </>
  );
};

export default Game;