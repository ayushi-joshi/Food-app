import { ADD_ON_PRICES } from "./CartContext";
const CartReducer=(state, action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return{
                ...state,
                cartItems:[action.payload, ...state.cartItems],
            };
            case "GET_DISHES":
            return{
                ...state,
                cartItems:[action.payload, ...state.cartItems],
            };
        case "REMOVE_ITEM":
            return{
                ...state,
                cartItems: state.cartItems.filter((item)=>item.id!==action.payload)
            };
            case "INCREASE_QUANTITY":
        return {
            ...state,
            cartItems: state.cartItems.map(item => 
                item.id === action.payload ? {...item, quantity: item.quantity + 1} : item
            )
        };

    case "DECREASE_QUANTITY":
        return {
            ...state,
            cartItems: state.cartItems.map(item => 
                item.id === action.payload ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity} : item
            )
        };
     
        case "ADD_ADDON":
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if(item.id === action.payload.itemId) {
                        const addOnprice=ADD_ON_PRICES[action.payload.addon] || 0;
                        return {
                            ...item,
                            addOns: [...item.addOns, action.payload.addon],
                            Price: item.Price + addOnprice
                        };
                    }
                    return item;
                })
            };
        default:
            return state;
    }

}
export default CartReducer;