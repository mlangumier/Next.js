"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { ToastContext } from "./context";
import { ToastComponent } from "@/src/components/toast/toast";
import { EToastAction, IToast } from "./toast-model";

interface IProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: IProps) => {
  const [toast, setToast] = useState<IToast | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, toast.duration * 1000); // toast.duration in seconds

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const toastSuccess = (message: string, duration = 10) => {
    setToast({
      type: EToastAction.SUCCESS,
      color: { bg: "border-green-700 bg-green-100", text: "text-green-700" },
      icon: <CheckCircleIcon className="h-6 w-6 stroke-green-700" />,
      message,
      duration,
    });
  };

  const toastError = (message: string, duration = 10) => {
    setToast({
      type: EToastAction.ERROR,
      color: { bg: "border-red-700 bg-red-100", text: "text-red-700" },
      icon: <ExclamationCircleIcon className="h-6 w-6 stroke-red-700" />,
      message,
      duration,
    });
  };

  const toastWarning = (message: string, duration = 10) => {
    setToast({
      type: EToastAction.WARNING,
      color: { bg: "border-yellow-500 bg-yellow-100", text: "text-yellow-700" },
      icon: <ExclamationTriangleIcon className="h-6 w-6 stroke-yellow-700" />,
      message,
      duration,
    });
  };

  const toastInfo = (message: string, duration = 10) => {
    setToast({
      type: EToastAction.INFO,
      color: { bg: "border-blue-500 bg-blue-100", text: "text-blue-700" },
      icon: <InformationCircleIcon className="h-6 w-6 stroke-blue-700" />,
      message,
      duration,
    });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
        closeToast,
        toastSuccess,
        toastWarning,
        toastError,
        toastInfo,
      }}
    >
      {toast ? (
        <ToastComponent
          closeToast={closeToast}
          icon={toast.icon}
          message={toast.message}
          textColor={toast.color.text}
          bgColor={toast.color.bg}
        />
      ) : null}

      {children}
    </ToastContext.Provider>
  );
};
