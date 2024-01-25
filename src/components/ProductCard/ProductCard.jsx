import React from 'react'
import Shoe from '../Assets/Kicks/Shoes/Shoe1.png'
import './ProductCard.css'
function ProductCard() {
  return (
    <div className="main-card">
        <div className="pic-container">
            <div className="new">New</div>
            <img src={Shoe} alt="Product Shoe" />
        </div>
        <div className="product-name">
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
        </div>
        <button>
            VIEW PRODUCT - <span>$125</span>
        </button>
    </div>
  )
}

export default ProductCard