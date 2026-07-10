const ScoreBoard = ({ score, wordsCount, final = false }) => {
  return (
    <div className="score">
      <p>{final ? "Puntaje final: " : "Puntaje: "}{score}</p>
      {wordsCount !== undefined && <p>Cantidad de palabras: {wordsCount}</p>}
    </div>
  );
};

export default ScoreBoard;