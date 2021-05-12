import React, {useEffect,useState} from 'react';
import './PizzaScreen.css';
import {useDispatch, useSelector} from 'react-redux';
import {getproductDetails} from '../../store/products/productActions';
import Loading from '../shared/Loading';
import MessageBox from '../shared/MessageBox';
import {Link} from 'react-router-dom';
import {Card,CardActionArea,CardActions, CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import formatCurrency from '../../Currency';
import {addItemToCart} from '../../store/cart/cartActions';

function PizzaScreen(props) {

  const [state, setstate] = useState({
    checkedMayo: false,
    checkedhalf: false
  });

  const [quantity, setquantity]= useState(1);

  const handleChange=(e)=>{
    setstate({...state, [e.target.value]: e.target.checked});
    alert(e.target.value);
  }

    const dispatch = useDispatch();
    const productID = props.match.params.id;
    const productDetails = useSelector((state)=>state.productDetails);
    const {product, loading, error} = productDetails;

    const addtoCartHandler=()=>{
      dispatch(addItemToCart(productID));
    }

    useEffect(()=>{
    dispatch(getproductDetails(productID));
    },[dispatch, productID]);

    

    return (
        <div >
            { loading ? (<Loading></Loading>)
            : error ? (<MessageBox>{error}</MessageBox>)
            : 
            (<div className='product-details-container'>
             <div className='product-details-image-view'>
                <Card className='product-details-card' key={product._id}>
                 <CardActionArea>
                  <CardMedia component="img" height="250" image={product.Image}/>
                    <CardContent>
                     <Typography className='product-details-title'>
                     <Link className='product-details-link' to={`/product/${product._id}`}>{product.Title}</Link>
                      </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                      {product.Description}
                    </Typography>
                   </CardContent>
                  </CardActionArea>
                </Card>
              </div>

              <div className='product-select-options-container'>

                <div className='product-layer-options'>
                  <div className='mayo-base-container'>
                    <span className='product-layer-title'>Mayo Base</span>
                    <span><Switch checked={state.checkedMayo} name='checkedMayo' value='Mayo Base' onChange={handleChange}/></span>
                  </div>
                  <div className='half-half-container'>
                    <span className='product-layer-title'>Half & Half</span>
                    <span><Switch checked={state.checkedhalf} name='checkedhalf' value='Half & Half' onChange={handleChange}/></span>
                  </div>
                </div>

                <div className='select-crust-container'>
                  <div><span className='select-option-title'>Select Crust</span></div>
                  <div className='crust-select-container'>
                    <div className='select-crust'>
                      <img src='/Images/pan.jpg' className='crust-image'/>
                      <span className='product-layer-title'>Pan</span>
                    </div>
                    <div className='select-crust'>
                      <img src='/Images/stf.jpg' className='crust-image'/>
                      <span className='product-layer-title'>Stuffed</span>
                    </div>
                    <div className='select-crust'>
                      <img src='/Images/sus.jpg' className='crust-image'/>
                      <span className='product-layer-title'>Sausage</span>
                    </div>
                  </div>

                </div>

                <div className='select-size-container'>
                  <div><span className='select-option-title'>Select Size</span></div>
                  <div className='crust-select-container'>
                    <div className='select-crust'>
                      <span className='select-sizes'>Large</span>{"  "}
                      <span className='select-prices'>{formatCurrency(product.Price_Large)}</span>
                    </div>
                    <div className='select-crust'>
                      <span className='select-sizes'>Medium</span> {"  "}
                      <span className='select-prices'>{formatCurrency(product.Price_Medium)}</span>
                    </div>
                    <div className='select-crust'>
                      <span className='select-sizes'>Personal</span>{"  "}
                      <span className='select-prices'>{formatCurrency(product.Price_Personal)}</span>
                    </div>
                  </div>
                </div>

                <div className='special-instruction-container'>
                  <div><span className='select-option-title'>Any Special Instructions ?</span></div>
                  <div className='text-area-container'>
                    <textarea className='text-area' placeholder='Type your instructions here'></textarea>
                  </div>
                </div>

                <div className='select-quantity-container'>
                  <div>
                    <span className='select-quantiy-title'>Quantity</span>
                    <select className='select-quantity' value={quantity} onChange={(e)=>setquantity(e.target.value)}></select>
                  </div>
                  <div>
                    <button className='add-to-cart-btn' onClick={addtoCartHandler}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

            </div>)}
        </div>
    )
}

export default PizzaScreen;
