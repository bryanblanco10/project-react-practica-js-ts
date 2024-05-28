import { User } from "./user";

export interface Auth {
  isAuth: boolean;
  isBusy: boolean;
  error: string;
  user: User
}