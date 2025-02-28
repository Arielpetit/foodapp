// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://d3c17qxn-8080.euw.devtunnels.ms/api", // Update with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
