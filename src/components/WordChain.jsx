import "../styles/components/WordChain.css"
import { ZONES } from "../helpers/zones";

const WordChain = ({ chain, colorZone }) => {
  return (
    <div className="word-chain">
      <h1 className="section-title">Cadena de palabras</h1>
      <ul className={`chain ${colorZone}`}>
          {chain.map((word, i) => (
            <li key={i}>{word.original}</li>
          ))}
      </ul>

    </div>
  );
};

export default WordChain;