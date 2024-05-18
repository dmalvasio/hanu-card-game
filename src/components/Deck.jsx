import Card from './Card';
import './Deck.css';

const Deck = ({ cards, onCardClick }) => {
  return (
    <div className="deck">
      {cards.length > 0 && (
        <Card
          suit={cards[0].suit}
          value={cards[0].value}
          onClick={() => onCardClick(cards[0])}
        />
      )}
    </div>
  );
};

export default Deck;