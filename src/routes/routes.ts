export interface IPathRoutes {
  name: string;
  path: string;
}
export const enum ERoutingPath {
  HOME = "/",
  LOGIN = "/login",
  CLASSES = "/classes",
  USER = "/user",
}

export const pathRoutes: IPathRoutes[] = [
  {
    name: "Login",
    path: ERoutingPath.LOGIN,
  },
  // {
  //   name: "Classes",
  //   path: ERoutingPath.CLASSES,
  // },
  // {
  //   name: "Users",
  //   path: ERoutingPath.USER,
  // },
];
