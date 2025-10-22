import axios from "axios";

// create axios instance to use all verbal http
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type" : "application/json",
  },
});

export default axiosClient;