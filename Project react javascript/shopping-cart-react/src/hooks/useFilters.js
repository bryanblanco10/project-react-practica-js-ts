import { useContext, useState } from "react";
import { FiltersContext } from "../context/filters";

export const useFilters = () => {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const {filters, setFilters} = useContext(FiltersContext);
  const filtersProducts =  (products) => {
    const filteredProducts = products.filter(product => {
      return (
        product.price >= filters?.minPrice && (
          filters?.category === "all" ||
          product.category === filters?.category
        )
      )
    });
    setfilteredProducts(filteredProducts);
  }

  return {
    filters,
    filteredProducts,
    setFilters,
    filtersProducts,
  }

}