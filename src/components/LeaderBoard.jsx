import { useNavigate } from "react-router-dom";
import { getTopScores } from "../services/scoreService";
import Logo from "./Logo";
import "../styles/components/LeaderBoard.css";

const Leaderboard = () => {
  const scores = getTopScores(); 
  const navigate = useNavigate();
  
  return (
    <div className="leader-board">

      <div className="logo-side">
         <Logo small />
      </div>
      
      <div className="leader-board-center">
        <h1 className="section-title">Tabla de Puntajes</h1>
        <p>Estos son los mejores puntajes:</p>

        {scores.length === 0 ? (
          <p>No hay puntajes guardados todavía.</p>
        ) : (
          <ol>
            {scores.map((s, index) => (
              <li key={index}>
                {s.empty ? (
                  <span className="empty-slot">vacante</span>
                ) : (
                  <>
                    <strong>{s.name}</strong> — {s.score} puntos ({s.wordsCount} palabras)
                  </>
                )}
              </li>
            ))}
          </ol>
        )}
        <button className="primary-button leader-board-play-button" onClick={() => navigate("/game")}>JUGAR</button>
      </div>
      
      <div className="logo-side">
         <Logo small />
      </div>
      
    </div>
  );
};

export default Leaderboard;

