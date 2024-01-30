import React from 'react'
import './ProductPageBuyOption.css'
import SizeChart from '../SizeChart/SizeChart'
import { ReactComponent as Heart } from '../Assets/Kicks/ProductPage/Heart.svg'

function ProductPageBuyOption() {
    return (
        <div className="productbutsection">
            <div className="productdetails">
                <div className="new-release">New Release</div>
                <div className="productname">ADIDAS 4DFWD X PARLEY RUNNING SHOES</div>
                <div className="price">$125.00</div>
            </div>
            <div className="colors">
                <div className="color">Color</div>
                <div className="colors-bt ">
                    <input type="radio" className='black' name="" id="" />
                    <input type="radio" className='gray' name="" id="" />
                </div>
            </div>
            <div className="sizes">
                <div className="upeer">
                    <div className="left">SIZE</div>
                    <div className="right">SIZE CHART</div>
                </div>
                <div className="lower">
                    <SizeChart />        </div>
            </div>
            <div className="buttons">
                <div className="upperbtn">
                    <div className="left">ADD TO CART</div>
                    <div className="right"><Heart/>       </div>
                </div>
                <div className="lowerbtn">BUT IT NOW</div>
            </div>
            <div className="description">
                <div className="heading">AB0UT THE PRODUCT</div>
                <div className="all-details">Shadow Navy / Army Green <br /><br />

                    This product is excluded from all promotional discounts and offers.
                    <br /><br />
                    <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
                    </li>
                    <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.
                    </li>    </div>        </div>
        </div>)
}

export default ProductPageBuyOption