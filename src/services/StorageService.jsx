
// Manejo de puntajes en localStorage
const setScore = (score) => {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(score);
  localStorage.setItem("scores", JSON.stringify(scores));
};

const getScores = () => {
  const scores = localStorage.getItem("scores");
  return scores ? JSON.parse(scores) : [];
};

const removeScores = () => {
  localStorage.removeItem("scores");
};

const StorageService = { setScore, getScores, removeScores };
export default StorageService;