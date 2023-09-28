"use client";

import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { AuthProvider } from "@/src/context/auth/auth-provider";
import { ToastProvider } from "@/src/context/toast/toast-provider";
import { persistor, store } from "@/src/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 1, // Request won't be refetched for 1min except if forced to
            cacheTime: 1000 * 60 * 60 * 1, // Cached for 1h
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

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
