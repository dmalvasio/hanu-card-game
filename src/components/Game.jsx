import { useEffect, useState } from 'react';
import Deck from './Deck';
import resetImg from '../assets/reset-arrow.png'
import './Game.css';

const initialDeck = [
    { suit: 'hearts', value: 'A' }, { suit: 'hearts', value: '3' }, { suit: 'hearts', value: '4' }, { suit: 'hearts', value: '2' },
    { suit: 'spades', value: '2' }, { suit: 'spades', value: 'A' }, { suit: 'spades', value: '3' }, { suit: 'spades', value: '4' },
    { suit: 'diamonds', value: '3' }, { suit: 'diamonds', value: '4' }, { suit: 'diamonds', value: '2' }, { suit: 'diamonds', value: 'A' }
];

const shuffleDeck = (deck) => deck.sort(() => Math.random() - 0.5);

const Game = () => {
    const [leftDeck, setLeftDeck] = useState(shuffleDeck([...initialDeck]));
    const [middleDeck, setMiddleDeck] = useState([]);
    const [rightDeck, setRightDeck] = useState([]);

    const handleMoveCard = (deckFrom, setDeckFrom, deckTo, setDeckTo) => {
        if (deckFrom.length === 0) return;
        const card = deckFrom[0];
        setDeckFrom(deckFrom.slice(1));
        setDeckTo([card, ...deckTo]);
    };

    const handleResetGame = () => {
        setLeftDeck(shuffleDeck([...initialDeck]));
        setMiddleDeck([]);
        setRightDeck([]);
    };

    useEffect(() => {
        handleResetGame();
    }, []);

    return (
        <div className='container'>
            <div>
                <div className='rail-container'>
                    <button onClick={handleResetGame} className='reset-button'>
                        <div className='button-container'>
                            <img className='reset-image' src={resetImg}></img>
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
    );
};

export default Game;