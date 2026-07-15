import { useState } from "react";

export function useGame() {
    const [chain, setChain] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [round, setRound] = useState(0);
    
    function addWord(word) {
        setChain(prev => [...prev, word]);
        setScore(prev => prev + word.original.length);
        setTimeLeft(15);
    }

    function resetGame() {
        setChain([]);
        setScore(0);
        setTimeLeft(null);
        setGameOver(false);
        setRound(prev => prev + 1);
    }

    function endGame() {
        setGameOver(true);
    }

    function tick() {
        setTimeLeft(prev => prev - 1);
    }

    return {
        chain,
        score,
        timeLeft,
        tick,
        gameOver,
        addWord,
        resetGame,
        endGame,
        round 
    };
}