"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserService from "@/src/services/user/user-services";
import { clearAuthUser } from "@/src/store/auth-slice";
import { selectUser } from "@/src/store/selectors";
import { useMutation } from "@tanstack/react-query";

import { ERoutingPath } from "../../routes/routes";
import { BurgerMenu } from "./burger";

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
    <div className="min-h-screen flex flex-col w-full overflow-hidden">
      <div className="fixed top-0 h-20 w-screen py-4 px-8 flex bg-slate-50 justify-between items-center shadow-md">
        <div className="flex gap-4 items-center">
          <Link href={ERoutingPath.HOME}>
            <p className="h3-like uppercase">Portfolio</p>
          </Link>
        </div>

        {/* <nav className="hidden sm:flex flex-grow px-8 justify-center">
          {pathRoutes.map((route: IPathRoutes) => (
            <Route
              route={route}
              user={user}
              logout={handleLogout}
              key={route.name}
            />
          ))}
        </nav> */}

        <BurgerMenu showMenu={showMenu} logout={handleLogout} user={user} />

        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="flex sm:hidden py-2 px-4 bg-slate-200 hover:bg-slate-700 text-slate-700 hover:text-slate-50 rounded-md"
        >
          Menu
        </button>
      </div>

      <main className="flex flex-col flex-grow items-center">{children}</main>
    </div>
  );
};
