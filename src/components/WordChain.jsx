import "../styles/components/WordChain.css"
import { ZONES } from "../helpers/zones";

const WordChain = ({ chain, colorZone }) => {
  return (
    <div className="word-chain">
      <p>Cadena de palabras</p>
      <ul className={`chain ${colorZone.toLowerCase()}`}>
          {chain.map((word, i) => (
            <li key={i}>{word.original}</li>
          ))}
      </ul>

    </div>
  );
};

export default WordChain;