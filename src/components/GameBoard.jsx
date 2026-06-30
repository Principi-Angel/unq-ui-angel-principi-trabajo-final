import React, { useState, useEffect } from "react";
import WordInput from "./WordInput.jsx";
import WordChain from "./WordChain.jsx";
import Timer from "./Timer.jsx";

const GameBoard = () => {
    const [chain, setChain] = useState([]);
    const [word, setWord] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (gameOver) return;
        if (timeLeft <= 0) {
          setGameOver(true);
          return;
        }
        const interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 15);
        return () => clearInterval(interval);
    }, [timeLeft, gameOver]);
        

    return (
    <div>
      <h1>Palabras Encadenadas</h1>
      <Timer timeLeft={timeLeft} />
      <WordInput
        word={word}
        setWord={setWord}
        chain={chain}
        setChain={setChain}
        score={score}
        setScore={setScore}
        setTimeLeft={setTimeLeft}
      />
      <WordChain chain={chain} />
      <p>Puntaje: {score}</p>
      {gameOver && <p>Fin de la partida</p>}
    </div>
  );
};

export default GameBoard;