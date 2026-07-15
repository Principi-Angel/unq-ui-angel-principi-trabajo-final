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
        endGame,
        round 
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

   
    return (
            <div className="game-board">
                <div className="game-layout">
                  <div className="game-left">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo justTitle />
                    </Link>
                  </div>
                            
                  <div className="game-center">
                      <Timer timeLeft={timeLeft} colorZone={colorZone} />
                      <WordInput
                        key={round}
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
                <WordChain className="game-chain" chain={chain} colorZone={colorZone} />

              {gameOver && (
                  <div className="modal-overlay">
                    <GameOverModal
                      score={score}
                      wordsCount={chain.length}
                      onRestart={handleRestart}
                      onSaveScore={handleSaveScore}
                    />
                  </div>
                )}
            </div>        
          ); 
          
};

export default GameBoard;