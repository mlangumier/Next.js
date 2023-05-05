export interface ILoginForm {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface IAuth {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}
