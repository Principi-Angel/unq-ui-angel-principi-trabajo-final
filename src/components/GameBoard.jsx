import { useState } from "react";
import WordInput from "./WordInput";
import WordChain from "./WordChain";
import Timer from "./Timer";
import GameOverModal from "./GameOverModal";
import ScoreBoard from "./ScoreBoard"
import { saveScore } from "../services/scoreService";
import { useGame } from "../hooks/useGame";
import { useTimer } from "../hooks/useTimer";
import { getZone } from "../helpers/getZone";
import "../styles/components/GameBoard.css";

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
      resetGame();
    };

    const handleSaveScore = (name, score, wordsCount) => {
      saveScore(name, score, wordsCount);
    };

    const colorZone = getZone(timeLeft);

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
                <div className="game-zone">
                    <Timer
                      timeLeft={timeLeft}
                      colorZone={colorZone}
                    />
                    <WordInput
                      chain={chain}
                      addWord={addWord}
                      isValidating={isValidating}
                      setIsValidating={setIsValidating}
                    />
                    <ScoreBoard
                      score={score} 
                      wordsCount={chain.length} 
                    />
                </div>
                <WordChain
                  chain={chain}
                  colorZone={colorZone}
                />
                
                
              </div>
          );
};

export default GameBoard;