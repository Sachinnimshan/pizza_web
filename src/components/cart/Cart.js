import React from 'react';
import './Cart.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItemCart} from '../../store/cart/cartActions';
import {Table} from 'react-bootstrap';

function Cart(props) {
    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart;

    const dispatch = useDispatch();

    const removeFromCart=(id)=>{
        dispatch(removeItemCart(id));
    }
    return (
        <div className='cart-container'>
            <div className='cart-title'>
                <span className='cart-title-top'>your cart</span>
            </div>
            <div className='cart-product-container'>
                <div className='cart-status'>{(cartItems.length >0) ? (<span>{cartItems.length} Item(s) in the Cart</span>) : (<span>Your Cart looks a little empty.</span>)}</div>
                {cartItems.map((pizza)=>(
                    <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={pizza._id}>
                        <td><img src={pizza.Image}/></td>
                        <td>{pizza.Title}</td>
                        <td>{pizza.Price}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                ))}
            </div>
            
        </div>
    )
}

export default Cart;
