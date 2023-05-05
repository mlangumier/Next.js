import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRefreshToken } from "@/store/selectors";

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

export const useAxiosApi = () => {
  const refreshToken = useSelector(selectRefreshToken);

  useEffect(() => {
    const requestIntercept = axiosApi.interceptors.request.use((config) => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${refreshToken}`;
      }

      return config;
    });

    return () => {
      axiosApi.interceptors.request.eject(requestIntercept);
    };
  }, [refreshToken]);

  return axiosApi;
};
