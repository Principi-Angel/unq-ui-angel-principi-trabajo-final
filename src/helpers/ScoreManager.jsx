import { getScores } from "../services/StorageService";

export const isHighScore = (score) => {
      const scores = getTopScores(5);
      if (scores.length < 5) return true;
      const minScore = Math.min(...scores.map(s => s.score));
      return score > minScore;
};

export const getTopScores = (limit) => {
  const scores = getScores();
  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

export const trimScores = (limit) => {
  const scores = getScores();
  if (scores.length <= limit) return;
  const sorted = scores.sort((a, b) => b.score - a.score).slice(0, limit);
  localStorage.setItem("scores", JSON.stringify(sorted));
};

