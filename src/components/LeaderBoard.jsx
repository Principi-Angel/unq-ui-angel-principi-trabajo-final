import { getTopScores } from "../helpers/ScoreManager";
import CustomButton from "./CustomButton.jsx";
import "../styles/components/LeaderBoard.css";

const Leaderboard = () => {
  const scores = getTopScores(); 

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
      <div className="leader-bord-buttons"> 
          <CustomButton label="JUGAR" route="/game" />
          <CustomButton label="RÉCORDS" route="/scores" />
       </div>
    </div>
  );
};

export default Leaderboard;

