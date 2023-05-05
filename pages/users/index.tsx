import { Layout } from "@/components/layout";
import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers, getRefreshToken } from "@/services/user-services";
import { useDispatch, useSelector } from "react-redux";
import { selectRefreshToken, selectUser } from "@/store/selectors";
import { useEffect } from "react";
import { updateTokens } from "@/store/auth-slice";
import { useAxiosApi } from "@/services/axios-service";

const Users: NextPage = () => {
  const user = useSelector(selectUser);
  const refreshToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch();
  const axiosAuth = useAxiosApi();

  // Fetch users list
  const {
    data: usersList,
    isLoading,
    error,
    refetch: fetchUsersFn,
  } = useQuery(
    ["users"],
    async () => {
      const { data } = await axiosAuth.get(`users`);
      console.log("Users:", data);
      return data;
    },
    { enabled: false }
  );

  // *Test refresh token
  const { data: tokens, refetch: refreshTokenFn } = useQuery(
    ["refresh-token"],
    () => getRefreshToken(refreshToken as string),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (!tokens) {
      return;
    }

    const { accessToken, refreshToken } = tokens;

    dispatch(updateTokens({ accessToken, refreshToken }));
  }, [tokens, dispatch]);

  return (
    <Layout>
      <p className="w-[100%] text-start">
        Welcome{user ? `, ${user.firstName}` : null}!
      </p>
      <button
        className="bg-slate-50 shadow-md p-2 px-4 my-4 rounded-md"
        type="button"
        onClick={() => refreshTokenFn()}
      >
        Refresh Token
      </button>
      {tokens?.message ? (
        <p className="text-sm mt-[-10px]">{tokens.message}</p>
      ) : null}

      <button
        className="bg-slate-50 shadow-md p-2 px-4 my-4 rounded-md"
        type="button"
        onClick={() => fetchUsersFn()}
      >
        Fetch users list
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-sm mt-[-10px]">
          Error: {(error as Error).message}
        </p>
      ) : (
        <p>Users fetched!</p>
      )}
    </Layout>
  );
};

export default Users;
