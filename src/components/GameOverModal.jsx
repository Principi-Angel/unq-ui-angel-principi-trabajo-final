import { useState, useEffect } from "react";
import "../styles/components/GameOverModal.css";
import { useNavigate } from "react-router-dom";
import { isHighScore } from "../helpers/ScoreManager";
import BackToMenuButton from "./BackToMenuButton.jsx";

const GameOverModal = ({ score, wordsCount, onRestart, onSaveScore }) => {
  const [playerName, setPlayerName] = useState("");
  const [returnToHome, setReturnToHome] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    if (!playerName.trim()) return;
    onSaveScore(playerName, score, wordsCount);
    setPlayerName("");
    navigate("/scores")
  };
  useEffect(() => {
    console.info("isHighScore", isHighScore(score));
  }, []);

 const handleMenu = () => { navigate("/"); }; 

  return (
    <div className="modal-overlay">
      <div className="game-over-modal">
        <h1>Fin de la partida</h1>
        <p>Puntaje final: {score}</p>
        <p>Cantidad de palabras: {wordsCount}</p>

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
            <button onClick={handleSave}>Guardar Puntaje</button>
          </>
        ) : (
          <p className="no-highscore">
            No lograste un puntaje alto. ¡Intenta de nuevo!
          </p>
        )}

        <div className="modal-buttons">
          <button onClick={onRestart}>Reiniciar</button>
          <BackToMenuButton />
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;