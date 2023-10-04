import Link from "next/link";

import { IUser } from "@/src/models/user";
import { ERoutingPath, IPathRoutes } from "@/src/routes/routes";

interface IProps {
  logout: () => void;
  user: IUser | null;
  route: IPathRoutes;
}

export const Route: React.FC<IProps> = ({ logout, user, route }) => {
  // TODO: refacto logout
  if (route.path === ERoutingPath.LOGIN && user !== null) {
    return (
      <button
        type="button"
        onClick={logout}
        className="py-2 px-8 hover:text-white hover:bg-blue-800"
      >
        Logout
      </button>
    );
  }

  return (
    <Link
      href={route.path}
      className="py-2 px-8 hover:text-white hover:bg-blue-800"
    >
      {route.name}
    </Link>
  );
};
