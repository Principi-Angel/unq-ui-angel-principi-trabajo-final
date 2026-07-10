import { useState } from "react";
import WordInput from "./WordInput.jsx";
import WordChain from "./WordChain.jsx";
import Timer from "./Timer.jsx";
import GameOverModal from "./GameOverModal.jsx";
import ScoreBoard from "./ScoreBoard.jsx"
import { saveScore } from "../helpers/ScoreManager.jsx";
import { useGame } from "../hooks/useGame.jsx";
import { useTimer } from "../hooks/useTimer";

//import "../styles/components/GameBoard.css"
import "../styles/game.css"
const GameBoard = () => {
    const {
        chain,
        score,
        timeLeft,
        tick,
        gameOver,
        addWord,
        resetGame,
        endGame
    } = useGame();
    const [isValidating, setIsValidating] = useState(false);

    useTimer({ timeLeft, isValidating, tick, endGame });
    
    const handleRestart = () => {
      resetGame()
    };

    const handleSaveScore = (name, score, wordsCount) => {
      saveScore(name, score, wordsCount);
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
                  chain={chain}
                  addWord={addWord}
                  isValidating={isValidating}
                  setIsValidating={setIsValidating}
                />
                <WordChain
                  chain={chain}
                />
                
                <ScoreBoard
                  score={score} 
                  wordsCount={chain.length} 
                />
              </div>
          );
};

export default GameBoard;