import { IUser } from "@/src/models/user";
import { IAdapter } from "../adapter";

export default class UserAdapter implements IAdapter<IUser> {
  adaptForLocal(item: any): IUser {
    return {
      id: item.id,
      username: item.username,
      // firstName: item.firstName,
      // lastName: item.lastName,
      // role: item.role,
    };
  }

  adaptForDistant(item: Partial<IUser>): object {
    return item;
  }
}
