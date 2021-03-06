import { CART_ADD_ITEM_REQUEST, CART_REMOVE_ITEM } from "./cartconstants";

export const cartReducer=(state={ cartItems:[]}, action)=>{
    switch(action.type){
        case CART_ADD_ITEM_REQUEST:
            const item = action.payload;
            const existItem = state.cartItems.find((x)=> x.product === item.product);
            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map((x)=> x.product === existItem.product ? item : x)
                };
            }else{
                return {
                    ...state, cartItems : [...state.cartItems, item]};
            }
            case CART_REMOVE_ITEM: 
                return{
                    ...state, 
                    cartItems: state.cartItems.filter((x)=> x.product !== action.payload),
                };
            default:
                return state;
    }
};