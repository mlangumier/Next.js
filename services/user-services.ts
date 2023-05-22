import { ILoginForm, IUser } from "@/models/user";
import CRUDService from "./config/crud-service";
import UserAdapter from "./adapters/user-adapter";
import { createHash } from "crypto";
import ApiService from "./config/api-service";

export default class UserService extends CRUDService<IUser> {
  static RESSOURCE_NAME = "users";

  protected static _instance: UserService | null = null;

  static get instance(): UserService {
    if (this._instance === null) {
      this._instance = new UserService(new UserAdapter());
    }

    return this._instance;
  }

  async getUsersList(): Promise<IUser[]> {
    const response = await this.queryList(UserService.RESSOURCE_NAME);

    return response; //TODO: return response or { data: response.data } ?
  }

  async login({ username, password }: ILoginForm): Promise<any> {
    const hash = createHash("sha256");
    hash.update(password, "utf8");
    const hashedPwd = hash.digest("hex");

    const response = await ApiService.instance.sendRequest(
      `${UserService.RESSOURCE_NAME}/login`,
      "POST",
      false,
      {},
      { username, password: hashedPwd }
    );

    const adapterUser = this.adapter.adaptForLocal(response.user);

    const res = {
      refreshToken: response.refreshToken,
      accessToken: response.accessToken,
      user: adapterUser,
    };

    return res;
  }

  async logout() {
    await ApiService.instance.sendRequest("logout", "POST");
  }

  async fetchUser(userId: number) {
    const { data } = await ApiService.instance.sendRequest(
      `users/${userId}`,
      "GET",
      true
    );

    return data;
  }
}
