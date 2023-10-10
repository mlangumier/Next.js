import { IUser } from "@/src/models/user";
import { IPathRoutes, pathRoutes } from "@/src/routes/routes";

import { Route } from "../route";

interface IProps {
  showMenu: boolean;
  logout: () => void;
  user: IUser | null;
}

export const BurgerMenu: React.FC<IProps> = ({ showMenu, logout, user }) => (
  <div
    className={`${
      showMenu ? "flex" : "hidden"
    } fixed top-12 right-0 bg-slate-50 shadow-md flex flex-col`}
  >
    <nav className="flex flex-col py-2">
      {pathRoutes.map((route: IPathRoutes) => (
        <Route route={route} user={user} logout={logout} key={route.name} />
      ))}
    </nav>
  </div>
);
