import { TUrlParams } from "@/src/models/common-model";
import { IAdapter } from "./adapter";
import ApiService, { JSON_CONTENT_TYPE } from "./api-service";

export default abstract class CRUDService<T> {
  constructor(protected adapter: IAdapter<T>) {}

  /**
   * Query a endpoint that returns a list of ressources.
   * @param endpoint The endpoint to contact.
   * @param urlParams An object containing the parameters to embeded in the URL. @see ApiService.getApiUrl().
   *
   * @returns The list of ressources adapted for the local models.
   */
  protected async queryList(
    endpoint: string,
    urlParams?: TUrlParams
  ): Promise<T[]> {
    const response: any[] = await ApiService.instance.sendRequest(
      endpoint,
      "GET",
      true,
      urlParams
    );

    return response.map((item) => this.adapter.adaptForLocal(item));
  }

  /**
   * Query a endpoint that returns a single ressource.
   * @param endpoint The endpoint to contact.
   * @param urlParams An object containing the parameters to embeded in the URL. @see ApiService.getApiUrl().
   *
   * @returns The ressource adapted for the local model.
   */
  protected async queryItem(
    endpoint: string,
    urlParams?: TUrlParams
  ): Promise<T> {
    const response: any = await ApiService.instance.sendRequest(
      endpoint,
      "GET",
      true,
      urlParams
    );

    return this.adapter.adaptForLocal(response);
  }

  /**
   * Creates a ressource from the API.
   *
   * @param endpoint The endpoint to contact.
   * @param payload The body to send to the API.
   * @param urlParams An object containing the parameters to embeded in the URL. @see ApiService.getApiUrl().
   * @param omitContentType Whether to omit the default JSON content type header.
   */
  protected async create(
    endpoint: string,
    payload: Partial<T>,
    urlParams?: TUrlParams,
    omitContentType = false
  ): Promise<T> {
    const body = this.adapter.adaptForDistant(payload);

    const response: any = await ApiService.instance.sendRequest(
      endpoint,
      "POST",
      true,
      urlParams,
      body,
      omitContentType ? null : JSON_CONTENT_TYPE
    );

    return this.adapter.adaptForLocal(response);
  }

  /**
   * Completely updates a ressource from the API
   *
   * @param endpoint The endpoint to contact.
   * @param payload The body to send to the API.
   * @param urlParams An object containing the parameters to embeded in the URL. @see ApiService.getApiUrl().
   * @param omitContentType Whether to omit the default JSON content type header.
   */
  protected async update(
    endpoint: string,
    payload: Partial<T>,
    urlParams?: TUrlParams,
    omitContentType = false
  ): Promise<void> {
    const body = this.adapter.adaptForDistant(payload);

    await ApiService.instance.sendRequest(
      endpoint,
      "PUT",
      true,
      urlParams,
      body,
      omitContentType ? null : JSON_CONTENT_TYPE
    );
  }

  /**
   * Partially updates a ressource from the API.
   *
   * @param endpoint The endpoint to contact.
   * @param payload The body to send to the API.
   * @param urlParams An object containing the parameters to embeded in the URL. @see ApiService.getApiUrl().
   * @param omitContentType Whether to omit the default JSON content type header.
   */
  protected async patch(
    endpoint: string,
    payload: Partial<T>,
    urlParams?: TUrlParams,
    omitContentType = false
  ): Promise<void> {
    const body = this.adapter.adaptForDistant(payload);

    await ApiService.instance.sendRequest(
      endpoint,
      "PATCH",
      true,
      urlParams,
      body,
      omitContentType ? null : JSON_CONTENT_TYPE
    );
  }

  // TODO: add DELETE
}
