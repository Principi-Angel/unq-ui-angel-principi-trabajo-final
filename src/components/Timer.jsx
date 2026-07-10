import { useEffect } from "react";
//import "../styles/components/Timer.css"
import "../styles/game.css"
 
const Timer = ({ timeLeft, tick, isValidating, endGame }) => {
    let color = "green";
  
    if (timeLeft !== null) {
      if (timeLeft <= 10) color = "orange";
      if (timeLeft <= 5) color = "red";
    }
  
    useEffect(() => {
      if (timeLeft === null) return;
    
      if (timeLeft <= 0) {
        endGame();
        return;
      }
    
      if (isValidating) return;
    
      const interval = setInterval(() => {
        tick();
      }, 1000);
    
      return () => clearInterval(interval);
    }, [timeLeft, isValidating, tick, endGame]);
  
    return (
      <div className="timer" style={{ color }}>
        {timeLeft === null 
          ? "EMPEZÁ A JUGAR" 
          : timeLeft          
        }
      </div>
    );
};

export default Timer;