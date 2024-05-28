import { createReducer } from "@reduxjs/toolkit";
import { completedSendAuthAuthForm, errorAuth, sendingAuthForm } from "../actions/auth";
import { Auth } from "../../models";

const initialState: Auth = {
  isAuth: false,
  isBusy: false,
  error: "",
  user: {
    email: "",
    password: ""
  }
}
export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(errorAuth.toString(), (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        isBusy: false,
        isAuth: false,
      };
    })
    .addCase(sendingAuthForm.toString(), (state, action) => {
      console.log(action)
      return {
        ...state,
        isAuth: true,
        isBusy: true,
        error: "",
        user: { ...action.payload }
      }
    })
    .addCase(completedSendAuthAuthForm.toString(), (state, action) => {
      return {
        ...state,
        isBusy: false,
        error: "",
      }
    })
})