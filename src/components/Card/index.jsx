import { useSpring, animated, to } from 'react-spring';
import './style.css';

const calc = (x, y) => [
  -((0 + 300 / 2 - y) / (300 / 2)) * 10,
  ((0 + 200 / 2 - x) / (200 / 2)) * 10,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card({ card }) {
  const [props, set] = useSpring(
    () => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 200, friction: 50 },
    }),
    []
  );

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
