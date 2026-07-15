import { initScoresStorage, getScoresStorage, saveScoreStorage } from "./storageService";

const LIMIT_SCORES = 10;

export const initScores = () => {
  initScoresStorage();
};

export const isHighScore = (score, scores = getTopScores()) => {
  const validScores = scores.filter(s => !s.empty && s.score !== null);

  if (validScores.length < LIMIT_SCORES) {
    return true;
  }

  const minScore = Math.min(...validScores.map(s => s.score));
  return score > minScore;
};


export const getTopScores = () => {
  const scores = getScoresStorage()
    .sort((a, b) => b.score - a.score)
    .slice(0, LIMIT_SCORES);

  const emptySlots = Array.from(
    { length: LIMIT_SCORES - scores.length },
    () => ({
      name: null,
      score: null,
      wordsCount: null,
      empty: true
    })
  );

  return [...scores, ...emptySlots];
};


export const saveScore = (name, score, wordsCount) => {
  saveScoreStorage({ name, score, wordsCount });
}