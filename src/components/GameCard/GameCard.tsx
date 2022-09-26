import React from 'react';
import StanImage from '../../assets/img/gameCardImg.jpg';
import './style.css';

type CardProps = {
  card: Cards;
  handleChoice: (card: Cards) => void;
  flipped: boolean;
};

type Cards = {
  id: number;
  src: string;
  matched: boolean;
};

const GameCard: React.FC<CardProps> = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className='card'>
      <div className={flipped ? 'flipped innerCard' : 'innerCard'}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src={StanImage}
          alt='back card'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default GameCard;
