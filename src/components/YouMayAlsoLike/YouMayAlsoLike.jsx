import React from 'react'
import './YouMayAlsoLike.css'
import ProductCard from '../ProductCard/ProductCard'
function YouMayAlsoLike() {
    return (
        <div className="youmaysection">
            <div className="upper">
                <div className="left">You may also like</div>
                <div className="right">
                    <div className="btn1"><i class="fa fa-chevron-left" aria-hidden="true"></i>  </div>
                    <div className="btn2"><i class="fa fa-chevron-right" aria-hidden="true"></i>  </div>
                </div>

            </div>
            <div className="lower">
                <ProductCard />
                <ProductCard />

                <ProductCard />

                <ProductCard />

            </div>
        </div>)
}

export default YouMayAlsoLike