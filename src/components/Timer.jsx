import "../styles/Timer.css"
 
const Timer = ({ timeLeft }) => {
    let color = "green";
  
    if (timeLeft !== null) {
      if (timeLeft <= 10) color = "orange";
      if (timeLeft <= 5) color = "red";
    }
  
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