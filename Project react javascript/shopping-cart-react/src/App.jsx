import {products as initialProducts} from "./mocks/products.json"
import { useEffect, useState } from "react"
import { Products } from "./components/Product";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters"
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
function App() {
  const [products] = useState(initialProducts);
  const {
    filters,
    filteredProducts,
    filtersProducts,
  } = useFilters();

  
  useEffect(() => {
    filtersProducts(products);
  }, [filters])

  ;
  return (
    <CartProvider>
      <Header>
          <Filters />
      </Header>
      <Cart />
      <section>
        {filteredProducts.length == 0 && <span>No se encontraron resultados</span> }
        {filteredProducts.length > 0 && <Products products={filteredProducts} />}
        
      </section>
      <Footer />
    </CartProvider>
  )
}

export default App
