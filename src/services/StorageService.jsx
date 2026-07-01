
// Manejo de puntajes en localStorage
export const initScores = () => {
  if (!localStorage.getItem("scores")) {
    localStorage.setItem("scores", JSON.stringify([]));
  }
}

const setScore = (score) => {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(score);
  localStorage.setItem("scores", JSON.stringify(scores));
};

export const getScores = () => {
  const scores = localStorage.getItem("scores");
  return scores ? JSON.parse(scores) : [];
};

export const removeScores = () => {
  localStorage.removeItem("scores");
};
