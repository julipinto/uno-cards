import { useSpring, animated, to } from 'react-spring';
import './style.css';
import Circle from '../../assets/circle.svg';
import Four from '../../assets/fourcards.svg';
import Two from '../../assets/twocards.svg';
import Arrows from '../../assets/arrows.svg';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function symbol(symbol) {
  return function () {
    return symbol;
  };
}

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
  const [props, set] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 200, friction: 100 },
    }),
    []
  );

  const id = 'reverse';
  const card = specialCards[id] || number(id);

  const style = {
    transform: to(props.xys, trans),
    ...(card.color && { backgroundColor: `var(${card.color})` }),
  };

  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={style}
    >
      <span className="top_sym">{card.top_bot_sym && card.top_bot_sym()}</span>
      <span className="mid_sym">{card.mid_sym && card.mid_sym()}</span>
      <span className="bot_sym">{card.top_bot_sym && card.top_bot_sym()}</span>
    </animated.div>
  );
}

export default Card;
