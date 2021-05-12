import React, {useEffect} from 'react';
import './HomeScreen.css';
import Loading from '../shared/Loading';
import MessageBox from '../shared/MessageBox';
import { getProductList } from '../../store/products/productActions';
import {useSelector, useDispatch} from 'react-redux';
import Pizza from './Pizza';


function HomeScreen() {
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(getProductList());
    }, []);

    const productList = useSelector(state => state.productList);
    const {loading, error, products}= productList;
    

    return (
        <div className='home-screen-container'>
            <div className='product-screen-container'>
            { loading ? (<Loading></Loading>)
           : error ? (<MessageBox>{error}</MessageBox>)
        : (
            <div className='main-products-container'>
            {products.map((product)=>(
                <Pizza key={product._id} product={product}/>
        ))}
            </div>)}
        </div>
        </div>
    );
}

export default HomeScreen;
