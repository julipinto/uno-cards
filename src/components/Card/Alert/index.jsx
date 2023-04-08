import './style.css';
import { isMobile } from 'react-device-detect';
const Alert = () => {
  return (
    <div className="alert">
      <svg class="progress-ring" height="20" width="20">
        <circle
          stroke="var(--blue)"
          stroke-width="2"
          fill="transparent"
          r="8"
          cx="10"
          cy="10"
        />
      </svg>

      <p>
        This is a minimalist version of the UNO card game. It was made with
        React and pure CSS.
      </p>
      <p>
        You can change the color of the card and the number by clicking on the
        buttons below.
      </p>

      <p>{isMobile ? 'Click on' : 'Hover'} the card to move it</p>
    </div>
  );
};

export default Alert;
