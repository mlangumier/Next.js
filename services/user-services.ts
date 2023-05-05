import { ILoginForm } from "@/models/user";
import { axiosInstance } from "./axios/axios-service";

export const login = async (credentials: ILoginForm) => {
  const { data } = await axiosInstance.post("login", credentials, {
    withCredentials: true,
  });

  return data;
};

export const getRefreshToken = async () => {
  const response = await axiosInstance.get("refresh-token", {
    withCredentials: true,
  });

  return response.data;
};

export const fetchUsers = async () => {
  const response = await axiosInstance.get("users");
  console.log("Users:", response.data);

  return response.data;
};

export const fetchUser = async (userId: number) => {
  const response = await axiosInstance.get(`users/${userId}`);
  console.log("USER:", response.data);

  return response.data;
};
