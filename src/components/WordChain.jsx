import "../styles/WordChain.css"

const WordChain = ({ chain }) => {
  return (
    <div className="word-chain">
      <p>Cadena de palabras</p>
      <ul className="chain">
          {chain.map((word, i) => (
            <li key={i}>{word.original}</li>
          ))}
      </ul>

    </div>
  );
};

export default WordChain;