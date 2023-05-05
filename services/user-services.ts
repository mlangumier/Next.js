import { ILoginForm } from "@/models/user";
import { axiosApi } from "./axios-service";

export const login = async (credentials: ILoginForm) => {
  const { data } = await axiosApi.post("login", credentials, {
    withCredentials: true,
  });

  if (data.accessToken) {
    sessionStorage.setItem("accessToken", data.accessToken);
  }

  return data;
};

export const getRefreshToken = async (refreshToken: string) => {
  const response = await axiosApi.get("refresh-token", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return response.data;
};

export const fetchUsers = async () => {
  const response = await axiosApi.get("users");
  console.log("Users:", response.data);
  return response.data;
};

export const fetchUser = async (userId: number) => {
  const response = await axiosApi.get(`users/${userId}`);
  console.log("USER:", response.data);
  return response.data;
};
