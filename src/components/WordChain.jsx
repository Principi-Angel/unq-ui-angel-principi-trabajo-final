import "../styles/components/WordChain.css"

const WordChain = ({ chain, colorZone, className = "" }) => {
  return (
    <div className={`word-chain ${className}`.trim()}>
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