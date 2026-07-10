//import "../styles/components/WordChain.css"
import "../styles/game.css"

const WordChain = ({ chain }) => {
  return (
    <div className="word-chain">
      <h2>Cadena de palabras</h2>
      <ul>
          {[...chain].reverse().map((word, i) => (
              <li key={i}>{word}</li>
          ))}
      </ul>
    </div>
  );
};

export default WordChain;