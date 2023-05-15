import { ERoutingPath } from "@/components/layout/routes";
import { clearAuthUser } from "@/store/auth-slice";
import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

// Basics for Authed requests: https://medium.com/@sourabhbagrecha/how-to-handle-error-401-unauthorized-request-in-react-query-732297f24285
// Thread about types: https://github.com/TanStack/query/discussions/3227

const useAuthedQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const query = useQuery(queryKey, queryFn, options);

  if ((query?.error as any)?.response?.status === 401) {
    // console.log("Err?", query.error);

    dispatch(clearAuthUser());
    router.replace(ERoutingPath.LOGIN);
  }

  return query;
};

export default useAuthedQuery;

// TODO: see what's wrong here
// TODO: if works, do the same for useMigration
