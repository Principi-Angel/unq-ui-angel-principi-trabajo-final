import React, { useState } from "react";
import { validateWord } from "../services/ApiService.jsx";
//import "../styles/components/WordInput.css"
import "../styles/game.css"

const WordInput = ({ word, setWord, chain, setChain, score, setScore, setTimeLeft }) => {
    const [error, setError] = useState(""); 

  const handleChange = (e) => {
    setWord(e.target.value);
    setError(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exists = await validateWord(word); 

    if (!exists) {
      setError("La palabra no existe.");
      setWord("");
      // que se ponga algo rojo
      return;
    }

    if (chain.includes(word)) {
      setError("La palabra ya fue utilizada.");
      setWord("");
      return;
    }

    if (chain.length > 0) {
      const lastWord = chain[chain.length - 1];
      if (word[0].toLowerCase() !== lastWord[lastWord.length - 1].toLowerCase()) {
        setWord("");
        setError("No respeta cadena.")
        // que se ponga algo rojo
        return;
      }
    }

    setChain([...chain, word]);
    setScore(score + word.length);
    setTimeLeft(15);
    setWord("");
    setError("")
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
