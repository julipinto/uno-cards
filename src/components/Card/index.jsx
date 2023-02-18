import './style.css';
import Circle from '../../assets/circle.svg';
import Four from '../../assets/fourcards.svg';
import Two from '../../assets/twocards.svg';
import Arrows from '../../assets/arrows.svg';

function symbol(symbol) {
  return function () {
    return symbol;
  };
}

// ⦸

const specialCards = {
  back: {
    top_bot_sym: symbol(<img src={Circle} alt="circle" width={36} />),
    mid_sym: symbol(<img src={Circle} alt="circle" />),
    color: '--black',
  },
  '+2': {
    top_bot_sym: symbol('+2'),
    mid_sym: symbol(<img src={Two} alt="cards" />),
  },
  '+4': {
    top_bot_sym: symbol('+4'),
    mid_sym: symbol(<img src={Four} alt="cards" />),
    color: '--black',
  },
  reverse: {
    top_bot_sym: symbol(<img src={Arrows} alt="arrows" width={18} />),
    mid_sym: symbol(<img src={Arrows} alt="arrows" width={36} />),
  },
  block: {
    top_bot_sym: symbol('⦸'),
    mid_sym: symbol('⦸'),
  },
};

function number(num) {
  if (num < 0 || num > 9) alert('Invalid symbol');

  return {
    top_bot_sym: symbol(num),
    mid_sym: symbol(num),
  };
}

function Card() {
  const id = 'reverse';
  const card = specialCards[id] || number(id);

  return (
    <div
      className="card"
      style={card.color && { backgroundColor: `var(${card.color})` }}
    >
      <span className="top_sym">{card.top_bot_sym && card.top_bot_sym()}</span>
      <span className="mid_sym">{card.mid_sym && card.mid_sym()}</span>
      <span className="bot_sym">{card.top_bot_sym && card.top_bot_sym()}</span>
    </div>
  );
}

export default Card;
