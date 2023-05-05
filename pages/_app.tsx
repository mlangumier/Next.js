import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistor, store } from "@/store/store";
import { AuthProvider } from "@/context/auth-provider";
import { injectStore } from "@/services/axios/axios-service";
import "@/styles/globals.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // won't be refreshed again for 1min except if forced to
      cacheTime: 1000 * 60 * 60 * 1, // cached for 1h
    },
  },
});

injectStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
