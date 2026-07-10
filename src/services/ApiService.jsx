import axios from "axios";

const API_URL = "https://word-api-hmlg.vercel.app/api";

export const validateWordExists = async (word) => {
  const res = await axios.get(`${API_URL}/validate`, {
    params: { word }
  });
  return res.data.exists;
};