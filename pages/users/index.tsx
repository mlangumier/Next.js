import { Layout } from "@/components/layout";
import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers, getRefreshToken } from "@/services/user-services";
import { useContext } from "react";
import AuthContext, { IAuth } from "@/context/auth-provider";

const Users: NextPage = () => {
  const { auth } = useContext<any>(AuthContext);

  // Fetch users list
  // const {
  //   data: usersList,
  //   isLoading,
  //   error,
  // } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

  // Test refresh-token
  const { data: token, refetch: refreshTokenFn } = useQuery(
    ["refresh-token"],
    () => getRefreshToken(auth.refreshToken),
    {
      enabled: false,
    }
  );

  return (
    <Layout>
      <p className="w-[100%] text-start">
        Welcome{auth?.user ? `, ${auth.user.firstName}` : null}!
      </p>

      <h1>USERS LIST</h1>
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {(error as Error).message}</p>
      ) : (
        <p>Users fetched!</p>
      )} */}

      <button
        className="bg-slate-50 shadow-md p-2 px-4 my-4 rounded-md"
        type="button"
        onClick={() => refreshTokenFn()}
      >
        Refresh Token
      </button>
    </Layout>
  );
};

export default Users;
