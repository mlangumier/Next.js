import { ReactNode, useState } from "react";
import { ERoutingPath, IPathRoutes, pathRoutes } from "./routes";
import Link from "next/link";

interface IProps {
  children: ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
            <Link
              href={route.path}
              key={route.name}
              className="px-4 hover:text-blue-400"
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <BurgerMenu
          showMenu={showMenu}
          onClose={() => setShowMenu(!showMenu)}
        />

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

const BurgerMenu: React.FC<{ showMenu: boolean; onClose: () => void }> = ({
  showMenu,
  onClose,
}) => (
  <div
    className={`${
      showMenu ? "flex" : "hidden"
    } fixed top-12 right-0 bg-slate-50 shadow-md flex flex-col`}
  >
    <nav className="flex flex-col py-2">
      {pathRoutes.map((route: IPathRoutes) => (
        <Link
          href={route.path}
          key={route.name}
          className="py-2 px-8 hover:text-white hover:bg-blue-800"
        >
          {route.name}
        </Link>
      ))}
    </nav>
  </div>
);
