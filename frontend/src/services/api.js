import axios from "axios";

const API = axios.create({
  baseURL: "https://nprs-system-backend.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
export const uploadImage = (data) => API.post("/upload", data);
export const getHistory = () => API.get("/history");