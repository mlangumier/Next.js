import { ERoutingPath } from "@/components/layout/routes";
import { clearAuthUser } from "@/store/auth-slice";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

// https://medium.com/@sourabhbagrecha/how-to-handle-error-401-unauthorized-request-in-react-query-732297f24285

const useAuthedQuery = (...options) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const query = useQuery(...options);
  if (query?.error?.response?.status === 401) {
    console.log("Err?", query.error);

    dispatch(clearAuthUser());
    router.replace(ERoutingPath.LOGIN);
  }

  return query;
};

export default useAuthedQuery;

// TODO: see what's wrong here
// TODO: if works, do the same for useMigration
