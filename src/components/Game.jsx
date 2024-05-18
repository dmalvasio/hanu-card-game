import { useState } from 'react';
import Deck from './Deck';
import './Game.css';

const initialDeck = [
  { suit: 'hearts', value: 'A' },
  { suit: 'spades', value: 'A' },
  { suit: 'diamonds', value: 'A' },
];

const Game = () => {
  const [leftDeck, setLeftDeck] = useState(initialDeck);
  const [middleDeck, setMiddleDeck] = useState([]);
  const [rightDeck, setRightDeck] = useState([]);
  
  const moveCard = (deckFrom, setDeckFrom, deckTo, setDeckTo) => {
    if (deckFrom.length === 0) return;
    const card = deckFrom[0];
    setDeckFrom(deckFrom.slice(1));
    setDeckTo([card, ...deckTo]);
  };

  return (
    <div className='container'>
      <Deck cards={leftDeck} onCardClick={() => moveCard(leftDeck, setLeftDeck, middleDeck, setMiddleDeck)} />
      <Deck cards={middleDeck} onCardClick={() => moveCard(middleDeck, setMiddleDeck, rightDeck, setRightDeck)} />
      <Deck cards={rightDeck} />
    </div>
  );
};

export default Game;