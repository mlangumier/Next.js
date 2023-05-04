import { useQuery } from "@tanstack/react-query";
import useAuth from "./use-auth";
import { refreshToken } from "@/services/user-services";
import { axiosApi } from "@/services/axios-service";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  // const { data, error } = useQuery(["refresh-token"], refreshToken, {
  //   enabled: false,
  // });
  // console.log("ERROR:", error);
  // console.log("DATA:", data);

  // if (data) {
  //   setAuth((prev) => {
  //     console.log("Prev:", prev);
  //     return { ...prev, accessToken: data.accessToken };
  //   });
  // }
  // return data;

  const refresh = async () => {
    const response = await axiosApi.get("refresh-token", {
      withCredentials: true,
    });
    console.log("TOKENS:", response);
    return response;
  };

  return refresh;
};
