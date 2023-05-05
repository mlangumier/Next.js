import { useContext, useDebugValue } from "react";
import { useSelector } from "react-redux";
import { selectRefreshToken } from "@/store/selectors";
import AuthContext from "@/context/auth-provider";
import { getRefreshToken } from "@/services/user-services";

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));

  return useContext(AuthContext);
};
