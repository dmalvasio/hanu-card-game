import React, { useState, useRef, useEffect } from 'react';

import Card from './Card';
import './Deck.css';

const Deck = ({ cards, onCardClick }) => {
  const [movingCard, setMovingCard] = useState(null);
  const timeOutRef = useRef(null);

  const handleCardClick = (card) => {
    if (movingCard || cards.length === 0) return;
    setMovingCard(card);
    timeOutRef.current = setTimeout(() => {
      onCardClick(card);
      setMovingCard(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, []);

  const renderVisibleCard = () => {
    const visibleCard = cards.length > 0 ? cards[0] : null;
    const outlineCards = cards.slice(1, 4);

    if (!visibleCard) return null;
    const translateX = outlineCards.length * 3;
    const translateY = -outlineCards.length * 2;

    return (
      <div className={`card-container ${movingCard === visibleCard ? 'moving' : ''}`} style={{ transform: `translate(${translateX}px, ${translateY}px)` }}>
        <Card suit={visibleCard.suit} value={visibleCard.value} onClick={() => handleCardClick(visibleCard)} />
      </div>
    );
  };

  const renderOutlineCards = () => {
    const outlineCards = cards.slice(1, 4);
    return outlineCards.map((_, index) => (
      <div key={index} className="card-outline" style={{ bottom: `${index * 3}px`, left: `${index * 4}px`, zIndex: index }} />
    ));
  };

  return (
    <div className="deck">
      {renderVisibleCard()}
      <div className="outlines-container">
        {renderOutlineCards()}
      </div>
    </div>
  );
};

export default Deck;