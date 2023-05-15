import { ILoginForm } from "@/models/user";
import { axiosInstance } from "./axios/axios-service";

export const login = async (credentials: ILoginForm) => {
  const { data } = await axiosInstance.post("login", credentials, {
    withCredentials: true,
  });

  return data;
};

export const logout = async () => {
  const { data } = await axiosInstance.post(
    "logout",
    {},
    {
      withCredentials: true,
    }
  );

  return data;
};

export const getRefreshToken = async () => {
  const { data } = await axiosInstance.get("refresh-token", {
    withCredentials: true,
  });

  return data;
};

export const fetchUsers = async () => {
  const { data } = await axiosInstance.get("users");

  return data;
};

export const fetchUser = async (userId: number) => {
  const { data } = await axiosInstance.get(`users/${userId}`);

  return data;
};
