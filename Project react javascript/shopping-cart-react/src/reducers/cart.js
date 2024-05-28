export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART"
}
export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

export const updateLocalStorage = cart => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

//Crear objeto para quitar el switch
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const prodIndex = state.findIndex(prod => prod.id == id);
  
      if (prodIndex >= 0) {
        // const newState = structuredClone(state);
        // newState[prodIndex].quantity += 1;

        //Usar map
        const newState = state.map(item => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
        });

        //Usar el spread operator y slice (No la entiendo casi)
        // const newState = [
        //   ...state.slice(0, prodIndex),
        //   {
        //     ...state[prodIndex],
        //     quantity: state[prodIndex].quantity + 1
        //   },
        //   ...state.slice(prodIndex + 1)
        // ]
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter(prod => prod.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      const newState = [];
      updateLocalStorage(newState);
      return newState;
    }
  }
  return state;
}

//Example de test de reducer, añadir un product al cart
// expect(
//   reducer([], { type: "ADD_TO_CART",
//   payload: { id: 1 },})
// ).toEqual([{id: 1, quantity: 1}])