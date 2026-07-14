import { useState, useEffect, useRef } from "react";
import { validateWord } from "../helpers/validateWord.js";
import "../styles/components/WordInput.css"

const WordInput = ({ chain, addWord, isValidating, setIsValidating }) => {
    const [word, setWord] = useState("");
    const [error, setError] = useState(""); 
    const inputRef = useRef(null);

    const handleChange = (e) => {
      setWord(e.target.value);
      setError(""); 
    };

    useEffect(() => {
        if (!isValidating) {
            inputRef.current?.focus();
        }
    }, [isValidating]);

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
            ref={inputRef}
            type="text"
            value={word}
            disabled={isValidating}
            onChange={handleChange}
            onKeyDown={(e) => {
                if (e.key === " ") {
                    e.preventDefault();
                }
            }}
          />
          {error && <p className="error-message">{error}</p>}
          <button className="primary-button"
                  type="submit" disabled={isValidating}>
                  {isValidating ? "Validando..." : "Ingresar"}
          </button>
        </form>
    );
};

export default WordInput;
