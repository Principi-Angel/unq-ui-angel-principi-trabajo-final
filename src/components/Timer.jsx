import "../styles/components/Timer.css"

const Timer = ({ timeLeft, colorZone}) => {
  
    return (
      <div className={`timer ${colorZone}`}>
        {timeLeft === null 
          ? "EMPEZÁ A JUGAR" 
          : timeLeft          
        }
      </div>
    );
};

export default Timer;