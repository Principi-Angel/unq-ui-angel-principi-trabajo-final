import React, { useState, useEffect } from "react";
import WordInput from "./WordInput.jsx";
import WordChain from "./WordChain.jsx";
import Timer from "./Timer.jsx";
//import "../styles/components/GameBoard.css"
import "../styles/game.css"
const GameBoard = () => {
    const [chain, setChain] = useState([]);
    const [word, setWord] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (timeLeft === null) return;
        if (timeLeft <= 0) {
          setGameOver(true);
          return;
        }
        const interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft, gameOver]);
    
    if (gameOver) {
    return (
      <div className="game-over-screen">
        <h1>Fin de la partida</h1>
        <p>Puntaje final: {score}</p>
        <button onClick={() => {
          // reinicio partida
          setChain([]);
          setWord("");
          setScore(0);
          setTimeLeft(null);
          setGameOver(false);
        }}>
          Jugar de nuevo
        </button>
      </div>
    );
  }

    return (
    <div className="game-board">
      <h1>Palabras Encadenadas</h1>
      <Timer
        timeLeft={timeLeft}
      />
      <WordInput
        word={word}
        setWord={setWord}
        chain={chain}
        setChain={setChain}
        score={score}
        setScore={setScore}
        setTimeLeft={setTimeLeft}
      />
      <WordChain
        chain={chain}
      />
      <p>Puntaje: {score}</p>
    </div>
  );
};

export default GameBoard;