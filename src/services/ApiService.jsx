const API_URL = "https://word-api-hmlg.vercel.app/api";

export const validateWord = async (word) => {
  const res = await fetch(`${API_URL}/validate?word=${word}`);
  if (!res.ok) throw new Error("Error en la validación");
  const data = await res.json();
  return data.exists;
};