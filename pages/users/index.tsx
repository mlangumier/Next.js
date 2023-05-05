import { Layout } from "@/components/layout";
import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { getRefreshToken } from "@/services/user-services";
import { useDispatch, useSelector } from "react-redux";
import { selectRefreshToken, selectUser } from "@/store/selectors";
import { useEffect } from "react";
import { updateTokens } from "@/store/auth-slice";

const Users: NextPage = () => {
  const user = useSelector(selectUser);
  const refreshToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch();

  // Fetch users list
  // const {
  //   data: usersList,
  //   isLoading,
  //   error,
  // } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

  // Test refresh-token
  const { data: tokens, refetch: refreshTokenFn } = useQuery(
    ["refresh-token"],
    () => getRefreshToken(refreshToken as string),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    const { accessToken, refreshToken } = tokens;

    dispatch(updateTokens({ accessToken, refreshToken }));
  }, [tokens, dispatch]);

  return (
    <Layout>
      <p className="w-[100%] text-start">
        Welcome{user ? `, ${user.firstName}` : null}!
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
