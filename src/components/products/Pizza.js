import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
//import {Card, ListGroup, Badge} from 'react-bootstrap';
import './Pizza.css';
import {Card,CardActionArea,CardActions, CardContent,CardMedia,Button,Typography } from '@material-ui/core';
import formatCurrency from '../../Currency';

export default function Pizza (props){
    const { product } = props;

        return (
            <div className='main-products-container'>
            <Card className='single-product-card' key={product._id}>
            <CardActionArea>
                <img className ='single-product-image' src={product.Image}/>
                <CardContent>
                  <Typography className='single-product-title'>
                   <Link className='single-product-link' to={`/product/${product._id}`}>{product.Title.substr(0,20)}{" ..."}</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {product.Description.substr(0,50)}{"..."}
                  </Typography>
                  <Typography><span className='product-price-start'>Starting from : </span><span className='single-product-price'>{formatCurrency(product.Price_Personal)}</span></Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <button className='single-addtocart-btn'>
                 Customize
                </button>
            </CardActions>
            </Card>
        </div>
        );
    
}