import { normalizeWord } from "./normalizeWord.jsx";
import { validateWordExists } from "../services/apiService.jsx";

export async function validateWord(word, chain) {
      const normalized = normalizeWord(word);

      if (!normalized) {
        return { isValid: false, error: "Ingresa una palabra." };
      }

      const exists = await validateWordExists(normalized);
      
      if (!exists) {
        return { isValid: false, error: "La palabra no existe." };
      }
    
      const alreadyUsed = chain.some(w => w.normalized === normalized);
    
      if (alreadyUsed) {
        return { isValid: false, error: "La palabra ya fue utilizada." };
      }
    
      if (chain.length > 0) {
        const lastWord = chain.at(-1).normalized;
        if (normalized[0] !== lastWord.at(-1)) {
          return { isValid: false, error: "La palabra no respeta la cadena." };
        }
      }
    
      return { isValid: true, word: { original: word, normalized } };
}