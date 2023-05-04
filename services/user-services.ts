import { ILoginForm } from "@/models/user";
import { axiosApi } from "./axios-service";

export const login = async (credentials: ILoginForm) => {
  const { data } = await axiosApi.post("login", credentials, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  if (data.accessToken) {
    sessionStorage.setItem("accessToken", data.accessToken);
  }

  return data;
};

export const refreshToken = async () => {
  const accessToken = sessionStorage.getItem("accessToken");

  const response = await axiosApi.get("refresh-token", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log("TOKENS:", response);
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
