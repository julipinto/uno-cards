import { useState } from 'react';
import Card from './components/Card';
import { specialCards, number } from './utils/cards';
import Logo from './assets/logo.svg';
import GH from './assets/gh.svg';

function App() {
  const [color, setColor] = useState('--red');
  const [id, setId] = useState('0');
  const card = specialCards[id] || number(id);

  return (
    <>
      <header>
        <img src={Logo} alt="logo" />
        <a
          href="https://github.com/julipinto/uno-cards"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GH} alt="github" />
        </a>
      </header>
      <main style={{ '--card-color': `var(${color})` }}>
        <Card card={card} />
        <aside>
          <div>
            <span>Colors:</span>
            <div className="button_group">
              {['--red', '--yellow', '--blue', '--green'].map((color) => (
                <button
                  id={color}
                  style={{ '--button-color': `var(${color})` }}
                  onClick={() => setColor(color)}
                />
              ))}
            </div>
          </div>
          <div>
            <span>Cards:</span>
            <div className="button_group">
              {[
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '+4',
                '+2',
                '↻',
                '⦸',
              ].map((id) => (
                <button id={id} onClick={() => setId(id)}>
                  {id}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </main>
      <span className="art-by">Minimalist Uno by Warleson Oliveira</span>
      <footer>
        {['--green', '--blue', '--red', '--yellow'].map((color) => (
          <span id={color} style={{ '--footer-frag-color': `var(${color})` }} />
        ))}
      </footer>
    </>
  );
}

export default App;
