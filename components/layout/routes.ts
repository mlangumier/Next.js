export interface IPathRoutes {
  name: string;
  path: string;
}
export const enum ERoutingPath {
  HOME = "/",
  LOGIN = "/login",
  RACES = "/races",
  CLASSES = "/classes",
  CHARACTER = "/character",
  MONSTERS = "/monsters",
  USERS = "/users",
}

export const pathRoutes: IPathRoutes[] = [
  // {
  //   name: "Races",
  //   path: ERoutingPath.RACES,
  // },
  {
    name: "Classes",
    path: ERoutingPath.CLASSES,
  },
  // {
  //   name: "Character",
  //   path: ERoutingPath.CHARACTER,
  // },
  // {
  //   name: "Monsters",
  //   path: ERoutingPath.MONSTERS,
  // },
  // {
  //   name: "Users",
  //   path: ERoutingPath.USERS,
  // },
  {
    name: "Login",
    path: ERoutingPath.LOGIN,
  },
];
