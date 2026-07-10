import { initScoresStorage, getScoresStorage, saveScoreStorage } from "../services/storageService";

const LIMIT_SCORES = 10;

export const initScores = () => {
  initScoresStorage();
};

export const isHighScore = (score) => {
      const scores = getTopScores();
      if (scores.length < LIMIT_SCORES) return true;
      const minScore = Math.min(...scores.map(s => s.score));
      return score > minScore;
};

export const getTopScores = () => {
  const scores = getScoresStorage();
  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, LIMIT_SCORES);
};
export const saveScore = (name, score, wordsCount) => {
  saveScoreStorage({ name, score, wordsCount });
}