import axios from "axios";

// BACKEND api:
export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// D&D API:
export const axiosDnd = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DND_API,
});

// *Interceptors in case token need refresh :
// https://stackoverflow.com/questions/47216452/how-to-handle-401-authentication-error-in-axios-and-react
