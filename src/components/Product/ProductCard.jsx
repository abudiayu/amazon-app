import React from 'react';
import {Rating}  from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';

function ProductCard({product}) {
    const { id, title, price, image, rating } = product;
  return (
    <div className={classes.card_container}>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating.rate} precision = {0.1}/>
                {/* rating count */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>        
            <button className={classes.button}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard
