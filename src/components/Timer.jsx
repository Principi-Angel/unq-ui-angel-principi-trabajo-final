import "../styles/Timer.css"
import { ZONES } from "../helpers/zones";

const Timer = ({ timeLeft, colorZone}) => {
  
    return (
      <div className={`timer ${colorZone.toLowerCase()}`}>
        {timeLeft === null 
          ? "EMPEZÁ A JUGAR" 
          : timeLeft          
        }
      </div>
    );
};

export default Timer;