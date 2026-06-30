//import "../styles/components/WordChain.css"
import "../styles/game.css"


const WordChain = ({ chain }) => {
  return (
    <div className="word-chain">
      <h2>Cadena de palabras</h2>      
        <ul>
          {[...chain].reverse().map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>              
    </div>
  );
};

export default WordChain;