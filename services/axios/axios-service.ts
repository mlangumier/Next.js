import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

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

/**
 * REQUEST
 * Authorization: refresh token for authed-only requests
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = store.getState().auth.refreshToken;

    return config;
  }
);

/**
 * RESPONSE
 * If success, can manage received data
 * If error, can manage error behavior
 */
const responseSuccessHandler = (response: AxiosResponse) => response;

const responseErrorHandler = (error: AxiosError) => Promise.reject(error);

axiosInstance.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error)
);
