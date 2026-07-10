import { useEffect } from "react";

export function useTimer({ timeLeft, isValidating, tick, endGame }) {
  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft <= 0) {
      endGame();
      return;
    }

    if (isValidating) return;

    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isValidating, tick, endGame]);
}