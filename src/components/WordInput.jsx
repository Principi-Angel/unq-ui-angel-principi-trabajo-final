import { useState } from "react";
import { validateWord } from "../helpers/validateWord.jsx";
import "../styles/components/WordInput.css"

const WordInput = ({ chain, addWord, isValidating, setIsValidating }) => {
    const [word, setWord] = useState("");
    const [error, setError] = useState(""); 

    const handleChange = (e) => {
      setWord(e.target.value);
      setError(""); 
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsValidating(true);

      try {
        const result = await validateWord(word, chain);
      
        if (!result.isValid) {
          setError(result.error);
          return;
        }
      
        addWord(result.word);
        setWord("");
        setError("");
      } catch (error) {
        setError("Error al validar la palabra. Intenta nuevamente.");
      } finally {
        setIsValidating(false);
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
          <button type="submit" disabled={isValidating}>
            {isValidating ? "Validando..." : "Ingresar"}
          </button>
        </form>
    );
};

export default WordInput;
