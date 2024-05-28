import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { items } from "../data/items";

export const Home = () => {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <section>
        <h2>Lista de contactos</h2>
        <ul>
          {items.map((item) => (
            <li key={item?.id}>
              <Link to={`contacts/${item?.id}`}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </>
  );
};
