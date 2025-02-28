// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Update with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
