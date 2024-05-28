import "./Cart.css";
import { useContext, useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "../context/cart";


export const CartItem = ({thumbnail, title, quantity, price, addToCart}) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Cant: { quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li> 
  )
}
export const Cart = () => {
  const cartCheckBoxId = useId();
  const {
    cart,
    clearCart,
    addToCart,
  } = useContext(CartContext);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
      { cart.length } <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map(product => (
             <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              { ...product }
             />
          ))}
        </ul>
        {cart.length > 0 && (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  )
}