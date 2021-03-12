import React from 'react'
import "./Product.css";


function product({id,title, image,price}) {
    return (
        <div className='product'>
              <div className="product_info">
                <p>{title} </p>
                <p className='product_price' >
                    <small>₱</small>
                    <strong>{price}</strong>
                    
                </p>

              </div>
              <img src={image} alt=""/>
              <button>Add to cart</button>

        </div>
    )
}

export default product
