import React, { useState, useEffect } from "react";
import WordInput from "./WordInput.jsx";
import WordChain from "./WordChain.jsx";
import Timer from "./Timer.jsx";
import GameOverModal from "./GameOverModal.jsx";
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
    
    const handleRestart = () => {
      setChain([]);
      setWord("");
      setScore(0);
      setTimeLeft(null);
      setGameOver(false);
    };

    const handleSaveScore = (name, score, wordsCount) => {
      const scores = JSON.parse(localStorage.getItem("scores")) || [];
      scores.push({ name, score, wordsCount });
      localStorage.setItem("scores", JSON.stringify(scores));
    };

    

    if (gameOver) {
    return (
      <div className="game-over-screen">
       <GameOverModal 
          score={score} 
          wordsCount={chain.length} 
          onRestart={handleRestart} 
          onSaveScore={handleSaveScore}
        />

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