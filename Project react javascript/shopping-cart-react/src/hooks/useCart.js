import { CartContext } from "../context/cart";
import { useContext } from "react";

export const useCart = () => {
  const {
    cart,
    addToCart,
    removeProduct,
    clearCart,
  } = useContext(CartContext);

  return {
    cart,
    addToCart,
    removeProduct,
    clearCart,
  }
}