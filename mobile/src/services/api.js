import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:19000"
});

export default api;
