"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IUser } from "@/src/models/user";
import UserService from "@/src/services/user/user-services";
import { clearAuthUser } from "@/src/store/auth-slice";
import { selectUser } from "@/src/store/selectors";
import { useMutation } from "@tanstack/react-query";

import { ERoutingPath, IPathRoutes, pathRoutes } from "../../routes/routes";

interface IProps {
  children: ReactNode;
}

export const LayoutComponent: React.FC<IProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate: handleLogout } = useMutation({
    mutationFn: UserService.instance.logout,
    onSuccess: (res) => {
      setShowMenu(false);

      router.push(ERoutingPath.LOGIN);
      dispatch(clearAuthUser());
    },
    onError: (error: Error) => {
      console.log("Logout error:", error);
      router.push(ERoutingPath.LOGIN);
      dispatch(clearAuthUser());
    },
  });

  return (
    <div className="min-h-screen flex flex-col space-y-6 w-full overflow-hidden">
      <div className="h-12 w-screen py-4 px-8 flex justify-between items-center bg-slate-50 shadow-md">
        <div className="flex gap-4 items-center">
          <Link href={ERoutingPath.HOME}>
            <h1>TS Tailwind</h1>
          </Link>
        </div>

        <nav className="hidden sm:flex flex-grow px-8 justify-center">
          {pathRoutes.map((route: IPathRoutes) => (
            <Route
              route={route}
              user={user}
              logout={handleLogout}
              key={route.name}
            />
          ))}
        </nav>

        <BurgerMenu showMenu={showMenu} logout={handleLogout} user={user} />

        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="flex sm:hidden py-2 px-4 bg-slate-200 hover:bg-slate-700 text-slate-700 hover:text-slate-50 rounded-md"
        >
          Menu
        </button>
      </div>
      <main className="flex flex-col flex-grow items-center p-8">
        {children}
      </main>
    </div>
  );
};

const BurgerMenu: React.FC<{
  showMenu: boolean;
  logout: () => void;
  user: IUser | null;
}> = ({ showMenu, logout, user }) => (
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

const Route: React.FC<{
  logout: () => void;
  user: IUser | null;
  route: IPathRoutes;
}> = ({ logout, user, route }) => {
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
