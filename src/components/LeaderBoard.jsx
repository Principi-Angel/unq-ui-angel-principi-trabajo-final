import { useNavigate } from "react-router-dom";
import { getTopScores } from "../services/scoreService";
import "../styles/components/LeaderBoard.css";

const Leaderboard = () => {
  const scores = getTopScores(); 
const navigate = useNavigate();
  return (
    <div className="leader-board">
      <h1>Tabla de Puntajes</h1>
      <p>Estos son los mejores puntajes:</p>

      {scores.length === 0 ? (
        <p>No hay puntajes guardados todavía.</p>
      ) : (
        <ol>
          {scores.map((s, index) => (
            <li key={index}>
              <strong>{s.name}</strong> — {s.score} puntos ({s.wordsCount} palabras)
            </li>
          ))}
        </ol>
      )}
    <button onClick={() => navigate("/game")}>JUGAR</button>
    </div>
  );
};

export default Leaderboard;

