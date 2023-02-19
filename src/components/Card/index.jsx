import { useState } from 'react';
import { useSpring, animated, to } from 'react-spring';
import './style.css';

// on hover moviment
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 10,
  (x - window.innerWidth / 2) / 5,
  1,
];

// on hover transform

function Card({ card }) {
  const [flipped, setFlipped] = useState(true);

  const trans = (x, y, s) =>
    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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

  console.log(style);

  return (
    <>
      <animated.div
        className={`card ${flipped ? 'flip' : ''}`}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={style}
        onClick={() => setFlipped(!flipped)}
      >
        <span className="top_sym">
          {card.top_bot_sym && card.top_bot_sym()}
        </span>
        <span className="mid_sym">{card.mid_sym && card.mid_sym()}</span>
        <span className="bot_sym">
          {card.top_bot_sym && card.top_bot_sym()}
        </span>
      </animated.div>
    </>
  );
}

export default Card;
