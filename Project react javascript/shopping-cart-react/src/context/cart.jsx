import { createContext, useReducer } from "react";
import {
  cartInitialState,
  cartReducer,
  CART_ACTION_TYPES,
} from "../reducers/cart";
export const CartContext = createContext();

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });

  const removeProduct = (id) =>
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: { id },
    });

  const clearCart = () =>
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
      payload: null,
    });

  return {
    cart: state,
    addToCart,
    removeProduct,
    clearCart,
  }
}
export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  // const addToCart = product => {
  //   const prodIndex = cart.findIndex(prod => prod.id == product.id);

  //   if (prodIndex >= 0) {
  //     const newCart = structuredClone(cart);
  //     newCart[prodIndex].quantity += 1;
  //     return setCart(newCart);
  //   }
  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ]));
  // };
  // const clearCart = () => {
  //   setCart([]);
  // }
  // const removeProduct = (id) => {
  //   setCart(prevState => prevState.filter(prod => prod.id !== id))
  // }
  
  const {
    cart,
    addToCart,
    removeProduct,
    clearCart,
  } = useCartReducer();
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Cuando tienes muchos useState, y cuando tienes que cambiar muchos estados
//Extraer el reducer
//
