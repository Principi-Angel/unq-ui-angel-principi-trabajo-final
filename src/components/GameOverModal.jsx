import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isHighScore } from "../services/scoreService";
import ScoreBoard from "./ScoreBoard";
import "../styles/components/GameOverModal.css";

const GameOverModal = ({ score, wordsCount, onRestart, onSaveScore }) => {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!playerName.trim()) return;
    onSaveScore(playerName, score, wordsCount);
    setPlayerName("");
    navigate("/scores")
  };

  return (
    <div className="modal-overlay">
      <div className="game-over-modal">
        <h1>Fin de la partida</h1>
        <ScoreBoard
           score={score}
           wordsCount={wordsCount}
           final={true}
        />
        <div className="game-over-modal-record"> 
        {isHighScore(score) ? (
          <>
            <p>¡Hiciste un record!</p>
            <p>Podes publicarlo, poniendo tu nombre acá abajo</p>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button className="custom-button" onClick={handleSave}>GUARDAR PUNTAJE</button>
          </>
        ) : (
          <p className="no-highscore">
            No lograste un puntaje alto. ¡Intenta de nuevo!
          </p>
        )}
        </div>
          <button onClick={onRestart}>JUGAR</button>
          <button onClick={() => navigate("/scores")}>RÉCORDS HISTÓRICOS</button>

       
      </div>
    </div>
  );
};

export default GameOverModal;