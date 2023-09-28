import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { store } from "@/src/store/store";
import { clearAuthUser, updateTokens } from "@/src/store/auth-slice";
import { selectAccessToken, selectRefreshToken } from "@/src/store/selectors";
import { TUrlParams } from "@/src/models/common-model";
import { ApiError, IApiErrorData } from "@/src/models/api-error";

interface IAxiosConfigRetry extends InternalAxiosRequestConfig<any> {
  retry?: boolean;
}

export const JSON_CONTENT_TYPE = "application/json";

export default class ApiService {
  protected static _instance: null | ApiService = null;

  private axiosClient: AxiosInstance;

  public static get instance(): ApiService {
    if (ApiService._instance === null) {
      ApiService._instance = new ApiService();
    }

    return ApiService._instance;
  }

  protected createAxiosClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  protected constructor() {
    this.axiosClient = this.createAxiosClient();

    this.axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        if (config.withCredentials === true) {
          const accessToken = selectAccessToken(store.getState());

          config.headers.set("Authorization", `Bearer ${accessToken}`);
        }

        return config;
      }
    );

    this.axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.status === 204) {
          return null;
        }
        return response.data;
      },
      async (error: AxiosError<IApiErrorData, any>) => {
        const config: IAxiosConfigRetry | undefined = error.config;

        let apiError = error.response
          ? error.response.data
          : {
              error: "Empty error response",
              statusCode: 500,
              message:
                "This request received and error but does not contain any error message.",
            };

        if (apiError.statusCode === 401 && config && !config.retry) {
          config.retry = true;

          try {
            await this.refreshToken();

            const accessToken = selectAccessToken(store.getState());

            config.headers.set("Authorization", `Bearer ${accessToken}`);

            return this.axiosClient(config);
          } catch {
            apiError = {
              error: '"Unauthorized"',
              statusCode: 401,
              message: "Couldn't refresh token",
            };

            store.dispatch(clearAuthUser());
          }
        }

        throw new ApiError(apiError);
      }
    );
  }

  /**
   * Returns the complete URL of an endpoint.
   *
   * @param endpoint The endpoint to contact on the API.
   * @param urlParams An object containing the parameters to embeded in the URL.
   * Example: An endpoint like "/surveys/:surveyId" with a URL param of { surveyId: 1 } would render /surveys/1.
   *
   * @returns The computed URL.
   */
  public static getComputedEndpoint(
    endpoint: string,
    urlParams?: TUrlParams
  ): string {
    if (!urlParams) {
      return endpoint;
    }

    return Object.keys(urlParams).reduce(
      (acc: string, paramKey: string): string =>
        acc.replace(
          `:${paramKey}`,
          encodeURIComponent(urlParams[paramKey].toString())
        ),
      endpoint
    );
  }

  public async sendRequest(
    endpoint: string,
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    authenticated?: boolean,
    urlParams?: TUrlParams,
    body?: object | Blob | BufferSource | FormData,
    contentType: string | null = JSON_CONTENT_TYPE
  ): Promise<any> {
    const headers: HeadersInit =
      contentType === null || !body ? {} : { "Content-Type": contentType };

    const response = await this.axiosClient.request({
      method,
      url: ApiService.getComputedEndpoint(endpoint, urlParams),
      withCredentials: authenticated,
      data: body,
      headers,
    });

    return response;
  }

  async refreshToken(): Promise<boolean> {
    const refreshToken = selectRefreshToken(store.getState());

    const response = await this.axiosClient.get("users/token/refresh", {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });

    store.dispatch(updateTokens(response.data));

    return true;
  }
}
