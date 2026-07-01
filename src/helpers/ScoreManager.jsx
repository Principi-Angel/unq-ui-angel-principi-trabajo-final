export const isHighScore = () => {
      const scores = JSON.parse(localStorage.getItem("scores")) || [];
      if (scores.length < 5) return true;
      const minScore = Math.min(...scores.map(s => s.score));
      return score > minScore;
};


