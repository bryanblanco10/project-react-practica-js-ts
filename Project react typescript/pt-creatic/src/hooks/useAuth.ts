import { useState } from "react"
import { User } from "../models"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { submitLogin } from "../redux/actions";
import { isBusySel, userSel } from "../redux/selector";
export const useAuth = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const isBusy = useSelector(isBusySel, shallowEqual)
  const userSave = useSelector(userSel, shallowEqual)
 
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (user.email?.length && user.password?.length) {
      event.preventDefault();
      dispatch(submitLogin(user))
       console.log(userSave)
    }
  }

  return {
    user,
    setUser,
    handleSubmit,
    isBusy,
  }
}