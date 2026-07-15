import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isHighScore } from "../services/scoreService";
import ScoreBoard from "./ScoreBoard";
import "../styles/components/GameOverModal.css";

const GameOverModal = ({ score, wordsCount, onRestart, onSaveScore }) => {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const MAX_CHARS_NAME_INPUT = 10;

  const handleSave = () => {
    if (!playerName.trim()) return;
    onSaveScore(playerName, score, wordsCount);
    setPlayerName("");
    navigate("/scores")
  };

  return (
    <div className="modal-overlay">
      <div className="game-over-modal">
        <h1 className="section-title">Fin de la partida</h1>
        <ScoreBoard
           score={score}
           wordsCount={wordsCount}
           final
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
              onChange={(e) => {
                if (e.target.value.length <= MAX_CHARS_NAME_INPUT) {
                  setPlayerName(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSave();
                }
              }}
            />
            <button className="primary-button" onClick={handleSave}>GUARDAR PUNTAJE</button>
          </>
        ) : (
          <p className="no-highscore">
            No lograste un puntaje alto. ¡Intenta de nuevo!
          </p>
        )}
        </div>
        <div className="buttons-box">
            <button className="primary-button" onClick={onRestart}>JUGAR</button>
            <button className="primary-button" onClick={() => navigate("/scores")}>RÉCORDS</button>
          </div>
      </div>
    </div>
  );
};

export default GameOverModal;