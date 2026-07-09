import { useState } from "react";
import { validateWord } from "../services/ApiService.jsx";
import { normalizeWord } from "../helpers/constants.jsx";
//import "../styles/components/WordInput.css"
import "../styles/game.css"

const WordInput = ({ word, setWord, chain, setChain, score, setScore, setTimeLeft }) => {
    const [error, setError] = useState(""); 
    const [firstEmptyAttempt, setFirstEmptyAttempt] = useState(true); 

    const handleChange = (e) => {
      setWord(e.target.value);
      setError(""); 
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const normalized = normalizeWord(word);

      if (!word.trim()) {
          if (firstEmptyAttempt) { // o tal vez en disabled del botón, todo
            setError("¿Ansiedad? No escribiste nada todavía.");
            setFirstEmptyAttempt(false); 
          } else {
            setError("¿Estás en blanco?");
          }
          setWord("");
          return;
      }

      try {
        const exists = await validateWord(word); 

          if (!exists) {
            setError("No existe.");
            setWord("");
            // que se ponga algo rojo
            return;
          }
        
          if (chain.some(item => item.normalized === normalized)) {
            setError("Ya la usaste.");
            setWord("");
            return;
          }
        
          if (chain.length > 0) {
            const lastWord = chain[chain.length - 1];
            if (normalized[0] !== lastWord.normalized.slice(-1)) {
              setWord("");
              setError("Hay una sola regla...")
              // que se ponga algo rojo
              return;
            }
          }
        
          setChain([...chain, { original: word, normalized }]);
          setScore(score + word.length);
          setTimeLeft(15);
          setWord("");
          setError("")
        } catch (error) {
          setError("Error al validar la palabra. Intenta nuevamente.")
          setTimeLeft(15);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={word}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
    );
};

export default WordInput;
