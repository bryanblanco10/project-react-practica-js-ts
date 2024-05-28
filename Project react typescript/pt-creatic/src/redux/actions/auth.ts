import { createAction } from "@reduxjs/toolkit";
import { User } from "../../models";

export const sendingAuthForm = createAction("SENDING_AUTH_FORM")
export const errorAuth = createAction("ERROR_AUTH")
export const completedSendAuthAuthForm = createAction("COMPLETED_SEND_AUTH_FORM")

export const submitLogin = (user: User) => (dispatch) => {
  try {
    dispatch(sendingAuthForm(user))
  } catch (error) {
    // dispatch(errorAuth({ error }))
  } finally {
    dispatch(completedSendAuthAuthForm())
  }
}