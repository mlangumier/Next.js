import { IUser } from "@/models/user";
import { ReactNode, createContext, useState } from "react";

const AuthContext = createContext({});

export interface IAuth {
  user: IUser;
  accessToken: string;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<IAuth | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
