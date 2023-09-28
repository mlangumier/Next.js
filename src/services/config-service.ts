/**
 * Retrieves app configs and exposes it globally.
 */
export default class ConfigService {
  private _data: { [key: string]: string | undefined } | null = null;

  protected static _instance: null | ConfigService = null;

  public static get instance(): ConfigService {
    if (ConfigService._instance === null) {
      ConfigService._instance = new ConfigService({
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
      });

      ConfigService.instance.validateConfigs();
    }

    return ConfigService._instance;
  }

  private constructor(data: { [key: string]: string | undefined }) {
    this._data = data;
  }

  /**
   * Retrieves the config value matching the provided key.
   *
   * @param key The name of the config.
   * @throws An error if _data was not populated.
   *
   * @returns The config or null if not found.
   */

  public get(key: string): string | null {
    if (this._data === null) {
      throw new Error("Invalid call to the method. Instanciate service first.");
    }

    if (!Object.prototype.hasOwnProperty.call(this._data, key)) {
      return null;
    }

    return this._data[key] || null;
  }

  private validateConfigs() {
    if (this._data === null) {
      throw new Error("No data for the current service.");
    }

    if (!this._data.NEXT_PUBLIC_BACKEND_URL) {
      throw new Error("Missing env variable NEXT_PUBLIC_BACKEND_URL.");
    }
  }
}
