export interface IAdapter<T> {
  /**
   * Adapts the response from the API to match the local models.
   *
   * @param item The JSON payload received from the API
   */
  adaptForLocal(item: any): T;

  /**
   * Adapts the provided item to be sent to the API.
   *
   * @param item A model item to send to the API
   */
  adaptForDistant(item: Partial<T>): object;
}
