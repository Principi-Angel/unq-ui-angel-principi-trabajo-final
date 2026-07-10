// Manejo de puntajes en localStorage
export const initScoresStorage = () => {
  if (!localStorage.getItem("scores")) {
    localStorage.setItem("scores", JSON.stringify([]));
  }
}

export const saveScoreStorage = (record) => {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(record);
  localStorage.setItem("scores", JSON.stringify(scores));
};

export const getScoresStorage = () => {
  const scores = localStorage.getItem("scores");
  return scores ? JSON.parse(scores) : [];
};