import { getScores } from "../services/StorageService";
const LIMIT_SCORES = 5;

export const isHighScore = (score) => {
      const scores = getTopScores();
      if (scores.length < 5) return true;
      const minScore = Math.min(...scores.map(s => s.score));
      return score > minScore;
};

export const getTopScores = () => {
  const scores = getScores();
  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, LIMIT_SCORES);
};

export const trimScores = () => {
  const scores = getScores();
  if (scores.length <= LIMIT_SCORES) return;
  const sorted = scores.sort((a, b) => b.score - a.score).slice(0, LIMIT_SCORES);
  localStorage.setItem("scores", JSON.stringify(sorted));
};

