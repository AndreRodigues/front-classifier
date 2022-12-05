import axios from "axios";

const api = axios.create({
  baseURL: "https://api-clasifier.onrender.com",
});

export default api;
