import { IAuth } from "@/models/user";
import { createSelector } from "@reduxjs/toolkit";
import { IState } from "./store";

const selectAuthState = (state: IState): IAuth => state.auth;

export const selectUser = createSelector(
  selectAuthState,
  (authState) => authState.user
);

export const selectUserRole = createSelector(selectUser, (user) =>
  user ? user.role : null
);

export const selectRefreshToken = createSelector(
  selectAuthState,
  (authState) => authState.refreshToken
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (authState) => authState.accessToken
);
