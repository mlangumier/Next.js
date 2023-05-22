"use client";

import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/store/selectors";
import useAuthedQuery from "@/hooks/use-authed-query";
import UserService from "@/services/user-services";

const Users: NextPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const {
    fetchStatus,
    error,
    refetch: fetchUsersFn,
  } = useAuthedQuery(["users"], () => UserService.instance.fetchUsers(), {
    enabled: false,
    onSuccess: (res) => {
      console.log("Success:", res);
    },
  });

  // const { data: tokens, refetch: refreshTokenFn } = useQuery(
  //   ["refresh-token"],
  //   getRefreshToken,
  //   {
  //     enabled: false,
  //   }
  // );

  // useEffect(() => {
  //   if (!tokens) {
  //     return;
  //   }

  //   const { accessToken, refreshToken } = tokens;

  //   dispatch(updateTokens({ accessToken, refreshToken }));
  // }, [tokens, dispatch]);

  return (
    <main>
      <p className="w-[100%] text-start">
        Welcome{user ? `, ${user.firstName}` : null}!
      </p>
      {/* <button
        className="bg-slate-50 shadow-md p-2 px-4 my-4 rounded-md"
        type="button"
        onClick={() => refreshTokenFn()}
      >
        Refresh Token
      </button>
      {tokens?.message ? (
        <p className="text-sm mt-[-10px]">{tokens.message}</p>
      ) : null} */}

      <button
        className="bg-slate-50 shadow-md p-2 px-4 my-4 rounded-md"
        type="button"
        onClick={() => fetchUsersFn()}
      >
        Fetch users list
      </button>
      {fetchStatus === "fetching" ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-sm mt-[-10px]">
          Error: {(error as Error).message}
        </p>
      ) : (
        <p>Users fetched!</p>
      )}
    </main>
  );
};

export default Users;
