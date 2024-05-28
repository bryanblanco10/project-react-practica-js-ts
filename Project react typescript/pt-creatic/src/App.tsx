import { type ReactElement } from "react";
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Provider } from "react-redux";
import store from "./redux/store";

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  )
}