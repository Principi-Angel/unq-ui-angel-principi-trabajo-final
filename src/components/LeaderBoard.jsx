import { getTopScores } from "../helpers/ScoreManager";
import BackToMenuButton from "./BackToMenuButton.jsx";

const Leaderboard = () => {
  const scores = getTopScores(); 

  return (
    <div className="leaderboard">
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
      <BackToMenuButton />
    </div>
  );
};

export default Leaderboard;

