export interface IPathRoutes {
  name: string;
  path: string;
}
export const enum ERoutingPath {
  HOME = "/",
  RACES = "/races",
  CLASSES = "/classes",
  CHARACTER = "/character",
  ITEMS = "/items",
}

export const pathRoutes: IPathRoutes[] = [
  {
    name: "Races",
    path: ERoutingPath.RACES,
  },
  {
    name: "Classes",
    path: ERoutingPath.CLASSES,
  },
  {
    name: "Character",
    path: ERoutingPath.CHARACTER,
  },
  {
    name: "Items",
    path: ERoutingPath.ITEMS,
  },
];
