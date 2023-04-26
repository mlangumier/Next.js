import { ReactNode, createContext, useContext, useState } from "react";

// TODO: How the F can i make that work ???

export type AlertContextType = {
  alert: string | null;
  openAlert: (alert: string) => void;
  closeAlert: () => void;
};

export const AlertContext = createContext<AlertContextType>({
  alert: "",
  openAlert: () => {},
  closeAlert: () => {},
});

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<string | null>(null);
  const openAlert = (message: string) => setAlert(message);
  const closeAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ alert, openAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const AlertComponent = () => {
  const { alert } = useContext(AlertContext);

  console.log("Alert:", alert);
  if (alert !== "") {
    <div className="fixed bottom-8 left-8 h-18 py-2 px-4 flex items-center justify-center bg-green-400 shadow-md">
      <p>Show this alert on successful fetch request.</p>
    </div>;
  }

  return (
    <div className="fixed bottom-8 left-8 h-18 py-2 px-4 flex items-center justify-center bg-green-400 shadow-md">
      Nothing to see here
    </div>
  );
};
