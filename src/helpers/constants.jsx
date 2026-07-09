export const normalizeWord = (word) => {
  return word
    .toLowerCase() 
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "");
};