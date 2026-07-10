import { useState } from "react";

export function useGame() {
    const [chain, setChain] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    function addWord(word) {
        setChain(prev => [...prev, word]);
        setScore(prev => prev + word.length);
        setTimeLeft(15);
    }

    function resetGame() {
        setChain([]);
        setScore(0);
        setTimeLeft(null);
        setGameOver(false);
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
        endGame
    };
}