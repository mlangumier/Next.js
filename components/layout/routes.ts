export interface IPathRoutes {
  name: string;
  path: string;
}

export const pathRoutes: IPathRoutes[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Races",
    path: "/races",
  },
];
