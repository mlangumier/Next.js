import axios from "axios";

// D&D API:
export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// BACKEND api:
export const axiosDnd = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DND_API,
});
