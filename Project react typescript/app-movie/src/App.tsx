import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/main"
import { Detail } from "./components/detail";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detalle/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
