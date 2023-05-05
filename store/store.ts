import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistCombineReducers,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth-slice";
import { IAuth } from "@/models/user";

const persistConfig = {
  key: "training-persist",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type IState = {
  [authSlice.name]: IAuth;
};
