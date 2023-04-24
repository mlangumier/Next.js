import { ReactNode } from "react";
import { IPathRoutes, pathRoutes } from "./routes";
import Link from "next/link";

interface IProps {
  children: ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="h-12 w-screen py-4 px-8 flex justify-between items-center bg-slate-50 shadow-md">
        <h1>TS Tailwind</h1>
        <div className="flex flex-grow px-8 justify-center">
          {pathRoutes.map((route: IPathRoutes) => (
            <Link
              href={route.path}
              key={route.name}
              className="px-4 hover:text-blue-400"
            >
              {route.name}
            </Link>
          ))}
        </div>
        <p>Menu</p>
      </div>
      <main className="flex flex-col flex-grow items-center p-8">
        {children}
      </main>
    </div>
  );
};
