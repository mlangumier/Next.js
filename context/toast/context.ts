import { createContext } from "react";
import { IToast } from "./toast-model";

export interface IToastContext {
  toast: IToast | null;
  closeToast: () => void;
  toastSuccess: (message: string, duration?: number) => void;
  toastWarning: (message: string, duration?: number) => void;
  toastError: (message: string, duration?: number) => void;
  toastInfo: (message: string, duration?: number) => void;
}

export const defaultToastContextState = {
  toast: null,
  closeToast: () => {},
  toastSuccess: () => {},
  toastWarning: () => {},
  toastError: () => {},
  toastInfo: () => {},
};

export const ToastContext = createContext<IToastContext>(
  defaultToastContextState
);
