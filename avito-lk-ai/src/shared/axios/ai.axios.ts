import axios from "axios";

export const AI_API = axios.create({
  baseURL: "http://127.0.0.1:5050/",
});
