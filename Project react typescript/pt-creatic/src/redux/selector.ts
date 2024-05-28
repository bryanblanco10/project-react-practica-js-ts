import { createSelector } from "@reduxjs/toolkit";

export const isAuthSel = state => state.authReducer.isAuth;
export const isBusySel = state => state.authReducer.isBusy;
export const errorSel = state => state.authReducer.error;
export const userSel = state => state.authReducer.user;