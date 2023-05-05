import axios from "axios";

/**
 * Axios instance communicating with Backend API
 */
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** --------------------------------------------------
 * Interceptor seting refreshToken in the api call for authorization
 * injectStore is initialized in the pages/_app component
 */
let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = store.getState().auth.refreshToken;
  return config;
});

/** --------------------------------------------------
 * Example of same mecanic but with Hook (to be used manually with axios call in component)
 */
// export const useAxiosInstance = () => {
//   const refreshToken = useSelector(selectRefreshToken);

//   useEffect(() => {
//     const requestIntercept = axiosInstance.interceptors.request.use((config) => {
//       if (!config.headers.Authorization) {
//         config.headers.Authorization = `Bearer ${refreshToken}`;
//       }

//       return config;
//     });

//     return () => {
//       axiosInstance.interceptors.request.eject(requestIntercept);
//     };
//   }, [refreshToken]);

//   return axiosInstance;
// };
