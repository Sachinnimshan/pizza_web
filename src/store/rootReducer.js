import {combineReducers} from 'redux';
import authReducer from './auth/authReducer';
import { cartReducer } from './cart/cartReducer';
import { productDetailsReducer, productReducer } from './products/productReducer';


export default combineReducers({
    auth: authReducer,
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});