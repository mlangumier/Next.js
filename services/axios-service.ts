import { selectRefreshToken } from "@/store/selectors";
import axios from "axios";
import { useSelector } from "react-redux";

// D&D API (example of basic external public api):
export const axiosDnd = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DND_API,
});

// BACKEND api:
export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosApi.interceptors.request.use(
//   (request) => {
//     const refreshToken = useSelector(selectRefreshToken);

//     if (refreshToken) {
//       request.headers.Authorization = `Bearer ${refreshToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
