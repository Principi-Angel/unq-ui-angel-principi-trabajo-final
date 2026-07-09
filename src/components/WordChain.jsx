//import "../styles/components/WordChain.css"
import "../styles/game.css"

const WordChain = ({ chain }) => {
  return (
    <div className="word-chain">
      <h2>Cadena de palabras</h2>
      <ul>
        {[...chain].reverse().map((item, i) => (
          <li key={i}>{item.original}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordChain;