"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistor, store } from "@/store/store";
import { AuthProvider } from "@/context/auth/auth-provider";
import { ToastProvider } from "@/context/toast/toast-provider";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // won't be refreshed again for 1min except if forced to
      cacheTime: 1000 * 60 * 60 * 1, // cached for 1h
      retry: 1,
    },
  },
});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <ToastProvider>{children}</ToastProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
