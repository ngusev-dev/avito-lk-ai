import axios from "axios";

export const AI_API = axios.create({
  baseURL: import.meta.env.VITE_AI_BASE_URL,
});
