import Axios from 'axios';
import { CART_ADD_ITEM_REQUEST, CART_REMOVE_ITEM } from './cartconstants';

export const addItemToCart=(productID)=>async(dispatch, getstate)=>{
    const {data} = await Axios.get(`/api/products/${productID}`);

    dispatch({type: CART_ADD_ITEM_REQUEST, payload: {
        Title: data.Title,
        Image: data.Image,
        product: data._id,
    },
});
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
}



export const removeItemCart=(productID)=>async(dispatch, getstate)=>{
  dispatch({type: CART_REMOVE_ITEM, payload: productID});
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
}