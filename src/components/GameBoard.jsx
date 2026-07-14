import { useState } from "react";
import { Link } from "react-router-dom";
import WordInput from "./WordInput";
import WordChain from "./WordChain";
import Timer from "./Timer";
import GameOverModal from "./GameOverModal";
import ScoreBoard from "./ScoreBoard";
import Logo from "./Logo";
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
                <div className="game-layout">
                  <div className="game-left">
                    <Link to="/"><Logo justTitle={true} /></Link>
                  </div>
                            
                  <div className="game-center">
                      <Timer timeLeft={timeLeft} colorZone={colorZone} />
                      <WordInput
                        chain={chain}
                        addWord={addWord}
                        isValidating={isValidating}
                        setIsValidating={setIsValidating}
                      />                    
                  </div>      
                  <div className="game-right">
                    <ScoreBoard score={score} wordsCount={chain.length} />
                  </div>
                </div>
                <WordChain chain={chain} colorZone={colorZone} /> 
              </div>
          );
};

export default GameBoard;