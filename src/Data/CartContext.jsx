import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";
export const ADD_ON_PRICES = {
    ExtraSauce: 5,
    Yogurt: 15,
    Corn: 10,
    Cheese: 20
  };
const CartContext=createContext()
export const CartProvider=({children})=>{
 
    const initialState={
        cartItems:[],
  addOnprice: ADD_ON_PRICES,
  addOns: []
    }
    const [state, CartDispatch]=useReducer(CartReducer,initialState)
return(
    <CartContext.Provider value={{...state, CartDispatch}}>
{children}
    </CartContext.Provider>                             
)
}
export default CartContext;

