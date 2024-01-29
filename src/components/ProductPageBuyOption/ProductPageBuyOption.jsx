import React from 'react'
import './ProductPageBuyOption.css'
import SizeChart from '../SizeChart/SizeChart'
function ProductPageBuyOption() {
  return (
<div className="productbutsection">
    <div className="productdetails">
        <div className="productname">ADIDAS 4DFWD X PARLEY RUNNING SHOES</div>
        <div className="price">$125.00</div>
    </div>
    <div className="color">
        <div className="color">Color</div>
        <div className="colors">
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />

        </div>
    </div>
    <div className="sizes">
        <div className="upeer">
            <div className="left">SIZE</div>
            <div className="right">SIZE CHART</div>
        </div>
        <div className="lower">
<SizeChart/>        </div>
    </div>
    <div className="buttons"></div>
    <div className="description"></div>
</div>  )
}

export default ProductPageBuyOption