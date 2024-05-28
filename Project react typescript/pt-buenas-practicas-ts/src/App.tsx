import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import { store } from "./redux";
import { Layout } from "./styledComponents";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
}

export default App;
